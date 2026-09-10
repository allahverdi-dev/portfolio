(() => {
  "use strict";

  const flagship = document.querySelector("section.flagship#work");
  const selectedWork = document.querySelector("section.selected-work");
  const projectList = selectedWork?.querySelector(".project-list");

  if (!flagship || !selectedWork || !projectList) return;

  flagship.innerHTML = `
    <div class="container">
      <div class="section-heading reveal">
        <div>
          <span class="section-index">01 / Flagship</span>
          <h2>MOVANE — supply chain operations, built as a real product.</h2>
        </div>
        <p>
          My most complete enterprise frontend project — built around operational
          workflows, simulation, data-heavy interfaces, and backend-ready architecture.
        </p>
      </div>

      <div class="flagship-grid">
        <div class="showcase-stage reveal">
          <a
            class="showcase-shell showcase-shell--flagship showcase-shell--movane"
            href="https://movane.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open MOVANE live demo (new tab)"
            data-tilt
          >
            <span class="showcase-bar" aria-hidden="true">
              <span class="showcase-dots"><i></i><i></i><i></i></span>
              <span class="showcase-address">movane.vercel.app</span>
              <span class="showcase-indicator">↗</span>
            </span>
            <span class="showcase-media">
              <img
                src="images/projects/movane-cover.webp"
                alt="MOVANE supply chain control tower Command Center"
                width="1280"
                height="720"
                decoding="async"
              />
            </span>
            <span class="showcase-meta">
              <span>MOVANE <span class="showcase-tag">Flagship</span></span>
              <span>Supply Chain Control Tower <span aria-hidden="true">↗</span></span>
            </span>
          </a>

          <p class="showcase-caption">Command Center · Global operations overview</p>

          <a
            class="movane-secondary-preview"
            href="https://movane.vercel.app/app/scenarios"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open MOVANE Scenario Lab (new tab)"
          >
            <img
              src="images/projects/movane-scenario.webp"
              alt="MOVANE Scenario Lab disruption simulation result"
              width="1440"
              height="900"
              loading="lazy"
              decoding="async"
            />
            <span>Scenario Lab · Disruption simulation ↗</span>
          </a>
        </div>

        <div class="flagship-copy reveal">
          <p class="eyebrow">Enterprise operations · Frontend product</p>
          <h3>One operational view of shipments, suppliers, inventory, risk and disruption.</h3>
          <p class="flagship-lede">
            MOVANE is an enterprise supply chain control tower covering shipment
            operations, supplier dependencies, warehouses, inventory, exceptions,
            risk, route intelligence, cold-chain monitoring and public tracking.
            Its Scenario Lab can simulate disruptions and compare their operational
            impact before and after mitigation.
          </p>

          <div class="metric-grid" role="group" aria-label="MOVANE product metrics">
            <div><strong>47</strong><span>Routes</span></div>
            <div><strong>620</strong><span>Shipments</span></div>
            <div><strong>154</strong><span>Tests</span></div>
            <div><strong>14</strong><span>QA widths</span></div>
          </div>

          <div class="chip-row">
            <span>React</span>
            <span>TypeScript</span>
            <span>Vite</span>
            <span>MapLibre</span>
            <span>TanStack</span>
            <span>IndexedDB</span>
          </div>

          <div class="inline-links">
            <a href="https://movane.vercel.app" target="_blank" rel="noopener noreferrer">Live demo ↗</a>
            <a
              href="https://verdihesenov.gumroad.com/l/movane-supply-chain-control-tower"
              target="_blank"
              rel="noopener noreferrer"
            >View product ↗</a>
          </div>

          <div class="quality-note">
            <span class="quality-dot"></span>
            <p>
              <strong>Built for depth:</strong> deterministic demo data, local persistence,
              Scenario Lab, responsive product shell, automated testing, and repository
              interfaces ready for a real backend.
            </p>
          </div>
        </div>
      </div>
    </div>`;

  const jspathCard = document.createElement("article");
  jspathCard.className = "project-card project-card--jspath reveal";
  jspathCard.dataset.project = "jspath";
  jspathCard.innerHTML = `
    <a
      class="showcase-shell showcase-shell--jspath"
      aria-label="Open JSPath (new tab)"
      href="https://jspath.vercel.app"
      target="_blank"
      rel="noopener noreferrer"
      data-tilt
    >
      <span class="showcase-bar" aria-hidden="true">
        <span class="showcase-dots"><i></i><i></i><i></i></span>
        <span class="showcase-address">jspath.vercel.app</span>
        <span class="showcase-indicator">↗</span>
      </span>
      <div class="showcase-media showcase-media--jspath">
        <div class="jspath-ui" aria-hidden="true">
          <div class="jspath-sidebar">
            <div class="jspath-logo">JS<span>Path</span></div>
            <div class="jspath-nav-item jspath-nav-item--active">Learn</div>
            <div class="jspath-nav-item">Practice</div>
            <div class="jspath-nav-item">Challenges</div>
            <div class="jspath-nav-item">Projects</div>
            <div class="jspath-nav-item">Interview</div>
          </div>
          <div class="jspath-main">
            <div class="jspath-topline"><span>MODULE 09</span><span>64%</span></div>
            <h4>Functions &amp; execution</h4>
            <p>Build a mental model you can actually use while writing code.</p>
            <div class="jspath-code">
              <div><span class="jspath-code-key">function</span> calculateTotal(items) {</div>
              <div>&nbsp;&nbsp;<span class="jspath-code-key">return</span> items.reduce((sum, item) =&gt;</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;sum + item.price, 0</div>
              <div>&nbsp;&nbsp;);</div>
              <div>}</div>
            </div>
            <div class="jspath-footer">
              <div><span>Practice</span><strong>12 exercises</strong></div>
              <span class="jspath-action" aria-hidden="true">Continue lesson →</span>
            </div>
          </div>
        </div>
      </div>
      <span class="showcase-meta">
        <span>JSPath</span>
        <span>JavaScript learning platform <span aria-hidden="true">↗</span></span>
      </span>
    </a>
    <div class="project-copy">
      <div class="project-number">01</div>
      <div>
        <p class="eyebrow">EdTech · Learning platform</p>
        <h3>JSPath</h3>
        <p>
          A comprehensive JavaScript learning product combining structured lessons,
          executable examples, exercises, challenges, projects, interview preparation,
          progress systems, and an in-browser coding environment.
        </p>
        <div class="chip-row">
          <span>React</span><span>Vite</span><span>Monaco Editor</span><span>Supabase</span>
        </div>
        <div class="inline-links">
          <a href="https://jspath.vercel.app" target="_blank" rel="noopener noreferrer">Live product ↗</a>
          <a href="https://github.com/allahverdi-dev/jspath" target="_blank" rel="noopener noreferrer">Repository ↗</a>
        </div>
      </div>
    </div>`;

  if (!projectList.querySelector('[data-project="jspath"]')) {
    projectList.prepend(jspathCard);
  }

  const selectedDescription = selectedWork.querySelector(".section-heading > p");
  if (selectedDescription) {
    selectedDescription.textContent =
      "A selection of shipped web products covering education, finance, discovery, and productivity.";
  }

  projectList.querySelectorAll(".project-number").forEach((number, index) => {
    number.textContent = String(index + 1).padStart(2, "0");
  });

  const style = document.createElement("style");
  style.dataset.movanePortfolio = "true";
  style.textContent = `
    .showcase-shell--movane .showcase-media {
      aspect-ratio: 16 / 9;
      background: #12202c;
    }

    .showcase-shell--movane .showcase-media > img {
      object-fit: cover;
      object-position: center;
    }

    .movane-secondary-preview {
      display: block;
      margin-top: 18px;
      overflow: hidden;
      border: 1px solid var(--line);
      border-radius: var(--showcase-radius);
      background: var(--surface);
      transition: transform 0.2s var(--ease), border-color 0.2s ease;
    }

    .movane-secondary-preview:hover {
      transform: translateY(-2px);
      border-color: var(--line-strong);
    }

    .movane-secondary-preview:focus-visible {
      outline: 3px solid var(--accent-2);
      outline-offset: 5px;
    }

    .movane-secondary-preview img {
      display: block;
      width: 100%;
      height: auto;
      aspect-ratio: 16 / 10;
      object-fit: cover;
      object-position: center top;
    }

    .movane-secondary-preview span {
      display: block;
      padding: 10px 13px;
      border-top: 1px solid var(--line);
      color: var(--muted);
      font-family: var(--font-mono);
      font-size: 10px;
    }

    .movane-secondary-preview:hover span {
      color: var(--text);
    }

    .project-card--jspath .showcase-media {
      background: #111514;
    }

    @media (max-width: 720px) {
      .movane-secondary-preview {
        margin-top: 14px;
      }
    }
  `;
  document.head.append(style);
})();

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
  const themeColor = document.querySelector(
    'meta[name="theme-color"]:not([media])',
  );
  const mobileMedia = window.matchMedia("(max-width: 720px)");
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)");

  if (year) year.textContent = new Date().getFullYear();

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
    if (themeColor)
      themeColor.setAttribute("content", dark ? "#111412" : "#f6f4ef");
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

  navBackdrop?.addEventListener("click", () =>
    closeMenu({ restoreFocus: true }),
  );
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

  const revealItems = [...document.querySelectorAll(".reveal")];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

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

  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
  const tiltItems = [...document.querySelectorAll("[data-tilt]")];
  const resetTilt = () =>
    tiltItems.forEach((element) => {
      element.style.removeProperty("transform");
    });

  tiltItems.forEach((element) => {
    const reset = () => element.style.removeProperty("transform");
    element.addEventListener("pointermove", (event) => {
      if (
        reduceMotion.matches ||
        !finePointer.matches ||
        event.pointerType === "touch"
      )
        return;
      const rect = element.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const x = Math.max(
        0,
        Math.min(1, (event.clientX - rect.left) / rect.width),
      );
      const y = Math.max(
        0,
        Math.min(1, (event.clientY - rect.top) / rect.height),
      );
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
    const controller =
      "AbortController" in window ? new AbortController() : null;
    const timeout = controller
      ? setTimeout(() => controller.abort(), 12000)
      : null;

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
      if (!response.ok)
        throw new Error(`Form submission failed: ${response.status}`);
      form.reset();
      if (formStatus)
        formStatus.textContent = "Thanks — your inquiry was sent successfully.";
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
