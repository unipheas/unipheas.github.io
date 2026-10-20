(function () {
  "use strict";
  var input = document.getElementById("project-search");
  if (!input) return;
  var records = Array.from(document.querySelectorAll("[data-project]"));
  var groups = Array.from(document.querySelectorAll("[data-project-group]"));
  var categories = Array.from(document.querySelectorAll("[data-category]"));
  var status = document.getElementById("archive-status");
  var empty = document.querySelector(".empty-results");
  var text = new Map(records.map(function (record) {
    return [record, (record.textContent + " " + record.dataset.context).toLowerCase()];
  }));

  function filter() {
    var terms = input.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
    var count = 0;
    records.forEach(function (record) {
      record.hidden = !terms.every(function (term) { return text.get(record).includes(term); });
      if (!record.hidden) count++;
    });
    groups.concat(categories).forEach(function (group) {
      group.hidden = !group.querySelector("[data-project]:not([hidden])");
    });
    status.textContent = terms.length ? count + " of " + records.length + " project records match" : records.length + " project records in the archive";
    empty.hidden = count !== 0;
  }

  input.addEventListener("input", filter);
  document.querySelector("[data-expand]").addEventListener("click", function () {
    records.forEach(function (record) { if (!record.hidden) record.open = true; });
  });
  document.querySelector("[data-collapse]").addEventListener("click", function () {
    records.forEach(function (record) { if (!record.hidden) record.open = false; });
  });

  function revealAnchor() {
    var id;
    try { id = decodeURIComponent(window.location.hash.slice(1)); } catch (_) { return; }
    var target = document.getElementById(id);
    if (!target || !document.getElementById("project-archive").contains(target)) return;
    if (input.value) { input.value = ""; filter(); }
    if (target.matches("[data-project]")) target.open = true;
    requestAnimationFrame(function () { target.scrollIntoView(); });
  }
  window.addEventListener("hashchange", revealAnchor);
  document.querySelectorAll(".work-index a[href^='#']").forEach(function (link) {
    link.addEventListener("click", function () {
      if (link.hash === window.location.hash) revealAnchor();
    });
  });
  document.documentElement.classList.add("archive-ready");
  filter();
  revealAnchor();
})();
