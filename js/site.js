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

  // --- Split-flap card cycling added below ---
