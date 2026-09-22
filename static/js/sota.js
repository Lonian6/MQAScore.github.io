// Renders the SOTA-generator demo into #sota-demo.
// Data: window.SOTA_PROMPTS (static/js/sota_data.js).
// Story: CLAP ties the 4 generators, but MQAScore separates them per attribute.

(function () {
  "use strict";

  var AUDIO_BASE = "static/sota/";

  var DIMS = {
    genre: "Genre",
    instrument: "Instrument",
    mood_theme: "Mood / Theme",
    vocal: "Vocal",
    context: "Context"
  };
  var DIM_ORDER = ["genre", "instrument", "mood_theme", "vocal", "context"];

  var MODELS = [
    { key: "musicgen_large", name: "MusicGen-Large", short: "MusicGen" },
    { key: "stable_audio_3", name: "Stable Audio 3", short: "Stable Audio" },
    { key: "meanaudio", name: "MeanAudio", short: "MeanAudio" },
    { key: "acestep_1_5", name: "ACE-Step 1.5", short: "ACE-Step" },
    { key: "GT", name: "Ground Truth", short: "GT", gt: true }
  ];
  var GENERATORS = MODELS.filter(function (m) { return !m.gt; });

  var ALMS = [
    { key: "qwen3omni", label: "Qwen3-Omni" },
    { key: "af", label: "AF-Next" },
    { key: "mf", label: "Music Flamingo" }
  ];
  var WIN_GAP = 0.15;

  var DATASETS = { musiccaps: "MusicCaps", sdd: "Song Describer" };

  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined && html !== null) e.innerHTML = html;
    return e;
  }
  function fmt(v, d) {
    if (v === null || v === undefined || isNaN(v)) return "–";
    return Number(v).toFixed(d === undefined ? 3 : d);
  }
  function dimLabel(a) { return DIMS[a] || a; }

  // ---- caption with inline concept highlighting -------------------------
  function captionBlock(prompt) {
    var wrap = el("div", "sota-caption");
    var label = el("span", "caption-label", "Prompt");
    wrap.appendChild(label);
    var body = el("span", "caption-body");
    prompt.caption_segments.forEach(function (seg) {
      if (seg.dim) {
        var mark = el("mark", "concept dim-" + seg.dim);
        mark.textContent = seg.text;
        mark.title = dimLabel(seg.dim) + " · " + seg.tag;
        body.appendChild(mark);
      } else {
        body.appendChild(document.createTextNode(seg.text));
      }
    });
    wrap.appendChild(body);

    if (prompt.unlocated && prompt.unlocated.length) {
      var extra = el("div", "unlocated");
      extra.appendChild(el("span", "unlocated-label", "also detected:"));
      prompt.unlocated.forEach(function (c) {
        var chip = el("span", "concept-chip dim-" + c.dim, c.tag);
        chip.title = dimLabel(c.dim);
        extra.appendChild(chip);
      });
      wrap.appendChild(extra);
    }
    return wrap;
  }

  // ---- audio grid -------------------------------------------------------
  function audioGrid(prompt) {
    var grid = el("div", "sota-audio-grid");
    MODELS.forEach(function (m) {
      var md = prompt.models[m.key];
      if (!md) return;
      var cell = el("div", "sota-audio-cell" + (m.gt ? " is-gt" : ""));
      cell.appendChild(el("span", "sota-model-name", m.name + (m.gt ? " <span class=\"gt-tag\">reference</span>" : "")));
      var audio = el("audio");
      audio.controls = true;
      audio.preload = "none";
      audio.src = AUDIO_BASE + md.demo_audio;
      cell.appendChild(audio);
      grid.appendChild(cell);
    });
    return grid;
  }

  // ---- score cell -------------------------------------------------------
  function scoreCell(value, cls) {
    var td = el("td", "mqa-cell" + (cls ? " " + cls : ""));
    var pct = Math.max(0, Math.min(1, value || 0)) * 100;
    td.innerHTML =
      '<span class="mqa-num">' + fmt(value) + "</span>" +
      '<span class="mqa-bar"><span class="mqa-bar-fill" style="width:' + pct.toFixed(1) + '%"></span></span>';
    return td;
  }

  // ---- per-attribute matrix (one ALM) ----------------------------------
  function matrixBody(prompt, almKey) {
    var tb = el("tbody");
    prompt.per_tag.forEach(function (row) {
      var tagId = row.attribute + ":" + row.tag;
      var isKey = tagId === prompt.key_tag;
      var tr = el("tr", isKey ? "mqa-key-row" : null);
      var th = el("th", "mqa-tag-col");
      th.innerHTML =
        '<span class="concept-chip dim-' + row.attribute + '">' + row.tag + "</span>" +
        (isKey ? '<span class="mqa-key-flag">key</span>' : "");
      tr.appendChild(th);

      // find winner / loser among the 4 generators
      var vals = GENERATORS.map(function (m) {
        return (row.scores[m.key] && row.scores[m.key][almKey]) || 0;
      });
      var max = Math.max.apply(null, vals);
      var min = Math.min.apply(null, vals);
      MODELS.forEach(function (m) {
        var v = (row.scores[m.key] && row.scores[m.key][almKey]);
        if (m.gt) { tr.appendChild(scoreCell(v, "gt-cell")); return; }
        var cls = "";
        if (max - min >= WIN_GAP) {
          if (v === max) cls = "win";
          else if (v === min) cls = "lose";
        }
        tr.appendChild(scoreCell(v, cls));
      });
      tb.appendChild(tr);
    });

    // MQAScore mean row
    var mtr = el("tr", "mqa-mean-row");
    mtr.appendChild(el("th", "mqa-tag-col",
      '<span class="mqa-mean-label">MQAScore mean</span>'));
    var means = GENERATORS.map(function (m) {
      return (prompt.models[m.key].mqa_mean || {})[almKey] || 0;
    });
    var mmax = Math.max.apply(null, means), mmin = Math.min.apply(null, means);
    MODELS.forEach(function (m) {
      var v = (prompt.models[m.key].mqa_mean || {})[almKey];
      if (m.gt) { mtr.appendChild(scoreCell(v, "gt-cell")); return; }
      var cls = (mmax - mmin >= WIN_GAP) ? (v === mmax ? "win" : (v === mmin ? "lose" : "")) : "";
      mtr.appendChild(scoreCell(v, cls));
    });
    tb.appendChild(mtr);
    return tb;
  }

  function matrixTable(prompt) {
    var panel = el("div", "score-panel");
    var head = el("div", "panel-head");
    head.appendChild(el("h4", "panel-title reveal",
      'MQAScore <span class="panel-note">— per attribute, P(Yes)</span>'));

    // ALM toggle
    var toggle = el("div", "alm-toggle");
    ALMS.forEach(function (a, i) {
      var b = el("button", "alm-btn" + (i === 0 ? " active" : ""), a.label);
      b.setAttribute("data-alm", a.key);
      toggle.appendChild(b);
    });
    head.appendChild(toggle);
    panel.appendChild(head);

    var scroll = el("div", "table-scroll");
    var tbl = el("table", "mqa-table sota-matrix");
    var thead = el("thead");
    var tr = el("tr");
    tr.appendChild(el("th", "mqa-tag-col", "Attribute &middot; concept"));
    MODELS.forEach(function (m) {
      tr.appendChild(el("th", "mqa-model" + (m.gt ? " gt-col" : ""), m.short));
    });
    thead.appendChild(tr);
    tbl.appendChild(thead);
    tbl.appendChild(matrixBody(prompt, "qwen3omni"));
    scroll.appendChild(tbl);
    panel.appendChild(scroll);

    toggle.addEventListener("click", function (ev) {
      var btn = ev.target.closest(".alm-btn");
      if (!btn) return;
      toggle.querySelectorAll(".alm-btn").forEach(function (x) { x.classList.remove("active"); });
      btn.classList.add("active");
      var newBody = matrixBody(prompt, btn.getAttribute("data-alm"));
      tbl.replaceChild(newBody, tbl.querySelector("tbody"));
    });
    return panel;
  }

  // ---- model summary (CLAP / MuQ / MQA / AQA) ---------------------------
  function summaryTable(prompt) {
    var panel = el("div", "score-panel");
    panel.appendChild(el("h4", "panel-title tied",
      'Overall &amp; global scores <span class="panel-note">— CLAP ties the generators (spread ' + fmt(prompt.clap_spread) + ')</span>'));
    var scroll = el("div", "table-scroll");
    var tbl = el("table", "sota-summary");
    var thead = el("thead");
    var top = el("tr");
    top.appendChild(el("th", "sum-model-col", "Model"));
    top.appendChild(el("th", null, "CLAP"));
    top.appendChild(el("th", null, "MuQ"));
    var mqaTh = el("th", "grp", "MQAScore mean"); mqaTh.setAttribute("colspan", "3"); top.appendChild(mqaTh);
    var aqaTh = el("th", "grp", "AQAScore"); aqaTh.setAttribute("colspan", "3"); top.appendChild(aqaTh);
    thead.appendChild(top);
    var sub = el("tr", "sum-subhead");
    sub.appendChild(el("th", "sum-model-col", ""));
    sub.appendChild(el("th", null, "caption"));
    sub.appendChild(el("th", null, "caption"));
    ALMS.forEach(function (a) { sub.appendChild(el("th", null, a.label.replace("Music Flamingo", "MF").replace("Qwen3-Omni", "Qwen").replace("AF-Next", "AF"))); });
    ALMS.forEach(function (a) { sub.appendChild(el("th", null, a.label.replace("Music Flamingo", "MF").replace("Qwen3-Omni", "Qwen").replace("AF-Next", "AF"))); });
    thead.appendChild(sub);
    tbl.appendChild(thead);

    var tb = el("tbody");
    MODELS.forEach(function (m) {
      var md = prompt.models[m.key];
      var tr = el("tr", m.gt ? "gt-row" : null);
      tr.appendChild(el("th", "sum-model-col", m.name + (m.gt ? ' <span class="gt-tag">ref</span>' : "")));
      tr.appendChild(el("td", null, fmt(md.clap_caption)));
      tr.appendChild(el("td", null, fmt(md.muq_caption)));
      ALMS.forEach(function (a) { tr.appendChild(el("td", null, fmt((md.mqa_mean || {})[a.key]))); });
      ALMS.forEach(function (a) { tr.appendChild(el("td", null, fmt((md.aqascore || {})[a.key]))); });
      tb.appendChild(tr);
    });
    tbl.appendChild(tb);
    scroll.appendChild(tbl);
    panel.appendChild(scroll);
    return panel;
  }

  // ---- one prompt card --------------------------------------------------
  function promptCard(prompt, indexInDataset) {
    var card = el("article", "sota-prompt");

    var header = el("div", "pair-header");
    var left = el("div", "pair-id");
    left.innerHTML =
      '<span class="pair-num">' + DATASETS[prompt.dataset] + " " +
      String(indexInDataset).padStart(2, "0") + "</span>" +
      '<span class="pair-prompt">' + prompt.id + "</span>";
    header.appendChild(left);

    var badges = el("div", "pair-badges");
    var kt = prompt.key_tag.split(":");
    badges.appendChild(el("span", "key-tag",
      "key: " + dimLabel(kt[0]) + " &middot; " + kt.slice(1).join(":")));
    if (prompt.tradeoff) badges.appendChild(el("span", "opp-tag", "trade-off"));
    badges.appendChild(el("span", "tie-tag", "CLAP tied Δ" + fmt(prompt.clap_spread)));
    header.appendChild(badges);
    card.appendChild(header);

    card.appendChild(captionBlock(prompt));
    card.appendChild(el("h5", "sota-sub", "Generations"));
    card.appendChild(audioGrid(prompt));

    var panels = el("div", "sota-panels");
    panels.appendChild(matrixTable(prompt));
    panels.appendChild(summaryTable(prompt));
    card.appendChild(panels);
    return card;
  }

  // ---- dimension legend -------------------------------------------------
  function legend() {
    var wrap = el("div", "dim-legend");
    wrap.appendChild(el("span", "dim-legend-label", "Concept dimensions:"));
    DIM_ORDER.forEach(function (d) {
      wrap.appendChild(el("span", "concept-chip dim-" + d, dimLabel(d)));
    });
    return wrap;
  }

  function render() {
    var mount = document.getElementById("sota-demo");
    if (!mount) return;
    var prompts = window.SOTA_PROMPTS;
    if (!prompts || !prompts.length) {
      mount.appendChild(el("p", "demo-error",
        "SOTA demo data failed to load (static/js/sota_data.js)."));
      return;
    }
    mount.appendChild(legend());

    var counters = {};
    var lastDataset = null;
    prompts.forEach(function (p) {
      if (p.dataset !== lastDataset) {
        var h = el("h3", "sota-dataset-title", DATASETS[p.dataset]);
        h.appendChild(el("span", "sota-dataset-note",
          p.dataset === "musiccaps" ? "10 s generations · MusicCaps captions"
            : "10 s generations · Song Describer captions"));
        mount.appendChild(h);
        lastDataset = p.dataset;
      }
      counters[p.dataset] = (counters[p.dataset] || 0) + 1;
      mount.appendChild(promptCard(p, counters[p.dataset]));
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
