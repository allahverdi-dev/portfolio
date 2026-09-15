(() => {
  "use strict";

  const root = document.documentElement;
  const themeToggle = document.getElementById("theme-toggle");
  const menuButton = document.getElementById("menu-button");
  const navLinks = document.getElementById("nav-links");
  const navBackdrop = document.getElementById("nav-backdrop");
  const projectType = document.getElementById("project-type");
  const form = document.getElementById("inquiry-form");
  const formStatus = document.getElementById("form-status");
  const year = document.getElementById("year");
  const themeColor = document.querySelector('meta[name="theme-color"]:not([media])');
  const mobileMedia = window.matchMedia("(max-width: 720px)");
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

  if (year) year.textContent = new Date().getFullYear();

  const portfolioStyle = document.createElement("style");
  portfolioStyle.textContent = `
    .showcase-shell--movane .showcase-media {
      aspect-ratio: 16 / 9;
      background: #12202c;
    }
    .showcase-shell--movane .showcase-media > img {
      object-fit: cover;
      object-position: center;
    }
    .project-card--jspath .showcase-media {
      background: #111514;
    }
    .showcase-shell--the22 .showcase-media {
      aspect-ratio: 16 / 9;
      background: #0e0d0d;
    }
    .showcase-shell--the22 .showcase-media > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      filter: saturate(.88) contrast(1.04);
    }
    .showcase-shell--the22 .showcase-media::after {
      content: "";
      position: absolute;
      inset: 0;
      pointer-events: none;
      background: linear-gradient(180deg, transparent 52%, rgba(16, 7, 8, .34));
    }
  `;
  document.head.append(portfolioStyle);

  const getEffectiveTheme = () => {
    const explicit = root.dataset.theme;
    if (explicit === "light" || explicit === "dark") return explicit;
    return systemDark.matches ? "dark" : "light";
  };

  const syncThemeUi = () => {
    const dark = getEffectiveTheme() === "dark";
    themeToggle?.setAttribute(
      "aria-label",
      dark ? "Switch to light theme" : "Switch to dark theme",
    );
    themeToggle?.setAttribute(
      "title",
      dark ? "Switch to light theme" : "Switch to dark theme",
    );
    if (themeColor) {
      themeColor.setAttribute("content", dark ? "#111412" : "#f6f4ef");
    }
  };

  syncThemeUi();

  themeToggle?.addEventListener("click", () => {
    const next = getEffectiveTheme() === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch (_) {}
    syncThemeUi();
  });

  systemDark.addEventListener?.("change", () => {
    if (!root.dataset.theme) syncThemeUi();
  });

  const menuFocusable = () =>
    navLinks
      ? [
          ...navLinks.querySelectorAll(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
          ),
        ]
      : [];

  const closeMenu = ({ restoreFocus = false } = {}) => {
    navLinks?.classList.remove("is-open");
    navBackdrop?.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
    menuButton?.setAttribute("aria-label", "Open navigation");
    document.body.classList.remove("menu-open");
    if (restoreFocus) menuButton?.focus();
  };

  const openMenu = () => {
    navLinks?.classList.add("is-open");
    navBackdrop?.classList.add("is-open");
    menuButton?.setAttribute("aria-expanded", "true");
    menuButton?.setAttribute("aria-label", "Close navigation");
    document.body.classList.add("menu-open");
    requestAnimationFrame(() => menuFocusable()[0]?.focus());
  };

  menuButton?.addEventListener("click", () => {
    navLinks?.classList.contains("is-open") ? closeMenu() : openMenu();
  });

  navBackdrop?.addEventListener("click", () => closeMenu({ restoreFocus: true }));
  navLinks
    ?.querySelectorAll("a")
    .forEach((link) => link.addEventListener("click", () => closeMenu()));

  document.addEventListener("keydown", (event) => {
    if (!navLinks?.classList.contains("is-open")) return;

    if (event.key === "Escape") {
      event.preventDefault();
      closeMenu({ restoreFocus: true });
      return;
    }

    if (event.key === "Tab") {
      const focusable = menuFocusable();
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  mobileMedia.addEventListener?.("change", (event) => {
    if (!event.matches) closeMenu();
  });

  document.querySelectorAll(".service-cta").forEach((link) => {
    link.addEventListener("click", () => {
      const value = link.dataset.project;
      if (!projectType || !value) return;
      const match = [...projectType.options].find(
        (option) => option.textContent.trim() === value,
      );
      if (match) projectType.value = match.value || match.textContent;
    });
  });

  const originalWork = document.getElementById("work");
  const starterOffer = document.getElementById("starter-offer");

  if (originalWork && starterOffer && !document.querySelector('[data-case-study="the22"]')) {
    originalWork.id = "product-work";

    const the22Section = document.createElement("section");
    the22Section.className = "section flagship";
    the22Section.id = "work";
    the22Section.dataset.caseStudy = "the22";
    the22Section.innerHTML = `
      <div class="container">
        <div class="section-heading reveal">
          <div>
            <span class="section-index">Business website example</span>
            <h2>The 22 — a restaurant &amp; café website built around reservations.</h2>
          </div>
          <p>A realistic portfolio concept showing what the 149 AZN starter direction can become for a hospitality business: clear positioning, menu discovery, atmosphere, location, and an obvious path to reserve.</p>
        </div>
        <div class="flagship-grid">
          <div class="showcase-stage reveal">
            <a class="showcase-shell showcase-shell--flagship showcase-shell--the22" href="https://github.com/allahverdi-dev/the22lounge" target="_blank" rel="noopener noreferrer" aria-label="Open The 22 project repository (new tab)" data-tilt>
              <span class="showcase-bar" aria-hidden="true"><span class="showcase-dots"><i></i><i></i><i></i></span><span class="showcase-address">github.com/allahverdi-dev/the22lounge</span><span class="showcase-indicator">↗</span></span>
              <span class="showcase-media"><img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaPDCBc2SdnLd2shipWKybNASyuj9BanIpyyYHydhQQp9HDR5pZy9LZdYPcHHaqGnErGB6Exizl04rk_ZyWHyRQ8wpBSIfGBINpscbMUxFmEp1KtsChwMcrdT7nvEfhw9BnzVbrPHPIeVSXE83DLxvXGQ9nTll5L9UxmDa1H81pcn71BnYNEh3SWVWWjnD2qJHby-QKpQcmx592Ej0YyyufiXwCFMiB__u95lLCGLKvknrdGPT5xN-oQ" alt="The 22 premium restaurant and café website concept" width="1280" height="720" loading="lazy" decoding="async" /></span>
              <span class="showcase-meta"><span>The 22 <span class="showcase-tag">Concept</span></span><span>Restaurant &amp; Café Website <span aria-hidden="true">↗</span></span></span>
            </a>
            <p class="showcase-caption">Hospitality · One-page business website concept</p>
          </div>
          <div class="flagship-copy reveal">
            <p class="eyebrow">Restaurant &amp; café · Business website concept</p>
            <h3>Designed to turn atmosphere and menu interest into reservations and contact.</h3>
            <p class="flagship-lede">The 22 is a premium one-page hospitality concept with menu discovery, gallery content, reservation flow, location and contact information, a refined mobile navigation system, and responsive behavior hardened for narrow phones and foldable devices.</p>
            <div class="chip-row"><span>Responsive</span><span>Reservations</span><span>Menu</span><span>Maps</span><span>Foldable-ready</span></div>
            <div class="inline-links">
              <a href="https://github.com/allahverdi-dev/the22lounge" target="_blank" rel="noopener noreferrer">Project repository ↗</a>
              <a href="#contact">Ask for a similar website →</a>
            </div>
            <div class="quality-note"><span class="quality-dot"></span><p><strong>Built as a sales example:</strong> this is a portfolio concept, not a claimed client commission. It demonstrates the type of polished hospitality website I can adapt for a real local business.</p></div>
          </div>
        </div>
      </div>
    `;

    originalWork.parentNode.insertBefore(the22Section, originalWork);
  }

  const revealItems = [...document.querySelectorAll(".reveal")];

  if (!reduceMotion.matches && "IntersectionObserver" in window) {
    revealItems.forEach((item) => item.classList.add("reveal-pending"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -3% 0px" },
    );
    revealItems.forEach((item) => observer.observe(item));
  }

  const sectionLinks = [
    ...document.querySelectorAll('.nav-links a[href^="#"]'),
  ];
  const sections = sectionLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    const spy = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;

        sectionLinks.forEach((link) => {
          const active = link.getAttribute("href") === `#${visible.target.id}`;
          if (active) link.setAttribute("aria-current", "page");
          else link.removeAttribute("aria-current");
        });
      },
      { threshold: [0.15, 0.35, 0.6], rootMargin: "-18% 0px -55% 0px" },
    );
    sections.forEach((section) => spy.observe(section));
  }

  const tiltItems = [...document.querySelectorAll("[data-tilt]")];
  const resetTilt = () =>
    tiltItems.forEach((element) => element.style.removeProperty("transform"));

  tiltItems.forEach((element) => {
    const reset = () => element.style.removeProperty("transform");

    element.addEventListener("pointermove", (event) => {
      if (
        reduceMotion.matches ||
        !finePointer.matches ||
        event.pointerType === "touch"
      ) {
        return;
      }

      const rect = element.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      const x = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
      const y = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));
      element.style.transform = `perspective(1200px) rotateX(${(0.5 - y) * 2}deg) rotateY(${(x - 0.5) * 2.6}deg)`;
    });

    element.addEventListener("pointerleave", reset);
    element.addEventListener("pointercancel", reset);
    element.addEventListener("blur", reset);
  });

  finePointer.addEventListener?.("change", resetTilt);
  reduceMotion.addEventListener?.("change", () => {
    resetTilt();
    if (reduceMotion.matches) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
    }
  });

  form?.addEventListener("submit", async (event) => {
    if (!window.fetch) return;
    event.preventDefault();

    const submit = form.querySelector('button[type="submit"]');
    const original = submit?.textContent || "Send project inquiry";
    const controller = "AbortController" in window ? new AbortController() : null;
    const timeout = controller ? setTimeout(() => controller.abort(), 12000) : null;

    if (submit) {
      submit.disabled = true;
      submit.textContent = "Sending…";
    }
    form.setAttribute("aria-busy", "true");
    if (formStatus) formStatus.textContent = "Sending your inquiry…";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
        signal: controller?.signal,
      });

      if (!response.ok) {
        throw new Error(`Form submission failed: ${response.status}`);
      }

      form.reset();
      if (formStatus) {
        formStatus.textContent = "Thanks — your inquiry was sent successfully.";
      }
    } catch (_) {
      if (formStatus) {
        formStatus.textContent =
          "The form could not be sent automatically. Please email me at allahverdihesenov42@gmail.com.";
      }
    } finally {
      if (timeout) clearTimeout(timeout);
      form.removeAttribute("aria-busy");
      if (submit) {
        submit.disabled = false;
        submit.textContent = original;
      }
    }
  });
})();
