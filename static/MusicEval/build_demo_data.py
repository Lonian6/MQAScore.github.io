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

# --- Concept curation -------------------------------------------------------
# The concepts are auto-extracted by Qwen3-4B and are NOT accuracy-checked. We
# drop concepts that are clearly mis-annotated (wrong dimension) or out of the
# paper's scope, keyed by (prompt_id, attribute, tag). See ../concept_audit.md.
REMOVE = {
    ("P058", "mood_theme", "contemporary"),     # era/style, not an emotion
    ("P034", "mood_theme", "easy listening"),   # a genre/format, not an emotion
    ("P045", "instrument", "background"),        # not an instrument
}
# Pairs whose trade-off opposite was one of the removed concepts: the key tag
# stays (still a clean comparison) but the trade-off no longer holds.
TRADEOFF_OFF = {"P034", "P045"}


def recompute_mean(per_tag, side, alm):
    vals = [t[alm + "_" + side] for t in per_tag]
    return round(sum(vals) / len(vals), 4) if vals else None


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
    total = matched = removed = 0
    for p in d["pairs"]:
        pid = p["prompt_id"]
        # curate: drop clearly mis-annotated concepts, then recompute means
        kept = [t for t in p["per_tag"] if (pid, t["attribute"], t["tag"]) not in REMOVE]
        removed += len(p["per_tag"]) - len(kept)
        p["per_tag"] = kept
        for side in ("A", "B"):
            for alm in ("qwen3omni", "af", "mf"):
                p[side]["mqa_mean"][alm] = recompute_mean(kept, side, alm)
        if pid in TRADEOFF_OFF:
            p["tradeoff"] = False
            p["opp_tag"] = None
            p["opp_delta"] = None

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
        f.write(header + json.dumps(d["pairs"], ensure_ascii=False, indent=1) + ";\n")
    print(f"wrote {OUT}: {len(d['pairs'])} pairs; removed {removed} mis-annotated "
          f"concepts; concepts located {matched}/{total}")


if __name__ == "__main__":
    main()
