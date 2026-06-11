const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Year */
document.getElementById("year").textContent = new Date().getFullYear();

/* Starfield */
function initStarfield() {
  const canvas = document.getElementById("starfield");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let stars = [];
  let width = 0;
  let height = 0;
  let animationId = 0;

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const count = Math.floor((width * height) / 9000);
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.2 + 0.2,
      speed: Math.random() * 0.15 + 0.05,
      opacity: Math.random() * 0.5 + 0.2,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    for (const star of stars) {
      star.y -= star.speed;
      if (star.y < 0) {
        star.y = height;
        star.x = Math.random() * width;
      }

      ctx.beginPath();
      ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
      ctx.fill();
    }

    animationId = requestAnimationFrame(draw);
  }

  resize();
  if (!prefersReducedMotion) draw();

  window.addEventListener("resize", () => {
    cancelAnimationFrame(animationId);
    resize();
    if (!prefersReducedMotion) draw();
  });
}

/* Menu */
function initMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("site-nav");
  const closeBtn = document.querySelector(".nav-overlay__close");
  if (!toggle || !nav) return;

  function setOpen(open) {
    toggle.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("is-open", open);
    nav.setAttribute("aria-hidden", String(!open));
    document.body.classList.toggle("nav-open", open);
  }

  toggle.addEventListener("click", () => {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  closeBtn?.addEventListener("click", () => setOpen(false));

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });
}

/* Hero entrance */
function initHeroReveal() {
  document.querySelectorAll("[data-reveal]").forEach((el, i) => {
    if (prefersReducedMotion) {
      el.classList.add("is-visible");
      return;
    }
    setTimeout(() => el.classList.add("is-visible"), 80 + i * 100);
  });
}

/* Scroll reveal */
function initScrollReveal() {
  const sections = document.querySelectorAll(".section.reveal");
  if (!sections.length) return;

  if (prefersReducedMotion) {
    sections.forEach((s) => s.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
  );

  sections.forEach((s) => observer.observe(s));
}

/* Counter animation */
function initCounters() {
  const counters = document.querySelectorAll(".hero-stats__value[data-count]");
  if (!counters.length) return;

  function animateCounter(el) {
    const target = Number(el.dataset.count);
    const suffix = el.dataset.suffix || "";
    const duration = 1400;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(target * eased);
      el.textContent = `${value}${suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
    }

    if (prefersReducedMotion) {
      el.textContent = `${target}${suffix}`;
      return;
    }

    requestAnimationFrame(tick);
  }

  if (prefersReducedMotion) {
    counters.forEach(animateCounter);
    return;
  }

  setTimeout(() => counters.forEach(animateCounter), 600);
}

initStarfield();
initMenu();
initHeroReveal();
initScrollReveal();
initCounters();
