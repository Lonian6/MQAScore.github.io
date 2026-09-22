# MusicEval demo pairs: MQAScore sees what overall scores miss

Selected 2026-09-22 for the demo page. Goal: show pairs of clips where **overall
text-audio scores (CLAP caption cosine, AQAScore = ALM whole-caption P(Yes)) are
nearly tied, but MQAScore (per-attribute yes/no probing) reveals a clear
difference** on specific tags.

## Files

| path | content |
|---|---|
| `select_demo_clips.py` | selection script (read-only on MusicEval results; rerun reproduces everything) |
| `pairs.md` | **the 10 selected pairs**: caption, all overall scores, per-tag table × 3 ALMs, human MOS (auto-generated) |
| `selected_pairs.json` | same 10 pairs + criteria + thresholds, machine-readable (use this to build the page) |
| `demo_candidates.csv` | all 24 candidates that passed the filters, ranked (swap-in pool) |
| `audio/NN_PXXX/*.wav` | original MusicEval wavs of the 10 pairs (20 files, 18 MB, byte-identical copies) |

## Data source

MusicEval test split (AudioMOS 2025 Track 1; 413 clips / 30 systems / 103 prompts),
scores from `/home/lonian/MCB/MusicEval/results/`:

- MQAScore: `{qwen3omni,af,mf}_musiceval_test_pertag_yesno.json` (per-tag P(Yes))
- AQAScore: `{qwen3omni,af,mf}_musiceval_test_caption_yesno.json` (`caption_score`)
- CLAP / MuQ: `{clap,muq}_musiceval_test_caption_score.json` (`caption_score`)
- Human: `mos_ta` (textual alignment), `mos_oq` (overall quality), 1–5

Clips of the same prompt share the same extracted tag set (checked: 0 mismatches
across prompts and across the 3 ALMs), so tags are comparable within a pair.

## Selection criteria

A pair = two clips from the **same prompt**, different systems. Main ALM is Qwen3-Omni.

1. **Exclusions** (clip level): `caption_source != prompt_info` (5 clips whose caption
   comes from the unreliable `demo_prompt_info.txt`), `n_tags == 0` (6), audio < 5 s (0).
   402 clips / 788 same-prompt pairs remain.
2. **Overall scores tied**: |ΔCLAP caption| and |ΔAQAScore(Qwen)| both ≤ their 25th
   percentile over all 788 pairs → **|ΔCLAP| ≤ 0.0576, |ΔAQA| ≤ 0.0466**. (Quantiles, not
   absolute thresholds, because cosine and P(Yes) scales differ.) 67 pairs pass.
3. **MQAScore gap**: the tag with the largest |ΔP(Yes)| (Qwen) has gap ≥ 0.5. 26 pass.
   Pair is oriented so A = the clip winning this *key tag*.
4. **Cross-ALM check**: AF-Next or Music Flamingo shows the same-sign gap ≥ 0.1 on the
   key tag (guards against single-model noise). **24 pass** → `demo_candidates.csv`.
5. **Ranking**: `key_gap × 1.5 if trade-off × 1.2 if human-agree`, tie-break by smaller
   |ΔCLAP|+|ΔAQA|.
   - *trade-off*: some other tag favours B by ≥ 0.3 — the two clips win on different
     attributes, which is exactly why the whole-caption score cancels out (9/24).
   - *human-agree*: sign(Δ mos_ta) = sign(Δ MQAScore mean, Qwen) (14/24).
6. **Diversity** (greedy over the ranking): ≤ 1 pair per prompt, each system in ≤ 2
   pairs, each key-tag attribute in ≤ 4 pairs → 10 pairs.

No relaxation was needed (fallback order would have been: quantile 0.33, then gap 0.4).

## The 10 pairs (details in `pairs.md`)

| # | prompt | A vs B | key tag (Qwen A−B) | opposite tag | ΔCLAP | ΔAQA | TA A/B |
|---|---|---|---|---|---|---|---|
| 01 | P058 | S004 vs S031 | genre: pop (+0.996) | instr: wind instruments (−0.312) | 0.002 | 0.000 | 4.4/3.6 |
| 02 | P060 | S017 vs S020 | genre: pop (+0.980) | instr: violin (−0.785) | 0.044 | 0.043 | 4.2/3.6 |
| 03 | P099 | S008 vs S003 | instr: double bass (+0.967) | vocal: male vocal (−0.372) | 0.029 | 0.006 | 2.8/2.2 |
| 04 | P034 | S008 vs S004 | mood: upbeat (+0.986) | mood: easy listening (−0.966) | 0.005 | 0.027 | 4.6/4.8 |
| 05 | P021 | S033 vs S013 | genre: classical (+0.967) | instr: hi hats (−0.939) | 0.029 | 0.004 | 4.8/4.0 |
| 06 | P017 | S002 vs S013 | mood: poignant (+0.780) | instr: Indian percussion (−0.431) | 0.055 | 0.006 | 4.0/3.8 |
| 07 | P026 | S016 vs S001 | instr: sleigh bells (+0.934) | mood: lively (−0.887) | 0.009 | 0.001 | 3.6/4.2 |
| 08 | P045 | S022 vs S003 | mood: tranquil (+0.855) | instr: background (−0.352) | 0.014 | 0.039 | 2.2/3.4 |
| 09 | P006 | S006 vs S023 | context: intimate performance (+0.983) | instr: viola (−0.213) | 0.009 | 0.033 | 4.0/3.0 |
| 10 | P008 | S017 vs S006 | mood: solemn (+0.957) | genre: chant (−0.006, negligible — no trade-off) | 0.026 | 0.001 | 4.2/3.8 |

## Caveats (read before putting on the page)

- "Tied" is defined on **CLAP + Qwen AQAScore** only. AF/MF AQAScore and MuQ are listed in
  `pairs.md` for reference and are *not* always tied (e.g. #01 MuQ 0.29 vs −0.01).
- Human TA is a mean of 5 raters and is itself correlated with quality (ρ(TA,OQ)=0.79,
  see `MusicEval/RESULTS.md`). Where OQ also differs a lot (e.g. #01 OQ 5.0 vs 3.6) the TA
  gap may partly reflect quality; the demo point is the *per-tag* difference, not TA.
- Some tags are hard to verify by ear (`context: intimate performance`, `instrument:
  background` in #08). Listen before publishing; weaker pairs can be swapped with
  lower-ranked rows in `demo_candidates.csv`.
- MQAScore values are model judgements, not ground truth; the per-tag gap still needs a
  listening check (e.g. does #01 B really not sound like pop?).

## Rerun

```bash
cd /home/lonian/MCB/demo
/home/lonian/miniconda3/envs/ace_step_eval/bin/python select_demo_clips.py            # full run + copy wavs
/home/lonian/miniconda3/envs/ace_step_eval/bin/python select_demo_clips.py --dry-run  # first 10 prompts, no writes
/home/lonian/miniconda3/envs/ace_step_eval/bin/python select_demo_clips.py --no-copy  # rewrite tables only
```

Criteria constants are at the top of the script (`OVERALL_Q`, `TAG_DELTA`, `TRADEOFF_DELTA`,
`XALM_MIN`, `MAX_PER_*`).
