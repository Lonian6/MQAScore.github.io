"""Merge the demo AQAScore runs into this directory so the web page needs nothing else.

1. copy the raw sota_model/results/*_caption_yesno_demo.{json,meta.json} + summaries to ./aqascore/
2. fill models[*].aqascore = {qwen3omni, af, mf} and per-prompt aqa_spread in selected_prompts.json
3. regenerate prompts.md (AQA columns) and write scores_table.csv (one row per prompt x model)

Run after select_sota_prompts.py (which resets aqascore to null):
  python merge_aqascore.py
"""
import csv
import json
import shutil
from pathlib import Path

from select_sota_prompts import ALMS, GEN_MODELS, write_prompts_md

RES = Path("/home/lonian/MCB/sota_model/results")
OUT = Path(__file__).resolve().parent
RAW = OUT / "aqascore"


def main():
    RAW.mkdir(exist_ok=True)
    srcs = sorted(RES.glob("*_caption_yesno_demo.json")) + sorted(RES.glob("*_caption_yesno_demo.meta.json")) \
        + sorted(RES.glob("*_caption_demo_summary.json"))
    for f in srcs:
        shutil.copy2(f, RAW / f.name)

    scores = {}
    for f in sorted(RAW.glob("*_caption_yesno_demo.json")):
        scorer = f.name.split("_")[0]
        meta = json.load(open(str(f).replace(".json", ".meta.json")))
        if meta.get("batch") != 1:
            raise SystemExit(f"{f.name}: batch={meta.get('batch')} (expected 1)")
        for r in json.load(open(f)):
            scores[(scorer, r["dataset"], r["model"], r["id"])] = r["caption_score"]

    data = json.load(open(OUT / "selected_prompts.json"))
    missing = []
    for p in data["prompts"]:
        for m, v in p["models"].items():
            v["aqascore"] = {}
            for a in ALMS:
                x = scores.get((a, p["dataset"], m, p["id"]))
                if x is None:
                    missing.append((a, p["dataset"], m, p["id"]))
                v["aqascore"][a] = None if x is None else round(x, 4)
        p["aqa_spread"] = {}
        for a in ALMS:
            vals = [p["models"][m]["aqascore"][a] for m in GEN_MODELS]
            p["aqa_spread"][a] = None if None in vals else round(max(vals) - min(vals), 4)
    if missing:
        raise SystemExit(f"{len(missing)} AQAScore values missing, e.g. {missing[:3]}")
    data["aqascore_source"] = {"raw_dir": "aqascore/", "files": len(list(RAW.glob('*_caption_yesno_demo.json'))),
                               "question": "Does this music match the following description? '{caption}' "
                                           "Answer Yes or No.", "batch": 1}
    json.dump(data, open(OUT / "selected_prompts.json", "w"), indent=1, ensure_ascii=False)
    write_prompts_md(data["prompts"], data["log"])

    with open(OUT / "scores_table.csv", "w", newline="") as f:
        w = csv.writer(f)
        w.writerow(["dataset", "rank", "id", "model", "demo_audio", "caption", "key_tag", "winner", "loser",
                    "clap_caption", "muq_caption", "clap_pertag_mean", "muq_pertag_mean",
                    *[f"mqa_{a}" for a in ALMS], *[f"aqa_{a}" for a in ALMS]])
        for p in data["prompts"]:
            for m, v in p["models"].items():
                w.writerow([p["dataset"], p["rank"], p["id"], m, v["demo_audio"], p["caption"], p["key_tag"],
                            p["winner"], p["loser"], v["clap_caption"], v["muq_caption"], v["clap_pertag_mean"],
                            v["muq_pertag_mean"], *[v["mqa_mean"][a] for a in ALMS],
                            *[v["aqascore"][a] for a in ALMS]])

    print(f"copied {len(srcs)} raw files -> {RAW}")
    print(f"filled {len(scores)} AQAScore values into {len(data['prompts'])} prompts")
    print("prompt                  CLAPspr  AQAspr(qwen/af/mf)        keyTag spread  AQA winner-loser (qwen)")
    for p in data["prompts"]:
        s = p["aqa_spread"]
        d = p["models"][p["winner"]]["aqascore"]["qwen3omni"] - p["models"][p["loser"]]["aqascore"]["qwen3omni"]
        print(f"{p['dataset'][:3]} {p['rank']:02d} {p['id']:>12s}  {p['clap_spread']:.4f}  "
              f"{s['qwen3omni']:.3f}/{s['af']:.3f}/{s['mf']:.3f}   {p['key_spread']:.3f}         {d:+.3f}")


if __name__ == "__main__":
    main()
