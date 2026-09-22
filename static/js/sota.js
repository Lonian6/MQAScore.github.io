// Renders the SOTA-generator demo (20 prompts) as a paged deck.
// Data: window.SOTA_PROMPTS (static/js/sota_data.js). Helpers: window.MQA.
// Story: CLAP ties the 4 generators, but MQAScore separates them per attribute.

(function () {
  "use strict";

  var M = window.MQA;
  var el = M.el;
  var AUDIO_BASE = "static/sota/";

  var MODELS = [
    { key: "musicgen_large", name: "MusicGen-Large", short: "MusicGen" },
    { key: "stable_audio_3", name: "Stable Audio 3", short: "Stable Audio" },
    { key: "meanaudio", name: "MeanAudio", short: "MeanAudio" },
    { key: "acestep_1_5", name: "ACE-Step 1.5", short: "ACE-Step" },
    { key: "GT", name: "Ground Truth", short: "GT", gt: true }
  ];
  var GENERATORS = MODELS.filter(function (m) { return !m.gt; });
  var DATASETS = { musiccaps: "MusicCaps", sdd: "Song Describer" };

  function audioGrid(prompt) {
    var grid = el("div", "sota-audio-grid");
    MODELS.forEach(function (m) {
      var md = prompt.models[m.key];
      if (!md) return;
      var cell = el("div", "sota-audio-cell" + (m.gt ? " is-gt" : ""));
      cell.appendChild(el("span", "sota-model-name",
        m.name + (m.gt ? ' <span class="gt-tag">reference</span>' : "")));
      var audio = el("audio");
      audio.controls = true; audio.preload = "none";
      audio.src = AUDIO_BASE + md.demo_audio;
      cell.appendChild(audio);
      grid.appendChild(cell);
    });
    return grid;
  }

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
      var vals = GENERATORS.map(function (m) {
        return (row.scores[m.key] && row.scores[m.key][almKey]) || 0;
      });
      var max = Math.max.apply(null, vals), min = Math.min.apply(null, vals);
      MODELS.forEach(function (m) {
        var v = (row.scores[m.key] && row.scores[m.key][almKey]);
        if (m.gt) { tr.appendChild(M.scoreCell(v, "gt-cell")); return; }
        var cls = (max - min >= M.WIN_GAP) ? (v === max ? "win" : (v === min ? "lose" : "")) : "";
        tr.appendChild(M.scoreCell(v, cls));
      });
      tb.appendChild(tr);
    });
    var mtr = el("tr", "mqa-mean-row");
    mtr.appendChild(el("th", "mqa-tag-col", '<span class="mqa-mean-label">MQAScore mean</span>'));
    var means = GENERATORS.map(function (m) { return (prompt.models[m.key].mqa_mean || {})[almKey] || 0; });
    var mmax = Math.max.apply(null, means), mmin = Math.min.apply(null, means);
    MODELS.forEach(function (m) {
      var v = (prompt.models[m.key].mqa_mean || {})[almKey];
      if (m.gt) { mtr.appendChild(M.scoreCell(v, "gt-cell")); return; }
      var cls = (mmax - mmin >= M.WIN_GAP) ? (v === mmax ? "win" : (v === mmin ? "lose" : "")) : "";
      mtr.appendChild(M.scoreCell(v, cls));
    });
    tb.appendChild(mtr);
    return tb;
  }

  function matrixPanel(prompt) {
    var panel = el("div", "score-panel");
    var head = el("div", "panel-head");
    head.appendChild(el("h4", "panel-title reveal",
      'MQAScore <span class="panel-note">— per attribute, P(Yes)</span>'));
    var toggle = el("div", "alm-toggle");
    M.ALMS.forEach(function (a, i) {
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
      tbl.replaceChild(matrixBody(prompt, btn.getAttribute("data-alm")), tbl.querySelector("tbody"));
    });
    return panel;
  }

  function shortAlm(label) {
    return label.replace("Music Flamingo", "MF").replace("Qwen3-Omni", "Qwen").replace("AF-Next", "AF");
  }

  function summaryPanel(prompt) {
    var panel = el("div", "score-panel");
    panel.appendChild(el("h4", "panel-title tied",
      'Overall &amp; global scores <span class="panel-note">— CLAP ties the generators (spread ' + M.fmt(prompt.clap_spread) + ')</span>'));
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
    M.ALMS.forEach(function (a) { sub.appendChild(el("th", null, shortAlm(a.label))); });
    M.ALMS.forEach(function (a) { sub.appendChild(el("th", null, shortAlm(a.label))); });
    thead.appendChild(sub);
    tbl.appendChild(thead);

    var tb = el("tbody");
    MODELS.forEach(function (m) {
      var md = prompt.models[m.key];
      var tr = el("tr", m.gt ? "gt-row" : null);
      tr.appendChild(el("th", "sum-model-col", m.name + (m.gt ? ' <span class="gt-tag">ref</span>' : "")));
      tr.appendChild(el("td", null, M.fmt(md.clap_caption)));
      tr.appendChild(el("td", null, M.fmt(md.muq_caption)));
      M.ALMS.forEach(function (a) { tr.appendChild(el("td", null, M.fmt((md.mqa_mean || {})[a.key]))); });
      M.ALMS.forEach(function (a) { tr.appendChild(el("td", null, M.fmt((md.aqascore || {})[a.key]))); });
      tb.appendChild(tr);
    });
    tbl.appendChild(tb);
    scroll.appendChild(tbl);
    panel.appendChild(scroll);
    return panel;
  }

  function promptCard(prompt) {
    var card = el("article", "sota-prompt");
    var header = el("div", "pair-header");
    var left = el("div", "pair-id");
    left.innerHTML =
      '<span class="pair-num">' + DATASETS[prompt.dataset] + " " +
      String(prompt._idx).padStart(2, "0") + "</span>" +
      '<span class="pair-prompt">' + prompt.id + "</span>";
    header.appendChild(left);
    var badges = el("div", "pair-badges");
    var kt = prompt.key_tag.split(":");
    badges.appendChild(el("span", "key-tag", "key: " + M.dimLabel(kt[0]) + " &middot; " + kt.slice(1).join(":")));
    if (prompt.tradeoff) badges.appendChild(el("span", "opp-tag", "trade-off"));
    badges.appendChild(el("span", "tie-tag", "CLAP tied Δ" + M.fmt(prompt.clap_spread)));
    header.appendChild(badges);
    card.appendChild(header);

    card.appendChild(M.captionBlock(prompt));
    card.appendChild(el("h5", "sota-sub", "Generations"));
    card.appendChild(audioGrid(prompt));

    var panels = el("div", "sota-panels");
    panels.appendChild(matrixPanel(prompt));
    panels.appendChild(summaryPanel(prompt));
    card.appendChild(panels);
    return card;
  }

  function render() {
    var mount = document.getElementById("sota-demo");
    if (!mount) return;
    var prompts = window.SOTA_PROMPTS;
    if (!prompts || !prompts.length) {
      mount.appendChild(el("p", "demo-error", "SOTA demo data failed to load (static/js/sota_data.js)."));
      return;
    }
    // per-dataset running index for labels
    var counters = {};
    prompts.forEach(function (p) {
      counters[p.dataset] = (counters[p.dataset] || 0) + 1;
      p._idx = counters[p.dataset];
    });

    mount.appendChild(M.legend());
    M.createDeck({
      mount: mount,
      items: prompts,
      renderItem: promptCard,
      optionLabel: function (p) {
        return DATASETS[p.dataset] + " " + String(p._idx).padStart(2, "0") +
          " · " + p.id + " · key " + p.key_tag.replace(":", " ");
      },
      groupLabel: function (p) { return DATASETS[p.dataset]; }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
