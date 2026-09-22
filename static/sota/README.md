# SOTA generation demo: prompts where CLAP ties the generators but MQAScore does not

Selected 2026-09-22. Continues the story of `../MusicEval/`: **the overall text-audio
score (CLAP caption cosine) is nearly the same for all 4 generators, but MQAScore
(per-tag ALM yes/no) shows clear, attribute-specific differences between them.**
10 prompts each from MusicCaps and Song Describer (SDD); every generation of those
prompts (+ GT for reference) and every existing score is exported.

**AQAScore is merged (2026-09-22)**: all 100 clips × 3 ALMs, see "AQAScore results" below.
Everything the web page needs is in this directory: audio, captions, all scores, per-tag scores.
**For the page, read `selected_prompts.json` (nested, incl. per-tag) or `scores_table.csv` (flat).**

## Files

| path | content |
|---|---|
| `select_sota_prompts.py` | selection script (read-only on `sota_model/results`; rerun reproduces the selection) |
| `merge_aqascore.py` | copies the AQAScore runs into `aqascore/` and fills them into the files below |
| `scores_table.csv` | **flat table for the web page**: one row per prompt × model (100 rows): audio path, caption, key tag, CLAP/MuQ caption & pertag mean, MQAScore mean × 3 ALMs, AQAScore × 3 ALMs |
| `aqascore/` | raw AQAScore results copied from `sota_model/results/*_caption_yesno_demo.*` (30 json + 30 meta + 3 summaries) |
| `prompts.md` | **the 20 prompts**: caption, model × score table (incl. AQAScore), per-tag × model table (auto-generated) |
| `selected_prompts.json` | same, machine-readable: `models[m].aqascore = {qwen3omni, af, mf}`, per-prompt `aqa_spread`, criteria, thresholds, log |
| `aqascore_input.jsonl` | 100 rows = 20 prompts × (4 generators + GT): `dataset, id, model, caption, audio, source_audio` |
| `candidates_{musiccaps,sdd}.csv` | all prompts that passed the filters, ranked (swap-in pool; 214 / 37) |
| `audio/{musiccaps,sdd}/NN_<id>/<model>.wav` | original files, byte copies (100 files, 152 MB); GT is `GT.wav` (MusicCaps) / `GT.mp3` (SDD) |

## Data source

- Generators (`sota_model/sota_data.py: GEN_MODELS`): musicgen_large, stable_audio_3, meanaudio,
  acestep_1_5. `stable_audio_open` is excluded (generation unfinished, no scores).
- Items / audio paths: `sota_data.build_items(dataset, model)`. MusicCaps is restricted to the
  5,367 prompts with local GT audio; SDD has 1,106 captions over 706 tracks.
- Scores: `sota_model/results/`
  - MQAScore: `{qwen3omni,af,mf}_{ds}_{model}_pertag_yesno.json` (per-tag P(Yes), `mean_score`)
  - CLAP / MuQ: `{clap,muq}_{ds}_{model}_{caption,pertag}_score.json`
- Generated clips are 10 s; GT is 10 s wav (MusicCaps) and **120 s mp3 (SDD)**, and SDD GT is
  shared by all captions of the same track.

## Selection criteria (per dataset; only the 4 generators are used, GT is display-only)

1. **Exclusions**: prompts with any generator score missing, `n_tags == 0`, or different tag
   sets across ALMs/generators. MusicCaps 5,350 kept (17 no-tag), SDD 1,099 kept (7 no-tag).
2. **CLAP tied**: CLAP caption spread (max − min over the 4 generators) ≤ the **5th
   percentile** of that dataset → MusicCaps ≤ **0.0871**, SDD ≤ **0.0886**.
   (For scale: CLAP caption score over all clips has std ≈ 0.12.)
3. **MQAScore gap**: the tag with the largest Qwen3-Omni spread across generators (*key tag*)
   has spread ≥ 0.5. Its highest / lowest generators are the *winner* / *loser*.
4. **Cross-ALM check**: AF-Next or Music Flamingo also scores winner > loser by ≥ 0.1 on the key tag.
5. **Ranking**: trade-off prompts first (another tag with spread ≥ 0.5 is won by a *different*
   generator — each model wins a different attribute, which is why one overall score cancels
   out), then key spread ≥ 0.9, then smallest CLAP spread.
6. **Diversity** (greedy over the ranking): ≤ 4 prompts per key-tag attribute, ≤ 4 per winner
   model, SDD ≤ 1 caption per track.

Pass counts: MusicCaps 5,350 → CLAP tied 268 → tag gap 228 → cross-ALM **214**;
SDD 1,099 → 55 → 42 → **37**. All 20 selected prompts are trade-off prompts. No relaxation
was needed (fallback: 10th, then 25th percentile).

**Deviation from the first draft plan**: the plan used the 25th percentile, but that is a
CLAP spread of 0.155–0.164 (> 1 std), which is not "tied"; with 5% there are still 214/37
candidates. The rank was also changed from a multiplicative score (saturated at ~0.99 for
most candidates) to the lexicographic order above so the most-tied CLAP prompts come first.

## The 20 prompts (full tables in `prompts.md`)

| # | id | key tag (Qwen spread) | winner > loser | CLAP spread |
|---|---|---|---|---|
| MC 01 | _yXtw_z2xf4 | vocal: vocal (0.945) | meanaudio > stable_audio_3 | 0.0039 |
| MC 02 | cOsm3r-xKEE | vocal: male vocal (0.969) | meanaudio > acestep_1_5 | 0.0076 |
| MC 03 | D8-x1T8M4gk | vocal: male vocal (0.989) | meanaudio > stable_audio_3 | 0.0102 |
| MC 04 | bm5IT7e2vvI | genre: folk music (0.934) | musicgen_large > acestep_1_5 | 0.0304 |
| MC 05 | -8cgbhIR_pw | vocal: male vocal (0.997) | stable_audio_3 > meanaudio | 0.0315 |
| MC 06 | UzDVZzIIcy8 | mood_theme: calming (0.904) | meanaudio > stable_audio_3 | 0.0319 |
| MC 07 | y6iMm7Pltq0 | mood_theme: calm (0.987) | musicgen_large > meanaudio | 0.0337 |
| MC 08 | ihCl2ImrOYE | instrument: cello (0.947) | musicgen_large > meanaudio | 0.0349 |
| MC 09 | RXk0lQJ7ttc | instrument: female vocal (0.988) | stable_audio_3 > acestep_1_5 | 0.0370 |
| MC 10 | D7pjR9cQChM | instrument: synth melody (0.982) | stable_audio_3 > meanaudio | 0.0372 |
| SDD 01 | 56 | vocal: male vocal (0.993) | meanaudio > acestep_1_5 | 0.0175 |
| SDD 02 | 116 | instrument: acoustic guitar (0.951) | meanaudio > stable_audio_3 | 0.0281 |
| SDD 03 | 528 | mood_theme: upbeat (0.945) | musicgen_large > stable_audio_3 | 0.0454 |
| SDD 04 | 291 | instrument: flute (0.903) | meanaudio > acestep_1_5 | 0.0502 |
| SDD 05 | 592 | mood_theme: calm (0.970) | acestep_1_5 > meanaudio | 0.0616 |
| SDD 06 | 1106 | genre: country (0.969) | stable_audio_3 > acestep_1_5 | 0.0649 |
| SDD 07 | 138 | mood_theme: playful (0.998) | acestep_1_5 > meanaudio | 0.0679 |
| SDD 08 | 591 | genre: country (0.984) | stable_audio_3 > meanaudio | 0.0708 |
| SDD 09 | 387 | genre: rock (0.997) | stable_audio_3 > acestep_1_5 | 0.0718 |
| SDD 10 | 1060 | genre: rock (0.962) | meanaudio > stable_audio_3 | 0.0771 |

## Caveats

- "Tied" is defined on **CLAP caption** only. MuQ, CLAP-pertag and AQAScore are listed but not
  constrained (AQAScore turned out mostly not tied, see above).
- Tag-extraction quirks visible in the key tags: MC 09 `instrument: female vocal` (a vocal
  tag filed under instrument), MC 01 `vocal: vocal` (generic). Consider swapping these with
  the next rows of `candidates_musiccaps.csv` if they look odd on the page.
- Vocal tags are over-represented in MusicCaps (4/10) because presence/absence of vocals is
  the easiest large MQAScore gap; the ≤ 4/attribute cap is what keeps it at 4.
- MQAScore values are model judgements; listen before publishing (e.g. does the loser
  really lack the key-tag attribute?).
- SDD GT is the 120 s track and is shared by several captions; it is a reference, not a
  like-for-like comparison with the 10 s generations.

## AQAScore results (read before writing the page)

Computed with `sota_model/{qwen3omni,af_mf}_sota_caption_yesno.py` (question
`Does this music match the following description? '{caption}' Answer Yes or No.`, identical
to MusicEval; batch = 1). "AQA spread" = max − min over the 4 generators.

**AQAScore is mostly NOT tied on these prompts** — unlike CLAP, which is tied by construction:

- Qwen AQA spread < 0.2 on only **7/20** prompts; all three ALMs < 0.2 on only **2/20**
  (MusicCaps #10 `D7pjR9cQChM`: 0.001 / 0.004 / 0.026; SDD #02 `116`: 0.075 / 0.134 / 0.029).
- Qwen AQAScore ranks the key-tag winner above the loser on 14/20 prompts, i.e. whole-caption
  yes/no often *does* see the difference MQAScore sees (e.g. MC 03, MC 05, SDD 01: spread > 0.9).
- AQAScore is saturated and unstable: 19/80 generated clips get Qwen AQA < 0.1, and the three
  ALMs disagree strongly on the same prompt (MC 01 spread: Qwen 0.31, AF 0.81, MF 0.80).
- GT gets a high AQAScore (Qwen mean 0.85 vs 0.63 for generations).

So on this set the demo point should be "CLAP cannot separate the generators; MQAScore
separates them *and says on which attribute*", with AQAScore shown as a coarse whole-caption
yes/no that is jumpy and disagrees across ALMs. Only MC #10 and SDD #02 support "AQAScore is also
tied". To pick prompts where AQAScore is tied too, AQAScore would have to be run on the
candidate pool (`candidates_*.csv`, 214 + 37 prompts) and used as a selection criterion.

## Rerun

```bash
cd /home/lonian/MCB/demo/sota
/home/lonian/miniconda3/envs/ace_step_eval/bin/python select_sota_prompts.py            # full run + copy audio
/home/lonian/miniconda3/envs/ace_step_eval/bin/python select_sota_prompts.py --dry-run  # first 50 prompts/dataset, no writes
/home/lonian/miniconda3/envs/ace_step_eval/bin/python select_sota_prompts.py --no-copy  # rewrite tables only
/home/lonian/miniconda3/envs/ace_step_eval/bin/python merge_aqascore.py                  # ALWAYS after the above: re-fill AQAScore
```

`select_sota_prompts.py` rewrites `selected_prompts.json` / `prompts.md` with `aqascore: null`;
run `merge_aqascore.py` after it. Backups of the pre-merge files: `*.bak-20260922`.

Criteria constants are at the top of the script (`CLAP_Q`, `TAG_SPREAD`, `KEY_STRONG`,
`XALM_MIN`, `MAX_PER_*`).
