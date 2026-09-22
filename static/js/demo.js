// Renders the MusicEval demo pairs into #musiceval-demo.
// Data comes from window.MUSICEVAL_PAIRS (static/js/demo_data.js).

(function () {
  "use strict";

  var AUDIO_BASE = "static/MusicEval/";
  var MODELS = [
    { key: "qwen3omni", label: "Qwen3-Omni" },
    { key: "af", label: "AF-Next" },
    { key: "mf", label: "Music Flamingo" }
  ];
  // Threshold (absolute P(Yes) gap) above which we tint a cell as the winner.
  var WIN_GAP = 0.15;

  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined && html !== null) e.innerHTML = html;
    return e;
  }

  function fmt(v, digits) {
    if (v === null || v === undefined || isNaN(v)) return "–";
    return Number(v).toFixed(digits === undefined ? 3 : digits);
  }

  // Pretty attribute name for the badge / labels.
  function attrLabel(attr) {
    if (attr === "mood_theme") return "mood/theme";
    return attr;
  }

  // A single P(Yes) cell: number + mini bar; tinted for the higher side.
  function scoreCell(value, isWinner, isLoser) {
    var cls = "mqa-cell";
    if (isWinner) cls += " win";
    else if (isLoser) cls += " lose";
    var td = el("td", cls);
    var pct = Math.max(0, Math.min(1, value || 0)) * 100;
    td.innerHTML =
      '<span class="mqa-num">' + fmt(value) + "</span>" +
      '<span class="mqa-bar"><span class="mqa-bar-fill" style="width:' + pct.toFixed(1) + '%"></span></span>';
    return td;
  }

  // Build the audio player block for one side (A or B).
  function audioBlock(side, data, isKeyWinner) {
    var wrap = el("div", "audio-side" + (isKeyWinner ? " audio-side-key" : ""));
    var head = el("div", "audio-head");
    head.innerHTML =
      '<span class="audio-tag">' + side + "</span>" +
      '<span class="audio-sys">System ' + data.system_id + "</span>";
    wrap.appendChild(head);

    var audio = el("audio");
    audio.controls = true;
    audio.preload = "none";
    audio.src = AUDIO_BASE + data.demo_audio;
    wrap.appendChild(audio);

    var meta = el("div", "audio-meta");
    meta.innerHTML =
      '<span title="Human text-alignment MOS (1–5)">TA <b>' + fmt(data.mos_ta, 1) + "</b></span>" +
      '<span title="Human overall-quality MOS (1–5)">OQ <b>' + fmt(data.mos_oq, 1) + "</b></span>";
    wrap.appendChild(meta);
    return wrap;
  }

  // Compact "overall scores (nearly tied)" table.
  function overallTable(pair) {
    var A = pair.A, B = pair.B;
    var rows = [
      ["CLAP", A.clap, B.clap],
      ["MuQ", A.muq, B.muq],
      ["AQAScore (Qwen3-Omni)", A.aqa.qwen3omni, B.aqa.qwen3omni],
      ["AQAScore (AF-Next)", A.aqa.af, B.aqa.af],
      ["AQAScore (Music Flamingo)", A.aqa.mf, B.aqa.mf]
    ];
    var tbl = el("table", "overall-table");
    var thead = el("thead");
    thead.innerHTML = "<tr><th>Global / whole-caption score</th><th>A</th><th>B</th></tr>";
    tbl.appendChild(thead);
    var tb = el("tbody");
    rows.forEach(function (r) {
      var tr = el("tr");
      tr.appendChild(el("th", "score-name", r[0]));
      tr.appendChild(el("td", null, fmt(r[1])));
      tr.appendChild(el("td", null, fmt(r[2])));
      tb.appendChild(tr);
    });
    tbl.appendChild(tb);
    return tbl;
  }

  // The per-attribute MQAScore table across the 3 LALMs.
  function mqaTable(pair) {
    var tbl = el("table", "mqa-table");

    var thead = el("thead");
    var top = el("tr");
    top.appendChild(el("th", "mqa-tag-col", "Attribute &middot; concept"));
    MODELS.forEach(function (m) {
      var th = el("th", "mqa-model", m.label);
      th.setAttribute("colspan", "2");
      top.appendChild(th);
    });
    thead.appendChild(top);
    var sub = el("tr", "mqa-subhead");
    sub.appendChild(el("th", "mqa-tag-col", ""));
    MODELS.forEach(function () {
      sub.appendChild(el("th", null, "A"));
      sub.appendChild(el("th", null, "B"));
    });
    thead.appendChild(sub);
    tbl.appendChild(thead);

    var tb = el("tbody");
    var keyTag = pair.key_tag; // e.g. "genre:pop"
    pair.per_tag.forEach(function (row) {
      var tagId = row.attribute + ":" + row.tag;
      var isKey = tagId === keyTag;
      var tr = el("tr", isKey ? "mqa-key-row" : null);
      var nameCell = el("th", "mqa-tag-col");
      nameCell.innerHTML =
        '<span class="mqa-attr">' + attrLabel(row.attribute) + "</span>" +
        '<span class="mqa-concept">' + row.tag + "</span>" +
        (isKey ? '<span class="mqa-key-flag" title="Key diverging attribute">key</span>' : "");
      tr.appendChild(nameCell);
      MODELS.forEach(function (m) {
        var a = row[m.key + "_A"], b = row[m.key + "_B"];
        var gap = (a || 0) - (b || 0);
        var aWin = gap >= WIN_GAP, bWin = gap <= -WIN_GAP;
        tr.appendChild(scoreCell(a, aWin, bWin));
        tr.appendChild(scoreCell(b, bWin, aWin));
      });
      tb.appendChild(tr);
    });

    // MQAScore mean summary row.
    var meanTr = el("tr", "mqa-mean-row");
    meanTr.appendChild(el("th", "mqa-tag-col", '<span class="mqa-attr">MQAScore</span><span class="mqa-concept">mean (all concepts)</span>'));
    MODELS.forEach(function (m) {
      var a = pair.A.mqa_mean[m.key], b = pair.B.mqa_mean[m.key];
      var gap = (a || 0) - (b || 0);
      meanTr.appendChild(scoreCell(a, gap >= WIN_GAP, gap <= -WIN_GAP));
      meanTr.appendChild(scoreCell(b, gap <= -WIN_GAP, gap >= WIN_GAP));
    });
    tb.appendChild(meanTr);

    tbl.appendChild(tb);
    return tbl;
  }

  function pairCard(pair) {
    var card = el("article", "demo-pair");

    // Header: index, prompt id, key-tag badge, trade-off badge.
    var header = el("div", "pair-header");
    var left = el("div", "pair-id");
    left.innerHTML =
      '<span class="pair-num">Pair ' + String(pair.pair).padStart(2, "0") + "</span>" +
      '<span class="pair-prompt">prompt ' + pair.prompt_id + "</span>";
    header.appendChild(left);

    var badges = el("div", "pair-badges");
    var kt = pair.key_tag.split(":");
    badges.appendChild(el("span", "key-tag",
      "key: " + attrLabel(kt[0]) + " &middot; " + kt[1]));
    if (pair.tradeoff && pair.opp_tag) {
      var ot = pair.opp_tag.split(":");
      badges.appendChild(el("span", "opp-tag",
        "trade-off: " + attrLabel(ot[0]) + " &middot; " + ot[1]));
    }
    header.appendChild(badges);
    card.appendChild(header);

    // Shared caption (the text-to-music prompt).
    var cap = el("blockquote", "pair-caption");
    cap.innerHTML = '<span class="caption-label">Prompt</span>' + pair.caption;
    card.appendChild(cap);

    // Two audio players.
    var keyGapPositive = (pair.key_delta || 0) >= 0; // A wins key tag when positive
    var ab = el("div", "audio-ab");
    ab.appendChild(audioBlock("A", pair.A, keyGapPositive));
    ab.appendChild(audioBlock("B", pair.B, !keyGapPositive));
    card.appendChild(ab);

    // Two score panels.
    var panels = el("div", "score-panels");

    var overall = el("div", "score-panel overall-panel");
    overall.appendChild(el("h4", "panel-title tied",
      "Overall scores <span class=\"panel-note\">— nearly tied</span>"));
    var ow = el("div", "table-scroll");
    ow.appendChild(overallTable(pair));
    overall.appendChild(ow);
    panels.appendChild(overall);

    var mqa = el("div", "score-panel mqa-panel");
    mqa.appendChild(el("h4", "panel-title reveal",
      "MQAScore <span class=\"panel-note\">— per attribute, P(Yes)</span>"));
    var mw = el("div", "table-scroll");
    mw.appendChild(mqaTable(pair));
    mqa.appendChild(mw);
    panels.appendChild(mqa);

    card.appendChild(panels);
    return card;
  }

  function render() {
    var mount = document.getElementById("musiceval-demo");
    if (!mount) return;
    var pairs = window.MUSICEVAL_PAIRS;
    if (!pairs || !pairs.length) {
      mount.appendChild(el("p", "demo-error",
        "Demo data failed to load. Please ensure static/js/demo_data.js is present."));
      return;
    }
    pairs.forEach(function (p) {
      mount.appendChild(pairCard(p));
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
