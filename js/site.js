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
    var animElements = document.querySelectorAll('.animate-on-scroll, .slide-left');

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // Stagger delay for slide-left elements within the same parent
          if (entry.target.classList.contains('slide-left')) {
            var parent = entry.target.parentElement;
            var siblings = parent.querySelectorAll('.slide-left');
            var index = Array.prototype.indexOf.call(siblings, entry.target);
            entry.target.style.transitionDelay = (index * 100) + 'ms';
          }

          // Stagger skill tags
          if (entry.target.querySelector('.skill-tag')) {
            var tags = entry.target.querySelectorAll('.skill-tag');
            tags.forEach(function (tag, i) {
              tag.style.transitionDelay = (i * 50) + 'ms';
            });
          }

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
    document.querySelectorAll('.animate-on-scroll, .slide-left').forEach(function (el) {
      el.classList.add('is-visible');
    });
    document.querySelectorAll('.skill-tag').forEach(function (tag) {
      tag.style.opacity = '1';
      tag.style.transform = 'none';
    });
  }

  // --- Split-Flap Card Cycling ---
  var projects = [
    { name: "Tommy's Express POS", description: "Mission-critical POS across 250+ locations with Stripe & LPR integration", tags: ["Swift", "SwiftUI", "Stripe"], role: "Mobile Dev Manager" },
    { name: "Tommy Express App", description: "Cross-platform consumer app for iOS and Android", tags: ["React Native"], role: "Mobile Dev Manager" },
    { name: "TCW FLEX POS", description: "Interior detail belt management system for new wash sites", tags: ["Swift", "SwiftUI", "SPM"], role: "Senior iOS Engineer" },
    { name: "Infinite Miner", description: "Browser-based idle mining game with procedural generation & prestige systems", tags: ["Web App", "Game Dev"], role: "Co-Creator", url: "https://infiniteminer.com" },
    { name: "MAVSDK-Swift", description: "Open-source Swift library for autonomous drone control via MAVLink", tags: ["Swift", "RxSwift", "MAVLink"], role: "OSS Maintainer" },
    { name: "MotoCare", description: "iOS app for motorcycle riders to track service history and maintenance", tags: ["SwiftUI", "SwiftData"], role: "Creator" },
    { name: "StreetBookies", description: "iOS app helping homeschoolers find local neighborhood libraries", tags: ["SwiftUI", "Firebase"], role: "Creator" },
    { name: "Circle Check", description: "GPS-powered safety inspection app for fleet operations", tags: ["Swift", "GPS", "Maps"], role: "iOS Engineer" },
    { name: "Corporate Tools", description: "Enterprise backend suite — automated filing system increased revenue $300K/week", tags: ["Node.js", "Puppeteer", "Rails"], role: "Software Engineer" },
    { name: "Corporate Phone", description: "Cutting-edge iOS app built from ground up with TDD and CI/CD", tags: ["Swift", "SPM", "CircleCI"], role: "iOS Engineer" },
    { name: "Pepsi Halftime Show", description: "Interactive Super Bowl halftime experience for PepsiCo & NFL", tags: ["Vue/Nuxt", "Animation"], role: "Frontend Developer" },
    { name: "Nike / Amazon / Toyota", description: "Immersive digital brand experiences for global campaigns", tags: ["AR/VR", "WebXR"], role: "Frontend Developer" },
    { name: "QuickLoad", description: "Hackathon-winning logistics app automating shipment assignments", tags: ["Swift", "UX Design"], role: "Hackathon Winner" },
    { name: "Lucky English", description: "Phonics app teaching English alphabet sounds to children", tags: ["Swift", "EdTech"], role: "Creator" },
    { name: "RipATrip", description: "Travel search iOS app with GPS features and REST API integration", tags: ["Swift", "REST APIs"], role: "iOS Developer" }
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
