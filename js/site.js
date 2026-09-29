(function () {
  "use strict";

  var header = document.querySelector("[data-header]");
  var menuToggle = document.querySelector("[data-menu-toggle]");
  var menu = document.querySelector("[data-menu]");

  function setMenu(open) {
    if (!menuToggle || !menu) return;
    menuToggle.setAttribute("aria-expanded", String(open));
    menu.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
  }

  function closeMenu() {
    setMenu(false);
  }

  if (menuToggle && menu) {
    menuToggle.addEventListener("click", function () {
      setMenu(menuToggle.getAttribute("aria-expanded") !== "true");
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
        closeMenu();
        menuToggle.focus();
      }
    });

    document.addEventListener("click", function (event) {
      if (menuToggle.getAttribute("aria-expanded") === "true" &&
          !menu.contains(event.target) &&
          !menuToggle.contains(event.target)) {
        closeMenu();
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 900) closeMenu();
    });
  }

  if (header) {
    function updateHeader() {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    }

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
  }
})();

// Carry only non-personal campaign labels into navigation and the user's email draft.
// No cookies, storage, analytics requests, or form submissions.
(function () {
  "use strict";
  var params = new URLSearchParams(window.location.search);
  var campaign = new URLSearchParams();
  ["utm_source", "utm_medium", "utm_campaign", "utm_content"].forEach(function (key) {
    var value = params.get(key);
    if (value && /^[a-zA-Z0-9_-]{1,80}$/.test(value)) campaign.set(key, value);
  });
  if (!campaign.size) return;
  document.querySelectorAll("a[href]").forEach(function (link) {
    var url = new URL(link.href, window.location.href);
    if (url.protocol === "mailto:") {
      if (!url.searchParams.has("body")) return;
      var source = [];
      campaign.forEach(function (value, key) { source.push(key + "=" + value); });
      url.searchParams.set("body", url.searchParams.get("body") + "\n\nCampaign reference: " + source.join("; "));
      link.href = url.href;
    } else if (url.origin === window.location.origin && /(?:\.html|\/)$/.test(url.pathname)) {
      campaign.forEach(function (value, key) { url.searchParams.set(key, value); });
      link.href = url.href;
    }
  });
})();
