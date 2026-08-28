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
        if (window.scrollY < 120) {
          setActive("top");
          return;
        }
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

    var markHomeNearTop = function () {
      if (window.scrollY < 120) setActive("top");
    };
    window.addEventListener("scroll", markHomeNearTop, { passive: true });
    markHomeNearTop();
  }

  /* ---------------------------------------------------------------------
     Project inquiry: static-site-safe handoff to the visitor's email app.
     No success is claimed because the website cannot know whether mail sent.
     --------------------------------------------------------------------- */
  var inquiryForm = document.getElementById("inquiry-form");
  var formStatus = document.getElementById("form-status");
  var projectType = document.getElementById("project-type");

  Array.prototype.slice.call(document.querySelectorAll("[data-project-type]")).forEach(function (link) {
    link.addEventListener("click", function () {
      if (projectType) projectType.value = link.getAttribute("data-project-type") || "";
    });
  });

  if (inquiryForm && formStatus) {
    var requiredFields = Array.prototype.slice.call(inquiryForm.querySelectorAll("[required]"));

    requiredFields.forEach(function (field) {
      field.addEventListener("input", function () {
        field.removeAttribute("aria-invalid");
        formStatus.removeAttribute("data-error");
      });
    });

    inquiryForm.addEventListener("invalid", function (event) {
      event.target.setAttribute("aria-invalid", "true");
      formStatus.textContent = "Please complete the required fields and enter a valid email address.";
      formStatus.setAttribute("data-error", "true");
    }, true);

    inquiryForm.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!inquiryForm.checkValidity()) {
        requiredFields.forEach(function (field) {
          field.setAttribute("aria-invalid", String(!field.validity.valid));
        });
        formStatus.textContent = "Please complete the required fields and enter a valid email address.";
        formStatus.setAttribute("data-error", "true");
        inquiryForm.reportValidity();
        return;
      }

      var data = new FormData(inquiryForm);
      var subject = "Website project inquiry — " + data.get("projectType");
      var body = [
        "Name: " + data.get("name"),
        "Email: " + data.get("email"),
        "Business / project: " + (data.get("business") || "Not provided"),
        "Project type: " + data.get("projectType"),
        "Approximate budget: " + data.get("budget"),
        "Preferred deadline: " + (data.get("deadline") || "Not provided"),
        "",
        "Project details:",
        data.get("details")
      ].join("\n");

      formStatus.textContent = "Opening your email app with the project details filled in. Review the message there before sending.";
      formStatus.removeAttribute("data-error");
      window.location.href = "mailto:allahverdihesenov42@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    });
  }
})();
