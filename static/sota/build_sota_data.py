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

# --- Sample curation --------------------------------------------------------
# Concepts are auto-extracted by Qwen3-4B and NOT accuracy-checked. We keep only
# the 5 prompts per dataset with the best extraction quality (correct dimensions,
# good coverage, no under-/over-extraction). See ../concept_audit.md.
KEEP = {
    "musiccaps": ["cOsm3r-xKEE", "bm5IT7e2vvI", "D8-x1T8M4gk", "y6iMm7Pltq0", "D7pjR9cQChM"],
    "sdd": ["387", "116", "291", "591", "138"],
}
KEEP_IDS = {i for ids in KEEP.values() for i in ids}

# Manual concept fixes, keyed by (id, attribute, tag):
#  RENAME          -> change the concept's tag to the caption's wording (display + match).
#  HIGHLIGHT_ALIAS -> keep the concept's tag/label & scores, but highlight a different
#                     caption phrase (used when the tag isn't contiguous in the caption).
RENAME = {
    ("y6iMm7Pltq0", "vocal", "male vocal"): "male voice",   # caption: "A male voice is singing"
}
HIGHLIGHT_ALIAS = {
    # caption reads "acoustic and electric guitars"; highlight "acoustic" for this concept
    # (its label/scores stay "acoustic guitar" — a distinct concept from electric guitar).
    ("116", "instrument", "acoustic guitar"): "acoustic",
}


def spans_for(caption, tags, alias=None):
    """Return non-overlapping placed spans [(start,end,attribute,tag)] greedy-longest.
    `alias` maps (attribute, tag) -> a substitute string to search for in the caption
    (the concept keeps its real tag; only the matched phrase differs)."""
    alias = alias or {}
    cands = []
    for attribute, tag in tags:
        needle = alias.get((attribute, tag), tag)
        pat = re.compile(r"\b" + re.escape(needle) + r"\w*", re.IGNORECASE)
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


def segment_caption(caption, per_tag, alias=None):
    tags = [(t["attribute"], t["tag"]) for t in per_tag]
    placed = sorted(spans_for(caption, tags, alias), key=lambda c: c[0])
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
    prompts = [p for p in d["prompts"] if p["id"] in KEEP_IDS]
    for p in prompts:
        # apply manual tag renames (match the caption's wording)
        for t in p["per_tag"]:
            new = RENAME.get((p["id"], t["attribute"], t["tag"]))
            if new:
                t["tag"] = new
        # caption-highlight aliases for this prompt
        alias = {(a, tg): ph for (pid, a, tg), ph in HIGHLIGHT_ALIAS.items() if pid == p["id"]}
        segments, unlocated = segment_caption(p["caption"], p["per_tag"], alias)
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
    # order: musiccaps first, then sdd, each following the KEEP list order
    ds_rank = {"musiccaps": 0, "sdd": 1}
    out.sort(key=lambda x: (ds_rank[x["dataset"]], KEEP[x["dataset"]].index(x["id"])))
    header = (
        "// Auto-generated from static/sota/selected_prompts.json by build_sota_data.py.\n"
        "// 20 prompts (10 MusicCaps + 10 Song Describer); 4 generators + GT per prompt.\n"
        "// caption_segments carry per-dimension concept spans for inline highlighting.\n"
        "window.SOTA_PROMPTS = "
    )
    with open(OUT, "w") as f:
        f.write(header + json.dumps(out, ensure_ascii=False, indent=1) + ";\n")
    kept = {ds: [x["id"] for x in out if x["dataset"] == ds] for ds in ds_rank}
    print(f"wrote {OUT}: kept {len(out)} prompts {kept}; concepts located {matched}/{total}")


if __name__ == "__main__":
    main()
