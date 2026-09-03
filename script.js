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

  if (year) year.textContent = new Date().getFullYear();

  const getEffectiveTheme = () => {
    if (root.dataset.theme === "light" || root.dataset.theme === "dark") {
      return root.dataset.theme;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  themeToggle?.addEventListener("click", () => {
    const next = getEffectiveTheme() === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch (_) {}
  });

  const closeMenu = () => {
    navLinks?.classList.remove("is-open");
    navBackdrop?.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  };

  menuButton?.addEventListener("click", () => {
    const opening = !navLinks?.classList.contains("is-open");
    navLinks?.classList.toggle("is-open", opening);
    navBackdrop?.classList.toggle("is-open", opening);
    menuButton.setAttribute("aria-expanded", String(opening));
    document.body.classList.toggle("menu-open", opening);
  });

  navBackdrop?.addEventListener("click", closeMenu);

  navLinks?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navLinks?.classList.contains("is-open")) {
      closeMenu();
      menuButton?.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 720) closeMenu();
  });

  document.querySelectorAll(".service-cta").forEach((link) => {
    link.addEventListener("click", () => {
      const value = link.dataset.project;
      if (projectType && value) {
        [...projectType.options].forEach((option) => {
          if (option.textContent.trim() === value) {
            projectType.value = option.value || option.textContent;
          }
        });
      }
    });
  });

  const revealItems = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -4% 0px" },
    );

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
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
          if (active) link.setAttribute("aria-current", "true");
          else link.removeAttribute("aria-current");
        });
      },
      { threshold: [0.15, 0.35, 0.6], rootMargin: "-20% 0px -55% 0px" },
    );

    sections.forEach((section) => spy.observe(section));
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const finePointer = window.matchMedia("(pointer: fine)");

  const initTilt = () => {
    if (reduceMotion.matches || !finePointer.matches) return;

    document.querySelectorAll("[data-tilt]").forEach((element) => {
      element.addEventListener("pointermove", (event) => {
        const rect = element.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;

        const rotateY = (x - 0.5) * 4;
        const rotateX = (0.5 - y) * 3;

        element.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
      });

      element.addEventListener("pointerleave", () => {
        element.style.transform = "";
      });
    });
  };

  initTilt();

  form?.addEventListener("submit", async (event) => {
    if (!window.fetch) return;

    event.preventDefault();

    const submit = form.querySelector('button[type="submit"]');
    const original = submit?.textContent || "Send project inquiry";

    if (submit) {
      submit.disabled = true;
      submit.textContent = "Sending…";
    }

    if (formStatus) formStatus.textContent = "Sending your inquiry…";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Form submission failed");

      form.reset();
      if (formStatus) {
        formStatus.textContent = "Thanks — your inquiry was sent successfully.";
      }
    } catch (_) {
      if (formStatus) {
        formStatus.textContent =
          "I couldn't send the form automatically. Please email me at allahverdihesenov42@gmail.com.";
      }
    } finally {
      if (submit) {
        submit.disabled = false;
        submit.textContent = original;
      }
    }
  });
})();
