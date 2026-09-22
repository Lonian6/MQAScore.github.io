// Auto-generated from static/sota/selected_prompts.json by build_sota_data.py.
// 20 prompts (10 MusicCaps + 10 Song Describer); 4 generators + GT per prompt.
// caption_segments carry per-dimension concept spans for inline highlighting.
window.SOTA_PROMPTS = [
 {
  "rank": 2,
  "dataset": "musiccaps",
  "id": "cOsm3r-xKEE",
  "caption_segments": [
   {
    "text": "The low quality recording features a "
   },
   {
    "text": "reggae",
    "dim": "genre",
    "tag": "reggae"
   },
   {
    "text": " song that consists of a flat "
   },
   {
    "text": "male vocal",
    "dim": "vocal",
    "tag": "male vocal"
   },
   {
    "text": ", alongside harmonizing "
   },
   {
    "text": "background male vocals",
    "dim": "vocal",
    "tag": "background male vocal"
   },
   {
    "text": ", singing over shimmering "
   },
   {
    "text": "shakers",
    "dim": "instrument",
    "tag": "shakers"
   },
   {
    "text": ", offbeat "
   },
   {
    "text": "piano",
    "dim": "instrument",
    "tag": "piano"
   },
   {
    "text": " chords, "
   },
   {
    "text": "brass",
    "dim": "instrument",
    "tag": "brass"
   },
   {
    "text": " melody, wide "
   },
   {
    "text": "toms",
    "dim": "instrument",
    "tag": "toms"
   },
   {
    "text": ", tinny echoing "
   },
   {
    "text": "snare",
    "dim": "instrument",
    "tag": "snare"
   },
   {
    "text": " and punchy "
   },
   {
    "text": "kick",
    "dim": "instrument",
    "tag": "kick"
   },
   {
    "text": " layered with it. It sounds "
   },
   {
    "text": "upbeat",
    "dim": "mood_theme",
    "tag": "upbeat"
   },
   {
    "text": " and "
   },
   {
    "text": "easygoing",
    "dim": "mood_theme",
    "tag": "easygoing"
   },
   {
    "text": "."
   }
  ],
  "unlocated": [],
  "key_tag": "vocal:male vocal",
  "key_spread": 0.969,
  "winner": "meanaudio",
  "loser": "acestep_1_5",
  "tradeoff": true,
  "clap_spread": 0.0076,
  "aqa_spread": {
   "qwen3omni": 0.8338,
   "af": 0.1219,
   "mf": 0.4021
  },
  "models": {
   "musicgen_large": {
    "demo_audio": "audio/musiccaps/02_cOsm3r-xKEE/musicgen_large.wav",
    "clap_caption": 0.4168,
    "muq_caption": 0.4869,
    "clap_pertag_mean": 0.1342,
    "muq_pertag_mean": 0.0818,
    "mqa_mean": {
     "qwen3omni": 0.5233,
     "af": 0.601,
     "mf": 0.5881
    },
    "aqascore": {
     "qwen3omni": 0.1645,
     "af": 0.9669,
     "mf": 0.9627
    }
   },
   "stable_audio_3": {
    "demo_audio": "audio/musiccaps/02_cOsm3r-xKEE/stable_audio_3.wav",
    "clap_caption": 0.4216,
    "muq_caption": 0.7306,
    "clap_pertag_mean": 0.3139,
    "muq_pertag_mean": 0.2837,
    "mqa_mean": {
     "qwen3omni": 0.8096,
     "af": 0.7176,
     "mf": 0.5871
    },
    "aqascore": {
     "qwen3omni": 0.9954,
     "af": 0.9797,
     "mf": 0.9707
    }
   },
   "meanaudio": {
    "demo_audio": "audio/musiccaps/02_cOsm3r-xKEE/meanaudio.wav",
    "clap_caption": 0.4244,
    "muq_caption": 0.5911,
    "clap_pertag_mean": 0.1249,
    "muq_pertag_mean": 0.2329,
    "mqa_mean": {
     "qwen3omni": 0.7628,
     "af": 0.7606,
     "mf": 0.8105
    },
    "aqascore": {
     "qwen3omni": 0.9983,
     "af": 0.989,
     "mf": 0.9948
    }
   },
   "acestep_1_5": {
    "demo_audio": "audio/musiccaps/02_cOsm3r-xKEE/acestep_1_5.wav",
    "clap_caption": 0.4194,
    "muq_caption": 0.2551,
    "clap_pertag_mean": 0.2538,
    "muq_pertag_mean": 0.0475,
    "mqa_mean": {
     "qwen3omni": 0.4895,
     "af": 0.4866,
     "mf": 0.398
    },
    "aqascore": {
     "qwen3omni": 0.1824,
     "af": 0.8671,
     "mf": 0.5927
    }
   },
   "GT": {
    "demo_audio": "audio/musiccaps/02_cOsm3r-xKEE/GT.wav",
    "clap_caption": 0.3546,
    "muq_caption": 0.629,
    "clap_pertag_mean": 0.1307,
    "muq_pertag_mean": 0.2575,
    "mqa_mean": {
     "qwen3omni": 0.7984,
     "af": 0.8055,
     "mf": 0.706
    },
    "aqascore": {
     "qwen3omni": 0.9987,
     "af": 0.9924,
     "mf": 0.9859
    }
   }
  },
  "per_tag": [
   {
    "attribute": "genre",
    "tag": "reggae",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.9325,
      "af": 0.9149,
      "mf": 0.989
     },
     "stable_audio_3": {
      "qwen3omni": 0.9924,
      "af": 0.6793,
      "mf": 0.9399
     },
     "meanaudio": {
      "qwen3omni": 0.9859,
      "af": 0.989,
      "mf": 0.9954
     },
     "acestep_1_5": {
      "qwen3omni": 0.133,
      "af": 0.1482,
      "mf": 0.0601
     },
     "GT": {
      "qwen3omni": 0.9998,
      "af": 0.9959,
      "mf": 0.9924
     }
    }
   },
   {
    "attribute": "instrument",
    "tag": "brass",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.023,
      "af": 0.321,
      "mf": 0.0293
     },
     "stable_audio_3": {
      "qwen3omni": 0.8808,
      "af": 0.5624,
      "mf": 0.023
     },
     "meanaudio": {
      "qwen3omni": 0.3208,
      "af": 0.1193,
      "mf": 0.5312
     },
     "acestep_1_5": {
      "qwen3omni": 0.0851,
      "af": 0.4077,
      "mf": 0.0331
     },
     "GT": {
      "qwen3omni": 0.852,
      "af": 0.5624,
      "mf": 0.1824
     }
    }
   },
   {
    "attribute": "instrument",
    "tag": "kick",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.9325,
      "af": 0.9241,
      "mf": 0.9903
     },
     "stable_audio_3": {
      "qwen3omni": 0.9241,
      "af": 0.8933,
      "mf": 0.9876
     },
     "meanaudio": {
      "qwen3omni": 0.9241,
      "af": 0.8933,
      "mf": 0.9948
     },
     "acestep_1_5": {
      "qwen3omni": 0.9325,
      "af": 0.7983,
      "mf": 0.8808
     },
     "GT": {
      "qwen3omni": 0.8176,
      "af": 0.9399,
      "mf": 0.9978
     }
    }
   },
   {
    "attribute": "instrument",
    "tag": "piano",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.023,
      "af": 0.1482,
      "mf": 0.2227
     },
     "stable_audio_3": {
      "qwen3omni": 0.0203,
      "af": 0.2453,
      "mf": 0.0676
     },
     "meanaudio": {
      "qwen3omni": 0.0331,
      "af": 0.1482,
      "mf": 0.0124
     },
     "acestep_1_5": {
      "qwen3omni": 0.1645,
      "af": 0.5624,
      "mf": 0.4378
     },
     "GT": {
      "qwen3omni": 0.0534,
      "af": 0.1647,
      "mf": 0.0759
     }
    }
   },
   {
    "attribute": "instrument",
    "tag": "shakers",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.989,
      "af": 0.8355,
      "mf": 0.977
     },
     "stable_audio_3": {
      "qwen3omni": 0.6514,
      "af": 0.6515,
      "mf": 0.3487
     },
     "meanaudio": {
      "qwen3omni": 0.8933,
      "af": 0.9149,
      "mf": 0.867
     },
     "acestep_1_5": {
      "qwen3omni": 0.9876,
      "af": 0.755,
      "mf": 0.5927
     },
     "GT": {
      "qwen3omni": 0.9466,
      "af": 0.8176,
      "mf": 0.7773
     }
    }
   },
   {
    "attribute": "instrument",
    "tag": "snare",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.6225,
      "af": 0.6226,
      "mf": 0.5312
     },
     "stable_audio_3": {
      "qwen3omni": 0.9707,
      "af": 0.7773,
      "mf": 0.7982
     },
     "meanaudio": {
      "qwen3omni": 0.7058,
      "af": 0.9526,
      "mf": 0.9466
     },
     "acestep_1_5": {
      "qwen3omni": 0.8355,
      "af": 0.4691,
      "mf": 0.4073
     },
     "GT": {
      "qwen3omni": 0.8355,
      "af": 0.9149,
      "mf": 0.9914
     }
    }
   },
   {
    "attribute": "instrument",
    "tag": "toms",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.2451,
      "af": 0.5928,
      "mf": 0.8176
     },
     "stable_audio_3": {
      "qwen3omni": 0.5927,
      "af": 0.5624,
      "mf": 0.1824
     },
     "meanaudio": {
      "qwen3omni": 0.6225,
      "af": 0.9149,
      "mf": 0.9841
     },
     "acestep_1_5": {
      "qwen3omni": 0.2942,
      "af": 0.5003,
      "mf": 0.0759
     },
     "GT": {
      "qwen3omni": 0.5,
      "af": 0.8176,
      "mf": 0.4378
     }
    }
   },
   {
    "attribute": "mood_theme",
    "tag": "easygoing",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.9997,
      "af": 0.9859,
      "mf": 0.9797
     },
     "stable_audio_3": {
      "qwen3omni": 0.9992,
      "af": 0.982,
      "mf": 0.9941
     },
     "meanaudio": {
      "qwen3omni": 0.9903,
      "af": 0.8933,
      "mf": 0.9968
     },
     "acestep_1_5": {
      "qwen3omni": 0.9996,
      "af": 0.9797,
      "mf": 0.977
     },
     "GT": {
      "qwen3omni": 0.9983,
      "af": 0.9903,
      "mf": 0.9669
     }
    }
   },
   {
    "attribute": "mood_theme",
    "tag": "upbeat",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.9526,
      "af": 0.9242,
      "mf": 0.9241
     },
     "stable_audio_3": {
      "qwen3omni": 0.9978,
      "af": 0.9669,
      "mf": 0.9924
     },
     "meanaudio": {
      "qwen3omni": 0.9981,
      "af": 0.9841,
      "mf": 0.9959
     },
     "acestep_1_5": {
      "qwen3omni": 0.9324,
      "af": 0.5314,
      "mf": 0.867
     },
     "GT": {
      "qwen3omni": 0.9627,
      "af": 0.9579,
      "mf": 0.9707
     }
    }
   },
   {
    "attribute": "vocal",
    "tag": "background male vocal",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.0331,
      "af": 0.2229,
      "mf": 0.0046
     },
     "stable_audio_3": {
      "qwen3omni": 0.9526,
      "af": 0.6794,
      "mf": 0.5622
     },
     "meanaudio": {
      "qwen3omni": 0.9466,
      "af": 0.5625,
      "mf": 0.5927
     },
     "acestep_1_5": {
      "qwen3omni": 0.018,
      "af": 0.1331,
      "mf": 0.0421
     },
     "GT": {
      "qwen3omni": 0.8176,
      "af": 0.7059,
      "mf": 0.3775
     }
    }
   },
   {
    "attribute": "vocal",
    "tag": "male vocal",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.0036,
      "af": 0.1193,
      "mf": 0.0036
     },
     "stable_audio_3": {
      "qwen3omni": 0.9241,
      "af": 0.8933,
      "mf": 0.5622
     },
     "meanaudio": {
      "qwen3omni": 0.9707,
      "af": 0.9941,
      "mf": 0.9988
     },
     "acestep_1_5": {
      "qwen3omni": 0.0017,
      "af": 0.0676,
      "mf": 0.0046
     },
     "GT": {
      "qwen3omni": 0.9987,
      "af": 0.9933,
      "mf": 0.9954
     }
    }
   }
  ]
 },
 {
  "rank": 4,
  "dataset": "musiccaps",
  "id": "bm5IT7e2vvI",
  "caption_segments": [
   {
    "text": "This is a Mexican "
   },
   {
    "text": "folk music",
    "dim": "genre",
    "tag": "folk music"
   },
   {
    "text": " piece. The main theme is played by a "
   },
   {
    "text": "marimba",
    "dim": "instrument",
    "tag": "marimba"
   },
   {
    "text": ". There is a "
   },
   {
    "text": "bass guitar",
    "dim": "instrument",
    "tag": "bass guitar"
   },
   {
    "text": " in the background. The "
   },
   {
    "text": "acoustic drums",
    "dim": "instrument",
    "tag": "acoustic drums"
   },
   {
    "text": " and the "
   },
   {
    "text": "latin percussion",
    "dim": "instrument",
    "tag": "latin percussion"
   },
   {
    "text": " provide the rhythmic background for the piece. It has a very "
   },
   {
    "text": "playful",
    "dim": "mood_theme",
    "tag": "playful"
   },
   {
    "text": " atmosphere. The music could definitely be used in a "
   },
   {
    "text": "children's movie/TV show",
    "dim": "context",
    "tag": "children's movie/TV show"
   },
   {
    "text": " or an "
   },
   {
    "text": "advertisement targeted at kids",
    "dim": "context",
    "tag": "advertisement targeted at kids"
   },
   {
    "text": "."
   }
  ],
  "unlocated": [],
  "key_tag": "genre:folk music",
  "key_spread": 0.9342,
  "winner": "musicgen_large",
  "loser": "acestep_1_5",
  "tradeoff": true,
  "clap_spread": 0.0304,
  "aqa_spread": {
   "qwen3omni": 0.1059,
   "af": 0.773,
   "mf": 0.2005
  },
  "models": {
   "musicgen_large": {
    "demo_audio": "audio/musiccaps/04_bm5IT7e2vvI/musicgen_large.wav",
    "clap_caption": 0.4144,
    "muq_caption": 0.5615,
    "clap_pertag_mean": 0.2765,
    "muq_pertag_mean": 0.1274,
    "mqa_mean": {
     "qwen3omni": 0.7097,
     "af": 0.7162,
     "mf": 0.6115
    },
    "aqascore": {
     "qwen3omni": 0.852,
     "af": 0.9399,
     "mf": 0.989
    }
   },
   "stable_audio_3": {
    "demo_audio": "audio/musiccaps/04_bm5IT7e2vvI/stable_audio_3.wav",
    "clap_caption": 0.384,
    "muq_caption": 0.5762,
    "clap_pertag_mean": 0.2984,
    "muq_pertag_mean": 0.179,
    "mqa_mean": {
     "qwen3omni": 0.6334,
     "af": 0.6676,
     "mf": 0.6478
    },
    "aqascore": {
     "qwen3omni": 0.9399,
     "af": 0.5929,
     "mf": 0.8355
    }
   },
   "meanaudio": {
    "demo_audio": "audio/musiccaps/04_bm5IT7e2vvI/meanaudio.wav",
    "clap_caption": 0.3987,
    "muq_caption": 0.2552,
    "clap_pertag_mean": 0.201,
    "muq_pertag_mean": 0.2125,
    "mqa_mean": {
     "qwen3omni": 0.6946,
     "af": 0.6231,
     "mf": 0.9002
    },
    "aqascore": {
     "qwen3omni": 0.9579,
     "af": 0.9959,
     "mf": 0.9987
    }
   },
   "acestep_1_5": {
    "demo_audio": "audio/musiccaps/04_bm5IT7e2vvI/acestep_1_5.wav",
    "clap_caption": 0.4072,
    "muq_caption": 0.3179,
    "clap_pertag_mean": 0.2939,
    "muq_pertag_mean": 0.1713,
    "mqa_mean": {
     "qwen3omni": 0.6059,
     "af": 0.5803,
     "mf": 0.6223
    },
    "aqascore": {
     "qwen3omni": 0.9241,
     "af": 0.2229,
     "mf": 0.7982
    }
   },
   "GT": {
    "demo_audio": "audio/musiccaps/04_bm5IT7e2vvI/GT.wav",
    "clap_caption": 0.2738,
    "muq_caption": 0.1945,
    "clap_pertag_mean": 0.0905,
    "muq_pertag_mean": 0.1025,
    "mqa_mean": {
     "qwen3omni": 0.6967,
     "af": 0.7235,
     "mf": 0.7204
    },
    "aqascore": {
     "qwen3omni": 0.9797,
     "af": 0.9797,
     "mf": 0.9985
    }
   }
  },
  "per_tag": [
   {
    "attribute": "context",
    "tag": "advertisement targeted at kids",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.982,
      "af": 0.7311,
      "mf": 0.974
     },
     "stable_audio_3": {
      "qwen3omni": 0.9997,
      "af": 0.9324,
      "mf": 0.9933
     },
     "meanaudio": {
      "qwen3omni": 0.974,
      "af": 0.2019,
      "mf": 0.6514
     },
     "acestep_1_5": {
      "qwen3omni": 0.9996,
      "af": 0.9627,
      "mf": 0.9941
     },
     "GT": {
      "qwen3omni": 0.5622,
      "af": 0.7059,
      "mf": 0.9903
     }
    }
   },
   {
    "attribute": "context",
    "tag": "children's movie/TV show",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.9948,
      "af": 0.8176,
      "mf": 0.9859
     },
     "stable_audio_3": {
      "qwen3omni": 0.9996,
      "af": 0.974,
      "mf": 0.9972
     },
     "meanaudio": {
      "qwen3omni": 0.9876,
      "af": 0.5928,
      "mf": 0.9526
     },
     "acestep_1_5": {
      "qwen3omni": 0.9994,
      "af": 0.977,
      "mf": 0.9964
     },
     "GT": {
      "qwen3omni": 0.7773,
      "af": 0.8176,
      "mf": 0.9933
     }
    }
   },
   {
    "attribute": "genre",
    "tag": "folk music",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.9466,
      "af": 0.469,
      "mf": 0.5312
     },
     "stable_audio_3": {
      "qwen3omni": 0.018,
      "af": 0.2229,
      "mf": 0.0601
     },
     "meanaudio": {
      "qwen3omni": 0.5927,
      "af": 0.5314,
      "mf": 0.7982
     },
     "acestep_1_5": {
      "qwen3omni": 0.0124,
      "af": 0.1482,
      "mf": 0.3487
     },
     "GT": {
      "qwen3omni": 0.0086,
      "af": 0.4076,
      "mf": 0.0331
     }
    }
   },
   {
    "attribute": "instrument",
    "tag": "acoustic drums",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.269,
      "af": 0.7059,
      "mf": 0.2451
     },
     "stable_audio_3": {
      "qwen3omni": 0.6225,
      "af": 0.1827,
      "mf": 0.1824
     },
     "meanaudio": {
      "qwen3omni": 0.0534,
      "af": 0.4691,
      "mf": 0.9579
     },
     "acestep_1_5": {
      "qwen3omni": 0.0006,
      "af": 0.1647,
      "mf": 0.0534
     },
     "GT": {
      "qwen3omni": 0.9903,
      "af": 0.7312,
      "mf": 0.7773
     }
    }
   },
   {
    "attribute": "instrument",
    "tag": "bass guitar",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.0954,
      "af": 0.755,
      "mf": 0.1645
     },
     "stable_audio_3": {
      "qwen3omni": 0.0331,
      "af": 0.1647,
      "mf": 0.0954
     },
     "meanaudio": {
      "qwen3omni": 0.0046,
      "af": 0.2945,
      "mf": 0.9325
     },
     "acestep_1_5": {
      "qwen3omni": 0.0097,
      "af": 0.1068,
      "mf": 0.0421
     },
     "GT": {
      "qwen3omni": 0.2942,
      "af": 0.1647,
      "mf": 0.026
     }
    }
   },
   {
    "attribute": "instrument",
    "tag": "latin percussion",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.9241,
      "af": 0.9627,
      "mf": 0.9876
     },
     "stable_audio_3": {
      "qwen3omni": 0.4073,
      "af": 0.9241,
      "mf": 0.9046
     },
     "meanaudio": {
      "qwen3omni": 0.9988,
      "af": 0.9975,
      "mf": 0.9995
     },
     "acestep_1_5": {
      "qwen3omni": 0.8355,
      "af": 0.5003,
      "mf": 0.7311
     },
     "GT": {
      "qwen3omni": 0.989,
      "af": 0.9876,
      "mf": 0.9707
     }
    }
   },
   {
    "attribute": "instrument",
    "tag": "marimba",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.4688,
      "af": 0.3211,
      "mf": 0.0331
     },
     "stable_audio_3": {
      "qwen3omni": 0.9876,
      "af": 0.9525,
      "mf": 0.9526
     },
     "meanaudio": {
      "qwen3omni": 0.9466,
      "af": 0.9579,
      "mf": 0.9466
     },
     "acestep_1_5": {
      "qwen3omni": 0.9903,
      "af": 0.7983,
      "mf": 0.8176
     },
     "GT": {
      "qwen3omni": 0.9526,
      "af": 0.9876,
      "mf": 0.977
     }
    }
   },
   {
    "attribute": "mood_theme",
    "tag": "playful",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.9972,
      "af": 0.9669,
      "mf": 0.9707
     },
     "stable_audio_3": {
      "qwen3omni": 0.9998,
      "af": 0.9876,
      "mf": 0.9968
     },
     "meanaudio": {
      "qwen3omni": 0.9992,
      "af": 0.9399,
      "mf": 0.9627
     },
     "acestep_1_5": {
      "qwen3omni": 0.9999,
      "af": 0.9841,
      "mf": 0.9954
     },
     "GT": {
      "qwen3omni": 0.9996,
      "af": 0.9859,
      "mf": 0.9954
     }
    }
   }
  ]
 },
 {
  "rank": 3,
  "dataset": "musiccaps",
  "id": "D8-x1T8M4gk",
  "caption_segments": [
   {
    "text": "This is a "
   },
   {
    "text": "rock",
    "dim": "genre",
    "tag": "rock"
   },
   {
    "text": " and roll piece used as an accompaniment for a dance. There is a "
   },
   {
    "text": "male vocal",
    "dim": "vocal",
    "tag": "male vocal"
   },
   {
    "text": " singing at a low-to-medium pitch. The main melody is being played by an "
   },
   {
    "text": "electric guitar",
    "dim": "instrument",
    "tag": "electric guitar"
   },
   {
    "text": " while the "
   },
   {
    "text": "bass guitar",
    "dim": "instrument",
    "tag": "bass guitar"
   },
   {
    "text": " is repeating a bass line with a groovy pattern in the background. The "
   },
   {
    "text": "acoustic drums",
    "dim": "instrument",
    "tag": "acoustic drums"
   },
   {
    "text": " are playing an upbeat 4/4 "
   },
   {
    "text": "rock",
    "dim": "genre",
    "tag": "rock"
   },
   {
    "text": " and roll beat. There is a "
   },
   {
    "text": "raw",
    "dim": "mood_theme",
    "tag": "raw"
   },
   {
    "text": " feeling to it. The tune is "
   },
   {
    "text": "catchy",
    "dim": "mood_theme",
    "tag": "catchy"
   },
   {
    "text": ". This piece could be playing in the background of a "
   },
   {
    "text": "sports bar",
    "dim": "context",
    "tag": "sports bar"
   },
   {
    "text": " or a "
   },
   {
    "text": "rock bar",
    "dim": "context",
    "tag": "rock bar"
   },
   {
    "text": ". It could also work well at "
   },
   {
    "text": "sports venues",
    "dim": "context",
    "tag": "sports venues"
   },
   {
    "text": "."
   }
  ],
  "unlocated": [],
  "key_tag": "vocal:male vocal",
  "key_spread": 0.989,
  "winner": "meanaudio",
  "loser": "stable_audio_3",
  "tradeoff": true,
  "clap_spread": 0.0102,
  "aqa_spread": {
   "qwen3omni": 0.9878,
   "af": 0.4313,
   "mf": 0.1802
  },
  "models": {
   "musicgen_large": {
    "demo_audio": "audio/musiccaps/03_D8-x1T8M4gk/musicgen_large.wav",
    "clap_caption": 0.3607,
    "muq_caption": 0.3841,
    "clap_pertag_mean": 0.2005,
    "muq_pertag_mean": 0.1532,
    "mqa_mean": {
     "qwen3omni": 0.8489,
     "af": 0.8409,
     "mf": 0.8298
    },
    "aqascore": {
     "qwen3omni": 0.0293,
     "af": 0.9627,
     "mf": 0.977
    }
   },
   "stable_audio_3": {
    "demo_audio": "audio/musiccaps/03_D8-x1T8M4gk/stable_audio_3.wav",
    "clap_caption": 0.37,
    "muq_caption": 0.5658,
    "clap_pertag_mean": 0.2863,
    "muq_pertag_mean": 0.2379,
    "mqa_mean": {
     "qwen3omni": 0.8791,
     "af": 0.828,
     "mf": 0.7777
    },
    "aqascore": {
     "qwen3omni": 0.0203,
     "af": 0.9627,
     "mf": 0.9627
    }
   },
   "meanaudio": {
    "demo_audio": "audio/musiccaps/03_D8-x1T8M4gk/meanaudio.wav",
    "clap_caption": 0.3598,
    "muq_caption": 0.3135,
    "clap_pertag_mean": 0.1948,
    "muq_pertag_mean": 0.2901,
    "mqa_mean": {
     "qwen3omni": 0.985,
     "af": 0.8942,
     "mf": 0.769
    },
    "aqascore": {
     "qwen3omni": 0.9954,
     "af": 0.5928,
     "mf": 0.9978
    }
   },
   "acestep_1_5": {
    "demo_audio": "audio/musiccaps/03_D8-x1T8M4gk/acestep_1_5.wav",
    "clap_caption": 0.3602,
    "muq_caption": 0.2689,
    "clap_pertag_mean": 0.3015,
    "muq_pertag_mean": 0.1376,
    "mqa_mean": {
     "qwen3omni": 0.5695,
     "af": 0.4926,
     "mf": 0.4692
    },
    "aqascore": {
     "qwen3omni": 0.0076,
     "af": 0.5314,
     "mf": 0.8176
    }
   },
   "GT": {
    "demo_audio": "audio/musiccaps/03_D8-x1T8M4gk/GT.wav",
    "clap_caption": 0.2614,
    "muq_caption": 0.3448,
    "clap_pertag_mean": 0.2276,
    "muq_pertag_mean": 0.2633,
    "mqa_mean": {
     "qwen3omni": 0.9593,
     "af": 0.8749,
     "mf": 0.7802
    },
    "aqascore": {
     "qwen3omni": 0.9972,
     "af": 0.9841,
     "mf": 0.9988
    }
   }
  },
  "per_tag": [
   {
    "attribute": "context",
    "tag": "rock bar",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.9983,
      "af": 0.9876,
      "mf": 0.9924
     },
     "stable_audio_3": {
      "qwen3omni": 0.9998,
      "af": 0.989,
      "mf": 0.9914
     },
     "meanaudio": {
      "qwen3omni": 0.9997,
      "af": 0.9797,
      "mf": 0.9985
     },
     "acestep_1_5": {
      "qwen3omni": 0.4073,
      "af": 0.8355,
      "mf": 0.7982
     },
     "GT": {
      "qwen3omni": 0.9948,
      "af": 0.9841,
      "mf": 0.989
     }
    }
   },
   {
    "attribute": "context",
    "tag": "sports bar",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.977,
      "af": 0.9242,
      "mf": 0.9914
     },
     "stable_audio_3": {
      "qwen3omni": 0.9983,
      "af": 0.9047,
      "mf": 0.9903
     },
     "meanaudio": {
      "qwen3omni": 0.9959,
      "af": 0.8808,
      "mf": 0.9992
     },
     "acestep_1_5": {
      "qwen3omni": 0.9707,
      "af": 0.6794,
      "mf": 0.9399
     },
     "GT": {
      "qwen3omni": 0.9859,
      "af": 0.8808,
      "mf": 0.9959
     }
    }
   },
   {
    "attribute": "context",
    "tag": "sports venues",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.867,
      "af": 0.9466,
      "mf": 0.9579
     },
     "stable_audio_3": {
      "qwen3omni": 0.9959,
      "af": 0.9047,
      "mf": 0.9466
     },
     "meanaudio": {
      "qwen3omni": 0.9933,
      "af": 0.8671,
      "mf": 0.9978
     },
     "acestep_1_5": {
      "qwen3omni": 0.8176,
      "af": 0.5002,
      "mf": 0.6792
     },
     "GT": {
      "qwen3omni": 0.8933,
      "af": 0.8671,
      "mf": 0.9526
     }
    }
   },
   {
    "attribute": "genre",
    "tag": "rock",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.9959,
      "af": 0.9526,
      "mf": 0.9841
     },
     "stable_audio_3": {
      "qwen3omni": 0.9998,
      "af": 0.9627,
      "mf": 0.9047
     },
     "meanaudio": {
      "qwen3omni": 0.9993,
      "af": 0.9526,
      "mf": 0.9149
     },
     "acestep_1_5": {
      "qwen3omni": 0.0159,
      "af": 0.1331,
      "mf": 0.0534
     },
     "GT": {
      "qwen3omni": 0.9526,
      "af": 0.8356,
      "mf": 0.8933
     }
    }
   },
   {
    "attribute": "instrument",
    "tag": "acoustic drums",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.9707,
      "af": 0.9241,
      "mf": 0.989
     },
     "stable_audio_3": {
      "qwen3omni": 0.8176,
      "af": 0.7312,
      "mf": 0.0954
     },
     "meanaudio": {
      "qwen3omni": 0.9325,
      "af": 0.9797,
      "mf": 0.977
     },
     "acestep_1_5": {
      "qwen3omni": 0.1067,
      "af": 0.2454,
      "mf": 0.0331
     },
     "GT": {
      "qwen3omni": 0.9707,
      "af": 0.9399,
      "mf": 0.8355
     }
    }
   },
   {
    "attribute": "instrument",
    "tag": "bass guitar",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.9047,
      "af": 0.7774,
      "mf": 0.6792
     },
     "stable_audio_3": {
      "qwen3omni": 0.982,
      "af": 0.852,
      "mf": 0.9325
     },
     "meanaudio": {
      "qwen3omni": 0.9876,
      "af": 0.9466,
      "mf": 0.1824
     },
     "acestep_1_5": {
      "qwen3omni": 0.989,
      "af": 0.6793,
      "mf": 0.7311
     },
     "GT": {
      "qwen3omni": 0.982,
      "af": 0.8355,
      "mf": 0.2227
     }
    }
   },
   {
    "attribute": "instrument",
    "tag": "electric guitar",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.9988,
      "af": 0.8808,
      "mf": 0.982
     },
     "stable_audio_3": {
      "qwen3omni": 0.9997,
      "af": 0.9526,
      "mf": 0.9797
     },
     "meanaudio": {
      "qwen3omni": 0.9997,
      "af": 0.9707,
      "mf": 0.9993
     },
     "acestep_1_5": {
      "qwen3omni": 0.4378,
      "af": 0.2945,
      "mf": 0.0676
     },
     "GT": {
      "qwen3omni": 0.852,
      "af": 0.5002,
      "mf": 0.2942
     }
    }
   },
   {
    "attribute": "mood_theme",
    "tag": "catchy",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.7773,
      "af": 0.9627,
      "mf": 0.8355
     },
     "stable_audio_3": {
      "qwen3omni": 0.9981,
      "af": 0.9707,
      "mf": 0.9627
     },
     "meanaudio": {
      "qwen3omni": 0.9526,
      "af": 0.9627,
      "mf": 0.3776
     },
     "acestep_1_5": {
      "qwen3omni": 0.9991,
      "af": 0.9669,
      "mf": 0.974
     },
     "GT": {
      "qwen3omni": 0.9968,
      "af": 0.9903,
      "mf": 0.982
     }
    }
   },
   {
    "attribute": "mood_theme",
    "tag": "raw",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.9954,
      "af": 0.9579,
      "mf": 0.8808
     },
     "stable_audio_3": {
      "qwen3omni": 0.9987,
      "af": 0.9526,
      "mf": 0.9579
     },
     "meanaudio": {
      "qwen3omni": 0.9988,
      "af": 0.4075,
      "mf": 0.2451
     },
     "acestep_1_5": {
      "qwen3omni": 0.9466,
      "af": 0.5314,
      "mf": 0.4073
     },
     "GT": {
      "qwen3omni": 0.9669,
      "af": 0.9241,
      "mf": 0.6792
     }
    }
   },
   {
    "attribute": "vocal",
    "tag": "male vocal",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.0041,
      "af": 0.0954,
      "mf": 0.0059
     },
     "stable_audio_3": {
      "qwen3omni": 0.0013,
      "af": 0.0601,
      "mf": 0.0159
     },
     "meanaudio": {
      "qwen3omni": 0.9903,
      "af": 0.9948,
      "mf": 0.9978
     },
     "acestep_1_5": {
      "qwen3omni": 0.0041,
      "af": 0.0601,
      "mf": 0.0086
     },
     "GT": {
      "qwen3omni": 0.9978,
      "af": 0.9914,
      "mf": 0.9579
     }
    }
   }
  ]
 },
 {
  "rank": 7,
  "dataset": "musiccaps",
  "id": "y6iMm7Pltq0",
  "caption_segments": [
   {
    "text": "Someone is playing a simple repeating melody on a "
   },
   {
    "text": "zitar",
    "dim": "instrument",
    "tag": "zitar"
   },
   {
    "text": " along with a small "
   },
   {
    "text": "harp",
    "dim": "instrument",
    "tag": "harp"
   },
   {
    "text": ". A "
   },
   {
    "text": "flute",
    "dim": "instrument",
    "tag": "flute"
   },
   {
    "text": " is playing the same melody in the higher mid-range. A "
   },
   {
    "text": "male voice",
    "dim": "vocal",
    "tag": "male voice"
   },
   {
    "text": " is singing along. Someone is playing "
   },
   {
    "text": "tabla",
    "dim": "instrument",
    "tag": "tabla"
   },
   {
    "text": ". This song sounds "
   },
   {
    "text": "calm",
    "dim": "mood_theme",
    "tag": "calm"
   },
   {
    "text": " and "
   },
   {
    "text": "repetitive",
    "dim": "mood_theme",
    "tag": "repetitive"
   },
   {
    "text": ". This song may be playing live at a "
   },
   {
    "text": "local performance place",
    "dim": "context",
    "tag": "local performance place"
   },
   {
    "text": "."
   }
  ],
  "unlocated": [],
  "key_tag": "mood_theme:calm",
  "key_spread": 0.9873,
  "winner": "musicgen_large",
  "loser": "meanaudio",
  "tradeoff": true,
  "clap_spread": 0.0337,
  "aqa_spread": {
   "qwen3omni": 0.9184,
   "af": 0.3255,
   "mf": 0.0309
  },
  "models": {
   "musicgen_large": {
    "demo_audio": "audio/musiccaps/07_y6iMm7Pltq0/musicgen_large.wav",
    "clap_caption": 0.3343,
    "muq_caption": 0.2645,
    "clap_pertag_mean": 0.1867,
    "muq_pertag_mean": 0.1113,
    "mqa_mean": {
     "qwen3omni": 0.6569,
     "af": 0.628,
     "mf": 0.3878
    },
    "aqascore": {
     "qwen3omni": 0.0141,
     "af": 0.8671,
     "mf": 0.9669
    }
   },
   "stable_audio_3": {
    "demo_audio": "audio/musiccaps/07_y6iMm7Pltq0/stable_audio_3.wav",
    "clap_caption": 0.3184,
    "muq_caption": 0.297,
    "clap_pertag_mean": 0.2233,
    "muq_pertag_mean": 0.2202,
    "mqa_mean": {
     "qwen3omni": 0.642,
     "af": 0.5259,
     "mf": 0.5185
    },
    "aqascore": {
     "qwen3omni": 0.133,
     "af": 0.9149,
     "mf": 0.9948
    }
   },
   "meanaudio": {
    "demo_audio": "audio/musiccaps/07_y6iMm7Pltq0/meanaudio.wav",
    "clap_caption": 0.3382,
    "muq_caption": 0.3581,
    "clap_pertag_mean": 0.1616,
    "muq_pertag_mean": 0.3055,
    "mqa_mean": {
     "qwen3omni": 0.6306,
     "af": 0.8024,
     "mf": 0.6793
    },
    "aqascore": {
     "qwen3omni": 0.9325,
     "af": 0.977,
     "mf": 0.9978
    }
   },
   "acestep_1_5": {
    "demo_audio": "audio/musiccaps/07_y6iMm7Pltq0/acestep_1_5.wav",
    "clap_caption": 0.3045,
    "muq_caption": 0.1104,
    "clap_pertag_mean": 0.2428,
    "muq_pertag_mean": 0.1582,
    "mqa_mean": {
     "qwen3omni": 0.5041,
     "af": 0.4274,
     "mf": 0.3355
    },
    "aqascore": {
     "qwen3omni": 0.0331,
     "af": 0.6515,
     "mf": 0.9669
    }
   },
   "GT": {
    "demo_audio": "audio/musiccaps/07_y6iMm7Pltq0/GT.wav",
    "clap_caption": 0.0708,
    "muq_caption": 0.4338,
    "clap_pertag_mean": 0.0615,
    "muq_pertag_mean": 0.3196,
    "mqa_mean": {
     "qwen3omni": 0.7482,
     "af": 0.6944,
     "mf": 0.5513
    },
    "aqascore": {
     "qwen3omni": 0.9978,
     "af": 0.8933,
     "mf": 0.9972
    }
   }
  },
  "per_tag": [
   {
    "attribute": "context",
    "tag": "local performance place",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.9933,
      "af": 0.9627,
      "mf": 0.9707
     },
     "stable_audio_3": {
      "qwen3omni": 0.9941,
      "af": 0.9242,
      "mf": 0.977
     },
     "meanaudio": {
      "qwen3omni": 0.999,
      "af": 0.982,
      "mf": 0.9933
     },
     "acestep_1_5": {
      "qwen3omni": 0.977,
      "af": 0.9047,
      "mf": 0.9579
     },
     "GT": {
      "qwen3omni": 0.9978,
      "af": 0.9579,
      "mf": 0.9903
     }
    }
   },
   {
    "attribute": "instrument",
    "tag": "flute",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.9978,
      "af": 0.8671,
      "mf": 0.0534
     },
     "stable_audio_3": {
      "qwen3omni": 0.9797,
      "af": 0.0852,
      "mf": 0.0076
     },
     "meanaudio": {
      "qwen3omni": 0.9903,
      "af": 0.9325,
      "mf": 0.5622
     },
     "acestep_1_5": {
      "qwen3omni": 0.2942,
      "af": 0.1482,
      "mf": 0.0159
     },
     "GT": {
      "qwen3omni": 0.8355,
      "af": 0.5929,
      "mf": 0.018
     }
    }
   },
   {
    "attribute": "instrument",
    "tag": "harp",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.9149,
      "af": 0.7983,
      "mf": 0.1481
     },
     "stable_audio_3": {
      "qwen3omni": 0.0474,
      "af": 0.0852,
      "mf": 0.0159
     },
     "meanaudio": {
      "qwen3omni": 0.0046,
      "af": 0.2945,
      "mf": 0.0159
     },
     "acestep_1_5": {
      "qwen3omni": 0.5,
      "af": 0.5624,
      "mf": 0.1824
     },
     "GT": {
      "qwen3omni": 0.1824,
      "af": 0.4076,
      "mf": 0.026
     }
    }
   },
   {
    "attribute": "instrument",
    "tag": "tabla",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.1645,
      "af": 0.1193,
      "mf": 0.0059
     },
     "stable_audio_3": {
      "qwen3omni": 0.4378,
      "af": 0.6229,
      "mf": 0.9859
     },
     "meanaudio": {
      "qwen3omni": 0.989,
      "af": 0.9948,
      "mf": 0.9994
     },
     "acestep_1_5": {
      "qwen3omni": 0.4688,
      "af": 0.223,
      "mf": 0.0203
     },
     "GT": {
      "qwen3omni": 0.974,
      "af": 0.6794,
      "mf": 0.9241
     }
    }
   },
   {
    "attribute": "instrument",
    "tag": "zitar",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.2227,
      "af": 0.321,
      "mf": 0.023
     },
     "stable_audio_3": {
      "qwen3omni": 0.7058,
      "af": 0.852,
      "mf": 0.852
     },
     "meanaudio": {
      "qwen3omni": 0.7058,
      "af": 0.9876,
      "mf": 0.7773
     },
     "acestep_1_5": {
      "qwen3omni": 0.5927,
      "af": 0.1331,
      "mf": 0.1645
     },
     "GT": {
      "qwen3omni": 0.7311,
      "af": 0.7774,
      "mf": 0.6225
     }
    }
   },
   {
    "attribute": "mood_theme",
    "tag": "calm",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.9983,
      "af": 0.9669,
      "mf": 0.9149
     },
     "stable_audio_3": {
      "qwen3omni": 0.9669,
      "af": 0.5928,
      "mf": 0.3208
     },
     "meanaudio": {
      "qwen3omni": 0.011,
      "af": 0.2944,
      "mf": 0.2451
     },
     "acestep_1_5": {
      "qwen3omni": 0.2018,
      "af": 0.4381,
      "mf": 0.3487
     },
     "GT": {
      "qwen3omni": 0.4074,
      "af": 0.8933,
      "mf": 0.4073
     }
    }
   },
   {
    "attribute": "mood_theme",
    "tag": "repetitive",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.9627,
      "af": 0.9466,
      "mf": 0.9859
     },
     "stable_audio_3": {
      "qwen3omni": 0.9993,
      "af": 0.977,
      "mf": 0.9859
     },
     "meanaudio": {
      "qwen3omni": 0.9968,
      "af": 0.9399,
      "mf": 0.974
     },
     "acestep_1_5": {
      "qwen3omni": 0.9972,
      "af": 0.9841,
      "mf": 0.9903
     },
     "GT": {
      "qwen3omni": 0.9526,
      "af": 0.9526,
      "mf": 0.9841
     }
    }
   },
   {
    "attribute": "vocal",
    "tag": "male voice",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.001,
      "af": 0.0421,
      "mf": 0.0006
     },
     "stable_audio_3": {
      "qwen3omni": 0.0046,
      "af": 0.0676,
      "mf": 0.0025
     },
     "meanaudio": {
      "qwen3omni": 0.3487,
      "af": 0.9933,
      "mf": 0.867
     },
     "acestep_1_5": {
      "qwen3omni": 0.001,
      "af": 0.026,
      "mf": 0.0036
     },
     "GT": {
      "qwen3omni": 0.9047,
      "af": 0.2945,
      "mf": 0.4378
     }
    }
   }
  ]
 },
 {
  "rank": 10,
  "dataset": "musiccaps",
  "id": "D7pjR9cQChM",
  "caption_segments": [
   {
    "text": "The "
   },
   {
    "text": "drums",
    "dim": "instrument",
    "tag": "drums"
   },
   {
    "text": " are playing a four on the floor "
   },
   {
    "text": "techno",
    "dim": "genre",
    "tag": "techno"
   },
   {
    "text": " rhythm with hihats and a strong kick. A "
   },
   {
    "text": "synthetic bass",
    "dim": "instrument",
    "tag": "synthetic bass"
   },
   {
    "text": " follows the kick with almost just a single note playing. Panned to the left and right side of the speakers you can hear a monotone, repeating "
   },
   {
    "text": "synth melody",
    "dim": "instrument",
    "tag": "synth melody"
   },
   {
    "text": ". This song may be playing in a "
   },
   {
    "text": "technoclub",
    "dim": "context",
    "tag": "technoclub"
   },
   {
    "text": "."
   }
  ],
  "unlocated": [],
  "key_tag": "instrument:synth melody",
  "key_spread": 0.9823,
  "winner": "stable_audio_3",
  "loser": "meanaudio",
  "tradeoff": true,
  "clap_spread": 0.0372,
  "aqa_spread": {
   "qwen3omni": 0.0011,
   "af": 0.0043,
   "mf": 0.0257
  },
  "models": {
   "musicgen_large": {
    "demo_audio": "audio/musiccaps/10_D7pjR9cQChM/musicgen_large.wav",
    "clap_caption": 0.3295,
    "muq_caption": 0.4478,
    "clap_pertag_mean": 0.1172,
    "muq_pertag_mean": 0.2711,
    "mqa_mean": {
     "qwen3omni": 0.793,
     "af": 0.9327,
     "mf": 0.7063
    },
    "aqascore": {
     "qwen3omni": 0.9999,
     "af": 0.989,
     "mf": 0.9964
    }
   },
   "stable_audio_3": {
    "demo_audio": "audio/musiccaps/10_D7pjR9cQChM/stable_audio_3.wav",
    "clap_caption": 0.3639,
    "muq_caption": 0.3264,
    "clap_pertag_mean": 0.2751,
    "muq_pertag_mean": 0.1685,
    "mqa_mean": {
     "qwen3omni": 0.8375,
     "af": 0.8175,
     "mf": 0.9722
    },
    "aqascore": {
     "qwen3omni": 0.9992,
     "af": 0.989,
     "mf": 0.982
    }
   },
   "meanaudio": {
    "demo_audio": "audio/musiccaps/10_D7pjR9cQChM/meanaudio.wav",
    "clap_caption": 0.3526,
    "muq_caption": 0.3725,
    "clap_pertag_mean": 0.1524,
    "muq_pertag_mean": 0.3433,
    "mqa_mean": {
     "qwen3omni": 0.7671,
     "af": 0.7211,
     "mf": 0.7195
    },
    "aqascore": {
     "qwen3omni": 0.9995,
     "af": 0.9933,
     "mf": 0.9924
    }
   },
   "acestep_1_5": {
    "demo_audio": "audio/musiccaps/10_D7pjR9cQChM/acestep_1_5.wav",
    "clap_caption": 0.3267,
    "muq_caption": 0.3717,
    "clap_pertag_mean": 0.2444,
    "muq_pertag_mean": 0.2958,
    "mqa_mean": {
     "qwen3omni": 0.8034,
     "af": 0.9544,
     "mf": 0.8988
    },
    "aqascore": {
     "qwen3omni": 0.9988,
     "af": 0.9924,
     "mf": 0.9707
    }
   },
   "GT": {
    "demo_audio": "audio/musiccaps/10_D7pjR9cQChM/GT.wav",
    "clap_caption": 0.4386,
    "muq_caption": 0.099,
    "clap_pertag_mean": 0.2755,
    "muq_pertag_mean": 0.2504,
    "mqa_mean": {
     "qwen3omni": 0.9724,
     "af": 0.9628,
     "mf": 0.691
    },
    "aqascore": {
     "qwen3omni": 0.9998,
     "af": 0.9941,
     "mf": 0.989
    }
   }
  },
  "per_tag": [
   {
    "attribute": "context",
    "tag": "technoclub",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.9998,
      "af": 0.9914,
      "mf": 0.9987
     },
     "stable_audio_3": {
      "qwen3omni": 0.9995,
      "af": 0.982,
      "mf": 0.9968
     },
     "meanaudio": {
      "qwen3omni": 0.9998,
      "af": 0.9707,
      "mf": 0.9964
     },
     "acestep_1_5": {
      "qwen3omni": 0.9987,
      "af": 0.9924,
      "mf": 0.9941
     },
     "GT": {
      "qwen3omni": 0.9999,
      "af": 0.9948,
      "mf": 0.9964
     }
    }
   },
   {
    "attribute": "genre",
    "tag": "techno",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.9876,
      "af": 0.9627,
      "mf": 0.977
     },
     "stable_audio_3": {
      "qwen3omni": 0.9948,
      "af": 0.9669,
      "mf": 0.9841
     },
     "meanaudio": {
      "qwen3omni": 0.9987,
      "af": 0.9707,
      "mf": 0.9924
     },
     "acestep_1_5": {
      "qwen3omni": 0.9914,
      "af": 0.9669,
      "mf": 0.852
     },
     "GT": {
      "qwen3omni": 0.9954,
      "af": 0.9876,
      "mf": 0.977
     }
    }
   },
   {
    "attribute": "instrument",
    "tag": "drums",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.9968,
      "af": 0.8808,
      "mf": 0.9797
     },
     "stable_audio_3": {
      "qwen3omni": 0.4688,
      "af": 0.2229,
      "mf": 0.8933
     },
     "meanaudio": {
      "qwen3omni": 0.9903,
      "af": 0.8933,
      "mf": 0.9399
     },
     "acestep_1_5": {
      "qwen3omni": 0.974,
      "af": 0.9399,
      "mf": 0.7549
     },
     "GT": {
      "qwen3omni": 0.9627,
      "af": 0.9325,
      "mf": 0.2942
     }
    }
   },
   {
    "attribute": "instrument",
    "tag": "synth melody",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.018,
      "af": 0.9046,
      "mf": 0.0759
     },
     "stable_audio_3": {
      "qwen3omni": 0.9933,
      "af": 0.9914,
      "mf": 0.9954
     },
     "meanaudio": {
      "qwen3omni": 0.011,
      "af": 0.1194,
      "mf": 0.0759
     },
     "acestep_1_5": {
      "qwen3omni": 0.0759,
      "af": 0.9149,
      "mf": 0.9466
     },
     "GT": {
      "qwen3omni": 0.9797,
      "af": 0.9526,
      "mf": 0.8933
     }
    }
   },
   {
    "attribute": "instrument",
    "tag": "synthetic bass",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.9627,
      "af": 0.9241,
      "mf": 0.5
     },
     "stable_audio_3": {
      "qwen3omni": 0.7311,
      "af": 0.9241,
      "mf": 0.9914
     },
     "meanaudio": {
      "qwen3omni": 0.8355,
      "af": 0.6516,
      "mf": 0.5927
     },
     "acestep_1_5": {
      "qwen3omni": 0.977,
      "af": 0.9579,
      "mf": 0.9466
     },
     "GT": {
      "qwen3omni": 0.9241,
      "af": 0.9466,
      "mf": 0.2942
     }
    }
   }
  ]
 },
 {
  "rank": 9,
  "dataset": "sdd",
  "id": "387",
  "caption_segments": [
   {
    "text": "The song has a very "
   },
   {
    "text": "happy",
    "dim": "mood_theme",
    "tag": "happy"
   },
   {
    "text": " and "
   },
   {
    "text": "relaxing",
    "dim": "mood_theme",
    "tag": "relaxing"
   },
   {
    "text": " vibe. It is an alternative "
   },
   {
    "text": "rock",
    "dim": "genre",
    "tag": "rock"
   },
   {
    "text": " instrumental song, that has "
   },
   {
    "text": "guitar",
    "dim": "instrument",
    "tag": "guitar"
   },
   {
    "text": " "
   },
   {
    "text": "drums",
    "dim": "instrument",
    "tag": "drums"
   },
   {
    "text": " and "
   },
   {
    "text": "bass",
    "dim": "instrument",
    "tag": "bass"
   },
   {
    "text": " and "
   },
   {
    "text": "pad synth",
    "dim": "instrument",
    "tag": "pad synth"
   },
   {
    "text": ". The songs sounds "
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
    "text": "motivating",
    "dim": "mood_theme",
    "tag": "motivating"
   }
  ],
  "unlocated": [],
  "key_tag": "genre:rock",
  "key_spread": 0.9969,
  "winner": "stable_audio_3",
  "loser": "acestep_1_5",
  "tradeoff": true,
  "clap_spread": 0.0718,
  "aqa_spread": {
   "qwen3omni": 0.8049,
   "af": 0.2726,
   "mf": 0.6254
  },
  "models": {
   "musicgen_large": {
    "demo_audio": "audio/sdd/09_387/musicgen_large.wav",
    "clap_caption": 0.2398,
    "muq_caption": 0.5615,
    "clap_pertag_mean": 0.1663,
    "muq_pertag_mean": 0.2483,
    "mqa_mean": {
     "qwen3omni": 0.6598,
     "af": 0.7887,
     "mf": 0.5222
    },
    "aqascore": {
     "qwen3omni": 0.5927,
     "af": 0.9149,
     "mf": 0.0293
    }
   },
   "stable_audio_3": {
    "demo_audio": "audio/sdd/09_387/stable_audio_3.wav",
    "clap_caption": 0.3115,
    "muq_caption": 0.4727,
    "clap_pertag_mean": 0.1804,
    "muq_pertag_mean": 0.2278,
    "mqa_mean": {
     "qwen3omni": 0.7167,
     "af": 0.8038,
     "mf": 0.5976
    },
    "aqascore": {
     "qwen3omni": 0.9241,
     "af": 0.9241,
     "mf": 0.026
    }
   },
   "meanaudio": {
    "demo_audio": "audio/sdd/09_387/meanaudio.wav",
    "clap_caption": 0.2497,
    "muq_caption": 0.1451,
    "clap_pertag_mean": 0.1475,
    "muq_pertag_mean": 0.1624,
    "mqa_mean": {
     "qwen3omni": 0.686,
     "af": 0.4439,
     "mf": 0.5426
    },
    "aqascore": {
     "qwen3omni": 0.1192,
     "af": 0.6515,
     "mf": 0.0293
    }
   },
   "acestep_1_5": {
    "demo_audio": "audio/sdd/09_387/acestep_1_5.wav",
    "clap_caption": 0.2739,
    "muq_caption": 0.1731,
    "clap_pertag_mean": 0.2871,
    "muq_pertag_mean": 0.1643,
    "mqa_mean": {
     "qwen3omni": 0.7346,
     "af": 0.6108,
     "mf": 0.5812
    },
    "aqascore": {
     "qwen3omni": 0.1824,
     "af": 0.8355,
     "mf": 0.6514
    }
   },
   "GT": {
    "demo_audio": "audio/sdd/09_387/GT.mp3",
    "clap_caption": 0.4396,
    "muq_caption": 0.5189,
    "clap_pertag_mean": 0.3336,
    "muq_pertag_mean": 0.2662,
    "mqa_mean": {
     "qwen3omni": 0.7118,
     "af": 0.793,
     "mf": 0.5971
    },
    "aqascore": {
     "qwen3omni": 0.8519,
     "af": 0.8672,
     "mf": 0.3209
    }
   }
  },
  "per_tag": [
   {
    "attribute": "genre",
    "tag": "rock",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.9797,
      "af": 0.9242,
      "mf": 0.9914
     },
     "stable_audio_3": {
      "qwen3omni": 0.9988,
      "af": 0.9242,
      "mf": 0.8933
     },
     "meanaudio": {
      "qwen3omni": 0.011,
      "af": 0.0852,
      "mf": 0.133
     },
     "acestep_1_5": {
      "qwen3omni": 0.0019,
      "af": 0.1482,
      "mf": 0.0086
     },
     "GT": {
      "qwen3omni": 0.9972,
      "af": 0.915,
      "mf": 0.9046
     }
    }
   },
   {
    "attribute": "instrument",
    "tag": "bass",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.6792,
      "af": 0.7983,
      "mf": 0.5927
     },
     "stable_audio_3": {
      "qwen3omni": 0.8355,
      "af": 0.8933,
      "mf": 0.7058
     },
     "meanaudio": {
      "qwen3omni": 0.6792,
      "af": 0.5625,
      "mf": 0.9981
     },
     "acestep_1_5": {
      "qwen3omni": 0.7773,
      "af": 0.6516,
      "mf": 0.4073
     },
     "GT": {
      "qwen3omni": 0.9399,
      "af": 0.9819,
      "mf": 0.5622
     }
    }
   },
   {
    "attribute": "instrument",
    "tag": "drums",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.9797,
      "af": 0.5002,
      "mf": 0.9978
     },
     "stable_audio_3": {
      "qwen3omni": 0.999,
      "af": 0.8671,
      "mf": 0.8808
     },
     "meanaudio": {
      "qwen3omni": 0.3487,
      "af": 0.0676,
      "mf": 0.011
     },
     "acestep_1_5": {
      "qwen3omni": 0.852,
      "af": 0.2945,
      "mf": 0.2451
     },
     "GT": {
      "qwen3omni": 0.9972,
      "af": 0.7984,
      "mf": 0.2018
     }
    }
   },
   {
    "attribute": "instrument",
    "tag": "guitar",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.9994,
      "af": 0.9627,
      "mf": 0.9985
     },
     "stable_audio_3": {
      "qwen3omni": 0.9998,
      "af": 0.9325,
      "mf": 0.9579
     },
     "meanaudio": {
      "qwen3omni": 0.9991,
      "af": 0.9526,
      "mf": 0.9988
     },
     "acestep_1_5": {
      "qwen3omni": 0.4688,
      "af": 0.5315,
      "mf": 0.3487
     },
     "GT": {
      "qwen3omni": 0.9999,
      "af": 0.9937,
      "mf": 0.9978
     }
    }
   },
   {
    "attribute": "instrument",
    "tag": "pad synth",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.3208,
      "af": 0.7773,
      "mf": 0.0086
     },
     "stable_audio_3": {
      "qwen3omni": 0.2942,
      "af": 0.7059,
      "mf": 0.0474
     },
     "meanaudio": {
      "qwen3omni": 0.6792,
      "af": 0.1482,
      "mf": 0.8933
     },
     "acestep_1_5": {
      "qwen3omni": 0.9707,
      "af": 0.8176,
      "mf": 0.9876
     },
     "GT": {
      "qwen3omni": 0.0601,
      "af": 0.9239,
      "mf": 0.3208
     }
    }
   },
   {
    "attribute": "mood_theme",
    "tag": "emotional",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.9797,
      "af": 0.9707,
      "mf": 0.8808
     },
     "stable_audio_3": {
      "qwen3omni": 0.989,
      "af": 0.9466,
      "mf": 0.8176
     },
     "meanaudio": {
      "qwen3omni": 0.9707,
      "af": 0.9149,
      "mf": 0.9149
     },
     "acestep_1_5": {
      "qwen3omni": 0.9526,
      "af": 0.9466,
      "mf": 0.9579
     },
     "GT": {
      "qwen3omni": 0.9968,
      "af": 0.9903,
      "mf": 0.982
     }
    }
   },
   {
    "attribute": "mood_theme",
    "tag": "happy",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.0159,
      "af": 0.5314,
      "mf": 0.0474
     },
     "stable_audio_3": {
      "qwen3omni": 0.2451,
      "af": 0.3778,
      "mf": 0.1067
     },
     "meanaudio": {
      "qwen3omni": 0.9466,
      "af": 0.2944,
      "mf": 0.0954
     },
     "acestep_1_5": {
      "qwen3omni": 0.9466,
      "af": 0.7059,
      "mf": 0.8355
     },
     "GT": {
      "qwen3omni": 0.269,
      "af": 0.2024,
      "mf": 0.0421
     }
    }
   },
   {
    "attribute": "mood_theme",
    "tag": "motivating",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.8355,
      "af": 0.7982,
      "mf": 0.1645
     },
     "stable_audio_3": {
      "qwen3omni": 0.9241,
      "af": 0.7059,
      "mf": 0.9399
     },
     "meanaudio": {
      "qwen3omni": 0.5622,
      "af": 0.4075,
      "mf": 0.7058
     },
     "acestep_1_5": {
      "qwen3omni": 0.6514,
      "af": 0.469,
      "mf": 0.5
     },
     "GT": {
      "qwen3omni": 0.982,
      "af": 0.6796,
      "mf": 0.8933
     }
    }
   },
   {
    "attribute": "mood_theme",
    "tag": "relaxing",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.1481,
      "af": 0.8355,
      "mf": 0.018
     },
     "stable_audio_3": {
      "qwen3omni": 0.1645,
      "af": 0.8808,
      "mf": 0.0293
     },
     "meanaudio": {
      "qwen3omni": 0.977,
      "af": 0.5623,
      "mf": 0.133
     },
     "acestep_1_5": {
      "qwen3omni": 0.9903,
      "af": 0.9325,
      "mf": 0.9399
     },
     "GT": {
      "qwen3omni": 0.1645,
      "af": 0.6523,
      "mf": 0.4688
     }
    }
   }
  ]
 },
 {
  "rank": 2,
  "dataset": "sdd",
  "id": "116",
  "caption_segments": [
   {
    "text": "A "
   },
   {
    "text": "peaceful",
    "dim": "mood_theme",
    "tag": "peaceful"
   },
   {
    "text": " yet "
   },
   {
    "text": "emotionally charged",
    "dim": "mood_theme",
    "tag": "emotionally charged"
   },
   {
    "text": " instrumental track featuring a blend of calm, "
   },
   {
    "text": "acoustic",
    "dim": "instrument",
    "tag": "acoustic guitar"
   },
   {
    "text": " and "
   },
   {
    "text": "electric guitars",
    "dim": "instrument",
    "tag": "electric guitar"
   },
   {
    "text": " that overlap and intertwine to create a "
   },
   {
    "text": "soothing",
    "dim": "mood_theme",
    "tag": "soothing"
   },
   {
    "text": ", "
   },
   {
    "text": "introspective",
    "dim": "mood_theme",
    "tag": "introspective"
   },
   {
    "text": " soundscape that is perfect for "
   },
   {
    "text": "relaxing",
    "dim": "context",
    "tag": "relaxing"
   },
   {
    "text": " and "
   },
   {
    "text": "unwinding",
    "dim": "context",
    "tag": "unwinding"
   },
   {
    "text": ", or for providing a poignant, "
   },
   {
    "text": "mellow",
    "dim": "mood_theme",
    "tag": "mellow"
   },
   {
    "text": " background ambiance during a "
   },
   {
    "text": "reflective moment",
    "dim": "context",
    "tag": "reflective moment"
   },
   {
    "text": "."
   }
  ],
  "unlocated": [],
  "key_tag": "instrument:acoustic guitar",
  "key_spread": 0.9509,
  "winner": "meanaudio",
  "loser": "stable_audio_3",
  "tradeoff": true,
  "clap_spread": 0.0281,
  "aqa_spread": {
   "qwen3omni": 0.0749,
   "af": 0.1339,
   "mf": 0.029
  },
  "models": {
   "musicgen_large": {
    "demo_audio": "audio/sdd/02_116/musicgen_large.wav",
    "clap_caption": 0.4017,
    "muq_caption": 0.3293,
    "clap_pertag_mean": 0.1563,
    "muq_pertag_mean": 0.1555,
    "mqa_mean": {
     "qwen3omni": 0.9041,
     "af": 0.8817,
     "mf": 0.5421
    },
    "aqascore": {
     "qwen3omni": 0.9975,
     "af": 0.974,
     "mf": 0.9669
    }
   },
   "stable_audio_3": {
    "demo_audio": "audio/sdd/02_116/stable_audio_3.wav",
    "clap_caption": 0.4256,
    "muq_caption": 0.505,
    "clap_pertag_mean": 0.293,
    "muq_pertag_mean": 0.2557,
    "mqa_mean": {
     "qwen3omni": 0.8829,
     "af": 0.9371,
     "mf": 0.8812
    },
    "aqascore": {
     "qwen3omni": 0.999,
     "af": 0.9859,
     "mf": 0.9959
    }
   },
   "meanaudio": {
    "demo_audio": "audio/sdd/02_116/meanaudio.wav",
    "clap_caption": 0.3975,
    "muq_caption": 0.21,
    "clap_pertag_mean": 0.1288,
    "muq_pertag_mean": 0.1667,
    "mqa_mean": {
     "qwen3omni": 0.9006,
     "af": 0.8005,
     "mf": 0.8762
    },
    "aqascore": {
     "qwen3omni": 0.9876,
     "af": 0.852,
     "mf": 0.9797
    }
   },
   "acestep_1_5": {
    "demo_audio": "audio/sdd/02_116/acestep_1_5.wav",
    "clap_caption": 0.4091,
    "muq_caption": 0.1209,
    "clap_pertag_mean": 0.2678,
    "muq_pertag_mean": 0.1115,
    "mqa_mean": {
     "qwen3omni": 0.7927,
     "af": 0.9067,
     "mf": 0.8211
    },
    "aqascore": {
     "qwen3omni": 0.9241,
     "af": 0.9579,
     "mf": 0.9859
    }
   },
   "GT": {
    "demo_audio": "audio/sdd/02_116/GT.mp3",
    "clap_caption": 0.413,
    "muq_caption": 0.3507,
    "clap_pertag_mean": 0.2741,
    "muq_pertag_mean": 0.1858,
    "mqa_mean": {
     "qwen3omni": 0.9931,
     "af": 0.9808,
     "mf": 0.9728
    },
    "aqascore": {
     "qwen3omni": 0.9992,
     "af": 0.9914,
     "mf": 0.9964
    }
   }
  },
  "per_tag": [
   {
    "attribute": "context",
    "tag": "reflective moment",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.9997,
      "af": 0.977,
      "mf": 0.9903
     },
     "stable_audio_3": {
      "qwen3omni": 0.9997,
      "af": 0.9797,
      "mf": 0.9975
     },
     "meanaudio": {
      "qwen3omni": 0.9998,
      "af": 0.9399,
      "mf": 0.9964
     },
     "acestep_1_5": {
      "qwen3omni": 0.9994,
      "af": 0.982,
      "mf": 0.974
     },
     "GT": {
      "qwen3omni": 0.9996,
      "af": 0.9924,
      "mf": 0.9988
     }
    }
   },
   {
    "attribute": "context",
    "tag": "relaxing",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.9998,
      "af": 0.9047,
      "mf": 0.7773
     },
     "stable_audio_3": {
      "qwen3omni": 0.9999,
      "af": 0.9859,
      "mf": 0.9876
     },
     "meanaudio": {
      "qwen3omni": 0.9999,
      "af": 0.8176,
      "mf": 0.9972
     },
     "acestep_1_5": {
      "qwen3omni": 0.9996,
      "af": 0.9669,
      "mf": 0.9241
     },
     "GT": {
      "qwen3omni": 0.9991,
      "af": 0.9933,
      "mf": 0.9954
     }
    }
   },
   {
    "attribute": "context",
    "tag": "unwinding",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.9994,
      "af": 0.977,
      "mf": 0.269
     },
     "stable_audio_3": {
      "qwen3omni": 0.9998,
      "af": 0.9841,
      "mf": 0.9933
     },
     "meanaudio": {
      "qwen3omni": 0.9998,
      "af": 0.9325,
      "mf": 0.9978
     },
     "acestep_1_5": {
      "qwen3omni": 0.9992,
      "af": 0.9797,
      "mf": 0.9669
     },
     "GT": {
      "qwen3omni": 0.9993,
      "af": 0.9924,
      "mf": 0.9978
     }
    }
   },
   {
    "attribute": "instrument",
    "tag": "acoustic guitar",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.1192,
      "af": 0.5624,
      "mf": 0.0017
     },
     "stable_audio_3": {
      "qwen3omni": 0.0474,
      "af": 0.7983,
      "mf": 0.7773
     },
     "meanaudio": {
      "qwen3omni": 0.9983,
      "af": 0.9933,
      "mf": 0.9996
     },
     "acestep_1_5": {
      "qwen3omni": 0.0954,
      "af": 0.6227,
      "mf": 0.269
     },
     "GT": {
      "qwen3omni": 0.977,
      "af": 0.9839,
      "mf": 0.977
     }
    }
   },
   {
    "attribute": "instrument",
    "tag": "electric guitar",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.9972,
      "af": 0.9948,
      "mf": 0.9972
     },
     "stable_audio_3": {
      "qwen3omni": 0.9994,
      "af": 0.9149,
      "mf": 0.9241
     },
     "meanaudio": {
      "qwen3omni": 0.1067,
      "af": 0.0759,
      "mf": 0.0076
     },
     "acestep_1_5": {
      "qwen3omni": 0.5927,
      "af": 0.8355,
      "mf": 0.9669
     },
     "GT": {
      "qwen3omni": 0.9987,
      "af": 0.9902,
      "mf": 0.9876
     }
    }
   },
   {
    "attribute": "mood_theme",
    "tag": "emotionally charged",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.9325,
      "af": 0.9669,
      "mf": 0.5
     },
     "stable_audio_3": {
      "qwen3omni": 0.7982,
      "af": 0.852,
      "mf": 0.5
     },
     "meanaudio": {
      "qwen3omni": 0.9047,
      "af": 0.8176,
      "mf": 0.9526
     },
     "acestep_1_5": {
      "qwen3omni": 0.2451,
      "af": 0.8808,
      "mf": 0.8808
     },
     "GT": {
      "qwen3omni": 0.974,
      "af": 0.8933,
      "mf": 0.7982
     }
    }
   },
   {
    "attribute": "mood_theme",
    "tag": "introspective",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.9981,
      "af": 0.9466,
      "mf": 0.867
     },
     "stable_audio_3": {
      "qwen3omni": 0.9859,
      "af": 0.9325,
      "mf": 0.9047
     },
     "meanaudio": {
      "qwen3omni": 0.9983,
      "af": 0.9325,
      "mf": 0.9707
     },
     "acestep_1_5": {
      "qwen3omni": 0.9968,
      "af": 0.9526,
      "mf": 0.9046
     },
     "GT": {
      "qwen3omni": 0.9968,
      "af": 0.9876,
      "mf": 0.9948
     }
    }
   },
   {
    "attribute": "mood_theme",
    "tag": "mellow",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.9991,
      "af": 0.9797,
      "mf": 0.7058
     },
     "stable_audio_3": {
      "qwen3omni": 0.9998,
      "af": 0.9876,
      "mf": 0.9797
     },
     "meanaudio": {
      "qwen3omni": 0.9994,
      "af": 0.9579,
      "mf": 0.9579
     },
     "acestep_1_5": {
      "qwen3omni": 0.9997,
      "af": 0.9797,
      "mf": 0.9579
     },
     "GT": {
      "qwen3omni": 0.9987,
      "af": 0.9941,
      "mf": 0.9948
     }
    }
   },
   {
    "attribute": "mood_theme",
    "tag": "peaceful",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.9983,
      "af": 0.5314,
      "mf": 0.1481
     },
     "stable_audio_3": {
      "qwen3omni": 0.9994,
      "af": 0.9466,
      "mf": 0.7773
     },
     "meanaudio": {
      "qwen3omni": 0.9996,
      "af": 0.6226,
      "mf": 0.9579
     },
     "acestep_1_5": {
      "qwen3omni": 0.9996,
      "af": 0.8808,
      "mf": 0.5312
     },
     "GT": {
      "qwen3omni": 0.9964,
      "af": 0.986,
      "mf": 0.9876
     }
    }
   },
   {
    "attribute": "mood_theme",
    "tag": "soothing",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.9975,
      "af": 0.977,
      "mf": 0.1645
     },
     "stable_audio_3": {
      "qwen3omni": 0.9995,
      "af": 0.989,
      "mf": 0.9707
     },
     "meanaudio": {
      "qwen3omni": 0.9993,
      "af": 0.9149,
      "mf": 0.9241
     },
     "acestep_1_5": {
      "qwen3omni": 0.9994,
      "af": 0.9859,
      "mf": 0.8355
     },
     "GT": {
      "qwen3omni": 0.9914,
      "af": 0.9948,
      "mf": 0.9959
     }
    }
   }
  ]
 },
 {
  "rank": 4,
  "dataset": "sdd",
  "id": "291",
  "caption_segments": [
   {
    "text": "A lullaby turned "
   },
   {
    "text": "dark",
    "dim": "mood_theme",
    "tag": "dark"
   },
   {
    "text": " in its melody begins on a plucky "
   },
   {
    "text": "kalimba",
    "dim": "instrument",
    "tag": "kalimba"
   },
   {
    "text": " of some kind; after an intro, a "
   },
   {
    "text": "flute",
    "dim": "instrument",
    "tag": "flute"
   },
   {
    "text": " takes over the melody and a "
   },
   {
    "text": "harp",
    "dim": "instrument",
    "tag": "harp"
   },
   {
    "text": " and other "
   },
   {
    "text": "orchestral instruments",
    "dim": "instrument",
    "tag": "orchestral instruments"
   },
   {
    "text": " back it up."
   }
  ],
  "unlocated": [],
  "key_tag": "instrument:flute",
  "key_spread": 0.9029,
  "winner": "meanaudio",
  "loser": "acestep_1_5",
  "tradeoff": true,
  "clap_spread": 0.0502,
  "aqa_spread": {
   "qwen3omni": 0.1725,
   "af": 0.5562,
   "mf": 0.4863
  },
  "models": {
   "musicgen_large": {
    "demo_audio": "audio/sdd/04_291/musicgen_large.wav",
    "clap_caption": 0.3875,
    "muq_caption": 0.2582,
    "clap_pertag_mean": 0.2273,
    "muq_pertag_mean": 0.1761,
    "mqa_mean": {
     "qwen3omni": 0.7299,
     "af": 0.2275,
     "mf": 0.0962
    },
    "aqascore": {
     "qwen3omni": 0.9707,
     "af": 0.3777,
     "mf": 0.7549
    }
   },
   "stable_audio_3": {
    "demo_audio": "audio/sdd/04_291/stable_audio_3.wav",
    "clap_caption": 0.4363,
    "muq_caption": 0.5875,
    "clap_pertag_mean": 0.2651,
    "muq_pertag_mean": 0.2876,
    "mqa_mean": {
     "qwen3omni": 0.859,
     "af": 0.6005,
     "mf": 0.6416
    },
    "aqascore": {
     "qwen3omni": 0.9627,
     "af": 0.6516,
     "mf": 0.852
    }
   },
   "meanaudio": {
    "demo_audio": "audio/sdd/04_291/meanaudio.wav",
    "clap_caption": 0.4377,
    "muq_caption": 0.1336,
    "clap_pertag_mean": 0.1697,
    "muq_pertag_mean": 0.117,
    "mqa_mean": {
     "qwen3omni": 0.7285,
     "af": 0.2518,
     "mf": 0.6383
    },
    "aqascore": {
     "qwen3omni": 0.9707,
     "af": 0.0954,
     "mf": 0.9241
    }
   },
   "acestep_1_5": {
    "demo_audio": "audio/sdd/04_291/acestep_1_5.wav",
    "clap_caption": 0.4137,
    "muq_caption": 0.0382,
    "clap_pertag_mean": 0.2261,
    "muq_pertag_mean": 0.1165,
    "mqa_mean": {
     "qwen3omni": 0.525,
     "af": 0.2016,
     "mf": 0.0806
    },
    "aqascore": {
     "qwen3omni": 0.7982,
     "af": 0.3489,
     "mf": 0.4378
    }
   },
   "GT": {
    "demo_audio": "audio/sdd/04_291/GT.mp3",
    "clap_caption": 0.4448,
    "muq_caption": 0.2206,
    "clap_pertag_mean": 0.2858,
    "muq_pertag_mean": 0.1514,
    "mqa_mean": {
     "qwen3omni": 0.5188,
     "af": 0.6026,
     "mf": 0.4972
    },
    "aqascore": {
     "qwen3omni": 0.9797,
     "af": 0.7559,
     "mf": 0.5622
    }
   }
  },
  "per_tag": [
   {
    "attribute": "instrument",
    "tag": "flute",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.7058,
      "af": 0.1193,
      "mf": 0.023
     },
     "stable_audio_3": {
      "qwen3omni": 0.9797,
      "af": 0.6227,
      "mf": 0.0954
     },
     "meanaudio": {
      "qwen3omni": 0.9983,
      "af": 0.982,
      "mf": 0.9669
     },
     "acestep_1_5": {
      "qwen3omni": 0.0954,
      "af": 0.0852,
      "mf": 0.0067
     },
     "GT": {
      "qwen3omni": 0.9933,
      "af": 0.9524,
      "mf": 0.4074
     }
    }
   },
   {
    "attribute": "instrument",
    "tag": "harp",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.5927,
      "af": 0.5623,
      "mf": 0.1192
     },
     "stable_audio_3": {
      "qwen3omni": 0.8355,
      "af": 0.982,
      "mf": 0.9933
     },
     "meanaudio": {
      "qwen3omni": 0.6225,
      "af": 0.1331,
      "mf": 0.8355
     },
     "acestep_1_5": {
      "qwen3omni": 0.9046,
      "af": 0.5929,
      "mf": 0.2018
     },
     "GT": {
      "qwen3omni": 0.2018,
      "af": 0.9148,
      "mf": 0.269
     }
    }
   },
   {
    "attribute": "instrument",
    "tag": "kalimba",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.9841,
      "af": 0.1193,
      "mf": 0.2451
     },
     "stable_audio_3": {
      "qwen3omni": 0.867,
      "af": 0.378,
      "mf": 0.867
     },
     "meanaudio": {
      "qwen3omni": 0.3776,
      "af": 0.0759,
      "mf": 0.9046
     },
     "acestep_1_5": {
      "qwen3omni": 0.9959,
      "af": 0.202,
      "mf": 0.0331
     },
     "GT": {
      "qwen3omni": 0.2689,
      "af": 0.0858,
      "mf": 0.0159
     }
    }
   },
   {
    "attribute": "instrument",
    "tag": "orchestral instruments",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.8355,
      "af": 0.2691,
      "mf": 0.0676
     },
     "stable_audio_3": {
      "qwen3omni": 0.8355,
      "af": 0.9242,
      "mf": 0.9579
     },
     "meanaudio": {
      "qwen3omni": 0.7773,
      "af": 0.026,
      "mf": 0.1067
     },
     "acestep_1_5": {
      "qwen3omni": 0.6225,
      "af": 0.0676,
      "mf": 0.1192
     },
     "GT": {
      "qwen3omni": 0.9972,
      "af": 0.9841,
      "mf": 0.9954
     }
    }
   },
   {
    "attribute": "mood_theme",
    "tag": "dark",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.5312,
      "af": 0.0676,
      "mf": 0.026
     },
     "stable_audio_3": {
      "qwen3omni": 0.7773,
      "af": 0.0954,
      "mf": 0.2942
     },
     "meanaudio": {
      "qwen3omni": 0.867,
      "af": 0.0421,
      "mf": 0.3776
     },
     "acestep_1_5": {
      "qwen3omni": 0.0067,
      "af": 0.0601,
      "mf": 0.0421
     },
     "GT": {
      "qwen3omni": 0.133,
      "af": 0.076,
      "mf": 0.7982
     }
    }
   }
  ]
 },
 {
  "rank": 8,
  "dataset": "sdd",
  "id": "591",
  "caption_segments": [
   {
    "text": "Genre seems to be spanish "
   },
   {
    "text": "country",
    "dim": "genre",
    "tag": "country"
   },
   {
    "text": " music and I feel very "
   },
   {
    "text": "relaxed",
    "dim": "mood_theme",
    "tag": "relaxed"
   },
   {
    "text": " and felt like I was\nat a "
   },
   {
    "text": "park",
    "dim": "context",
    "tag": "park"
   },
   {
    "text": " "
   },
   {
    "text": "jogging",
    "dim": "context",
    "tag": "jogging"
   },
   {
    "text": " around in a "
   },
   {
    "text": "peaceful",
    "dim": "mood_theme",
    "tag": "peaceful"
   },
   {
    "text": " manner."
   }
  ],
  "unlocated": [],
  "key_tag": "genre:country",
  "key_spread": 0.9838,
  "winner": "stable_audio_3",
  "loser": "meanaudio",
  "tradeoff": true,
  "clap_spread": 0.0708,
  "aqa_spread": {
   "qwen3omni": 0.9113,
   "af": 0.5947,
   "mf": 0.7463
  },
  "models": {
   "musicgen_large": {
    "demo_audio": "audio/sdd/08_591/musicgen_large.wav",
    "clap_caption": 0.273,
    "muq_caption": 0.2731,
    "clap_pertag_mean": 0.2748,
    "muq_pertag_mean": 0.2103,
    "mqa_mean": {
     "qwen3omni": 0.7578,
     "af": 0.7319,
     "mf": 0.4159
    },
    "aqascore": {
     "qwen3omni": 0.9241,
     "af": 0.5002,
     "mf": 0.0086
    }
   },
   "stable_audio_3": {
    "demo_audio": "audio/sdd/08_591/stable_audio_3.wav",
    "clap_caption": 0.2022,
    "muq_caption": 0.2766,
    "clap_pertag_mean": 0.2222,
    "muq_pertag_mean": 0.2364,
    "mqa_mean": {
     "qwen3omni": 0.8701,
     "af": 0.9238,
     "mf": 0.8511
    },
    "aqascore": {
     "qwen3omni": 0.9964,
     "af": 0.8176,
     "mf": 0.2451
    }
   },
   "meanaudio": {
    "demo_audio": "audio/sdd/08_591/meanaudio.wav",
    "clap_caption": 0.2638,
    "muq_caption": 0.2345,
    "clap_pertag_mean": 0.0875,
    "muq_pertag_mean": 0.2404,
    "mqa_mean": {
     "qwen3omni": 0.3848,
     "af": 0.2782,
     "mf": 0.5996
    },
    "aqascore": {
     "qwen3omni": 0.0851,
     "af": 0.2229,
     "mf": 0.7549
    }
   },
   "acestep_1_5": {
    "demo_audio": "audio/sdd/08_591/acestep_1_5.wav",
    "clap_caption": 0.2679,
    "muq_caption": 0.1007,
    "clap_pertag_mean": 0.2833,
    "muq_pertag_mean": 0.0244,
    "mqa_mean": {
     "qwen3omni": 0.7357,
     "af": 0.7788,
     "mf": 0.7209
    },
    "aqascore": {
     "qwen3omni": 0.9903,
     "af": 0.349,
     "mf": 0.269
    }
   },
   "GT": {
    "demo_audio": "audio/sdd/08_591/GT.mp3",
    "clap_caption": 0.2236,
    "muq_caption": 0.1008,
    "clap_pertag_mean": 0.2648,
    "muq_pertag_mean": 0.1714,
    "mqa_mean": {
     "qwen3omni": 0.6441,
     "af": 0.9051,
     "mf": 0.7223
    },
    "aqascore": {
     "qwen3omni": 0.1192,
     "af": 0.7315,
     "mf": 0.1067
    }
   }
  },
  "per_tag": [
   {
    "attribute": "context",
    "tag": "jogging",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.9325,
      "af": 0.9242,
      "mf": 0.8355
     },
     "stable_audio_3": {
      "qwen3omni": 0.9241,
      "af": 0.9242,
      "mf": 0.7982
     },
     "meanaudio": {
      "qwen3omni": 0.974,
      "af": 0.6226,
      "mf": 0.9047
     },
     "acestep_1_5": {
      "qwen3omni": 0.5927,
      "af": 0.8356,
      "mf": 0.8355
     },
     "GT": {
      "qwen3omni": 0.2689,
      "af": 0.8809,
      "mf": 0.5927
     }
    }
   },
   {
    "attribute": "context",
    "tag": "park",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.8808,
      "af": 0.8356,
      "mf": 0.9669
     },
     "stable_audio_3": {
      "qwen3omni": 0.9241,
      "af": 0.8933,
      "mf": 0.982
     },
     "meanaudio": {
      "qwen3omni": 0.7549,
      "af": 0.5624,
      "mf": 0.9903
     },
     "acestep_1_5": {
      "qwen3omni": 0.9797,
      "af": 0.8809,
      "mf": 0.977
     },
     "GT": {
      "qwen3omni": 0.989,
      "af": 0.8521,
      "mf": 0.9914
     }
    }
   },
   {
    "attribute": "genre",
    "tag": "country",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.0159,
      "af": 0.0852,
      "mf": 0.0097
     },
     "stable_audio_3": {
      "qwen3omni": 0.9914,
      "af": 0.9466,
      "mf": 0.9859
     },
     "meanaudio": {
      "qwen3omni": 0.0076,
      "af": 0.0676,
      "mf": 0.133
     },
     "acestep_1_5": {
      "qwen3omni": 0.1067,
      "af": 0.2454,
      "mf": 0.2018
     },
     "GT": {
      "qwen3omni": 0.0601,
      "af": 0.8357,
      "mf": 0.2451
     }
    }
   },
   {
    "attribute": "mood_theme",
    "tag": "peaceful",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.9627,
      "af": 0.852,
      "mf": 0.0851
     },
     "stable_audio_3": {
      "qwen3omni": 0.5312,
      "af": 0.8808,
      "mf": 0.6225
     },
     "meanaudio": {
      "qwen3omni": 0.023,
      "af": 0.0534,
      "mf": 0.3776
     },
     "acestep_1_5": {
      "qwen3omni": 0.9998,
      "af": 0.9526,
      "mf": 0.7549
     },
     "GT": {
      "qwen3omni": 0.9399,
      "af": 0.977,
      "mf": 0.9466
     }
    }
   },
   {
    "attribute": "mood_theme",
    "tag": "relaxed",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.9972,
      "af": 0.9627,
      "mf": 0.1824
     },
     "stable_audio_3": {
      "qwen3omni": 0.9797,
      "af": 0.974,
      "mf": 0.867
     },
     "meanaudio": {
      "qwen3omni": 0.1645,
      "af": 0.0851,
      "mf": 0.5927
     },
     "acestep_1_5": {
      "qwen3omni": 0.9996,
      "af": 0.9797,
      "mf": 0.8355
     },
     "GT": {
      "qwen3omni": 0.9627,
      "af": 0.9797,
      "mf": 0.8355
     }
    }
   }
  ]
 },
 {
  "rank": 7,
  "dataset": "sdd",
  "id": "138",
  "caption_segments": [
   {
    "text": "Possibly a "
   },
   {
    "text": "movie soundtrack",
    "dim": "context",
    "tag": "movie soundtrack"
   },
   {
    "text": ", this instrumental piece has a "
   },
   {
    "text": "dramatic",
    "dim": "mood_theme",
    "tag": "dramatic"
   },
   {
    "text": " tone, creates a slight "
   },
   {
    "text": "suspense",
    "dim": "mood_theme",
    "tag": "suspense"
   },
   {
    "text": " and a "
   },
   {
    "text": "playful",
    "dim": "mood_theme",
    "tag": "playful"
   },
   {
    "text": " continuing"
   }
  ],
  "unlocated": [],
  "key_tag": "mood_theme:playful",
  "key_spread": 0.9981,
  "winner": "acestep_1_5",
  "loser": "meanaudio",
  "tradeoff": true,
  "clap_spread": 0.0679,
  "aqa_spread": {
   "qwen3omni": 0.0823,
   "af": 0.4204,
   "mf": 0.0375
  },
  "models": {
   "musicgen_large": {
    "demo_audio": "audio/sdd/07_138/musicgen_large.wav",
    "clap_caption": 0.2183,
    "muq_caption": 0.0937,
    "clap_pertag_mean": 0.1591,
    "muq_pertag_mean": -0.0,
    "mqa_mean": {
     "qwen3omni": 0.9467,
     "af": 0.8324,
     "mf": 0.7539
    },
    "aqascore": {
     "qwen3omni": 0.9972,
     "af": 0.7982,
     "mf": 0.9841
    }
   },
   "stable_audio_3": {
    "demo_audio": "audio/sdd/07_138/stable_audio_3.wav",
    "clap_caption": 0.2017,
    "muq_caption": 0.2189,
    "clap_pertag_mean": 0.2326,
    "muq_pertag_mean": 0.0761,
    "mqa_mean": {
     "qwen3omni": 0.8047,
     "af": 0.5688,
     "mf": 0.6547
    },
    "aqascore": {
     "qwen3omni": 0.9914,
     "af": 0.3778,
     "mf": 0.9466
    }
   },
   "meanaudio": {
    "demo_audio": "audio/sdd/07_138/meanaudio.wav",
    "clap_caption": 0.1994,
    "muq_caption": 0.1159,
    "clap_pertag_mean": 0.089,
    "muq_pertag_mean": 0.1259,
    "mqa_mean": {
     "qwen3omni": 0.7322,
     "af": 0.6956,
     "mf": 0.738
    },
    "aqascore": {
     "qwen3omni": 0.9149,
     "af": 0.469,
     "mf": 0.9707
    }
   },
   "acestep_1_5": {
    "demo_audio": "audio/sdd/07_138/acestep_1_5.wav",
    "clap_caption": 0.2673,
    "muq_caption": 0.1138,
    "clap_pertag_mean": 0.2614,
    "muq_pertag_mean": 0.0374,
    "mqa_mean": {
     "qwen3omni": 0.5132,
     "af": 0.5891,
     "mf": 0.6957
    },
    "aqascore": {
     "qwen3omni": 0.9941,
     "af": 0.7059,
     "mf": 0.9797
    }
   },
   "GT": {
    "demo_audio": "audio/sdd/07_138/GT.mp3",
    "clap_caption": 0.4834,
    "muq_caption": -0.0255,
    "clap_pertag_mean": 0.3581,
    "muq_pertag_mean": 0.0598,
    "mqa_mean": {
     "qwen3omni": 0.7535,
     "af": 0.6012,
     "mf": 0.8264
    },
    "aqascore": {
     "qwen3omni": 0.9933,
     "af": 0.9579,
     "mf": 0.9903
    }
   }
  },
  "per_tag": [
   {
    "attribute": "context",
    "tag": "movie soundtrack",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.9941,
      "af": 0.9627,
      "mf": 0.9924
     },
     "stable_audio_3": {
      "qwen3omni": 0.9903,
      "af": 0.9526,
      "mf": 0.9669
     },
     "meanaudio": {
      "qwen3omni": 0.9996,
      "af": 0.9466,
      "mf": 0.9933
     },
     "acestep_1_5": {
      "qwen3omni": 0.9933,
      "af": 0.9149,
      "mf": 0.977
     },
     "GT": {
      "qwen3omni": 0.9996,
      "af": 0.989,
      "mf": 0.9983
     }
    }
   },
   {
    "attribute": "mood_theme",
    "tag": "dramatic",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.9669,
      "af": 0.9399,
      "mf": 0.977
     },
     "stable_audio_3": {
      "qwen3omni": 0.7549,
      "af": 0.3489,
      "mf": 0.4073
     },
     "meanaudio": {
      "qwen3omni": 0.9954,
      "af": 0.9399,
      "mf": 0.9669
     },
     "acestep_1_5": {
      "qwen3omni": 0.0421,
      "af": 0.2944,
      "mf": 0.4378
     },
     "GT": {
      "qwen3omni": 0.9627,
      "af": 0.4386,
      "mf": 0.977
     }
    }
   },
   {
    "attribute": "mood_theme",
    "tag": "playful",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.8355,
      "af": 0.469,
      "mf": 0.0474
     },
     "stable_audio_3": {
      "qwen3omni": 0.8808,
      "af": 0.8671,
      "mf": 0.867
     },
     "meanaudio": {
      "qwen3omni": 0.0015,
      "af": 0.1646,
      "mf": 0.0676
     },
     "acestep_1_5": {
      "qwen3omni": 0.9996,
      "af": 0.9242,
      "mf": 0.9903
     },
     "GT": {
      "qwen3omni": 0.9325,
      "af": 0.7316,
      "mf": 0.3776
     }
    }
   },
   {
    "attribute": "mood_theme",
    "tag": "suspense",
    "scores": {
     "musicgen_large": {
      "qwen3omni": 0.9903,
      "af": 0.9579,
      "mf": 0.9987
     },
     "stable_audio_3": {
      "qwen3omni": 0.5927,
      "af": 0.1068,
      "mf": 0.3776
     },
     "meanaudio": {
      "qwen3omni": 0.9325,
      "af": 0.7312,
      "mf": 0.9241
     },
     "acestep_1_5": {
      "qwen3omni": 0.018,
      "af": 0.2229,
      "mf": 0.3776
     },
     "GT": {
      "qwen3omni": 0.1192,
      "af": 0.2458,
      "mf": 0.9526
     }
    }
   }
  ]
 }
];
