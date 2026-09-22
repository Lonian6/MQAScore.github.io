# Demo concept audit

The clip-level concepts shown on the demo page are **auto-extracted by Qwen3-4B**
(the paper's text-processing LLM) and are **not accuracy-checked** — the extractor's
reliability is a known, unevaluated limitation. During a manual review of the demo
prompts we found several concepts that are clearly mis-annotated (wrong dimension) or
outside the paper's scope. These are **removed from the demo** (in the two build
scripts) so the page does not present obviously-wrong concepts as ground truth. The
underlying selection JSONs (`selected_pairs.json`, `selected_prompts.json`) are left
untouched.

Removal is conservative: only clearly-wrong concepts are dropped. Debatable cases are
kept. When a concept is removed, the per-model **MQAScore mean** row is recomputed over
the remaining concepts so each table stays internally consistent.

## Naming

- The demo data uses the attribute name **`context`**; the paper's fifth dimension is
  **Usage** ("the intended situational setting"). The page now displays it as **Usage**
  (internal key unchanged).

## Removed concepts

### MusicEval (section 1) — 3 removed

| prompt | removed concept | reason | side effect |
|---|---|---|---|
| P058 | `mood/theme : contemporary` | an era/style descriptor, not an emotion | none (non-anchor) |
| P034 | `mood/theme : easy listening` | a genre/format, not an emotion | was the trade-off *opposite*; key tag `mood/theme:upbeat` kept, `tradeoff` set to false |
| P045 | `instrument : background` | "background" is not an instrument | was the trade-off *opposite*; key tag `mood/theme:tranquil` kept, `tradeoff` set to false |

### SOTA generators (section 2) — 4 removed

| prompt | removed concept | reason | side effect |
|---|---|---|---|
| 528 (SDD 03) | `instrument : melody` | "melody" is not an instrument | none (non-anchor) |
| RXk0lQJ7ttc (MC 09) | `instrument : female vocal` | a vocal, mis-filed as instrument | was the **key tag**; re-pointed to the correctly-labeled `vocal : female vocal` (same concept, same winner `stable_audio_3 > acestep_1_5`, gap 0.852 vs 0.009) |
| RXk0lQJ7ttc (MC 09) | `instrument : male vocal` | a vocal, mis-filed as instrument | none (the `vocal : male vocal` copy is kept) |
| _yXtw_z2xf4 (MC 01) | `mood/theme : dizzying` | derived from "dizzyingly high **tempo**"; tempo is explicitly excluded in the paper (Sec. 1) | none (non-anchor) |

## Not removed, but worth noting (kept as-is)

- `vocal : vocal` (MC 01 key tag) and similar generic tags — generic but in the correct
  dimension and a valid vocal-presence probe.
- Several `context/usage` tags are vivid paraphrases of the caption
  (`waiting for sunset`, `animals walking around`, `farm`) rather than verbatim; they are
  still situational-usage concepts and are kept (shown as "also detected" when not found
  verbatim in the caption text).

## Reproduce

```bash
cd static/MusicEval && python3 build_demo_data.py   # -> static/js/demo_data.js
cd static/sota      && python3 build_sota_data.py    # -> static/js/sota_data.js
```

Edit the `REMOVE` / `KEY_OVERRIDE` / `TRADEOFF_OFF` constants at the top of each build
script to change the curation.
