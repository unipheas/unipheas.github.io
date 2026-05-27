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
    { name: "Tommy's Express POS", description: "I run the POS platform behind 250+ car wash locations: payments, license plate recognition, and a lot of transactions a day.", tags: ["Swift", "SwiftUI", "Stripe"], role: "Mobile Development Manager" },
    { name: "Tommy Express App", description: "I lead the consumer app, used by more than 2 million people on iOS and Android.", tags: ["React Native"], role: "Mobile Development Manager" },
    { name: "TCW FLEX POS", description: "Built a new internal product for site rollouts and day-to-day belt management.", tags: ["Swift", "SwiftUI", "SPM"], role: "Senior iOS Engineer" },
    { name: "Corporate Tools", description: "Built the automation that cleared a bottleneck and freed up more than $300K a week in revenue.", tags: ["Node.js", "Rails", "AWS"], role: "Software Engineer" },
    { name: "Corporate Phone", description: "Took a production iOS app from greenfield through launch with TDD, CI/CD, and release automation.", tags: ["Swift", "SPM", "CircleCI"], role: "iOS Engineer" },
    { name: "MotoCare", description: "iOS app for riders to track maintenance history, service intervals, and vehicle records.", tags: ["SwiftUI", "SwiftData"], role: "Creator" },
    { name: "StreetBookies", description: "iOS app that helps homeschool families find neighborhood libraries and learning resources.", tags: ["SwiftUI", "Firebase"], role: "Creator" },
    { name: "Circle Check (iOS)", description: "Built a GPS-based vehicle safety-inspection app for fleet drivers, wired up to the Geotab API.", tags: ["Swift", "GPS", "Geotab"], role: "Lead Engineer" },
    { name: "Circle Check (Rebuild)", description: "Helped take over and modernize a fleet management product, moving it off PHP/MySQL onto Node and Angular.", tags: ["Node.js", "Angular", "Ionic"], role: "Engineer" },
    { name: "MAVSDK-Swift", description: "Maintained the open-source Swift client for flying autonomous PX4 drones over MAVLink.", tags: ["Swift", "RxSwift", "MAVLink"], role: "OSS Maintainer" },
    { name: "MAVSDK-Swift Example App", description: "Maintained the example app that shows developers how to control drones from Swift.", tags: ["Swift", "RxSwift", "MAVLink"], role: "OSS Maintainer" },
    { name: "People Game", description: "iOS app for finding people nearby to do activities with, with a real-time location finder.", tags: ["Swift", "iOS"], role: "Creator" },
    { name: "Lucky English", description: "Designed and built a phonics app for kids learning English while I was teaching in Asia.", tags: ["Swift", "EdTech"], role: "Creator" },
    { name: "Hangman by Lucky English", description: "Built a hangman spelling game for English learners as part of the Lucky English apps.", tags: ["Swift", "EdTech"], role: "Creator" },
    { name: "RipATrip", description: "Built the iOS app, backend API, and admin tooling for a travel product with GPS and REST integrations.", tags: ["Swift", "REST APIs"], role: "Full-Stack Developer" },
    { name: "QuickLoad", description: "Hackathon-winning logistics product that automated shipment assignment in China's freight system.", tags: ["Swift", "UX Design"], role: "Hackathon Winner" },
    { name: "Mandarin Blueprint", description: "Built a Mandarin learning app from scratch with a Node/MongoDB backend and an Angular/Ionic frontend.", tags: ["Node.js", "Angular", "Ionic"], role: "Developer" },
    { name: "The Stack, Oxford Properties", description: "Built an AR app that brings a flagship building to life from an image target on a business card.", tags: ["AR", "iOS"], role: "AR Developer" },
    { name: "NAV Canada", description: "Built an AR training app that lets air traffic control trainees walk a virtual tower and its terminals.", tags: ["AR", "iOS"], role: "AR Developer" },
    { name: "Somerville", description: "Helped build and manage an AR app that lets clients show their products in 3D as a sales tool.", tags: ["AR", "3D"], role: "Developer" },
    { name: "Capreit Sphere", description: "Built a 360-degree location viewer in Unity and C# for an immersive walkthrough experience.", tags: ["Unity", "C#"], role: "Developer" },
    { name: "Pepsi Halftime Show", description: "Built a custom site and animations for PepsiCo and the NFL halftime show, including the countdown.", tags: ["Nuxt/Vue", "Docker"], role: "Frontend Developer" },
    { name: "Super Bowl", description: "Built pages and features for a Mountain Dew Super Bowl fan site as part of the dev team.", tags: ["Vue.js"], role: "Web Developer" },
    { name: "Speedway Mountain Dew", description: "Took over a much-passed-around Vue.js site for Mountain Dew and Speedway and added new slides and features.", tags: ["Vue.js"], role: "Web Developer" },
    { name: "Rigetti", description: "Built Rigetti Quantum Computing's site from scratch in two months as a full CMS on AWS, front and back.", tags: ["Vue.js", "AWS", "CMS"], role: "Lead Developer" },
    { name: "IBM Security Journey Assessment", description: "Reworked IBM's security assessment app: new login flow, language options, and a custom intro animation.", tags: ["Vue.js"], role: "Web Developer" },
    { name: "14FOUR Hack", description: "Rebuilt the 14Four website with a small team in an 8-hour hackathon that set the template for the rest.", tags: ["Hackathon", "Frontend"], role: "Developer" },
    { name: "14FOUR Holiday 2020", description: "Built a client prize-lottery system end to end in two days, including the Docker setup and pipeline.", tags: ["Nuxt/Vue", "Docker"], role: "Web Developer" },
    { name: "Jamba Juice", description: "Built animated banner ads for Jamba Juice and The Croods on a custom, heavily animated banner system.", tags: ["React", "CSS Animation"], role: "Frontend Developer" },
    { name: "Church's Chicken Ads", description: "Built a custom animated banner-ad system for Church's Chicken with React and heavy CSS animation.", tags: ["React", "SCSS"], role: "Frontend Developer" },
    { name: "Doritos", description: "Built a promotion-ended landing page for Doritos and updated their main site.", tags: ["Vue.js", "PUG"], role: "Web Developer" },
    { name: "Gatorade", description: "Built a quick coming-soon landing page for a Gatorade event in Vue.js.", tags: ["Vue.js"], role: "Web Developer" },
    { name: "Tito's Cocktail", description: "Came in near the finish line to fix bugs and get a Vue.js project ready to launch.", tags: ["Vue.js"], role: "Web Developer" },
    { name: "Pernod Ricard Holiday", description: "Designed and built the results page for a Pernod Ricard holiday site in Vue.js.", tags: ["Vue.js"], role: "Web Developer" },
    { name: "BBDO Atlanta", description: "Built several custom modules for a BBDO site on Vue.js with a Craft and Element API backend.", tags: ["Vue.js", "Craft"], role: "Web Developer" },
    { name: "Y & Co Wines", description: "Sole developer on the Y & Co Wines site, built in a month with Vue.js and ScrollMagic.", tags: ["Vue.js", "ScrollMagic"], role: "Solo Developer" },
    { name: "Sacred Heart Schools", description: "Built a virtual admissions portal on WordPress and Divi with custom PHP modules.", tags: ["WordPress", "PHP"], role: "Web Developer" },
    { name: "Lambda Research Co.", description: "Rebuilt the company site and marketing from the ground up, growing reach through SEO and ads.", tags: ["Web", "SEO"], role: "Web Developer" },
    { name: "Xi-rang", description: "Designed and built a product and blog site for an organic fertilizer company in China.", tags: ["WordPress", "PHP"], role: "Web Developer" },
    { name: "Dharma Beach", description: "Redesigned and extended a site connecting travelers with local host families abroad.", tags: ["PHP", "MySQL"], role: "Web Developer" },
    { name: "MontaniTours", description: "Rebuilt a cultural-travel site and added features for booking local experiences.", tags: ["PHP", "MySQL"], role: "Web Developer" },
    { name: "Montanita", description: "Ran Google Ads and redesigned parts of the site to grow monthly traffic.", tags: ["Google Ads", "HTML/CSS"], role: "Marketing & Web" },
    { name: "Marazul Spanish School", description: "Ran Google Ads and refreshed parts of the site to bring in more monthly visitors.", tags: ["Google Ads", "HTML/CSS"], role: "Marketing & Web" },
    { name: "Montanita Spanish School", description: "Managed Google Ads and updated the site to grow monthly traffic.", tags: ["Google Ads", "HTML/CSS"], role: "Marketing & Web" },
    { name: "Healing With Tanya", description: "Designed and built the site and ran the marketing behind it.", tags: ["HTML/CSS", "jQuery"], role: "Web Developer" },
    { name: "YouthGo", description: "Built the site and helped drive traffic to it with a marketing push.", tags: ["HTML/CSS", "jQuery"], role: "Web Developer" },
    { name: "Restoring Life Herbs", description: "Built an e-commerce store from the ground up on WordPress and WooCommerce.", tags: ["WordPress", "WooCommerce"], role: "Software Engineer" },
    { name: "Jewelry By Beavers", description: "Built a WordPress and WooCommerce store from scratch for online sales.", tags: ["WordPress", "WooCommerce"], role: "Software Engineer" }
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
