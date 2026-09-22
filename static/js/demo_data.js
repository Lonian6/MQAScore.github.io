// Auto-generated from static/MusicEval/selected_pairs.json — do not edit by hand.
// 10 MusicEval demo pairs: overall scores tied, MQAScore per-attribute gap large.
window.MUSICEVAL_PAIRS = [
  {
    "pair": 1,
    "prompt_id": "P058",
    "caption": "This modern pop music piece features orchestral instruments with deep wind sounds and clear high notes from the strings. The song is performed with a contemporary and dynamic style.",
    "key_tag": "genre:pop",
    "key_delta": 0.9963,
    "tradeoff": true,
    "opp_tag": "instrument:wind instruments",
    "opp_delta": -0.312,
    "human_agree": true,
    "A": {
      "id": "audiomos2025-track1-S004_P058",
      "system_id": "S004",
      "audio_seconds": 30.0,
      "demo_audio": "audio/01_P058/audiomos2025-track1-S004_P058.wav",
      "mos_ta": 4.4,
      "mos_oq": 5.0,
      "clap": 0.2385,
      "muq": 0.2918,
      "aqa": {
        "qwen3omni": 0.6225,
        "af": 0.5315,
        "mf": 0.1481
      },
      "mqa_mean": {
        "qwen3omni": 0.8008,
        "af": 0.8988,
        "mf": 0.6273
      }
    },
    "B": {
      "id": "audiomos2025-track1-S031_P058",
      "system_id": "S031",
      "audio_seconds": 15.0,
      "demo_audio": "audio/01_P058/audiomos2025-track1-S031_P058.wav",
      "mos_ta": 3.6,
      "mos_oq": 3.6,
      "clap": 0.2364,
      "muq": -0.0132,
      "aqa": {
        "qwen3omni": 0.6225,
        "af": 0.6519,
        "mf": 0.0759
      },
      "mqa_mean": {
        "qwen3omni": 0.6093,
        "af": 0.4981,
        "mf": 0.4928
      }
    },
    "per_tag": [
      {
        "attribute": "genre",
        "tag": "pop",
        "qwen3omni_A": 0.9985,
        "af_A": 0.9859,
        "mf_A": 0.974,
        "qwen3omni_B": 0.0022,
        "af_B": 0.1069,
        "mf_B": 0.0004
      },
      {
        "attribute": "mood_theme",
        "tag": "contemporary",
        "qwen3omni_A": 0.9797,
        "af_A": 0.9903,
        "mf_A": 0.9399,
        "qwen3omni_B": 0.6514,
        "af_B": 0.5315,
        "mf_B": 0.9579
      },
      {
        "attribute": "instrument",
        "tag": "wind instruments",
        "qwen3omni_A": 0.0954,
        "af_A": 0.6227,
        "mf_A": 0.2227,
        "qwen3omni_B": 0.4073,
        "af_B": 0.2955,
        "mf_B": 0.1067
      },
      {
        "attribute": "instrument",
        "tag": "strings",
        "qwen3omni_A": 0.9466,
        "af_A": 0.9627,
        "mf_A": 0.0373,
        "qwen3omni_B": 0.9994,
        "af_B": 0.9941,
        "mf_B": 0.9914
      },
      {
        "attribute": "mood_theme",
        "tag": "dynamic",
        "qwen3omni_A": 0.9841,
        "af_A": 0.9325,
        "mf_A": 0.9627,
        "qwen3omni_B": 0.9859,
        "af_B": 0.5625,
        "mf_B": 0.4073
      }
    ]
  },
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
    ]
  },
  {
    "pair": 3,
    "prompt_id": "P099",
    "caption": "This a cappella piece contains double bass accompaniment, with male vocals delivering the main melody, suitable for studio recording.",
    "key_tag": "instrument:double bass",
    "key_delta": 0.9673,
    "tradeoff": true,
    "opp_tag": "vocal:male vocal",
    "opp_delta": -0.3717,
    "human_agree": true,
    "A": {
      "id": "audiomos2025-track1-S008_P099",
      "system_id": "S008",
      "audio_seconds": 30.0,
      "demo_audio": "audio/03_P099/audiomos2025-track1-S008_P099.wav",
      "mos_ta": 2.8,
      "mos_oq": 2.6,
      "clap": 0.1427,
      "muq": 0.358,
      "aqa": {
        "qwen3omni": 0.0067,
        "af": 0.2231,
        "mf": 0.0141
      },
      "mqa_mean": {
        "qwen3omni": 0.7997,
        "af": 0.3707,
        "mf": 0.2406
      }
    },
    "B": {
      "id": "audiomos2025-track1-S003_P099",
      "system_id": "S003",
      "audio_seconds": 30.0,
      "demo_audio": "audio/03_P099/audiomos2025-track1-S003_P099.wav",
      "mos_ta": 2.2,
      "mos_oq": 3.8,
      "clap": 0.1135,
      "muq": 0.2732,
      "aqa": {
        "qwen3omni": 0.0009,
        "af": 0.0852,
        "mf": 0.0293
      },
      "mqa_mean": {
        "qwen3omni": 0.5019,
        "af": 0.2083,
        "mf": 0.0616
      }
    },
    "per_tag": [
      {
        "attribute": "instrument",
        "tag": "double bass",
        "qwen3omni_A": 0.977,
        "af_A": 0.593,
        "mf_A": 0.4688,
        "qwen3omni_B": 0.0097,
        "af_B": 0.0677,
        "mf_B": 0.0041
      },
      {
        "attribute": "vocal",
        "tag": "male vocal",
        "qwen3omni_A": 0.6224,
        "af_A": 0.1483,
        "mf_A": 0.0124,
        "qwen3omni_B": 0.9941,
        "af_B": 0.349,
        "mf_B": 0.1192
      }
    ]
  },
  {
    "pair": 4,
    "prompt_id": "P034",
    "caption": "This simple and upbeat saxophone piece features smooth, consistent playing with minimal pitch variation. The song is performed with a light and airy feel, perfect for easy listening.",
    "key_tag": "mood_theme:upbeat",
    "key_delta": 0.9857,
    "tradeoff": true,
    "opp_tag": "mood_theme:easy listening",
    "opp_delta": -0.966,
    "human_agree": false,
    "A": {
      "id": "audiomos2025-track1-S008_P034",
      "system_id": "S008",
      "audio_seconds": 30.0,
      "demo_audio": "audio/04_P034/audiomos2025-track1-S008_P034.wav",
      "mos_ta": 4.6,
      "mos_oq": 3.6,
      "clap": 0.3873,
      "muq": 0.2755,
      "aqa": {
        "qwen3omni": 0.0534,
        "af": 0.0601,
        "mf": 0.1481
      },
      "mqa_mean": {
        "qwen3omni": 0.6745,
        "af": 0.6644,
        "mf": 0.5882
      }
    },
    "B": {
      "id": "audiomos2025-track1-S004_P034",
      "system_id": "S004",
      "audio_seconds": 30.0,
      "demo_audio": "audio/04_P034/audiomos2025-track1-S004_P034.wav",
      "mos_ta": 4.8,
      "mos_oq": 4.4,
      "clap": 0.3827,
      "muq": 0.2384,
      "aqa": {
        "qwen3omni": 0.026,
        "af": 0.9466,
        "mf": 0.1824
      },
      "mqa_mean": {
        "qwen3omni": 0.3397,
        "af": 0.5958,
        "mf": 0.5835
      }
    },
    "per_tag": [
      {
        "attribute": "mood_theme",
        "tag": "upbeat",
        "qwen3omni_A": 0.9933,
        "af_A": 0.7774,
        "mf_A": 0.7058,
        "qwen3omni_B": 0.0076,
        "af_B": 0.0374,
        "mf_B": 0.0022
      },
      {
        "attribute": "instrument",
        "tag": "saxophone",
        "qwen3omni_A": 0.9972,
        "af_A": 0.9466,
        "mf_A": 0.4073,
        "qwen3omni_B": 0.0124,
        "af_B": 0.7551,
        "mf_B": 0.7549
      },
      {
        "attribute": "mood_theme",
        "tag": "easy listening",
        "qwen3omni_A": 0.0331,
        "af_A": 0.2692,
        "mf_A": 0.6514,
        "qwen3omni_B": 0.9991,
        "af_B": 0.9948,
        "mf_B": 0.9933
      }
    ]
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
    ]
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
    ]
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
    ]
  },
  {
    "pair": 8,
    "prompt_id": "P045",
    "caption": "This melodious ocarina solo features a soothing background, often accompanied by other instruments. The song is performed with a harmonious and tranquil quality.",
    "key_tag": "mood_theme:tranquil",
    "key_delta": 0.8546,
    "tradeoff": true,
    "opp_tag": "instrument:background",
    "opp_delta": -0.3519,
    "human_agree": false,
    "A": {
      "id": "audiomos2025-track1-S022_P045",
      "system_id": "S022",
      "audio_seconds": 10.242,
      "demo_audio": "audio/08_P045/audiomos2025-track1-S022_P045.wav",
      "mos_ta": 2.2,
      "mos_oq": 2.6,
      "clap": 0.1655,
      "muq": 0.2808,
      "aqa": {
        "qwen3omni": 0.9627,
        "af": 0.9325,
        "mf": 0.867
      },
      "mqa_mean": {
        "qwen3omni": 0.8606,
        "af": 0.7885,
        "mf": 0.7582
      }
    },
    "B": {
      "id": "audiomos2025-track1-S003_P045",
      "system_id": "S003",
      "audio_seconds": 30.0,
      "demo_audio": "audio/08_P045/audiomos2025-track1-S003_P045.wav",
      "mos_ta": 3.4,
      "mos_oq": 4.4,
      "clap": 0.1796,
      "muq": 0.3444,
      "aqa": {
        "qwen3omni": 0.9241,
        "af": 0.8177,
        "mf": 0.3776
      },
      "mqa_mean": {
        "qwen3omni": 0.5536,
        "af": 0.743,
        "mf": 0.6176
      }
    },
    "per_tag": [
      {
        "attribute": "mood_theme",
        "tag": "tranquil",
        "qwen3omni_A": 0.9876,
        "af_A": 0.9149,
        "mf_A": 0.9399,
        "qwen3omni_B": 0.133,
        "af_B": 0.9047,
        "mf_B": 0.7982
      },
      {
        "attribute": "instrument",
        "tag": "ocarina",
        "qwen3omni_A": 0.9707,
        "af_A": 0.5931,
        "mf_A": 0.9841,
        "qwen3omni_B": 0.3487,
        "af_B": 0.2693,
        "mf_B": 0.6514
      },
      {
        "attribute": "instrument",
        "tag": "background",
        "qwen3omni_A": 0.5,
        "af_A": 0.706,
        "mf_A": 0.3776,
        "qwen3omni_B": 0.8519,
        "af_B": 0.9047,
        "mf_B": 0.2227
      },
      {
        "attribute": "mood_theme",
        "tag": "harmonious",
        "qwen3omni_A": 0.9841,
        "af_A": 0.9399,
        "mf_A": 0.7311,
        "qwen3omni_B": 0.8808,
        "af_B": 0.8933,
        "mf_B": 0.7982
      }
    ]
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
    ]
  },
  {
    "pair": 10,
    "prompt_id": "P008",
    "caption": "A grand, slow-paced Gregorian chant features a majestic style, perfect for a solemn church setting.",
    "key_tag": "mood_theme:solemn",
    "key_delta": 0.9569,
    "tradeoff": false,
    "opp_tag": "genre:chant",
    "opp_delta": -0.0056,
    "human_agree": true,
    "A": {
      "id": "audiomos2025-track1-S017_P008",
      "system_id": "S017",
      "audio_seconds": 29.44,
      "demo_audio": "audio/10_P008/audiomos2025-track1-S017_P008.wav",
      "mos_ta": 4.2,
      "mos_oq": 3.6,
      "clap": -0.0383,
      "muq": 0.1904,
      "aqa": {
        "qwen3omni": 0.0012,
        "af": 0.0421,
        "mf": 0.0017
      },
      "mqa_mean": {
        "qwen3omni": 0.2561,
        "af": 0.2032,
        "mf": 0.1565
      }
    },
    "B": {
      "id": "audiomos2025-track1-S006_P008",
      "system_id": "S006",
      "audio_seconds": 10.0,
      "demo_audio": "audio/10_P008/audiomos2025-track1-S006_P008.wav",
      "mos_ta": 3.8,
      "mos_oq": 3.6,
      "clap": -0.0641,
      "muq": 0.1151,
      "aqa": {
        "qwen3omni": 0.0002,
        "af": 0.018,
        "mf": 0.0012
      },
      "mqa_mean": {
        "qwen3omni": 0.0133,
        "af": 0.1374,
        "mf": 0.1607
      }
    },
    "per_tag": [
      {
        "attribute": "mood_theme",
        "tag": "solemn",
        "qwen3omni_A": 0.9579,
        "af_A": 0.5316,
        "mf_A": 0.4073,
        "qwen3omni_B": 0.001,
        "af_B": 0.0421,
        "mf_B": 0.0159
      },
      {
        "attribute": "context",
        "tag": "church setting",
        "qwen3omni_A": 0.0203,
        "af_A": 0.1482,
        "mf_A": 0.2018,
        "qwen3omni_B": 0.0003,
        "af_B": 0.0534,
        "mf_B": 0.5622
      },
      {
        "attribute": "genre",
        "tag": "chant",
        "qwen3omni_A": 0.0041,
        "af_A": 0.0853,
        "mf_A": 0.0028,
        "qwen3omni_B": 0.0097,
        "af_B": 0.1331,
        "mf_B": 0.0046
      },
      {
        "attribute": "vocal",
        "tag": "vocal",
        "qwen3omni_A": 0.0421,
        "af_A": 0.0475,
        "mf_A": 0.0141,
        "qwen3omni_B": 0.0421,
        "af_B": 0.3211,
        "mf_B": 0.0601
      }
    ]
  }
];
