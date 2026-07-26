/* =========================================================
   KARSUKI — interactions
   Sticky nav · mobile menu · reveals · lazy · ambient parallax
   cursor glow · scroll progress · magnetic · tilt · counters
   3D steel fender (Three.js)
   ========================================================= */
(function () {
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- Year ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Sticky header ---- */
  var header = document.getElementById("siteHeader");
  function onHeader() {
    var y = window.scrollY || window.pageYOffset;
    header.classList.toggle("scrolled", y > 40);
  }
  window.addEventListener("scroll", onHeader, { passive: true });
  onHeader();

  /* ---- Scroll progress bar ---- */
  var bar = document.getElementById("scrollProgress");
  function onProgress() {
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    var p = max > 0 ? (h.scrollTop || window.scrollY) / max : 0;
    bar.style.width = (p * 100).toFixed(2) + "%";
  }
  window.addEventListener("scroll", onProgress, { passive: true });
  onProgress();

  /* ---- Mobile menu ---- */
  var toggle = document.getElementById("menuToggle");
  var menu = document.getElementById("mobileMenu");
  function setMenu(open) {
    toggle.classList.toggle("open", open);
    menu.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    menu.setAttribute("aria-hidden", String(!open));
    document.body.style.overflow = open ? "hidden" : "";
  }
  if (toggle && menu) {
    toggle.addEventListener("click", function () { setMenu(!menu.classList.contains("open")); });
    menu.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && menu.classList.contains("open")) setMenu(false); });
  }

  /* ---- Scroll reveal ---- */
  function stagger(sel) {
    document.querySelectorAll(sel).forEach(function (group) {
      group.querySelectorAll(".reveal").forEach(function (el, i) { el.style.setProperty("--d", (i * 0.08) + "s"); });
    });
  }
  stagger(".card-grid"); stagger(".why-grid"); stagger(".gallery-grid");

  var revealEls = [].slice.call(document.querySelectorAll(".reveal"));
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else { revealEls.forEach(function (el) { el.classList.add("in"); }); }

  /* ---- Count-up stats ---- */
  var counters = [].slice.call(document.querySelectorAll("[data-count]"));
  function runCounter(el) {
    if (el.dataset.text && el.dataset.count === "0") { el.textContent = el.dataset.text; return; }
    var target = parseFloat(el.dataset.count) || 0;
    var suffix = el.dataset.suffix || "";
    var start = performance.now(), dur = 1400;
    function tick(now) {
      var t = Math.min((now - start) / dur, 1);
      var eased = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  if ("IntersectionObserver" in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { runCounter(e.target); cio.unobserve(e.target); } });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { cio.observe(el); });
  } else { counters.forEach(runCounter); }

  /* ---- Smooth scroll with header offset ---- */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var id = link.getAttribute("href"); if (id.length < 2) return;
      var target = document.querySelector(id); if (!target) return;
      e.preventDefault();
      var top = target.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top: top, behavior: reduce ? "auto" : "smooth" });
    });
  });

  if (!reduce) {
    /* ---- Ambient background parallax + cursor glow ---- */
    var ambient = document.getElementById("ambientImg");
    var glow = document.getElementById("cursorGlow");
    var heroBg = document.getElementById("heroBg");
    var mx = 0, my = 0, cx = 0, cy = 0;
    window.addEventListener("mousemove", function (e) {
      mx = (e.clientX / window.innerWidth - 0.5);
      my = (e.clientY / window.innerHeight - 0.5);
      if (glow) { glow.style.opacity = "1"; glow.style.left = e.clientX + "px"; glow.style.top = e.clientY + "px"; }
    });
    window.addEventListener("mouseleave", function () { if (glow) glow.style.opacity = "0"; });
    (function loop() {
      cx += (mx - cx) * 0.06; cy += (my - cy) * 0.06;
      if (ambient) ambient.style.transform = "scale(1.1) translate(" + (cx * -40) + "px," + (cy * -40) + "px)";
      if (heroBg) heroBg.style.transform = "scale(1.08) translate(" + (cx * 18) + "px," + (cy * 18) + "px)";
      requestAnimationFrame(loop);
    })();

    /* ---- Magnetic buttons ---- */
    document.querySelectorAll(".magnetic").forEach(function (btn) {
      btn.addEventListener("mousemove", function (e) {
        var r = btn.getBoundingClientRect();
        var x = e.clientX - r.left - r.width / 2;
        var y = e.clientY - r.top - r.height / 2;
        btn.style.transform = "translate(" + x * 0.25 + "px," + y * 0.3 + "px)";
      });
      btn.addEventListener("mouseleave", function () { btn.style.transform = ""; });
    });

    /* ---- Tilt on cards / media ---- */
    document.querySelectorAll(".tilt").forEach(function (el) {
      el.addEventListener("mousemove", function (e) {
        var r = el.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - 0.5;
        var py = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = "perspective(900px) rotateY(" + px * 6 + "deg) rotateX(" + (-py * 6) + "deg) translateY(-6px)";
      });
      el.addEventListener("mouseleave", function () { el.style.transform = ""; });
    });
  }

  /* ---- Local-first images: fall back to the manufacturer URL if a local copy is missing ---- */
  document.querySelectorAll("img[data-remote]").forEach(function (img) {
    img.addEventListener("error", function onErr() {
      img.removeEventListener("error", onErr);
      var r = img.getAttribute("data-remote");
      if (r && img.src !== r) img.src = r;
    });
  });

  /* ---- Lazy fallback ---- */
  if (!("loading" in HTMLImageElement.prototype) && "IntersectionObserver" in window) {
    var imgIo = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (e) { if (e.isIntersecting) obs.unobserve(e.target); });
    });
    document.querySelectorAll("img[loading='lazy']").forEach(function (img) { imgIo.observe(img); });
  }

  /* =======================================================
     3D STEEL FENDER (Three.js)
     ======================================================= */
  var stage = document.getElementById("viewerStage");
  var canvas = document.getElementById("fenderCanvas");

  function fallback3D() { if (stage) stage.classList.add("no-3d"); }

  if (!stage || !canvas || typeof THREE === "undefined") { fallback3D(); return; }

  try {
    var renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 0.4, 8.6);

    /* --- Curved panel showing the REAL fender photo (transparent cut-out) --- */
    var fAspect = 641 / 616;            // fender-cut.png width / height
    var PW = 5.4, PH = PW / fAspect;
    var geo = new THREE.PlaneGeometry(PW, PH, 64, 48);
    // gentle press-curve so the flat photo reads as a 3D steel sheet
    var pos = geo.attributes.position;
    var bendK = 0.14;
    for (var i = 0; i < pos.count; i++) {
      var x = pos.getX(i);
      pos.setZ(i, -(x * x) * bendK);
    }
    geo.computeVertexNormals();

    var material = new THREE.MeshBasicMaterial({
      transparent: true, side: THREE.DoubleSide, alphaTest: 0.35, color: 0xffffff
    });
    var fender = new THREE.Mesh(geo, material);
    fender.visible = false; // hidden until the real fender texture is applied (no white flash)
    var group = new THREE.Group();
    group.add(fender);
    scene.add(group);

    // Skin the panel with the ACTUAL fender photo.
    // Embedded as a data URI (KARSUKI/fender-tex.js) so WebGL can use it even from file://
    var texSrc = window.KARSUKI_FENDER || "KARSUKI/fender-cut.png";
    new THREE.TextureLoader().load(
      texSrc,
      function (tex) {
        if (THREE.sRGBEncoding) tex.encoding = THREE.sRGBEncoding;
        if (renderer.capabilities && renderer.capabilities.getMaxAnisotropy) tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
        material.map = tex; material.needsUpdate = true;
        fender.visible = true;
      },
      undefined,
      function () { fallback3D(); if (canvas) canvas.style.display = "none"; }
    );

    /* --- Lighting (studio + red rim) --- */
    scene.add(new THREE.HemisphereLight(0xffffff, 0x0a0a0c, 0.9));
    var key = new THREE.DirectionalLight(0xffffff, 2.1); key.position.set(4, 6, 6); scene.add(key);
    var fill = new THREE.DirectionalLight(0x9db4ff, 0.8); fill.position.set(-6, 2, 4); scene.add(fill);
    var rim = new THREE.PointLight(0xd30000, 3.2, 40); rim.position.set(-5, -1, -4); scene.add(rim);
    var top = new THREE.SpotLight(0xffffff, 1.6, 40, Math.PI / 5, 0.5); top.position.set(0, 8, 2); scene.add(top);

    /* --- Resize --- */
    function resize() {
      var w = stage.clientWidth, h = stage.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h, false);
      camera.aspect = w / h; camera.updateProjectionMatrix();
    }
    resize();
    window.addEventListener("resize", resize);

    /* --- Interaction: drag to rotate --- */
    var targetRY = -0.5, targetRX = 0.05, curRY = -0.5, curRX = 0.05;
    var dragging = false, lastX = 0, lastY = 0, auto = true;

    function down(x, y) { dragging = true; auto = false; lastX = x; lastY = y; stage.classList.add("grabbing"); }
    function move(x, y) {
      if (!dragging) return;
      targetRY += (x - lastX) * 0.008;
      targetRX += (y - lastY) * 0.006;
      targetRX = Math.max(-0.8, Math.min(0.8, targetRX));
      lastX = x; lastY = y;
    }
    function up() { dragging = false; stage.classList.remove("grabbing"); setTimeout(function () { auto = true; }, 2500); }

    canvas.addEventListener("mousedown", function (e) { down(e.clientX, e.clientY); });
    window.addEventListener("mousemove", function (e) { move(e.clientX, e.clientY); });
    window.addEventListener("mouseup", up);
    canvas.addEventListener("touchstart", function (e) { down(e.touches[0].clientX, e.touches[0].clientY); }, { passive: true });
    canvas.addEventListener("touchmove", function (e) { move(e.touches[0].clientX, e.touches[0].clientY); }, { passive: true });
    canvas.addEventListener("touchend", up);

    // gentle mouse influence when idle
    var pmx = 0, pmy = 0;
    stage.addEventListener("mousemove", function (e) {
      var r = stage.getBoundingClientRect();
      pmx = (e.clientX - r.left) / r.width - 0.5;
      pmy = (e.clientY - r.top) / r.height - 0.5;
    });

    var visible = true;
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (es) { visible = es[0].isIntersecting; }, { threshold: 0.05 })
        .observe(stage);
    }

    function animate() {
      requestAnimationFrame(animate);
      if (!visible) return;
      if (auto && !reduce) targetRY += 0.0045;
      var influenceX = auto ? pmx * 0.4 : 0;
      var influenceY = auto ? pmy * 0.25 : 0;
      curRY += (targetRY + influenceX - curRY) * 0.08;
      curRX += (targetRX + influenceY - curRX) * 0.08;
      group.rotation.y = curRY;
      group.rotation.x = curRX;
      renderer.render(scene, camera);
    }
    animate();
  } catch (err) {
    fallback3D();
  }
})();

/* =========================================================
   Subaru Impreza 22B — Metal Bodykit gallery modal
   ========================================================= */
(function () {
  "use strict";
  var UP = "https://www.zetongaraz.com/wp-content/uploads/";

  var KITS = {
    kit22b: {
      eyebrow: "Metal Bodykit · 22B",
      title: "22B Body Kit",
      tag: "22B METAL KIT / 部品",
      desc: [
        "Metal pressed body panels for the Subaru Impreza 22B, formed on a hydraulic press and designed from 3D scans of a genuine 22B (unit 337/400). Rear quarters and front fenders are offered as separate components.",
        "Made from 0.8&nbsp;mm Zincore galvanized sheet steel and engineered for straightforward fitment. Integrated flanges keep the welds in hidden areas, so only the rear pillar needs proper welding.",
        "Rear quarters are in production and on sale; front fenders launched in early 2026, with the WRC kit following through 2026."
      ],
      specs: [["Material", "0.8mm Zincore steel"], ["Method", "Hydraulic press"], ["Source", "Scan of unit 337/400"], ["Panels", "Front fenders · rear quarters"]],
      images: [
        "2025/06/metalbodykit22b.jpg",
        "2025/06/22b-1024x948.jpg",
        "2025/06/frontfender-oem-1024x809.jpg",
        "2025/06/Zrzut-ekranu-2025-06-07-183958-1024x655.png",
        "2025/06/Zrzut-ekranu-2025-06-07-183833-1024x696.png",
        "2025/06/WhatsApp-Image-2025-03-13-at-06.41.59-1024x562.jpeg",
        "2025/06/WhatsApp-Image-2025-03-29-at-06.52.46.jpeg",
        "2025/06/WhatsApp-Image-2025-03-27-at-09.36.18.jpeg",
        "2025/07/WhatsApp-Image-2025-06-30-at-14.24.38.jpeg",
        "2025/07/WhatsApp-Image-2025-06-30-at-14.25.14.jpeg",
        "2025/06/WhatsApp-Image-2025-04-23-at-09.03.11-1024x768.jpeg",
        "2025/06/WhatsApp-Image-2025-05-09-at-19.11.31-1024x768.jpeg",
        "2025/06/WhatsApp-Image-2025-05-09-at-19.11.32-1024x768.jpeg",
        "2025/06/WhatsApp-Image-2025-06-05-at-10.07.51-1024x768.jpeg",
        "2025/06/WhatsApp-Image-2025-06-05-at-10.07.49-1024x768.jpeg",
        "2025/06/WhatsApp-Image-2025-06-05-at-10.07.48-1024x768.jpeg",
        "2025/07/WhatsApp-Image-2025-07-03-at-10.08.46-768x1024.jpeg",
        "2025/07/IMG20250716095554-768x1024.jpg",
        "2025/07/IMG20250716095736-768x1024.jpg",
        "2025/07/IMG20250716090607-768x1024.jpg",
        "2026/02/WhatsApp-Image-2026-02-13-at-14.40.32-1024x678.jpeg",
        "2026/02/WhatsApp-Image-2026-02-13-at-14.40.32-1-1024x678.jpeg",
        "2026/02/WhatsApp-Image-2026-02-13-at-14.40.32-2-1024x678.jpeg",
        "2026/02/WhatsApp-Image-2026-02-13-at-14.40.32-3-1024x678.jpeg",
        "2026/02/WhatsApp-Image-2026-02-13-at-14.40.32-4-1024x678.jpeg",
        "2026/02/WhatsApp-Image-2026-02-13-at-14.40.32-5-1024x678.jpeg",
        "2026/02/WhatsApp-Image-2026-02-13-at-15.59.13-1024x722.jpeg",
        "2026/02/634614009_1433716545217169_4881823062694439450_n-768x1024.jpg"
      ]
    },
    wrc: {
      eyebrow: "Metal Bodykit · WRC",
      title: "WRC Body Kit",
      tag: "WRC METAL KIT / 部品",
      desc: [
        "Metal pressed body panels for the Subaru Impreza WRC (S5/6), sharing the same hydraulic-press process and 0.8&nbsp;mm Zincore galvanized steel as the 22B program, shaped to the WRC's wider rally arches.",
        "Front fenders and rear quarters are produced as separate, fitment-ready components with integrated flanges, so welds stay in hidden areas for a clean, restoration-grade result.",
        "Development ran through 2026, with global sales of the WRC kit opening in 2026 via official distribution partners."
      ],
      specs: [["Material", "0.8mm Zincore steel"], ["Method", "Hydraulic press"], ["Platform", "Impreza WRC S5/6"], ["Panels", "Front fenders · rear quarters"]],
      images: [
        "2026/06/wrc-1.jpg",
        "2026/06/kitwrc.jpg",
        "2026/06/fenders.jpg",
        "2026/06/419072d9-2e57-4401-a438-0ae9a6dc8e16-768x1024.jpeg",
        "2026/06/d4132633-6b3a-4ff9-8022-0daaf45da881-1024x576.jpeg",
        "2026/06/b3a95954-872e-41d7-b7a5-fd87875ebfc7-1024x576.jpeg",
        "2026/06/5392d458-39d9-40e4-bc0c-690f16f164ba-1024x549.jpeg",
        "2026/06/0cba216d-e824-4ad9-988a-f9e4cfc1dc02-1024x768.jpeg",
        "2026/06/7f5795f5-9a1d-4921-baae-93a62af5eeb2-1024x731.jpeg",
        "2026/06/fb476c1a-5046-4f49-b88e-9cc794a42e1e-1024x709.jpeg",
        "2026/06/45bab6ac-e741-47ba-8a92-e1a3e7a9c117-1024x459.jpeg",
        "2026/06/2339e8d2-c222-4ea8-8234-c5254866be1b-1024x588.jpeg",
        "2026/06/a6fb5d7d-ac1d-460f-81bc-ddaa2098fb02.jpeg",
        "2026/06/722d38e9-31dc-4d23-84d1-d86fa5058371.jpeg",
        "2026/06/745b04f4-f0ec-40e8-8839-29b4def2ad71-1024x606.jpeg",
        "2026/06/31fa2490-882a-4e24-904a-08f9db131a6d.jpeg",
        "2026/06/WhatsApp-Image-2026-02-11-at-06.09.24.jpeg",
        "2026/06/rghbt.jpg",
        "2026/06/hj.jpg",
        "2026/06/casting.jpg",
        "2026/06/WhatsApp-Image-2026-03-28-at-15.06.54-1024x768.jpeg",
        "2026/06/tfygh-1024x602.jpg",
        "2026/06/WhatsApp-Image-2026-03-24-at-11.42.36-1024x768.jpeg",
        "2026/06/WhatsApp-Image-2026-04-20-at-12.17.51-1024x537.jpeg",
        "2026/06/WhatsApp-Image-2026-04-20-at-12.02.16-1024x576.jpeg",
        "2026/06/u6tyuh-1024x638.jpg",
        "2026/06/a52d7e19-f114-495b-a228-6a8d1b1050e7-1024x768.jpeg",
        "2026/06/WhatsApp-Image-2026-04-08-at-17.40.04-1024x576.jpeg",
        "2026/06/WhatsApp-Image-2026-04-08-at-17.40.04-1-1024x576.jpeg",
        "2026/06/IMG20260611122556-576x1024.jpg",
        "2026/06/IMG20260611122502-576x1024.jpg",
        "2026/06/IMG20260611122455-576x1024.jpg"
      ]
    }
  };

  var modal = document.getElementById("kitModal");
  var track = document.getElementById("galTrack");
  var thumbs = document.getElementById("galThumbs");
  var counter = document.getElementById("galCounter");
  if (!modal || !track) return;
  var elEyebrow = document.getElementById("kitEyebrow");
  var elTitle = document.getElementById("kitTitle");
  var elDesc = document.getElementById("kitDesc");
  var elSpecs = document.getElementById("kitSpecs");
  var elTag = document.getElementById("kitTag");

  var idx = 0, n = 0, currentId = null, lastFocus = null;
  var reduceGal = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var AUTO = 3500, autoTimer = null, paused = false;

  function autoNext() { if (!paused) go(idx + 1); }
  function startAuto() { stopAuto(); if (reduceGal) return; autoTimer = setInterval(autoNext, AUTO); }
  function stopAuto() { if (autoTimer) { clearInterval(autoTimer); autoTimer = null; } }
  function restartAuto() { if (modal.classList.contains("open")) startAuto(); }

  function withFallback(img, remote) {
    img.addEventListener("error", function once() {
      img.removeEventListener("error", once);
      if (img.src !== remote) img.src = remote;
    });
  }

  function buildKit(kit) {
    track.innerHTML = ""; thumbs.innerHTML = "";
    kit.images.forEach(function (p, i) {
      var base = p.split("/").pop();
      var local = "KARSUKI/" + base, remote = UP + p;

      var slide = document.createElement("figure");
      slide.className = "gal-slide";
      var img = document.createElement("img");
      img.loading = "lazy"; img.decoding = "async";
      img.alt = kit.title + ", photo " + (i + 1);
      img.src = local; withFallback(img, remote);
      slide.appendChild(img);
      track.appendChild(slide);

      var t = document.createElement("button");
      t.type = "button"; t.className = "gal-thumb";
      t.setAttribute("aria-label", "Go to photo " + (i + 1));
      var ti = document.createElement("img");
      ti.loading = "lazy"; ti.alt = ""; ti.src = local; withFallback(ti, remote);
      t.appendChild(ti);
      t.addEventListener("click", function () { go(i); restartAuto(); });
      if (window.matchMedia && window.matchMedia("(hover: hover)").matches) {
        t.addEventListener("mouseenter", function () { paused = true; go(i); });
        t.addEventListener("mouseleave", function () { paused = false; restartAuto(); });
      }
      thumbs.appendChild(t);
    });
    n = kit.images.length;
  }

  function go(i) {
    if (!n) return;
    idx = (i % n + n) % n;
    for (var s = 0; s < track.children.length; s++) track.children[s].classList.toggle("active", s === idx);
    counter.textContent = (idx + 1) + " / " + n;
    for (var k = 0; k < thumbs.children.length; k++) thumbs.children[k].classList.toggle("active", k === idx);
    var active = thumbs.children[idx];
    if (active && active.scrollIntoView) active.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
  }

  function open(id) {
    var kit = KITS[id];
    if (!kit) return;
    if (currentId !== id) {
      currentId = id;
      elEyebrow.innerHTML = '<span class="tick"></span>' + kit.eyebrow;
      elTitle.textContent = kit.title;
      elTag.textContent = kit.tag;
      elDesc.innerHTML = kit.desc.map(function (p) { return "<p>" + p + "</p>"; }).join("");
      elSpecs.innerHTML = kit.specs.map(function (s) { return "<li><span>" + s[0] + "</span><strong>" + s[1] + "</strong></li>"; }).join("");
      buildKit(kit);
    }
    lastFocus = document.activeElement;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    paused = false;
    go(0);
    startAuto();
  }
  function close() {
    stopAuto();
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  document.querySelectorAll("[data-open]").forEach(function (el) {
    var id = el.getAttribute("data-open");
    el.addEventListener("click", function () { open(id); });
    el.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(id); }
    });
  });
  modal.querySelectorAll("[data-close]").forEach(function (el) { el.addEventListener("click", close); });

  var prev = document.getElementById("galPrev"), next = document.getElementById("galNext");
  if (prev) prev.addEventListener("click", function () { go(idx - 1); restartAuto(); });
  if (next) next.addEventListener("click", function () { go(idx + 1); restartAuto(); });

  document.addEventListener("keydown", function (e) {
    if (!modal.classList.contains("open")) return;
    if (e.key === "Escape") close();
    else if (e.key === "ArrowLeft") { go(idx - 1); restartAuto(); }
    else if (e.key === "ArrowRight") { go(idx + 1); restartAuto(); }
  });

  // swipe
  var sx = 0, sdx = 0, drag = false, vp = track.parentElement;
  vp.addEventListener("touchstart", function (e) { drag = true; sx = e.touches[0].clientX; sdx = 0; }, { passive: true });
  vp.addEventListener("touchmove", function (e) { if (drag) sdx = e.touches[0].clientX - sx; }, { passive: true });
  vp.addEventListener("touchend", function () { if (drag && Math.abs(sdx) > 40) go(idx + (sdx < 0 ? 1 : -1)); drag = false; });
})();

/* =========================================================
   "Steel in the Metal" — auto-playing cinematic slideshow
   ========================================================= */
(function () {
  "use strict";
  var UP = "https://www.zetongaraz.com/wp-content/uploads/";
  var data = [
    { img: "7.jpg", cap: "Pressed steel detail" },
    { img: "2026/06/wrc-1.jpg", cap: "WRC widebody, pressed steel" },
    { img: "2025/06/metalbodykit22b.jpg", cap: "22B complete metal kit" },
    { img: "2026/06/0cba216d-e824-4ad9-988a-f9e4cfc1dc02-1024x768.jpeg", cap: "Arches test-fitted" },
    { img: "2026/06/fb476c1a-5046-4f49-b88e-9cc794a42e1e-1024x709.jpeg", cap: "Widebody in the metal" },
    { img: "2026/06/7f5795f5-9a1d-4921-baae-93a62af5eeb2-1024x731.jpeg", cap: "Rear quarter detail" },
    { img: "2026/06/b3a95954-872e-41d7-b7a5-fd87875ebfc7-1024x576.jpeg", cap: "Panel fitment" },
    { img: "2026/06/745b04f4-f0ec-40e8-8839-29b4def2ad71-1024x606.jpeg", cap: "Steel quarter panel" },
    { img: "6.jpg", cap: "Metal in progress" },
    { img: "8.jpg", cap: "Widebody build" },
    { img: "10.jpg", cap: "Steel arches" },
    { img: "11.jpg", cap: "Finished in the metal" }
  ];

  var root = document.getElementById("slideshow");
  if (!root) return;
  var track = document.getElementById("slideTrack");
  var dotsWrap = document.getElementById("slideDots");
  var countEl = document.getElementById("slideCount");
  var textEl = document.getElementById("slideText");
  var progWrap = document.getElementById("slideProgress");
  var progEl = progWrap ? progWrap.firstElementChild : null;
  var caption = root.querySelector(".slide-caption");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var INTERVAL = 5200;
  var idx = 0, n = data.length, slides = [], dots = [];
  var last = 0, elapsed = 0, hovering = false, visible = true;

  function pad(x) { return (x < 10 ? "0" : "") + x; }

  data.forEach(function (d, i) {
    var base = d.img.split("/").pop();
    var s = document.createElement("div"); s.className = "slide";
    var im = document.createElement("div"); im.className = "slide-img";
    im.style.backgroundImage = "url('KARSUKI/" + base + "'), url('" + UP + d.img + "')";
    s.appendChild(im); track.appendChild(s); slides.push(s);

    var b = document.createElement("button");
    b.type = "button"; b.setAttribute("aria-label", "Go to slide " + (i + 1));
    b.addEventListener("click", function () { goTo(i); });
    dotsWrap.appendChild(b); dots.push(b);
  });

  function render() {
    for (var i = 0; i < n; i++) {
      slides[i].classList.toggle("active", i === idx);
      dots[i].classList.toggle("active", i === idx);
    }
    if (countEl) countEl.textContent = pad(idx + 1) + " / " + pad(n);
    if (textEl) textEl.textContent = data[idx].cap;
    if (caption) { caption.classList.remove("kick"); void caption.offsetWidth; caption.classList.add("kick"); }
  }
  function goTo(i) { idx = (i % n + n) % n; elapsed = 0; last = performance.now(); if (progEl) progEl.style.width = "0%"; render(); }
  function next() { goTo(idx + 1); }
  function prev() { goTo(idx - 1); }

  var nx = document.getElementById("slideNext"), pv = document.getElementById("slidePrev");
  if (nx) nx.addEventListener("click", next);
  if (pv) pv.addEventListener("click", prev);
  root.addEventListener("mouseenter", function () { hovering = true; });
  root.addEventListener("mouseleave", function () { hovering = false; last = performance.now(); });

  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (e) { visible = e[0].isIntersecting; if (visible) last = performance.now(); }, { threshold: 0.15 }).observe(root);
  }

  document.addEventListener("keydown", function (e) {
    if (!hovering) return;
    if (e.key === "ArrowLeft") prev();
    else if (e.key === "ArrowRight") next();
  });

  function loop(now) {
    requestAnimationFrame(loop);
    if (reduce) return;
    if (hovering || !visible) { last = now; return; }
    elapsed += now - last; last = now;
    var p = Math.min(elapsed / INTERVAL, 1);
    if (progEl) progEl.style.width = (p * 100) + "%";
    if (p >= 1) next();
  }

  render();
  if (!reduce) { last = performance.now(); requestAnimationFrame(loop); }
})();

/* =========================================================
   Contact background — crossfade between two videos, looping
   ========================================================= */
(function () {
  "use strict";
  var wrap = document.getElementById("bgVideos");
  if (!wrap) return;
  var vids = [].slice.call(wrap.querySelectorAll("video.bgv"));
  if (vids.length < 2) return;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var FADE = 0.9; // seconds of overlap between clips
  var cur = 0;

  vids.forEach(function (v) { v.muted = true; v.setAttribute("playsinline", ""); });

  function activate(i) {
    vids.forEach(function (v, k) { v.classList.toggle("active", k === i); });
    cur = i;
  }
  function play(v) { var p = v.play(); if (p && p.catch) p.catch(function () {}); }

  if (reduce) { vids[0].loop = true; activate(0); play(vids[0]); return; }

  function switchTo(i) {
    var nv = vids[i];
    try { nv.currentTime = 0; } catch (e) {}
    play(nv);
    activate(i);
  }

  vids.forEach(function (v, idx) {
    v.addEventListener("timeupdate", function () {
      if (idx !== cur) return;
      if (v.duration && v.currentTime >= v.duration - FADE) {
        switchTo((cur + 1) % vids.length);
      }
    });
    // safety: if a clip ends without a timeupdate near the end, advance
    v.addEventListener("ended", function () {
      if (idx === cur) switchTo((cur + 1) % vids.length);
    });
  });

  activate(0);
  play(vids[0]);
})();
