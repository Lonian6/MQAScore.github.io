# Demo concept audit

The clip-level concepts shown on the demo page are **auto-extracted by Qwen3-4B**
(the paper's text-processing LLM) and are **not accuracy-checked** — the extractor's
reliability is a known, unevaluated limitation.

We manually reviewed the extraction quality of every candidate and **keep only the
5 samples per dataset with the cleanest extraction** (correct dimensions, good coverage,
no under-extraction of salient concepts, no ungrounded/hallucinated concepts). The kept
samples are listed in each build script's `KEEP` list and show their original, unmodified
scores; the underlying selection JSONs are left untouched.

- **MusicEval** → 5 of 10: `P060, P021, P017, P026, P006`
- **MusicCaps** → 5 of 10: `cOsm3r-xKEE, bm5IT7e2vvI, D8-x1T8M4gk, y6iMm7Pltq0, D7pjR9cQChM`
- **Song Describer** → 5 of 10: `387, 116, 291, 591, 138`

Representative reasons a sample was **excluded**: clearly mis-labeled dimension
(`instrument:female vocal`, `instrument:background`, `mood/theme:easy listening`,
`mood/theme:contemporary`), out-of-scope tempo concept (`mood/theme:dizzying`),
**hallucinated** concept not in the caption (SDD 592 `mood/theme:calm`), or heavy
**under-extraction** (MusicEval P099 extracted only 2 concepts, missing "a cappella" and
"studio recording").

## Naming

- The demo data uses the attribute name **`context`**; the paper's fifth dimension is
  **Usage** ("the intended situational setting"). The page now displays it as **Usage**
  (internal key unchanged).

## Examples of excluded samples

| dataset | excluded | issue |
|---|---|---|
| MusicEval | P058 | `mood/theme:contemporary` — era/style, not an emotion |
| MusicEval | P034 | `mood/theme:easy listening` — a genre/format, not an emotion |
| MusicEval | P045 | `instrument:background` — not an instrument |
| MusicEval | P099 | under-extraction — only 2 concepts; missed "a cappella" (genre) & "studio recording" (usage) |
| MusicEval | P008 | under-extraction — missed "grand"/"majestic"; generic ungrounded `vocal:vocal` |
| MusicCaps | _yXtw_z2xf4 | `mood/theme:dizzying` — from "dizzyingly high **tempo**"; tempo is excluded (Sec. 1) |
| MusicCaps | RXk0lQJ7ttc | `instrument:female/male vocal` — vocals mis-filed as instruments |
| MusicCaps | ihCl2ImrOYE | noisy 8-mood list (droning/recurring/insistent…); spoken vocal not captured |
| MusicCaps | UzDVZzIIcy8 | thin — only 4 concepts, no genre/vocal/usage |
| SDD | 592 | **hallucination** — key `mood/theme:calm` is not in the caption ("hopeful") |
| SDD | 56 | missed "bongos" (instrument) & "bachata" (genre); typo-heavy caption |
| SDD | 528 | `instrument:melody` — not an instrument |

## Manual concept fixes (SOTA build script)

Two concepts were not found verbatim in their caption and were fixed so they highlight
inline (keeping the scores intact):

- **y6iMm7Pltq0** — `vocal:male vocal` **renamed to `male voice`** (the caption says
  "A male voice is singing"); same concept, now highlighted. (`RENAME`)
- **116** — `instrument:acoustic guitar` keeps its label & scores, but now highlights the
  word **"acoustic"** in "acoustic and electric guitars" (`HIGHLIGHT_ALIAS`). It is a
  distinct concept from `electric guitar` (opposite per-model scores) and is this sample's
  key tag, so it was **not** renamed to "electric guitars".

## Reproduce

```bash
cd static/MusicEval && python3 build_demo_data.py   # -> static/js/demo_data.js
cd static/sota      && python3 build_sota_data.py    # -> static/js/sota_data.js
```

Edit the `KEEP` list at the top of each build script to change which samples are shown.
