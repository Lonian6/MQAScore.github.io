#!/usr/bin/env python3
"""Build static/js/demo_data.js from selected_pairs.json.

Adds caption_segments (per-dimension concept spans for inline highlighting) and
an "unlocated" list (concepts not found verbatim in the caption). Strips the
author-machine source_audio paths. Run from this directory: python3 build_demo_data.py
"""
import json, re, os

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, "selected_pairs.json")
OUT = os.path.join(HERE, "..", "js", "demo_data.js")

# --- Sample curation --------------------------------------------------------
# Concepts are auto-extracted by Qwen3-4B and are NOT accuracy-checked. We keep
# only the 5 pairs with the best extraction quality (correct dimensions, good
# coverage, no under-/over-extraction). See ../concept_audit.md. Order = display order.
KEEP = ["P060", "P021", "P017", "P026", "P006"]


def spans_for(caption, tags):
    cands = []
    for attribute, tag in tags:
        for m in re.finditer(r"\b" + re.escape(tag) + r"\w*", caption, re.IGNORECASE):
            cands.append((m.start(), m.end(), attribute, tag))
    cands.sort(key=lambda c: (-(c[1] - c[0]), c[0]))
    occ = [False] * len(caption)
    placed = []
    for s, e, attribute, tag in cands:
        if not any(occ[i] for i in range(s, e)):
            for i in range(s, e):
                occ[i] = True
            placed.append((s, e, attribute, tag))
    return sorted(placed, key=lambda c: c[0])


def segment(caption, per_tag):
    tags = [(t["attribute"], t["tag"]) for t in per_tag]
    placed = spans_for(caption, tags)
    segs, cur, located = [], 0, set()
    for s, e, attribute, tag in placed:
        if s > cur:
            segs.append({"text": caption[cur:s]})
        segs.append({"text": caption[s:e], "dim": attribute, "tag": tag})
        located.add((attribute, tag))
        cur = e
    if cur < len(caption):
        segs.append({"text": caption[cur:]})
    unlocated = [{"dim": a, "tag": t} for (a, t) in tags if (a, t) not in located]
    return segs, unlocated


def main():
    d = json.load(open(SRC))
    by_id = {p["prompt_id"]: p for p in d["pairs"]}
    pairs = [by_id[i] for i in KEEP if i in by_id]
    total = matched = 0
    for p in pairs:
        segs, unlocated = segment(p["caption"], p["per_tag"])
        p["caption_segments"] = segs
        p["unlocated"] = unlocated
        total += len(p["per_tag"])
        matched += len(p["per_tag"]) - len(unlocated)
        for side in ("A", "B"):
            p[side].pop("source_audio", None)
    header = (
        "// Auto-generated from static/MusicEval/selected_pairs.json by build_demo_data.py.\n"
        "// 10 MusicEval demo pairs: overall scores tied, MQAScore per-attribute gap large.\n"
        "// caption_segments carry per-dimension concept spans for inline highlighting.\n"
        "window.MUSICEVAL_PAIRS = "
    )
    with open(OUT, "w") as f:
        f.write(header + json.dumps(pairs, ensure_ascii=False, indent=1) + ";\n")
    print(f"wrote {OUT}: kept {len(pairs)} pairs {[p['prompt_id'] for p in pairs]}; "
          f"concepts located {matched}/{total}")


if __name__ == "__main__":
    main()
