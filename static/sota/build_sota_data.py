#!/usr/bin/env python3
"""Build static/js/sota_data.py -> sota_data.js for the SOTA demo section.

For each selected prompt it:
  * segments the caption into runs, tagging concept spans with their dimension
    (full-phrase match, allowing a trailing word-stem, greedy-longest for overlaps);
  * lists concepts that could not be located verbatim in the caption ("unlocated");
  * keeps the per-model scores and the per-tag P(Yes) matrix (source paths stripped).
Run from this directory:  python3 build_sota_data.py
"""
import json, re, os

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, "selected_prompts.json")
OUT = os.path.join(HERE, "..", "js", "sota_data.js")

MODEL_ORDER = ["musicgen_large", "stable_audio_3", "meanaudio", "acestep_1_5", "GT"]


def spans_for(caption, tags):
    """Return non-overlapping placed spans [(start,end,attribute,tag)] greedy-longest."""
    cands = []
    for attribute, tag in tags:
        pat = re.compile(r"\b" + re.escape(tag) + r"\w*", re.IGNORECASE)
        for m in pat.finditer(caption):
            cands.append((m.start(), m.end(), attribute, tag))
    cands.sort(key=lambda c: (-(c[1] - c[0]), c[0]))
    occ = [False] * len(caption)
    placed = []
    for s, e, attribute, tag in cands:
        if not any(occ[i] for i in range(s, e)):
            for i in range(s, e):
                occ[i] = True
            placed.append((s, e, attribute, tag))
    return placed


def segment_caption(caption, per_tag):
    tags = [(t["attribute"], t["tag"]) for t in per_tag]
    placed = sorted(spans_for(caption, tags), key=lambda c: c[0])
    segments = []
    cur = 0
    located = set()
    for s, e, attribute, tag in placed:
        if s > cur:
            segments.append({"text": caption[cur:s]})
        segments.append({"text": caption[s:e], "dim": attribute, "tag": tag})
        located.add((attribute, tag))
        cur = e
    if cur < len(caption):
        segments.append({"text": caption[cur:]})
    # concepts not found verbatim in the caption
    unlocated = [{"dim": a, "tag": t} for (a, t) in tags if (a, t) not in located]
    return segments, unlocated


def main():
    d = json.load(open(SRC))
    out = []
    total = matched = 0
    for p in d["prompts"]:
        segments, unlocated = segment_caption(p["caption"], p["per_tag"])
        total += len(p["per_tag"])
        matched += len(p["per_tag"]) - len(unlocated)
        models = {}
        for mk in MODEL_ORDER:
            m = dict(p["models"][mk])
            m.pop("source_audio", None)
            models[mk] = m
        per_tag = [
            {"attribute": t["attribute"], "tag": t["tag"], "scores": t["scores"]}
            for t in p["per_tag"]
        ]
        out.append({
            "rank": p["rank"],
            "dataset": p["dataset"],
            "id": p["id"],
            "caption_segments": segments,
            "unlocated": unlocated,
            "key_tag": p["key_tag"],
            "key_spread": p["key_spread"],
            "winner": p["winner"],
            "loser": p["loser"],
            "tradeoff": p["tradeoff"],
            "clap_spread": p["clap_spread"],
            "aqa_spread": p["aqa_spread"],
            "models": models,
            "per_tag": per_tag,
        })
    # order: musiccaps first, then sdd, each by rank
    out.sort(key=lambda x: (0 if x["dataset"] == "musiccaps" else 1, x["rank"]))
    header = (
        "// Auto-generated from static/sota/selected_prompts.json by build_sota_data.py.\n"
        "// 20 prompts (10 MusicCaps + 10 Song Describer); 4 generators + GT per prompt.\n"
        "// caption_segments carry per-dimension concept spans for inline highlighting.\n"
        "window.SOTA_PROMPTS = "
    )
    with open(OUT, "w") as f:
        f.write(header + json.dumps(out, ensure_ascii=False, indent=1) + ";\n")
    print(f"wrote {OUT}: {len(out)} prompts; concepts located {matched}/{total}")


if __name__ == "__main__":
    main()
