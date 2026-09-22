// Shared helpers for the MQAScore demo sections (MusicEval + SOTA).
// Exposes window.MQA with DOM helpers, concept highlighting, score cells,
// a dimension legend, and a paged "deck" that shows one item at a time.

(function () {
  "use strict";

  var DIMS = {
    genre: "Genre",
    instrument: "Instrument",
    mood_theme: "Mood / Theme",
    vocal: "Vocal",
    context: "Context"
  };
  var DIM_ORDER = ["genre", "instrument", "mood_theme", "vocal", "context"];

  var ALMS = [
    { key: "qwen3omni", label: "Qwen3-Omni" },
    { key: "af", label: "AF-Next" },
    { key: "mf", label: "Music Flamingo" }
  ];
  var WIN_GAP = 0.15;

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

  // Caption block with inline per-dimension concept highlighting + "also detected" chips.
  function captionBlock(item) {
    var wrap = el("div", "sota-caption");
    wrap.appendChild(el("span", "caption-label", "Prompt"));
    var body = el("span", "caption-body");
    (item.caption_segments || [{ text: item.caption || "" }]).forEach(function (seg) {
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

    if (item.unlocated && item.unlocated.length) {
      var extra = el("div", "unlocated");
      extra.appendChild(el("span", "unlocated-label", "also detected:"));
      item.unlocated.forEach(function (c) {
        var chip = el("span", "concept-chip dim-" + c.dim, c.tag);
        chip.title = dimLabel(c.dim);
        extra.appendChild(chip);
      });
      wrap.appendChild(extra);
    }
    return wrap;
  }

  // A P(Yes) score cell with a mini bar; cls adds win/lose/gt-cell tints.
  function scoreCell(value, cls) {
    var td = el("td", "mqa-cell" + (cls ? " " + cls : ""));
    var pct = Math.max(0, Math.min(1, value || 0)) * 100;
    td.innerHTML =
      '<span class="mqa-num">' + fmt(value) + "</span>" +
      '<span class="mqa-bar"><span class="mqa-bar-fill" style="width:' + pct.toFixed(1) + '%"></span></span>';
    return td;
  }

  // Dimension color legend.
  function legend() {
    var wrap = el("div", "dim-legend");
    wrap.appendChild(el("span", "dim-legend-label", "Concept dimensions:"));
    DIM_ORDER.forEach(function (d) {
      wrap.appendChild(el("span", "concept-chip dim-" + d, dimLabel(d)));
    });
    return wrap;
  }

  // Paged deck: one item visible at a time, with dropdown + prev/next + swipe + keys.
  //   opts.mount       : container element
  //   opts.items       : array
  //   opts.renderItem  : fn(item, index) -> node
  //   opts.optionLabel : fn(item, index) -> string  (dropdown + counter)
  //   opts.groupLabel  : fn(item, index) -> string|null (optgroup; optional)
  function createDeck(opts) {
    var items = opts.items || [];
    var idx = 0;

    var deck = el("div", "deck");
    var nav = el("div", "deck-nav");

    var prev = el("button", "deck-arrow", '<i class="fas fa-chevron-left"></i>');
    prev.setAttribute("aria-label", "Previous");
    var next = el("button", "deck-arrow", '<i class="fas fa-chevron-right"></i>');
    next.setAttribute("aria-label", "Next");

    var selectWrap = el("div", "deck-select-wrap");
    var select = el("select", "deck-select");
    var useGroups = typeof opts.groupLabel === "function";
    var curGroup = null, groupEl = null;
    items.forEach(function (it, i) {
      var opt = el("option", null, opts.optionLabel(it, i));
      opt.value = String(i);
      if (useGroups) {
        var g = opts.groupLabel(it, i);
        if (g !== curGroup) {
          groupEl = document.createElement("optgroup");
          groupEl.label = g;
          select.appendChild(groupEl);
          curGroup = g;
        }
        groupEl.appendChild(opt);
      } else {
        select.appendChild(opt);
      }
    });
    selectWrap.appendChild(select);

    var counter = el("span", "deck-counter");

    nav.appendChild(prev);
    nav.appendChild(selectWrap);
    nav.appendChild(counter);
    nav.appendChild(next);
    deck.appendChild(nav);

    var viewport = el("div", "deck-viewport");
    deck.appendChild(viewport);
    deck.setAttribute("tabindex", "0");

    function show(i) {
      idx = (i + items.length) % items.length;
      select.value = String(idx);
      counter.textContent = (idx + 1) + " / " + items.length;
      viewport.innerHTML = "";
      viewport.appendChild(opts.renderItem(items[idx], idx));
    }

    prev.addEventListener("click", function () { show(idx - 1); });
    next.addEventListener("click", function () { show(idx + 1); });
    select.addEventListener("change", function () { show(parseInt(select.value, 10)); });

    deck.addEventListener("keydown", function (ev) {
      if (ev.target.tagName === "SELECT") return;
      if (ev.key === "ArrowLeft") { show(idx - 1); ev.preventDefault(); }
      else if (ev.key === "ArrowRight") { show(idx + 1); ev.preventDefault(); }
    });

    // Touch swipe on the viewport.
    var sx = null, sy = null;
    viewport.addEventListener("touchstart", function (e) {
      sx = e.touches[0].clientX; sy = e.touches[0].clientY;
    }, { passive: true });
    viewport.addEventListener("touchend", function (e) {
      if (sx === null) return;
      var dx = e.changedTouches[0].clientX - sx;
      var dy = e.changedTouches[0].clientY - sy;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
        show(idx + (dx < 0 ? 1 : -1));
      }
      sx = sy = null;
    }, { passive: true });

    opts.mount.appendChild(deck);
    show(0);
    return { show: show };
  }

  window.MQA = {
    DIMS: DIMS,
    DIM_ORDER: DIM_ORDER,
    ALMS: ALMS,
    WIN_GAP: WIN_GAP,
    el: el,
    fmt: fmt,
    dimLabel: dimLabel,
    captionBlock: captionBlock,
    scoreCell: scoreCell,
    legend: legend,
    createDeck: createDeck
  };
})();
