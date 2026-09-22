"""Select SOTA-generation demo prompts (MusicCaps, SDD) where the 4 generators get
nearly tied CLAP caption scores but MQAScore (per-tag ALM yes/no) separates them.

For each selected prompt all generations (+GT, reference only) and all existing
scores are exported, plus an AQAScore input list for the user to score later.
Reads /home/lonian/MCB/sota_model/results/*.json only; writes to this directory.

Usage:
  python select_sota_prompts.py [--dry-run] [--no-copy]
"""
import argparse
import csv
import json
import shutil
import sys
from collections import Counter
from pathlib import Path

import numpy as np

sys.path.insert(0, "/home/lonian/MCB/sota_model")
from sota_data import GEN_MODELS, build_items  # noqa: E402

RES = Path("/home/lonian/MCB/sota_model/results")
OUT = Path(__file__).resolve().parent
DATASETS = ["musiccaps", "sdd"]
MODELS = GEN_MODELS + ["GT"]
ALMS = ["qwen3omni", "af", "mf"]
MAIN_ALM = "qwen3omni"

# Criteria (see README.md)
CLAP_Q = 0.05          # CLAP caption spread (max-min over 4 generators) <= this quantile
KEY_STRONG = 0.9       # ranking bucket: key spread >= this counts as a clear gap
TAG_SPREAD = 0.5       # key tag MQAScore spread (Qwen, P(Yes) scale)
XALM_MIN = 0.1         # AF or MF must rank key-tag winner above loser by at least this
N_SELECT = 10
MAX_PER_ATTR = 4
MAX_PER_WINNER = 4
DRY_N = 50


def load(scorer, ds, model, gran):
    kind = "yesno" if scorer in ALMS else "score"
    path = RES / f"{scorer}_{ds}_{model}_{gran}_{kind}.json"
    return {r["id"]: r for r in json.load(open(path))} if path.exists() else {}


def tag_scores(rec):
    return {(a, t["tag"]): t["score"] for a, v in rec["per_attribute"].items() for t in v}


def build_prompts(ds, limit=None):
    items = {m: {it["id"]: it for it in build_items(ds, m)} for m in MODELS}
    mqa = {(a, m): load(a, ds, m, "pertag") for a in ALMS for m in MODELS}
    cap = {(s, m): load(s, ds, m, "caption") for s in ["clap", "muq"] for m in MODELS}
    ptg = {(s, m): load(s, ds, m, "pertag") for s in ["clap", "muq"] for m in MODELS}
    ids = [i for i in items[GEN_MODELS[0]]]
    if limit:
        ids = ids[:limit]
    prompts, excluded = [], Counter()
    for pid in ids:
        need = [mqa[(a, m)] for a in ALMS for m in GEN_MODELS] + \
               [cap[("clap", m)] for m in GEN_MODELS]
        if any(pid not in d for d in need) or any(pid not in items[m] for m in GEN_MODELS):
            excluded["missing score/audio"] += 1
            continue
        base = mqa[(MAIN_ALM, GEN_MODELS[0])][pid]
        if base["n_tags"] == 0:
            excluded["n_tags==0"] += 1
            continue
        tagsets = {frozenset(tag_scores(mqa[(a, m)][pid])) for a in ALMS for m in GEN_MODELS}
        if len(tagsets) != 1:
            excluded["tag set mismatch"] += 1
            continue
        per_model = {}
        for m in MODELS:
            if pid not in items[m]:
                continue
            g = lambda d: d.get(pid)  # noqa: E731
            per_model[m] = {
                "source_audio": str(items[m][pid]["audio"]),
                "clap_caption": (g(cap[("clap", m)]) or {}).get("caption_score"),
                "muq_caption": (g(cap[("muq", m)]) or {}).get("caption_score"),
                "clap_pertag_mean": (g(ptg[("clap", m)]) or {}).get("mean_score"),
                "muq_pertag_mean": (g(ptg[("muq", m)]) or {}).get("mean_score"),
                "mqa_mean": {a: (g(mqa[(a, m)]) or {}).get("mean_score") for a in ALMS},
                "tags": {a: tag_scores(mqa[(a, m)][pid]) if pid in mqa[(a, m)] else {} for a in ALMS},
            }
        prompts.append({"dataset": ds, "id": pid, "caption": base["caption"],
                        "track_id": items[GEN_MODELS[0]][pid].get("track_id"),
                        "models": per_model})
    return prompts, excluded


def analyse(p):
    gm = {m: p["models"][m] for m in GEN_MODELS}
    claps = [gm[m]["clap_caption"] for m in GEN_MODELS]
    p["clap_spread"] = max(claps) - min(claps)
    spreads = {}
    for k in gm[GEN_MODELS[0]]["tags"][MAIN_ALM]:
        vals = {m: gm[m]["tags"][MAIN_ALM][k] for m in GEN_MODELS}
        win, lose = max(vals, key=vals.get), min(vals, key=vals.get)
        spreads[k] = (vals[win] - vals[lose], win, lose)
    key = max(spreads, key=lambda k: spreads[k][0])
    s, win, lose = spreads[key]
    p["key_tag"], p["key_spread"], p["winner"], p["loser"] = key, s, win, lose
    p["xalm_delta"] = {a: gm[win]["tags"][a][key] - gm[lose]["tags"][a][key] for a in ALMS if a != MAIN_ALM}
    p["xalm_ok"] = any(v >= XALM_MIN for v in p["xalm_delta"].values())
    p["tradeoff"] = any(v[0] >= TAG_SPREAD and v[1] != win for kk, v in spreads.items() if kk != key)


def select(ds, prompts, log):
    for p in prompts:
        analyse(p)
    for q, ts in [(CLAP_Q, TAG_SPREAD), (0.10, TAG_SPREAD), (0.25, TAG_SPREAD)]:
        thr = float(np.quantile([p["clap_spread"] for p in prompts], q))
        s1 = [p for p in prompts if p["clap_spread"] <= thr]
        s2 = [p for p in s1 if p["key_spread"] >= ts]
        s3 = [p for p in s2 if p["xalm_ok"]]
        log.append(f"[{ds}] quantile={q}, tag spread>={ts}: CLAP spread<={thr:.4f}")
        log.append(f"[{ds}]   prompts {len(prompts)} -> CLAP tied {len(s1)} -> tag spread {len(s2)} -> cross-ALM {len(s3)}")
        if len(s3) >= N_SELECT:
            break
    # trade-off first, then clear key gap, then the most tied CLAP
    cands = sorted(s3, key=lambda p: (not p["tradeoff"], p["key_spread"] < KEY_STRONG, p["clap_spread"]))
    log.append(f"[{ds}]   trade-off among candidates: {sum(p['tradeoff'] for p in cands)}/{len(cands)}; "
               f"key attr {dict(Counter(p['key_tag'][0] for p in cands))}; "
               f"winner {dict(Counter(p['winner'] for p in cands))}")
    chosen, attr_n, win_n, tracks = [], Counter(), Counter(), set()
    for p in cands:
        if attr_n[p["key_tag"][0]] >= MAX_PER_ATTR or win_n[p["winner"]] >= MAX_PER_WINNER:
            continue
        if p["track_id"] and p["track_id"] in tracks:
            continue
        chosen.append(p)
        attr_n[p["key_tag"][0]] += 1
        win_n[p["winner"]] += 1
        if p["track_id"]:
            tracks.add(p["track_id"])
        if len(chosen) == N_SELECT:
            break
    log.append(f"[{ds}] selected {len(chosen)} (<= {MAX_PER_ATTR}/attribute, <= {MAX_PER_WINNER}/winner model"
               + (", 1 caption/track" if ds == "sdd" else "") + ")")
    return cands, chosen, {"clap_quantile": q, "tag_spread": ts, "clap_spread_thr": thr}


def r4(x):
    return None if x is None else round(x, 4)


def export_record(i, p):
    folder = f"audio/{p['dataset']}/{i:02d}_{p['id']}"
    models = {}
    for m, v in p["models"].items():
        models[m] = {
            "demo_audio": f"{folder}/{m}{Path(v['source_audio']).suffix}",
            "source_audio": v["source_audio"],
            "clap_caption": r4(v["clap_caption"]), "muq_caption": r4(v["muq_caption"]),
            "clap_pertag_mean": r4(v["clap_pertag_mean"]), "muq_pertag_mean": r4(v["muq_pertag_mean"]),
            "mqa_mean": {a: r4(x) for a, x in v["mqa_mean"].items()},
            "aqascore": None,
        }
    tags = []
    for k in sorted(p["models"][GEN_MODELS[0]]["tags"][MAIN_ALM]):
        tags.append({"attribute": k[0], "tag": k[1],
                     "scores": {m: {a: r4(p["models"][m]["tags"][a].get(k)) for a in ALMS}
                                for m in p["models"]}})
    return {"rank": i, "dataset": p["dataset"], "id": p["id"], "track_id": p["track_id"],
            "caption": p["caption"], "key_tag": f"{p['key_tag'][0]}:{p['key_tag'][1]}",
            "key_spread": r4(p["key_spread"]), "winner": p["winner"], "loser": p["loser"],
            "xalm_delta": {a: r4(x) for a, x in p["xalm_delta"].items()},
            "tradeoff": p["tradeoff"], "clap_spread": r4(p["clap_spread"]),
            "models": models, "per_tag": tags}


def fmt(x):
    return "–" if x is None else f"{x:.3f}"


def write_prompts_md(records, log):
    L = ["# Selected SOTA demo prompts (auto-generated by select_sota_prompts.py)", "",
         "Selection log:", "", "```", *log, "```", "",
         "Per-tag cells are `Qwen / AF / MF` MQAScore (P(Yes)). GT is reference only.", ""]
    for r in records:
        ms = list(r["models"])
        L += [f"## {r['dataset']} #{r['rank']:02d} — {r['id']}", "", f"> {r['caption']}", "",
              f"- key tag **{r['key_tag']}**: Qwen spread {r['key_spread']:.3f} "
              f"({r['winner']} > {r['loser']}); AF/MF delta {r['xalm_delta']}; "
              f"trade-off {r['tradeoff']}; CLAP spread {r['clap_spread']:.4f}"
              + ("; AQA spread " + ", ".join(f"{a} {x:.4f}" for a, x in r["aqa_spread"].items())
                 if r.get("aqa_spread") else ""), "",
              "| model | audio | CLAP cap | MuQ cap | CLAP pertag | MuQ pertag | MQA Qwen | MQA AF | MQA MF "
              "| AQA Qwen | AQA AF | AQA MF |",
              "|---|---|---|---|---|---|---|---|---|---|---|---|"]
        for m in ms:
            v = r["models"][m]
            L.append(f"| {m} | `{v['demo_audio']}` | {fmt(v['clap_caption'])} | {fmt(v['muq_caption'])} | "
                     f"{fmt(v['clap_pertag_mean'])} | {fmt(v['muq_pertag_mean'])} | "
                     + " | ".join(fmt(v["mqa_mean"][a]) for a in ALMS) + " | "
                     + " | ".join(fmt((v["aqascore"] or {}).get(a)) for a in ALMS) + " |")
        L += ["", "| attribute | tag | " + " | ".join(ms) + " |", "|---|---|" + "---|" * len(ms)]
        for t in r["per_tag"]:
            L.append(f"| {t['attribute']} | {t['tag']} | " + " | ".join(
                " / ".join(fmt(t["scores"][m][a]) for a in ALMS) for m in ms) + " |")
        L.append("")
    (OUT / "prompts.md").write_text("\n".join(L))


def write_candidates(ds, cands):
    with open(OUT / f"candidates_{ds}.csv", "w", newline="") as f:
        w = csv.writer(f)
        w.writerow(["rank", "id", "track_id", "caption", "clap_spread", "key_tag", "key_spread",
                    "winner", "loser", "af_delta", "mf_delta", "tradeoff",
                    *[f"clap_{m}" for m in GEN_MODELS], *[f"mqa_qwen_{m}" for m in GEN_MODELS]])
        for i, p in enumerate(cands, 1):
            gm = p["models"]
            w.writerow([i, p["id"], p["track_id"] or "", p["caption"], f"{p['clap_spread']:.4f}",
                        f"{p['key_tag'][0]}:{p['key_tag'][1]}", f"{p['key_spread']:.4f}",
                        p["winner"], p["loser"], f"{p['xalm_delta']['af']:.4f}", f"{p['xalm_delta']['mf']:.4f}",
                        int(p["tradeoff"]),
                        *[f"{gm[m]['clap_caption']:.4f}" for m in GEN_MODELS],
                        *[f"{gm[m]['mqa_mean'][MAIN_ALM]:.4f}" for m in GEN_MODELS]])


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--dry-run", action="store_true", help=f"first {DRY_N} prompts per dataset, no writes")
    ap.add_argument("--no-copy", action="store_true")
    args = ap.parse_args()

    log, records, criteria = [], [], {}
    for ds in DATASETS:
        prompts, excluded = build_prompts(ds, DRY_N if args.dry_run else None)
        log.append(f"[{ds}] prompts kept {len(prompts)}; excluded {dict(excluded)}")
        cands, chosen, crit = select(ds, prompts, log)
        criteria[ds] = crit
        if not args.dry_run:
            write_candidates(ds, cands)
        records += [export_record(i + 1, p) for i, p in enumerate(chosen)]
    print("\n".join(log))
    for r in records:
        print(f"{r['dataset']:9s} #{r['rank']:02d} {r['id']:>12s} key={r['key_tag']} spread={r['key_spread']:.3f} "
              f"{r['winner']}>{r['loser']} CLAPspread={r['clap_spread']:.4f} tradeoff={r['tradeoff']} "
              f"models={len(r['models'])}")
    if args.dry_run:
        return

    meta = {"criteria": {**criteria, "xalm_min": XALM_MIN, "main_alm": MAIN_ALM, "generators": GEN_MODELS},
            "log": log, "prompts": records}
    json.dump(meta, open(OUT / "selected_prompts.json", "w"), indent=1, ensure_ascii=False)
    write_prompts_md(records, log)
    with open(OUT / "aqascore_input.jsonl", "w") as f:
        for r in records:
            for m, v in r["models"].items():
                f.write(json.dumps({"dataset": r["dataset"], "id": r["id"], "model": m,
                                    "caption": r["caption"], "audio": str(OUT / v["demo_audio"]),
                                    "source_audio": v["source_audio"]}, ensure_ascii=False) + "\n")
    if not args.no_copy:
        n = 0
        for r in records:
            for v in r["models"].values():
                dst = OUT / v["demo_audio"]
                dst.parent.mkdir(parents=True, exist_ok=True)
                shutil.copy2(v["source_audio"], dst)
                n += 1
        print(f"copied {n} audio files to {OUT / 'audio'}")


if __name__ == "__main__":
    main()
