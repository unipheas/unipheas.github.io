(function () {
  "use strict";

  var themeToggle = document.getElementById("themeToggle");
  var menuToggle = document.getElementById("menuToggle");
  var mobileNav = document.getElementById("mobileNav");

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    themeToggle.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    try { localStorage.setItem("theme", theme); } catch (error) {}
  }

  themeToggle.addEventListener("click", function () {
    applyTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark");
  });

  menuToggle.addEventListener("click", function () {
    var isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    mobileNav.setAttribute("aria-hidden", String(isOpen));
    mobileNav.classList.toggle("open", !isOpen);
  });

  mobileNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      menuToggle.setAttribute("aria-expanded", "false");
      mobileNav.setAttribute("aria-hidden", "true");
      mobileNav.classList.remove("open");
    });
  });

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reducedMotion && "IntersectionObserver" in window) {
    var revealTargets = document.querySelectorAll(".signal-list article, .case-metrics article, .case-narrative li, .maturity-ladder article, .offer, .guardrail-list article, .credibility-grid article, .faq-list details");
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -30px 0px" });

    revealTargets.forEach(function (element) {
      element.classList.add("reveal");
      observer.observe(element);
    });
  }

  applyTheme(document.documentElement.getAttribute("data-theme") || "dark");
})();
