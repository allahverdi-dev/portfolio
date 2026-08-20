/* ==========================================================================
   Allahverdi Hasanov — Portfolio
   Progressive enhancement only: theme toggle, mobile navigation, scroll spy.
   The page is fully readable and navigable with JavaScript disabled.
   ========================================================================== */

(function () {
  "use strict";

  /* ---------------------------------------------------------------------
     Theme: light / dark with localStorage persistence.
     No stored preference means the OS preference wins (handled in CSS).
     --------------------------------------------------------------------- */
  var root = document.documentElement;
  var themeToggle = document.getElementById("theme-toggle");

  function systemPrefersDark() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  function currentTheme() {
    return root.getAttribute("data-theme") || (systemPrefersDark() ? "dark" : "light");
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {
      /* Storage can be unavailable in private mode — the toggle still works. */
    }
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      applyTheme(currentTheme() === "dark" ? "light" : "dark");
    });
  }

  /* ---------------------------------------------------------------------
     Mobile navigation
     --------------------------------------------------------------------- */
  var menuToggle = document.getElementById("menu-toggle");
  var navLinksPanel = document.getElementById("nav-links");
  var navLinks = navLinksPanel
    ? Array.prototype.slice.call(navLinksPanel.querySelectorAll(".nav__link"))
    : [];

  function setMenu(open) {
    if (!menuToggle || !navLinksPanel) return;
    menuToggle.setAttribute("aria-expanded", String(open));
    navLinksPanel.setAttribute("data-open", String(open));
    // Stop the page behind the full-height panel from scrolling.
    document.body.classList.toggle("nav-open", open);
  }

  function menuIsOpen() {
    return menuToggle && menuToggle.getAttribute("aria-expanded") === "true";
  }

  if (menuToggle && navLinksPanel) {
    menuToggle.addEventListener("click", function () {
      setMenu(!menuIsOpen());
    });

    // Close on selection so the target section is actually visible.
    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        setMenu(false);
      });
    });

    // Escape closes the menu and returns focus to the trigger.
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && menuIsOpen()) {
        setMenu(false);
        menuToggle.focus();
      }
    });

    // Reset state when leaving the mobile breakpoint so the panel
    // does not stay hidden on desktop.
    var mobileQuery = window.matchMedia("(max-width: 860px)");
    var handleBreakpoint = function (event) {
      if (!event.matches) setMenu(false);
    };
    if (typeof mobileQuery.addEventListener === "function") {
      mobileQuery.addEventListener("change", handleBreakpoint);
    } else if (typeof mobileQuery.addListener === "function") {
      mobileQuery.addListener(handleBreakpoint);
    }
  }

  /* ---------------------------------------------------------------------
     Scroll spy: mark the nav link for the section currently in view.
     --------------------------------------------------------------------- */
  if ("IntersectionObserver" in window && navLinks.length) {
    var sections = navLinks
      .map(function (link) {
        var id = link.getAttribute("href");
        return id && id.charAt(0) === "#" ? document.querySelector(id) : null;
      })
      .filter(Boolean);

    var setActive = function (id) {
      navLinks.forEach(function (link) {
        if (link.getAttribute("href") === "#" + id) {
          link.setAttribute("aria-current", "page");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    };

    var observer = new IntersectionObserver(
      function (entries) {
        var visible = entries
          .filter(function (entry) {
            return entry.isIntersecting;
          })
          .sort(function (a, b) {
            return b.intersectionRatio - a.intersectionRatio;
          })[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.15, 0.5, 0.9] }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }
})();
