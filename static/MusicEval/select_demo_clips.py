"""Select MusicEval demo pairs where overall scores (CLAP caption, AQAScore) are
nearly tied but MQAScore (per-tag ALM yes/no) differs clearly.

Pairs are two clips generated from the same prompt by different systems.
Reads MusicEval/results/*.json only; writes to this directory.

Usage:
  python select_demo_clips.py [--dry-run] [--no-copy]
"""
import argparse
import csv
import itertools
import json
import shutil
from collections import Counter
from pathlib import Path

import numpy as np

RES = Path("/home/lonian/MCB/MusicEval/results")
OUT = Path(__file__).resolve().parent
ALMS = ["qwen3omni", "af", "mf"]
MAIN_ALM = "qwen3omni"

# Criteria (see README.md)
OVERALL_Q = 0.25        # |dCLAP| and |dAQA| must be below this quantile of all same-prompt pairs
TAG_DELTA = 0.5         # main MQA tag gap (P(Yes) scale)
TRADEOFF_DELTA = 0.3    # opposite-direction tag gap needed to flag a "trade-off" pair
XALM_MIN = 0.1          # another ALM must show same-sign gap of at least this on the key tag
MIN_SECONDS = 5.0
N_CANDIDATES = 30
N_SELECT = 10
MAX_PER_SYSTEM = 2
MAX_PER_ATTR = 4


def load(name):
    return {r["id"]: r for r in json.load(open(RES / name))}


def tag_scores(rec):
    return {(a, t["tag"]): t["score"] for a, v in rec["per_attribute"].items() for t in v}


def build_clips():
    pertag = {a: load(f"{a}_musiceval_test_pertag_yesno.json") for a in ALMS}
    caption = {a: load(f"{a}_musiceval_test_caption_yesno.json") for a in ALMS}
    clap = load("clap_musiceval_test_caption_score.json")
    muq = load("muq_musiceval_test_caption_score.json")
    clips, excluded = {}, Counter()
    for cid, base in pertag[MAIN_ALM].items():
        if base["caption_source"] != "prompt_info":
            excluded["caption_source!=prompt_info"] += 1
            continue
        if base["n_tags"] == 0:
            excluded["n_tags==0"] += 1
            continue
        if base["audio_seconds"] < MIN_SECONDS:
            excluded[f"audio<{MIN_SECONDS}s"] += 1
            continue
        clips[cid] = {
            "id": cid,
            "system_id": base["system_id"],
            "prompt_id": base["prompt_id"],
            "caption": base["caption"],
            "audio_path": base["audio_path"],
            "audio_seconds": base["audio_seconds"],
            "mos_ta": base["mos_ta"],
            "mos_oq": base["mos_oq"],
            "clap": clap[cid]["caption_score"],
            "muq": muq[cid]["caption_score"],
            "aqa": {a: caption[a][cid]["caption_score"] for a in ALMS},
            "mqa_mean": {a: pertag[a][cid]["mean_score"] for a in ALMS},
            "tags": {a: tag_scores(pertag[a][cid]) for a in ALMS},
        }
    return clips, excluded


def make_pairs(clips):
    by_prompt = {}
    for c in clips.values():
        by_prompt.setdefault(c["prompt_id"], []).append(c)
    pairs = []
    for pid in sorted(by_prompt):
        for A, B in itertools.combinations(sorted(by_prompt[pid], key=lambda c: c["id"]), 2):
            tq = {k: A["tags"][MAIN_ALM][k] - B["tags"][MAIN_ALM][k] for k in A["tags"][MAIN_ALM]}
            key = max(tq, key=lambda k: abs(tq[k]))
            d = tq[key]
            # orient so that A is the clip winning the key tag
            if d < 0:
                A, B = B, A
                tq = {k: -v for k, v in tq.items()}
                d = -d
            opp = min(tq, key=lambda k: tq[k])
            xalm = {a: A["tags"][a][key] - B["tags"][a][key] for a in ALMS if a != MAIN_ALM}
            dta = A["mos_ta"] - B["mos_ta"]
            dmean = A["mqa_mean"][MAIN_ALM] - B["mqa_mean"][MAIN_ALM]
            pairs.append({
                "A": A, "B": B, "key_tag": key, "key_delta": d,
                "opp_tag": opp, "opp_delta": tq[opp],
                "tag_deltas": tq,
                "d_clap": abs(A["clap"] - B["clap"]),
                "d_aqa": abs(A["aqa"][MAIN_ALM] - B["aqa"][MAIN_ALM]),
                "xalm_delta": xalm,
                "xalm_ok": any(v >= XALM_MIN for v in xalm.values()),
                "tradeoff": tq[opp] <= -TRADEOFF_DELTA,
                "human_agree": dta != 0 and np.sign(dta) == np.sign(dmean),
            })
    return pairs


def rank_score(p):
    return p["key_delta"] * (1.5 if p["tradeoff"] else 1.0) * (1.2 if p["human_agree"] else 1.0)


def select_diverse(cands):
    chosen, sys_n, attr_n, prompts = [], Counter(), Counter(), set()
    for p in cands:
        systems = [p["A"]["system_id"], p["B"]["system_id"]]
        attr = p["key_tag"][0]
        if p["A"]["prompt_id"] in prompts or attr_n[attr] >= MAX_PER_ATTR:
            continue
        if any(sys_n[s] >= MAX_PER_SYSTEM for s in systems):
            continue
        chosen.append(p)
        prompts.add(p["A"]["prompt_id"])
        attr_n[attr] += 1
        sys_n.update(systems)
        if len(chosen) == N_SELECT:
            break
    return chosen


def filter_pairs(pairs, q, tag_delta, log):
    thr_clap = float(np.quantile([p["d_clap"] for p in pairs], q))
    thr_aqa = float(np.quantile([p["d_aqa"] for p in pairs], q))
    s1 = [p for p in pairs if p["d_clap"] <= thr_clap and p["d_aqa"] <= thr_aqa]
    s2 = [p for p in s1 if p["key_delta"] >= tag_delta]
    s3 = [p for p in s2 if p["xalm_ok"]]
    log.append(f"quantile={q}, tag_delta>={tag_delta}: |dCLAP|<={thr_clap:.4f}, |dAQA|<={thr_aqa:.4f}")
    log.append(f"  pairs {len(pairs)} -> overall tied {len(s1)} -> tag gap {len(s2)} -> cross-ALM {len(s3)}")
    return s3, thr_clap, thr_aqa


def fmt_tag(k):
    return f"{k[0]}:{k[1]}"


def pair_record(i, p):
    A, B = p["A"], p["B"]
    rows = []
    for k in sorted(p["tag_deltas"], key=lambda k: -abs(p["tag_deltas"][k])):
        rows.append({"attribute": k[0], "tag": k[1],
                     **{f"{a}_A": round(A["tags"][a][k], 4) for a in ALMS},
                     **{f"{a}_B": round(B["tags"][a][k], 4) for a in ALMS}})
    clip = lambda c: {  # noqa: E731
        "id": c["id"], "system_id": c["system_id"], "audio_seconds": c["audio_seconds"],
        "demo_audio": f"audio/{i:02d}_{c['prompt_id']}/{Path(c['audio_path']).name}",
        "source_audio": c["audio_path"], "mos_ta": c["mos_ta"], "mos_oq": c["mos_oq"],
        "clap": round(c["clap"], 4), "muq": round(c["muq"], 4),
        "aqa": {a: round(v, 4) for a, v in c["aqa"].items()},
        "mqa_mean": {a: round(v, 4) for a, v in c["mqa_mean"].items()},
    }
    return {"pair": i, "prompt_id": A["prompt_id"], "caption": A["caption"],
            "key_tag": fmt_tag(p["key_tag"]), "key_delta": round(p["key_delta"], 4),
            "tradeoff": bool(p["tradeoff"]), "opp_tag": fmt_tag(p["opp_tag"]),
            "opp_delta": round(p["opp_delta"], 4), "human_agree": bool(p["human_agree"]),
            "A": clip(A), "B": clip(B), "per_tag": rows}


def write_pairs_md(records, log):
    L = ["# Selected demo pairs (auto-generated by select_demo_clips.py)", "",
         "Selection log:", "", "```", *log, "```", ""]
    for r in records:
        A, B = r["A"], r["B"]
        L += [f"## #{r['pair']:02d} {r['prompt_id']} — {A['system_id']} (A) vs {B['system_id']} (B)", "",
              f"> {r['caption']}", "",
              f"- audio: `{A['demo_audio']}` / `{B['demo_audio']}`",
              f"- key tag: **{r['key_tag']}** (Qwen A−B {r['key_delta']:+.3f}); "
              f"opposite tag: {r['opp_tag']} ({r['opp_delta']:+.3f}); trade-off: {r['tradeoff']}; "
              f"human TA agrees with MQA mean: {r['human_agree']}", "",
              "| | A | B |", "|---|---|---|",
              f"| human TA / OQ | {A['mos_ta']} / {A['mos_oq']} | {B['mos_ta']} / {B['mos_oq']} |",
              f"| CLAP caption | {A['clap']:.4f} | {B['clap']:.4f} |",
              f"| MuQ caption | {A['muq']:.4f} | {B['muq']:.4f} |",
              *[f"| AQAScore {a} | {A['aqa'][a]:.4f} | {B['aqa'][a]:.4f} |" for a in ALMS],
              *[f"| MQAScore mean {a} | {A['mqa_mean'][a]:.4f} | {B['mqa_mean'][a]:.4f} |" for a in ALMS],
              "", "| attribute | tag | " + " | ".join(f"{a} A | {a} B" for a in ALMS) + " |",
              "|---|---|" + "---|" * (2 * len(ALMS))]
        for t in r["per_tag"]:
            L.append(f"| {t['attribute']} | {t['tag']} | " +
                     " | ".join(f"{t[a + '_A']:.3f} | {t[a + '_B']:.3f}" for a in ALMS) + " |")
        L.append("")
    (OUT / "pairs.md").write_text("\n".join(L))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--dry-run", action="store_true", help="first 10 prompts only, no files written")
    ap.add_argument("--no-copy", action="store_true")
    args = ap.parse_args()

    clips, excluded = build_clips()
    if args.dry_run:
        keep = sorted({c["prompt_id"] for c in clips.values()})[:10]
        clips = {k: c for k, c in clips.items() if c["prompt_id"] in keep}
    log = [f"clips kept {len(clips)}; excluded {dict(excluded)}"]
    pairs = make_pairs(clips)

    relax = [(OVERALL_Q, TAG_DELTA), (0.33, TAG_DELTA), (0.33, 0.4)]
    for q, td in relax:
        cands, thr_clap, thr_aqa = filter_pairs(pairs, q, td, log)
        if len(cands) >= N_SELECT:
            break
    used = (q, td)
    cands.sort(key=lambda p: (-rank_score(p), p["d_clap"] + p["d_aqa"]))
    log.append(f"  trade-off pairs among candidates: {sum(p['tradeoff'] for p in cands)}/{len(cands)}; "
               f"human-agree: {sum(p['human_agree'] for p in cands)}/{len(cands)}")
    log.append(f"  key-tag attribute distribution: {dict(Counter(p['key_tag'][0] for p in cands))}")
    chosen = select_diverse(cands)
    log.append(f"selected {len(chosen)} pairs (<=1/prompt, <={MAX_PER_SYSTEM}/system, <={MAX_PER_ATTR}/attribute)")
    print("\n".join(log))

    records = [pair_record(i + 1, p) for i, p in enumerate(chosen)]
    for r in records:
        print(f"#{r['pair']:02d} {r['prompt_id']} {r['A']['system_id']} vs {r['B']['system_id']} "
              f"key={r['key_tag']} d={r['key_delta']:+.3f} opp={r['opp_tag']} {r['opp_delta']:+.3f} "
              f"dCLAP={abs(r['A']['clap']-r['B']['clap']):.4f} dAQA={abs(r['A']['aqa'][MAIN_ALM]-r['B']['aqa'][MAIN_ALM]):.4f} "
              f"TA {r['A']['mos_ta']}/{r['B']['mos_ta']}")
    if args.dry_run:
        return

    with open(OUT / "demo_candidates.csv", "w", newline="") as f:
        w = csv.writer(f)
        w.writerow(["rank", "prompt_id", "caption", "id_A", "id_B", "system_A", "system_B",
                    "audio_path_A", "audio_path_B", "mos_ta_A", "mos_ta_B", "mos_oq_A", "mos_oq_B",
                    "clap_A", "clap_B", "aqa_A", "aqa_B", "mqa_mean_A", "mqa_mean_B",
                    "key_tag", "key_A", "key_B", "key_delta", "opp_tag", "opp_delta",
                    "af_key_delta", "mf_key_delta", "tradeoff", "human_agree", "rank_score"])
        for i, p in enumerate(cands[:N_CANDIDATES], 1):
            A, B, k = p["A"], p["B"], p["key_tag"]
            w.writerow([i, A["prompt_id"], A["caption"], A["id"], B["id"], A["system_id"], B["system_id"],
                        A["audio_path"], B["audio_path"], A["mos_ta"], B["mos_ta"], A["mos_oq"], B["mos_oq"],
                        f"{A['clap']:.4f}", f"{B['clap']:.4f}", f"{A['aqa'][MAIN_ALM]:.4f}", f"{B['aqa'][MAIN_ALM]:.4f}",
                        f"{A['mqa_mean'][MAIN_ALM]:.4f}", f"{B['mqa_mean'][MAIN_ALM]:.4f}",
                        fmt_tag(k), f"{A['tags'][MAIN_ALM][k]:.4f}", f"{B['tags'][MAIN_ALM][k]:.4f}",
                        f"{p['key_delta']:.4f}", fmt_tag(p["opp_tag"]), f"{p['opp_delta']:.4f}",
                        f"{p['xalm_delta']['af']:.4f}", f"{p['xalm_delta']['mf']:.4f}",
                        int(p["tradeoff"]), int(p["human_agree"]), f"{rank_score(p):.4f}"])
    meta = {"criteria": {"overall_quantile": used[0], "tag_delta": used[1], "thr_clap": thr_clap,
                         "thr_aqa": thr_aqa, "tradeoff_delta": TRADEOFF_DELTA, "xalm_min": XALM_MIN,
                         "min_seconds": MIN_SECONDS, "main_alm": MAIN_ALM},
            "log": log, "pairs": records}
    json.dump(meta, open(OUT / "selected_pairs.json", "w"), indent=1, ensure_ascii=False)
    write_pairs_md(records, log)

    if not args.no_copy:
        for r in records:
            for side in "AB":
                dst = OUT / r[side]["demo_audio"]
                dst.parent.mkdir(parents=True, exist_ok=True)
                shutil.copy2(r[side]["source_audio"], dst)
        print(f"copied {2 * len(records)} wav files to {OUT / 'audio'}")


if __name__ == "__main__":
    main()
