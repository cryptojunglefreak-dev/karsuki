/* =========================================================
   KARSUKI — shared cross-page helpers
   - Language dropdown (open/close; navigation via real <a> links)
   - Footer year
   - Product-page gallery (thumbnail -> main image swap)
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
    var mainImg = g.querySelector(".pg-main img");
    var counter = g.querySelector(".pg-counter");
    var thumbs = Array.prototype.slice.call(g.querySelectorAll(".pg-thumb"));
    var n = thumbs.length;

    function select(i) {
      var t = thumbs[i];
      if (!t || !mainImg) return;
      var full = t.getAttribute("data-full");
      var remote = t.getAttribute("data-remote");
      if (full) {
        mainImg.onerror = function () { this.onerror = null; if (remote) this.src = remote; };
        mainImg.src = full;
      }
      thumbs.forEach(function (x) { x.classList.remove("active"); });
      t.classList.add("active");
      if (counter) counter.textContent = (i + 1) + " / " + n;
    }

    thumbs.forEach(function (t, i) {
      t.addEventListener("click", function () { select(i); });
    });

    var prev = g.querySelector(".pg-nav.prev");
    var next = g.querySelector(".pg-nav.next");
    var cur = 0;
    if (prev) prev.addEventListener("click", function () { cur = (cur - 1 + n) % n; select(cur); });
    if (next) next.addEventListener("click", function () { cur = (cur + 1) % n; select(cur); });
    thumbs.forEach(function (t, i) { t.addEventListener("click", function () { cur = i; }); });
  });
})();
