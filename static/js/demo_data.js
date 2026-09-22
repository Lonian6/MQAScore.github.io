// Auto-generated from static/MusicEval/selected_pairs.json by build_demo_data.py.
// 10 MusicEval demo pairs: overall scores tied, MQAScore per-attribute gap large.
// caption_segments carry per-dimension concept spans for inline highlighting.
window.MUSICEVAL_PAIRS = [
 {
  "pair": 2,
  "prompt_id": "P060",
  "caption": "This tranquil pop music piece features flowing piano and violin accompaniment. The song is performed with a calming effect, creating a serene concert atmosphere.",
  "key_tag": "genre:pop",
  "key_delta": 0.98,
  "tradeoff": true,
  "opp_tag": "instrument:violin",
  "opp_delta": -0.7854,
  "human_agree": true,
  "A": {
   "id": "audiomos2025-track1-S017_P060",
   "system_id": "S017",
   "audio_seconds": 29.44,
   "demo_audio": "audio/02_P060/audiomos2025-track1-S017_P060.wav",
   "mos_ta": 4.2,
   "mos_oq": 3.8,
   "clap": 0.0302,
   "muq": 0.1604,
   "aqa": {
    "qwen3omni": 0.0759,
    "af": 0.8809,
    "mf": 0.7982
   },
   "mqa_mean": {
    "qwen3omni": 0.6069,
    "af": 0.612,
    "mf": 0.3998
   }
  },
  "B": {
   "id": "audiomos2025-track1-S020_P060",
   "system_id": "S020",
   "audio_seconds": 10.242,
   "demo_audio": "audio/02_P060/audiomos2025-track1-S020_P060.wav",
   "mos_ta": 3.6,
   "mos_oq": 2.8,
   "clap": -0.0134,
   "muq": 0.0906,
   "aqa": {
    "qwen3omni": 0.0331,
    "af": 0.9047,
    "mf": 0.852
   },
   "mqa_mean": {
    "qwen3omni": 0.3915,
    "af": 0.5571,
    "mf": 0.4282
   }
  },
  "per_tag": [
   {
    "attribute": "genre",
    "tag": "pop",
    "qwen3omni_A": 0.9876,
    "af_A": 0.8934,
    "mf_A": 0.8355,
    "qwen3omni_B": 0.0076,
    "af_B": 0.3781,
    "mf_B": 0.0086
   },
   {
    "attribute": "instrument",
    "tag": "violin",
    "qwen3omni_A": 0.0954,
    "af_A": 0.076,
    "mf_A": 0.018,
    "qwen3omni_B": 0.8808,
    "af_B": 0.1334,
    "mf_B": 0.0293
   },
   {
    "attribute": "mood_theme",
    "tag": "serene",
    "qwen3omni_A": 0.7773,
    "af_A": 0.7774,
    "mf_A": 0.4073,
    "qwen3omni_B": 0.0141,
    "af_B": 0.9466,
    "mf_B": 0.852
   },
   {
    "attribute": "mood_theme",
    "tag": "calming",
    "qwen3omni_A": 0.5,
    "af_A": 0.6515,
    "mf_A": 0.1645,
    "qwen3omni_B": 0.011,
    "af_B": 0.9526,
    "mf_B": 0.7058
   },
   {
    "attribute": "instrument",
    "tag": "piano",
    "qwen3omni_A": 0.3487,
    "af_A": 0.4383,
    "mf_A": 0.1067,
    "qwen3omni_B": 0.5312,
    "af_B": 0.1333,
    "mf_B": 0.2942
   },
   {
    "attribute": "context",
    "tag": "concert atmosphere",
    "qwen3omni_A": 0.9325,
    "af_A": 0.8356,
    "mf_A": 0.867,
    "qwen3omni_B": 0.9047,
    "af_B": 0.7983,
    "mf_B": 0.6792
   }
  ],
  "caption_segments": [
   {
    "text": "This tranquil "
   },
   {
    "text": "pop",
    "dim": "genre",
    "tag": "pop"
   },
   {
    "text": " music piece features flowing "
   },
   {
    "text": "piano",
    "dim": "instrument",
    "tag": "piano"
   },
   {
    "text": " and "
   },
   {
    "text": "violin",
    "dim": "instrument",
    "tag": "violin"
   },
   {
    "text": " accompaniment. The song is performed with a "
   },
   {
    "text": "calming",
    "dim": "mood_theme",
    "tag": "calming"
   },
   {
    "text": " effect, creating a "
   },
   {
    "text": "serene",
    "dim": "mood_theme",
    "tag": "serene"
   },
   {
    "text": " "
   },
   {
    "text": "concert atmosphere",
    "dim": "context",
    "tag": "concert atmosphere"
   },
   {
    "text": "."
   }
  ],
  "unlocated": []
 },
 {
  "pair": 5,
  "prompt_id": "P021",
  "caption": "The low quality recording features a live performance of a classical song and it contains trombone melody playing over shimmering hi hats and sustained strings. It sounds muffled, but also passionate and emotional.",
  "key_tag": "genre:classical",
  "key_delta": 0.9668,
  "tradeoff": true,
  "opp_tag": "instrument:hi hats",
  "opp_delta": -0.9394,
  "human_agree": false,
  "A": {
   "id": "audiomos2025-track1-S033_P021",
   "system_id": "S033",
   "audio_seconds": 22.518,
   "demo_audio": "audio/05_P021/audiomos2025-track1-S033_P021.wav",
   "mos_ta": 4.8,
   "mos_oq": 4.4,
   "clap": 0.077,
   "muq": -0.226,
   "aqa": {
    "qwen3omni": 0.0013,
    "af": 0.0294,
    "mf": 0.0059
   },
   "mqa_mean": {
    "qwen3omni": 0.4641,
    "af": 0.4164,
    "mf": 0.4349
   }
  },
  "B": {
   "id": "audiomos2025-track1-S013_P021",
   "system_id": "S013",
   "audio_seconds": 87.408,
   "demo_audio": "audio/05_P021/audiomos2025-track1-S013_P021.wav",
   "mos_ta": 4.0,
   "mos_oq": 3.6,
   "clap": 0.1055,
   "muq": 0.0686,
   "aqa": {
    "qwen3omni": 0.0052,
    "af": 0.023,
    "mf": 0.011
   },
   "mqa_mean": {
    "qwen3omni": 0.484,
    "af": 0.4275,
    "mf": 0.2759
   }
  },
  "per_tag": [
   {
    "attribute": "genre",
    "tag": "classical",
    "qwen3omni_A": 0.9669,
    "af_A": 0.977,
    "mf_A": 0.9627,
    "qwen3omni_B": 0.0001,
    "af_B": 0.0159,
    "mf_B": 0.0001
   },
   {
    "attribute": "instrument",
    "tag": "hi hats",
    "qwen3omni_A": 0.0005,
    "af_A": 0.1334,
    "mf_A": 0.0601,
    "qwen3omni_B": 0.9399,
    "af_B": 0.9859,
    "mf_B": 0.7058
   },
   {
    "attribute": "mood_theme",
    "tag": "emotional",
    "qwen3omni_A": 0.9948,
    "af_A": 0.9242,
    "mf_A": 0.974,
    "qwen3omni_B": 0.0601,
    "af_B": 0.2453,
    "mf_B": 0.0759
   },
   {
    "attribute": "instrument",
    "tag": "trombone",
    "qwen3omni_A": 0.0003,
    "af_A": 0.0294,
    "mf_A": 0.0028,
    "qwen3omni_B": 0.9325,
    "af_B": 0.2455,
    "mf_B": 0.1645
   },
   {
    "attribute": "mood_theme",
    "tag": "passionate",
    "qwen3omni_A": 0.8176,
    "af_A": 0.3489,
    "mf_A": 0.5622,
    "qwen3omni_B": 0.9241,
    "af_B": 0.9242,
    "mf_B": 0.7058
   },
   {
    "attribute": "instrument",
    "tag": "strings",
    "qwen3omni_A": 0.0046,
    "af_A": 0.0853,
    "mf_A": 0.0474,
    "qwen3omni_B": 0.0474,
    "af_B": 0.1483,
    "mf_B": 0.0032
   }
  ],
  "caption_segments": [
   {
    "text": "The low quality recording features a live performance of a "
   },
   {
    "text": "classical",
    "dim": "genre",
    "tag": "classical"
   },
   {
    "text": " song and it contains "
   },
   {
    "text": "trombone",
    "dim": "instrument",
    "tag": "trombone"
   },
   {
    "text": " melody playing over shimmering "
   },
   {
    "text": "hi hats",
    "dim": "instrument",
    "tag": "hi hats"
   },
   {
    "text": " and sustained "
   },
   {
    "text": "strings",
    "dim": "instrument",
    "tag": "strings"
   },
   {
    "text": ". It sounds muffled, but also "
   },
   {
    "text": "passionate",
    "dim": "mood_theme",
    "tag": "passionate"
   },
   {
    "text": " and "
   },
   {
    "text": "emotional",
    "dim": "mood_theme",
    "tag": "emotional"
   },
   {
    "text": "."
   }
  ],
  "unlocated": []
 },
 {
  "pair": 6,
  "prompt_id": "P017",
  "caption": "The song is an instrumental. The song is medium tempo with a sitar playing solo, tabla playing percussively and other Indian percussion instruments. The song is emotional and poignant. The audio quality is very ordinary.",
  "key_tag": "mood_theme:poignant",
  "key_delta": 0.7802,
  "tradeoff": true,
  "opp_tag": "instrument:Indian percussion instruments",
  "opp_delta": -0.4311,
  "human_agree": true,
  "A": {
   "id": "audiomos2025-track1-S002_P017",
   "system_id": "S002",
   "audio_seconds": 30.0,
   "demo_audio": "audio/06_P017/audiomos2025-track1-S002_P017.wav",
   "mos_ta": 4.0,
   "mos_oq": 4.6,
   "clap": 0.0259,
   "muq": -0.1139,
   "aqa": {
    "qwen3omni": 0.0002,
    "af": 0.076,
    "mf": 0.0474
   },
   "mqa_mean": {
    "qwen3omni": 0.3989,
    "af": 0.3872,
    "mf": 0.3857
   }
  },
  "B": {
   "id": "audiomos2025-track1-S013_P017",
   "system_id": "S013",
   "audio_seconds": 87.408,
   "demo_audio": "audio/06_P017/audiomos2025-track1-S013_P017.wav",
   "mos_ta": 3.8,
   "mos_oq": 3.4,
   "clap": -0.0291,
   "muq": -0.1082,
   "aqa": {
    "qwen3omni": 0.0059,
    "af": 0.1069,
    "mf": 0.0022
   },
   "mqa_mean": {
    "qwen3omni": 0.3752,
    "af": 0.3748,
    "mf": 0.2167
   }
  },
  "per_tag": [
   {
    "attribute": "mood_theme",
    "tag": "poignant",
    "qwen3omni_A": 0.982,
    "af_A": 0.5315,
    "mf_A": 0.7773,
    "qwen3omni_B": 0.2018,
    "af_B": 0.6517,
    "mf_B": 0.5
   },
   {
    "attribute": "instrument",
    "tag": "Indian percussion instruments",
    "qwen3omni_A": 0.0067,
    "af_A": 0.1484,
    "mf_A": 0.0601,
    "qwen3omni_B": 0.4378,
    "af_B": 0.2458,
    "mf_B": 0.026
   },
   {
    "attribute": "instrument",
    "tag": "tabla",
    "qwen3omni_A": 0.0067,
    "af_A": 0.3216,
    "mf_A": 0.0159,
    "qwen3omni_B": 0.1645,
    "af_B": 0.4084,
    "mf_B": 0.0086
   },
   {
    "attribute": "instrument",
    "tag": "sitar",
    "qwen3omni_A": 0.0007,
    "af_A": 0.0535,
    "mf_A": 0.0954,
    "qwen3omni_B": 0.1192,
    "af_B": 0.0677,
    "mf_B": 0.018
   },
   {
    "attribute": "mood_theme",
    "tag": "emotional",
    "qwen3omni_A": 0.9985,
    "af_A": 0.8808,
    "mf_A": 0.9797,
    "qwen3omni_B": 0.9526,
    "af_B": 0.5004,
    "mf_B": 0.5312
   }
  ],
  "caption_segments": [
   {
    "text": "The song is an instrumental. The song is medium tempo with a "
   },
   {
    "text": "sitar",
    "dim": "instrument",
    "tag": "sitar"
   },
   {
    "text": " playing solo, "
   },
   {
    "text": "tabla",
    "dim": "instrument",
    "tag": "tabla"
   },
   {
    "text": " playing percussively and other "
   },
   {
    "text": "Indian percussion instruments",
    "dim": "instrument",
    "tag": "Indian percussion instruments"
   },
   {
    "text": ". The song is "
   },
   {
    "text": "emotional",
    "dim": "mood_theme",
    "tag": "emotional"
   },
   {
    "text": " and "
   },
   {
    "text": "poignant",
    "dim": "mood_theme",
    "tag": "poignant"
   },
   {
    "text": ". The audio quality is very ordinary."
   }
  ],
  "unlocated": []
 },
 {
  "pair": 7,
  "prompt_id": "P026",
  "caption": "This vibrant children's percussion ensemble features tambourines, sleigh bells, and castanets. The song is performed with a playful and lively mood, ideal for youthful audiences.",
  "key_tag": "instrument:sleigh bells",
  "key_delta": 0.9338,
  "tradeoff": true,
  "opp_tag": "mood_theme:lively",
  "opp_delta": -0.8867,
  "human_agree": false,
  "A": {
   "id": "audiomos2025-track1-S016_P026",
   "system_id": "S016",
   "audio_seconds": 30.0,
   "demo_audio": "audio/07_P026/audiomos2025-track1-S016_P026.wav",
   "mos_ta": 3.6,
   "mos_oq": 4.0,
   "clap": 0.0844,
   "muq": 0.0576,
   "aqa": {
    "qwen3omni": 0.0036,
    "af": 0.9149,
    "mf": 0.2227
   },
   "mqa_mean": {
    "qwen3omni": 0.517,
    "af": 0.6913,
    "mf": 0.4847
   }
  },
  "B": {
   "id": "audiomos2025-track1-S001_P026",
   "system_id": "S001",
   "audio_seconds": 10.242,
   "demo_audio": "audio/07_P026/audiomos2025-track1-S001_P026.wav",
   "mos_ta": 4.2,
   "mos_oq": 4.4,
   "clap": 0.0934,
   "muq": -0.1158,
   "aqa": {
    "qwen3omni": 0.0025,
    "af": 0.1193,
    "mf": 0.1192
   },
   "mqa_mean": {
    "qwen3omni": 0.5099,
    "af": 0.5382,
    "mf": 0.475
   }
  },
  "per_tag": [
   {
    "attribute": "instrument",
    "tag": "sleigh bells",
    "qwen3omni_A": 0.9669,
    "af_A": 0.852,
    "mf_A": 0.9241,
    "qwen3omni_B": 0.0331,
    "af_B": 0.1647,
    "mf_B": 0.0759
   },
   {
    "attribute": "mood_theme",
    "tag": "lively",
    "qwen3omni_A": 0.0954,
    "af_A": 0.5625,
    "mf_A": 0.0676,
    "qwen3omni_B": 0.982,
    "af_B": 0.9149,
    "mf_B": 0.9707
   },
   {
    "attribute": "instrument",
    "tag": "tambourines",
    "qwen3omni_A": 0.0331,
    "af_A": 0.4693,
    "mf_A": 0.023,
    "qwen3omni_B": 0.2227,
    "af_B": 0.1194,
    "mf_B": 0.0474
   },
   {
    "attribute": "mood_theme",
    "tag": "playful",
    "qwen3omni_A": 0.9325,
    "af_A": 0.9627,
    "mf_A": 0.7549,
    "qwen3omni_B": 0.7982,
    "af_B": 0.9149,
    "mf_B": 0.6792
   },
   {
    "attribute": "instrument",
    "tag": "castanets",
    "qwen3omni_A": 0.0851,
    "af_A": 0.349,
    "mf_A": 0.3209,
    "qwen3omni_B": 0.026,
    "af_B": 0.1332,
    "mf_B": 0.0851
   },
   {
    "attribute": "context",
    "tag": "youthful audiences",
    "qwen3omni_A": 0.989,
    "af_A": 0.9526,
    "mf_A": 0.8176,
    "qwen3omni_B": 0.9972,
    "af_B": 0.982,
    "mf_B": 0.9914
   }
  ],
  "caption_segments": [
   {
    "text": "This vibrant children's percussion ensemble features "
   },
   {
    "text": "tambourines",
    "dim": "instrument",
    "tag": "tambourines"
   },
   {
    "text": ", "
   },
   {
    "text": "sleigh bells",
    "dim": "instrument",
    "tag": "sleigh bells"
   },
   {
    "text": ", and "
   },
   {
    "text": "castanets",
    "dim": "instrument",
    "tag": "castanets"
   },
   {
    "text": ". The song is performed with a "
   },
   {
    "text": "playful",
    "dim": "mood_theme",
    "tag": "playful"
   },
   {
    "text": " and "
   },
   {
    "text": "lively",
    "dim": "mood_theme",
    "tag": "lively"
   },
   {
    "text": " mood, ideal for "
   },
   {
    "text": "youthful audiences",
    "dim": "context",
    "tag": "youthful audiences"
   },
   {
    "text": "."
   }
  ],
  "unlocated": []
 },
 {
  "pair": 9,
  "prompt_id": "P006",
  "caption": "This Baroque chamber ensemble features a blend of mysterious instruments like violin, viola, and cello, suited for an intimate performance.",
  "key_tag": "context:intimate performance",
  "key_delta": 0.9828,
  "tradeoff": false,
  "opp_tag": "instrument:viola",
  "opp_delta": -0.213,
  "human_agree": true,
  "A": {
   "id": "audiomos2025-track1-S006_P006",
   "system_id": "S006",
   "audio_seconds": 10.0,
   "demo_audio": "audio/09_P006/audiomos2025-track1-S006_P006.wav",
   "mos_ta": 4.0,
   "mos_oq": 3.4,
   "clap": 0.0994,
   "muq": 0.0716,
   "aqa": {
    "qwen3omni": 0.0373,
    "af": 0.2944,
    "mf": 0.3775
   },
   "mqa_mean": {
    "qwen3omni": 0.6897,
    "af": 0.309,
    "mf": 0.2129
   }
  },
  "B": {
   "id": "audiomos2025-track1-S023_P006",
   "system_id": "S023",
   "audio_seconds": 10.242,
   "demo_audio": "audio/09_P006/audiomos2025-track1-S023_P006.wav",
   "mos_ta": 3.0,
   "mos_oq": 2.4,
   "clap": 0.1083,
   "muq": 0.0752,
   "aqa": {
    "qwen3omni": 0.0046,
    "af": 0.7983,
    "mf": 0.6225
   },
   "mqa_mean": {
    "qwen3omni": 0.4844,
    "af": 0.2742,
    "mf": 0.0494
   }
  },
  "per_tag": [
   {
    "attribute": "context",
    "tag": "intimate performance",
    "qwen3omni_A": 0.9968,
    "af_A": 0.9797,
    "mf_A": 0.7549,
    "qwen3omni_B": 0.0141,
    "af_B": 0.3779,
    "mf_B": 0.0076
   },
   {
    "attribute": "instrument",
    "tag": "cello",
    "qwen3omni_A": 0.867,
    "af_A": 0.1647,
    "mf_A": 0.1067,
    "qwen3omni_B": 0.5927,
    "af_B": 0.1484,
    "mf_B": 0.0534
   },
   {
    "attribute": "instrument",
    "tag": "viola",
    "qwen3omni_A": 0.6225,
    "af_A": 0.1193,
    "mf_A": 0.0759,
    "qwen3omni_B": 0.8355,
    "af_B": 0.2022,
    "mf_B": 0.023
   },
   {
    "attribute": "instrument",
    "tag": "violin",
    "qwen3omni_A": 0.867,
    "af_A": 0.1482,
    "mf_A": 0.1067,
    "qwen3omni_B": 0.974,
    "af_B": 0.3212,
    "mf_B": 0.0676
   },
   {
    "attribute": "genre",
    "tag": "chamber music",
    "qwen3omni_A": 0.0954,
    "af_A": 0.1331,
    "mf_A": 0.0203,
    "qwen3omni_B": 0.0059,
    "af_B": 0.3213,
    "mf_B": 0.0954
   }
  ],
  "caption_segments": [
   {
    "text": "This Baroque chamber ensemble features a blend of mysterious instruments like "
   },
   {
    "text": "violin",
    "dim": "instrument",
    "tag": "violin"
   },
   {
    "text": ", "
   },
   {
    "text": "viola",
    "dim": "instrument",
    "tag": "viola"
   },
   {
    "text": ", and "
   },
   {
    "text": "cello",
    "dim": "instrument",
    "tag": "cello"
   },
   {
    "text": ", suited for an "
   },
   {
    "text": "intimate performance",
    "dim": "context",
    "tag": "intimate performance"
   },
   {
    "text": "."
   }
  ],
  "unlocated": [
   {
    "dim": "genre",
    "tag": "chamber music"
   }
  ]
 }
];
