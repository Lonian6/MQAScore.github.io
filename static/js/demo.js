// Renders the MusicEval demo (10 A/B pairs) as a paged deck.
// Data: window.MUSICEVAL_PAIRS (static/js/demo_data.js). Helpers: window.MQA.

(function () {
  "use strict";

  var M = window.MQA;
  var el = M.el;
  var AUDIO_BASE = "static/MusicEval/";
  var SIDES = [
    { key: "A", label: "A" },
    { key: "B", label: "B" }
  ];

  function audioGrid(pair, keyAWins) {
    var grid = el("div", "sota-audio-grid ab2");
    SIDES.forEach(function (s) {
      var data = pair[s.key];
      var isKey = (s.key === "A") ? keyAWins : !keyAWins;
      var cell = el("div", "sota-audio-cell audio-side" + (isKey ? " audio-side-key" : ""));
      var head = el("div", "audio-head");
      head.innerHTML =
        '<span class="audio-tag">' + s.label + "</span>" +
        '<span class="audio-sys">System ' + data.system_id + "</span>";
      cell.appendChild(head);
      var audio = el("audio");
      audio.controls = true; audio.preload = "none";
      audio.src = AUDIO_BASE + data.demo_audio;
      cell.appendChild(audio);
      var meta = el("div", "audio-meta");
      meta.innerHTML =
        '<span title="Human text-alignment MOS (1–5)">TA <b>' + M.fmt(data.mos_ta, 1) + "</b></span>" +
        '<span title="Human overall-quality MOS (1–5)">OQ <b>' + M.fmt(data.mos_oq, 1) + "</b></span>";
      cell.appendChild(meta);
      grid.appendChild(cell);
    });
    return grid;
  }

  function matrixBody(pair, almKey) {
    var tb = el("tbody");
    pair.per_tag.forEach(function (row) {
      var tagId = row.attribute + ":" + row.tag;
      var isKey = tagId === pair.key_tag;
      var tr = el("tr", isKey ? "mqa-key-row" : null);
      var th = el("th", "mqa-tag-col");
      th.innerHTML =
        '<span class="concept-chip dim-' + row.attribute + '">' + row.tag + "</span>" +
        (isKey ? '<span class="mqa-key-flag">key</span>' : "");
      tr.appendChild(th);
      var a = row[almKey + "_A"], b = row[almKey + "_B"];
      var gap = (a || 0) - (b || 0);
      var aWin = gap >= M.WIN_GAP, bWin = gap <= -M.WIN_GAP;
      tr.appendChild(M.scoreCell(a, aWin ? "win" : (bWin ? "lose" : "")));
      tr.appendChild(M.scoreCell(b, bWin ? "win" : (aWin ? "lose" : "")));
      tb.appendChild(tr);
    });
    // MQAScore mean row
    var mtr = el("tr", "mqa-mean-row");
    mtr.appendChild(el("th", "mqa-tag-col", '<span class="mqa-mean-label">MQAScore mean</span>'));
    var ma = pair.A.mqa_mean[almKey], mb = pair.B.mqa_mean[almKey];
    var mgap = (ma || 0) - (mb || 0);
    mtr.appendChild(M.scoreCell(ma, mgap >= M.WIN_GAP ? "win" : (mgap <= -M.WIN_GAP ? "lose" : "")));
    mtr.appendChild(M.scoreCell(mb, mgap <= -M.WIN_GAP ? "win" : (mgap >= M.WIN_GAP ? "lose" : "")));
    tb.appendChild(mtr);
    return tb;
  }

  function matrixPanel(pair) {
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
    var tbl = el("table", "mqa-table");
    var thead = el("thead");
    var tr = el("tr");
    tr.appendChild(el("th", "mqa-tag-col", "Attribute &middot; concept"));
    tr.appendChild(el("th", "mqa-model", "A"));
    tr.appendChild(el("th", "mqa-model", "B"));
    thead.appendChild(tr);
    tbl.appendChild(thead);
    tbl.appendChild(matrixBody(pair, "qwen3omni"));
    scroll.appendChild(tbl);
    panel.appendChild(scroll);

    toggle.addEventListener("click", function (ev) {
      var btn = ev.target.closest(".alm-btn");
      if (!btn) return;
      toggle.querySelectorAll(".alm-btn").forEach(function (x) { x.classList.remove("active"); });
      btn.classList.add("active");
      tbl.replaceChild(matrixBody(pair, btn.getAttribute("data-alm")), tbl.querySelector("tbody"));
    });
    return panel;
  }

  function overallPanel(pair) {
    var A = pair.A, B = pair.B;
    var rows = [
      ["CLAP", A.clap, B.clap],
      ["MuQ", A.muq, B.muq],
      ["AQAScore (Qwen3-Omni)", A.aqa.qwen3omni, B.aqa.qwen3omni],
      ["AQAScore (AF-Next)", A.aqa.af, B.aqa.af],
      ["AQAScore (Music Flamingo)", A.aqa.mf, B.aqa.mf]
    ];
    var panel = el("div", "score-panel");
    panel.appendChild(el("h4", "panel-title tied",
      'Overall scores <span class="panel-note">— nearly tied</span>'));
    var scroll = el("div", "table-scroll");
    var tbl = el("table", "overall-table");
    var thead = el("thead");
    thead.innerHTML = "<tr><th>Global / whole-caption score</th><th>A</th><th>B</th></tr>";
    tbl.appendChild(thead);
    var tb = el("tbody");
    rows.forEach(function (r) {
      var tr = el("tr");
      tr.appendChild(el("th", "score-name", r[0]));
      tr.appendChild(el("td", null, M.fmt(r[1])));
      tr.appendChild(el("td", null, M.fmt(r[2])));
      tb.appendChild(tr);
    });
    tbl.appendChild(tb);
    scroll.appendChild(tbl);
    panel.appendChild(scroll);
    return panel;
  }

  function pairCard(pair) {
    var card = el("article", "sota-prompt");
    var header = el("div", "pair-header");
    var left = el("div", "pair-id");
    left.innerHTML =
      '<span class="pair-num">' + pair.prompt_id + '</span>' +
      '<span class="pair-prompt">A/B pair</span>';
    header.appendChild(left);
    var badges = el("div", "pair-badges");
    var kt = pair.key_tag.split(":");
    badges.appendChild(el("span", "key-tag", "key: " + M.dimLabel(kt[0]) + " &middot; " + kt.slice(1).join(":")));
    if (pair.tradeoff) badges.appendChild(el("span", "opp-tag", "trade-off"));
    header.appendChild(badges);
    card.appendChild(header);

    card.appendChild(M.captionBlock(pair));
    card.appendChild(el("h5", "sota-sub", "Clips"));
    card.appendChild(audioGrid(pair, (pair.key_delta || 0) >= 0));

    var panels = el("div", "sota-panels");
    panels.appendChild(matrixPanel(pair));
    panels.appendChild(overallPanel(pair));
    card.appendChild(panels);
    return card;
  }

  function render() {
    var mount = document.getElementById("musiceval-demo");
    if (!mount) return;
    var pairs = window.MUSICEVAL_PAIRS;
    if (!pairs || !pairs.length) {
      mount.appendChild(M.el("p", "demo-error", "Demo data failed to load (static/js/demo_data.js)."));
      return;
    }
    mount.appendChild(M.legend());
    M.createDeck({
      mount: mount,
      items: pairs,
      renderItem: pairCard,
      optionLabel: function (p) {
        var kt = p.key_tag.split(":");
        return p.prompt_id + "  ·  key: " + M.dimLabel(kt[0]) + " " + kt.slice(1).join(":");
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
