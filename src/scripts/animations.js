import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

document.documentElement.classList.add("gsap-ready");

/* ---------- Smooth scroll (Lenis) ---------- */
let lenis;
if (!reduceMotion) {
  lenis = new Lenis({ duration: 1.1, easing: (t) => 1 - Math.pow(1 - t, 3), smoothWheel: true });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // anchor links go through Lenis for buttery jumps
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: -80 });
    });
  });
}

/* ---------- Sticky nav state ---------- */
const nav = document.querySelector("[data-nav]");
if (nav) {
  ScrollTrigger.create({
    start: "top -40",
    end: 99999,
    onUpdate: (self) => nav.classList.toggle("is-scrolled", self.scroll() > 40),
  });
}

/* ---------- Generic reveals ---------- */
if (reduceMotion) {
  gsap.set("[data-reveal], [data-reveal-line]", { opacity: 1, y: 0 });
} else {
  // hero lines: dramatic clip-up
  gsap.set("[data-reveal-line]", { yPercent: 110, opacity: 0 });
  gsap.to("[data-reveal-line]", {
    yPercent: 0, opacity: 1, duration: 1.1, ease: "power4.out", stagger: 0.12, delay: 0.15,
  });

  // batch fade/slide on scroll
  gsap.utils.toArray("[data-reveal]").forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 28 },
      {
        opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
      }
    );
  });
}

/* ---------- Counters ---------- */
gsap.utils.toArray("[data-counter]").forEach((el) => {
  const end = parseFloat(el.dataset.counter);
  const suffix = el.dataset.suffix || "";
  if (reduceMotion) { el.textContent = end.toLocaleString("it-IT") + suffix; return; }
  const obj = { v: 0 };
  ScrollTrigger.create({
    trigger: el, start: "top 85%", once: true,
    onEnter: () =>
      gsap.to(obj, {
        v: end, duration: 1.6, ease: "power2.out",
        onUpdate: () => { el.textContent = Math.round(obj.v).toLocaleString("it-IT") + suffix; },
      }),
  });
});

/* ---------- Background parallax (hero + soft) ---------- */
if (!reduceMotion) {
  document.querySelectorAll("[data-parallax]").forEach((el) => {
    gsap.fromTo(el, { yPercent: -6 }, {
      yPercent: 8, ease: "none",
      scrollTrigger: { trigger: el.closest("section") || el, start: "top bottom", end: "bottom top", scrub: true },
    });
  });
  document.querySelectorAll("[data-parallax-soft]").forEach((el) => {
    gsap.fromTo(el, { yPercent: -10 }, {
      yPercent: 10, ease: "none",
      scrollTrigger: { trigger: el.closest(".work") || el, start: "top bottom", end: "bottom top", scrub: true },
    });
  });
}

/* ---------- Referenze marquee (continuous loop) ---------- */
if (!reduceMotion) {
  const track = document.querySelector("[data-marquee] .ref__track");
  if (track) {
    const loop = gsap.to(track, { xPercent: -50, ease: "none", duration: 28, repeat: -1 });
    const wrap = track.closest("[data-marquee]");
    wrap.addEventListener("mouseenter", () => gsap.to(loop, { timeScale: 0.25, duration: 0.4 }));
    wrap.addEventListener("mouseleave", () => gsap.to(loop, { timeScale: 1, duration: 0.4 }));
  }
}

/* ---------- Contact form (no backend yet — graceful UX) ---------- */
const form = document.querySelector(".form");
if (form) {
  const status = form.querySelector("[data-form-status]");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    // TODO: collegare endpoint reale (Formspree / Netlify / API). Per ora feedback ottimistico.
    status.textContent = "Grazie! Ti ricontattiamo a brevissimo.";
    status.classList.remove("is-error");
    status.classList.add("is-success");
    form.reset();
  });
}

ScrollTrigger.refresh();
