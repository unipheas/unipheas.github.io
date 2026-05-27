/* ============================================
   Brian Phillips Portfolio — Site JS
   ============================================ */

(function () {
  'use strict';

  // --- Mobile Navigation ---
  const navToggle = document.querySelector('.nav-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

  if (navToggle && mobileNav) {
    navToggle.addEventListener('click', function () {
      const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isOpen);
      mobileNav.classList.toggle('is-open');
      mobileNav.setAttribute('aria-hidden', isOpen);
    });

    // Close mobile nav when a link is clicked
    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.setAttribute('aria-expanded', 'false');
        mobileNav.classList.remove('is-open');
        mobileNav.setAttribute('aria-hidden', 'true');
      });
    });

    // Close mobile nav when clicking outside
    document.addEventListener('click', function (e) {
      if (!mobileNav.contains(e.target) && !navToggle.contains(e.target)) {
        navToggle.setAttribute('aria-expanded', 'false');
        mobileNav.classList.remove('is-open');
        mobileNav.setAttribute('aria-hidden', 'true');
      }
    });
  }

  // --- Scroll Animations (Intersection Observer) ---
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reducedMotion) {
    var animElements = document.querySelectorAll('.animate-on-scroll');

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    animElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // If reduced motion, make everything visible immediately
    document.querySelectorAll('.animate-on-scroll').forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  // --- Split-Flap Card Cycling ---
  var projects = [
    { name: "Tommy's Express POS", description: "Own the POS platform running across 250+ car wash locations — architecture, release discipline, and high-volume daily operations with payments and license plate recognition.", tags: ["Swift", "SwiftUI", "Stripe"], role: "Mobile Development Manager" },
    { name: "Tommy Express App", description: "Lead the consumer mobile platform used by more than 2 million customers across iOS and Android.", tags: ["React Native"], role: "Mobile Development Manager" },
    { name: "TCW FLEX POS", description: "Directed delivery of a new internal product supporting site rollouts and day-to-day belt management operations.", tags: ["Swift", "SwiftUI", "SPM"], role: "Senior iOS Engineer" },
    { name: "Infinite Miner", description: "Built and now operate a live browser game end to end — procedural generation, progression loops, and ongoing updates via an AI-assisted workflow.", tags: ["Web App", "Game Dev"], role: "Co-Creator", url: "https://infiniteminer.com" },
    { name: "MAVSDK-Swift", description: "Maintained the open-source Swift client for controlling autonomous drones over MAVLink, with a focus on reliability and developer usability.", tags: ["Swift", "RxSwift", "MAVLink"], role: "OSS Maintainer" },
    { name: "MotoCare", description: "iOS app for riders to track maintenance history, service intervals, and vehicle records.", tags: ["SwiftUI", "SwiftData"], role: "Creator" },
    { name: "StreetBookies", description: "iOS app that helps homeschool families find neighborhood libraries and related learning resources.", tags: ["SwiftUI", "Firebase"], role: "Creator" },
    { name: "Circle Check", description: "Led delivery of a GPS-powered safety inspection product for fleet operations, including work for NAV Canada.", tags: ["Swift", "GPS", "Maps"], role: "Lead Engineer" },
    { name: "Corporate Tools", description: "Built the automation system that removed a core operational bottleneck and added more than $300K per week in revenue capacity.", tags: ["Node.js", "Puppeteer", "Rails"], role: "Software Engineer" },
    { name: "Corporate Phone", description: "Took a production iOS app from greenfield through launch with TDD, CI/CD, and release automation.", tags: ["Swift", "SPM", "CircleCI"], role: "iOS Engineer" },
    { name: "Pepsi Halftime Show", description: "Shipped the interactive digital experience for PepsiCo and the NFL's Super Bowl halftime campaign under a fixed, very public deadline.", tags: ["Vue/Nuxt", "Animation"], role: "Frontend Developer" },
    { name: "Nike / Amazon / Toyota", description: "Delivered AR and VR campaign work for global brands under tight deadlines and public launch pressure.", tags: ["AR/VR", "WebXR"], role: "Frontend Developer" },
    { name: "QuickLoad", description: "Hackathon-winning logistics product that automated shipment assignment workflows in China's freight system.", tags: ["Swift", "UX Design"], role: "Hackathon Winner" },
    { name: "Lucky English", description: "Designed and built a phonics app for children learning English while living and teaching in Asia.", tags: ["Swift", "EdTech"], role: "Creator" },
    { name: "RipATrip", description: "Built the iOS app, backend API, and admin tooling for a travel product with GPS and REST integrations.", tags: ["Swift", "REST APIs"], role: "Full-Stack Developer" }
  ];

  // Track which project index each card is showing
  var activeIndices = [];
  var cards = document.querySelectorAll('.flip-card');

  function renderCardContent(project) {
    var tagsHtml = project.tags.map(function (tag) {
      return '<span class="card-tag">' + tag + '</span>';
    }).join('');

    return '<div class="card-title">' + project.name + '</div>' +
      '<div class="card-description">' + project.description + '</div>' +
      '<div class="card-tags">' + tagsHtml + '</div>' +
      '<div class="card-role">' + project.role + '</div>';
  }

  function getRandomProjectIndex(exclude) {
    var available = [];
    for (var i = 0; i < projects.length; i++) {
      if (exclude.indexOf(i) === -1) {
        available.push(i);
      }
    }
    return available[Math.floor(Math.random() * available.length)];
  }

  // Initialize cards with random non-duplicate projects
  function initCards() {
    cards.forEach(function (card) {
      var idx = getRandomProjectIndex(activeIndices);
      activeIndices.push(idx);
      var content = card.querySelector('.flip-card-content');
      content.innerHTML = renderCardContent(projects[idx]);
    });
  }

  // Split-flap animation for a single card
  function flipCard(cardIndex) {
    var card = cards[cardIndex];
    if (!card || card.classList.contains('is-flipping')) return;

    var newIdx = getRandomProjectIndex(activeIndices);
    var oldIdx = activeIndices[cardIndex];

    // Update tracked indices
    activeIndices[cardIndex] = newIdx;

    var inner = card.querySelector('.flip-card-inner');
    var currentContent = card.querySelector('.flip-card-content');
    var cardHeight = currentContent.offsetHeight;

    // Set fixed height during animation
    inner.style.height = cardHeight + 'px';

    // Create old top half
    var oldTop = document.createElement('div');
    oldTop.className = 'flip-top old';
    oldTop.innerHTML = '<div class="flip-card-content" style="min-height:' + cardHeight + 'px">' +
      renderCardContent(projects[oldIdx]) + '</div>';

    // Create new top half
    var newTop = document.createElement('div');
    newTop.className = 'flip-top new';
    newTop.innerHTML = '<div class="flip-card-content" style="min-height:' + cardHeight + 'px">' +
      renderCardContent(projects[newIdx]) + '</div>';

    // Create bottom half (shows new content)
    var newBottom = document.createElement('div');
    newBottom.className = 'flip-bottom';
    newBottom.innerHTML = '<div class="flip-card-content" style="min-height:' + cardHeight + 'px">' +
      renderCardContent(projects[newIdx]) + '</div>';

    // Hide original content, add animation elements
    currentContent.style.visibility = 'hidden';
    inner.appendChild(oldTop);
    inner.appendChild(newBottom);
    inner.appendChild(newTop);

    card.classList.add('is-flipping');

    // Clean up after animation
    setTimeout(function () {
      card.classList.remove('is-flipping');
      currentContent.innerHTML = renderCardContent(projects[newIdx]);
      currentContent.style.visibility = '';
      inner.style.height = '';

      // Remove animation elements
      if (oldTop.parentNode) oldTop.parentNode.removeChild(oldTop);
      if (newTop.parentNode) newTop.parentNode.removeChild(newTop);
      if (newBottom.parentNode) newBottom.parentNode.removeChild(newBottom);
    }, 700);
  }

  // Start cycling
  function startCycling() {
    cards.forEach(function (card, i) {
      function scheduleFlip() {
        var delay = 10000 + Math.random() * 5000; // 10-15 seconds
        setTimeout(function () {
          flipCard(i);
          scheduleFlip();
        }, delay);
      }
      // Stagger initial starts so they don't all flip at once
      setTimeout(scheduleFlip, 2000 + i * 1500);
    });
  }

  // Populate print-only container with all projects
  function populatePrintProjects() {
    var container = document.querySelector('.print-all-projects');
    if (!container) return;
    container.innerHTML = projects.map(function (project) {
      return '<div class="flip-card-content" style="margin-bottom:12px">' +
        renderCardContent(project) + '</div>';
    }).join('');
  }

  if (cards.length > 0) {
    initCards();
    populatePrintProjects();
    if (!reducedMotion) {
      startCycling();
    }
  }

})();
