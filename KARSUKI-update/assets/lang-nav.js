/* =========================================================
   KARSUKI — shared cross-page helpers
   - Language dropdown (open/close; navigation via real <a> links)
   - Footer year
   - Product-page gallery: crossfade stage + thumbnail strip +
     auto-advance (pause on hover) + click-to-zoom lightbox
   ========================================================= */
(function () {
  "use strict";

  /* ---- Language dropdown ---- */
  var sw = document.getElementById("langSwitch");
  var btn = document.getElementById("langBtn");
  function setOpen(o) {
    if (!sw) return;
    sw.classList.toggle("open", o);
    if (btn) btn.setAttribute("aria-expanded", String(o));
  }
  if (btn) btn.addEventListener("click", function (e) {
    e.stopPropagation();
    setOpen(!sw.classList.contains("open"));
  });
  document.addEventListener("click", function () { setOpen(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setOpen(false); });

  /* ---- Footer year ---- */
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  /* ---- Product-page gallery ---- */
  document.querySelectorAll("[data-gallery]").forEach(function (g) {
    var stage = g.querySelector(".pg-main");
    var thumbs = Array.prototype.slice.call(g.querySelectorAll(".pg-thumb"));
    var counter = g.querySelector(".pg-counter");
    var n = thumbs.length;
    if (!stage || !n) return;

    var srcs = thumbs.map(function (t) {
      return { full: t.getAttribute("data-full"), remote: t.getAttribute("data-remote") };
    });

    // Remove the static preview image and build crossfade layers.
    var stat = stage.querySelector("img");
    if (stat) stat.parentNode.removeChild(stat);

    var layers = srcs.map(function (s, i) {
      var im = document.createElement("img");
      im.className = "pg-layer" + (i === 0 ? " active" : "");
      im.loading = i < 2 ? "eager" : "lazy";
      im.decoding = "async";
      im.alt = "";
      (function (src) {
        im.addEventListener("error", function onceE() {
          im.removeEventListener("error", onceE);
          if (src.remote && im.src !== src.remote) im.src = src.remote;
        });
      })(s);
      im.src = s.full;
      stage.insertBefore(im, stage.firstChild);
      return im;
    });

    var strip = g.querySelector(".pg-thumbs");
    var idx = 0, timer = null, paused = false;
    function go(i) {
      idx = (i % n + n) % n;
      layers.forEach(function (l, k) { l.classList.toggle("active", k === idx); });
      thumbs.forEach(function (t, k) { t.classList.toggle("active", k === idx); });
      if (counter) counter.textContent = (idx + 1) + " / " + n;
      // Center the active thumb by scrolling ONLY the strip horizontally,
      // never the page (scrollIntoView would jump the whole page while reading).
      var at = thumbs[idx];
      if (strip && at) {
        var sr = strip.getBoundingClientRect();
        var tr = at.getBoundingClientRect();
        var delta = (tr.left - sr.left) - (sr.width / 2 - tr.width / 2);
        strip.scrollBy({ left: delta, behavior: "smooth" });
      }
    }
    function tick() { if (!paused) go(idx + 1); }
    function start() { stop(); if (n > 1) timer = setInterval(tick, 3800); }
    function stop() { if (timer) { clearInterval(timer); timer = null; } }

    thumbs.forEach(function (t, i) { t.addEventListener("click", function () { go(i); }); });
    var prev = g.querySelector(".pg-nav.prev"), nx = g.querySelector(".pg-nav.next");
    if (prev) prev.addEventListener("click", function (e) { e.stopPropagation(); go(idx - 1); });
    if (nx) nx.addEventListener("click", function (e) { e.stopPropagation(); go(idx + 1); });
    g.addEventListener("mouseenter", function () { paused = true; });
    g.addEventListener("mouseleave", function () { paused = false; });

    // Click the main stage -> fullscreen lightbox
    stage.addEventListener("click", function (e) {
      if (e.target.closest(".pg-nav")) return;
      openLightbox(idx);
    });

    function openLightbox(startAt) {
      var lb = document.createElement("div");
      lb.className = "pglb";
      lb.innerHTML =
        '<button class="pglb-close" aria-label="Close">&#10005;</button>' +
        '<button class="pglb-nav prev" aria-label="Previous">&lsaquo;</button>' +
        '<img alt="" />' +
        '<button class="pglb-nav next" aria-label="Next">&rsaquo;</button>' +
        '<span class="pglb-counter"></span>';
      var im = lb.querySelector("img");
      var c = lb.querySelector(".pglb-counter");
      var j = startAt;
      function show(k) {
        j = (k % n + n) % n;
        var s = srcs[j];
        im.onerror = function () { im.onerror = null; if (s.remote) im.src = s.remote; };
        im.src = s.full;
        c.textContent = (j + 1) + " / " + n;
      }
      function close() {
        if (lb.parentNode) document.body.removeChild(lb);
        document.removeEventListener("keydown", key);
      }
      function key(e) {
        if (e.key === "Escape") close();
        else if (e.key === "ArrowLeft") show(j - 1);
        else if (e.key === "ArrowRight") show(j + 1);
      }
      lb.querySelector(".pglb-close").addEventListener("click", close);
      lb.querySelector(".pglb-nav.prev").addEventListener("click", function (e) { e.stopPropagation(); show(j - 1); });
      lb.querySelector(".pglb-nav.next").addEventListener("click", function (e) { e.stopPropagation(); show(j + 1); });
      lb.addEventListener("click", function (e) { if (e.target === lb) close(); });
      document.addEventListener("keydown", key);
      show(j);
      document.body.appendChild(lb);
    }

    go(0);
    start();
  });
})();
