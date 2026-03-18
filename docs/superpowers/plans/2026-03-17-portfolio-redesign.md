# Portfolio Website Redesign Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild Brian Phillips' portfolio site as a clean, minimal, Apple-inspired static HTML page with split-flap cycling project cards.

**Architecture:** Single-page static site with 3 files: `index.html` (semantic HTML structure), `css/style.css` (design system, layout, animations, responsive), and `js/site.js` (split-flap cycling, Intersection Observer scroll triggers, mobile nav). No frameworks or build tools — deploys directly to GitHub Pages.

**Tech Stack:** HTML5, CSS3 (custom properties, grid, 3D transforms, @keyframes), vanilla JS (ES6+, Intersection Observer API)

**Spec:** `docs/superpowers/specs/2026-03-17-portfolio-redesign-design.md`

---

## File Map

| File | Responsibility | New/Modify |
|------|---------------|------------|
| `css/style.css` | Design tokens, typography, layout, components, animations, responsive breakpoints, print styles | Create (replaces old) |
| `index.html` | Complete single-page HTML with all 6 sections, semantic landmarks, meta tags | Create (replaces old) |
| `js/site.js` | Split-flap card cycling engine, Intersection Observer scroll animations, mobile hamburger nav | Create (replaces old) |
| `404.html` | Simple error page matching new design | Modify |

Files to remove (Task 1): `colors/`, `fonts/`, `js/libs/`, `js/plugins/`, `js/options.js`, `js/site.js` (old)

---

## Chunk 1: Foundation

### Task 1: Clean up old files and create CSS foundation

**Files:**
- Remove: `colors/` directory, `fonts/` directory, `js/libs/`, `js/plugins/`, `js/options.js`
- Create: `css/style.css`

- [ ] **Step 1: Remove old asset directories**

```bash
git rm -r colors/ fonts/ js/libs/ js/plugins/ js/options.js
```

- [ ] **Step 2: Create `css/style.css` with design tokens, reset, and typography**

```css
/* ============================================
   Brian Phillips Portfolio — Style Sheet
   ============================================ */

/* --- Reset & Base --- */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --color-primary: #1d1d1f;
  --color-secondary: #424245;
  --color-tertiary: #86868b;
  --color-background: #fbfbfd;
  --color-surface: #f5f5f7;
  --color-border: #e8e8e8;
  --color-accent: #0071e3;

  --font-stack: -apple-system, 'SF Pro Display', 'SF Pro Text', system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --max-width: 800px;
}

html {
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
}

body {
  font-family: var(--font-stack);
  font-size: 15px;
  line-height: 1.6;
  color: var(--color-primary);
  background: var(--color-background);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  color: var(--color-accent);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

a:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
  border-radius: 4px;
}

img {
  max-width: 100%;
  display: block;
}

/* --- Typography --- */
.section-label {
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--color-tertiary);
  margin-bottom: 16px;
}

.section-title {
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.5px;
  color: var(--color-primary);
  margin-bottom: 32px;
}

.subheading {
  font-size: 21px;
  font-weight: 600;
  letter-spacing: -0.3px;
  line-height: 1.4;
  color: var(--color-primary);
}

/* --- Layout --- */
.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 40px;
}

.section {
  padding: 60px 0;
}

.divider {
  height: 1px;
  background: var(--color-border);
  margin: 0 40px;
  max-width: calc(var(--max-width) - 80px);
  margin-left: auto;
  margin-right: auto;
}
```

- [ ] **Step 3: Commit foundation**

```bash
git add -A
git commit -m "chore: remove old assets and create CSS foundation with design tokens"
```

---

### Task 2: Build the HTML structure (nav + hero + about)

**Files:**
- Create: `index.html` (new, replaces old)

- [ ] **Step 1: Create `index.html` with head, nav, hero, and about sections**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Brian Phillips — iOS Engineer & Mobile Development Manager</title>
  <meta name="description" content="Mobile Development Manager and iOS Engineer with 15 years of experience building high-performance apps for enterprise clients and global brands.">

  <!-- Open Graph -->
  <meta property="og:title" content="Brian Phillips — Mobile Systems at Scale">
  <meta property="og:description" content="iOS Engineer & Mobile Development Manager. 15 years building enterprise mobile apps for global brands.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://unipheas.github.io">

  <!-- Favicon -->
  <link rel="shortcut icon" type="image/x-icon" href="img/favicon.ico">

  <!-- Styles -->
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <!-- Navigation -->
  <header class="nav-header" role="banner">
    <nav class="nav-bar" role="navigation" aria-label="Main navigation">
      <div class="nav-inner">
        <a href="#" class="nav-logo">Brian Phillips</a>
        <ul class="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
          <span class="nav-toggle-icon"></span>
        </button>
      </div>
    </nav>
    <!-- Mobile dropdown -->
    <div class="mobile-nav" aria-hidden="true">
      <ul class="mobile-nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </header>

  <main role="main">

    <!-- Hero -->
    <section class="hero" aria-label="Introduction">
      <div class="container hero-content">
        <p class="hero-label">iOS Engineer · Mobile Development Manager</p>
        <h1 class="hero-headline">Mobile systems<br>at scale.</h1>
        <p class="hero-subline">15 years building high-performance apps for enterprise clients and global brands.</p>
        <div class="hero-scroll-indicator" aria-hidden="true">&#9662;</div>
      </div>
    </section>

    <div class="divider"></div>

    <!-- About -->
    <section id="about" class="section animate-on-scroll" aria-label="About">
      <div class="container about-content">
        <p class="section-label">About</p>
        <h2 class="subheading about-lead">I build mobile systems that work at scale — from architecture to App Store.</h2>
        <p class="about-bio">
          Currently leading mobile development at Tommy Car Wash Systems, where I manage a cross-functional team building iOS/Android apps and POS systems deployed across 250+ locations. Previously built immersive experiences for Nike, Amazon, and Toyota at 14Four, co-founded a development agency across Asia, and maintained open-source drone SDKs. FAA-certified remote pilot.
        </p>
        <div class="about-links">
          <a href="https://github.com/unipheas" target="_blank" rel="noopener noreferrer">GitHub &#8599;</a>
          <a href="mailto:unipheas@protonmail.com">unipheas@protonmail.com &#8599;</a>
        </div>
      </div>
    </section>

    <!-- Sections 3-6 added in next tasks -->

  </main>

  <script src="js/site.js"></script>
</body>
</html>
```

- [ ] **Step 2: Add nav and hero styles to `css/style.css`**

Append to `css/style.css`:

```css
/* --- Navigation --- */
.nav-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--color-background);
}

.nav-bar {
  border-bottom: 1px solid var(--color-border);
}

.nav-inner {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 16px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo {
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.3px;
  color: var(--color-primary);
  text-decoration: none;
}

.nav-logo:hover {
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 24px;
  list-style: none;
}

.nav-links a {
  font-size: 12px;
  color: var(--color-tertiary);
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav-links a:hover {
  color: var(--color-primary);
  text-decoration: none;
}

.nav-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.nav-toggle-icon,
.nav-toggle-icon::before,
.nav-toggle-icon::after {
  display: block;
  width: 18px;
  height: 1.5px;
  background: var(--color-primary);
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.nav-toggle-icon {
  position: relative;
}

.nav-toggle-icon::before,
.nav-toggle-icon::after {
  content: '';
  position: absolute;
  left: 0;
}

.nav-toggle-icon::before {
  top: -6px;
}

.nav-toggle-icon::after {
  top: 6px;
}

/* Hamburger → X animation */
.nav-toggle[aria-expanded="true"] .nav-toggle-icon {
  background: transparent;
}

.nav-toggle[aria-expanded="true"] .nav-toggle-icon::before {
  top: 0;
  transform: rotate(45deg);
}

.nav-toggle[aria-expanded="true"] .nav-toggle-icon::after {
  top: 0;
  transform: rotate(-45deg);
}

/* Mobile nav dropdown */
.mobile-nav {
  display: none;
  background: var(--color-background);
  border-bottom: 1px solid var(--color-border);
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.3s ease;
}

.mobile-nav.is-open {
  max-height: 300px;
}

.mobile-nav-links {
  list-style: none;
  padding: 8px 40px 16px;
}

.mobile-nav-links li {
  padding: 12px 0;
  border-bottom: 1px solid var(--color-border);
}

.mobile-nav-links li:last-child {
  border-bottom: none;
}

.mobile-nav-links a {
  font-size: 15px;
  color: var(--color-primary);
  text-decoration: none;
}

/* --- Hero --- */
.hero {
  padding: 100px 0 80px;
  text-align: center;
}

.hero-label {
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--color-tertiary);
  margin-bottom: 16px;
}

.hero-headline {
  font-size: 48px;
  font-weight: 700;
  letter-spacing: -1.5px;
  line-height: 1.05;
  color: var(--color-primary);
  margin-bottom: 20px;
}

.hero-subline {
  font-size: 17px;
  color: var(--color-tertiary);
  line-height: 1.5;
  max-width: 460px;
  margin: 0 auto;
}

.hero-scroll-indicator {
  margin-top: 40px;
  font-size: 20px;
  color: var(--color-tertiary);
}

/* Hero fade-up animation */
.hero-content {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeUp 0.8s ease-out forwards;
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* --- About --- */
.about-content {
  max-width: 560px;
}

.about-lead {
  margin-bottom: 16px;
}

.about-bio {
  font-size: 15px;
  color: var(--color-secondary);
  line-height: 1.7;
}

.about-links {
  display: flex;
  gap: 16px;
  margin-top: 24px;
}

.about-links a {
  font-size: 13px;
}
```

- [ ] **Step 3: Commit nav + hero + about**

```bash
git rm index.html
git add index.html css/style.css
git commit -m "feat: add HTML structure with nav, hero, and about sections"
```

---

### Task 3: Add Featured Work section with card markup

**Files:**
- Modify: `index.html`
- Modify: `css/style.css`

- [ ] **Step 1: Add Featured Work HTML to `index.html`**

Insert after the About section's closing `</section>` and divider:

```html
    <div class="divider"></div>

    <!-- Featured Work -->
    <section id="work" class="section" aria-label="Featured Work">
      <div class="container">
        <p class="section-label">Featured Work</p>
        <h2 class="section-title">Select projects.</h2>

        <div class="card-grid" aria-live="polite">
          <div class="flip-card" data-card-index="0">
            <div class="flip-card-inner">
              <div class="flip-card-content">
                <!-- Populated by JS -->
              </div>
            </div>
          </div>
          <div class="flip-card" data-card-index="1">
            <div class="flip-card-inner">
              <div class="flip-card-content">
              </div>
            </div>
          </div>
          <div class="flip-card" data-card-index="2">
            <div class="flip-card-inner">
              <div class="flip-card-content">
              </div>
            </div>
          </div>
          <div class="flip-card" data-card-index="3">
            <div class="flip-card-inner">
              <div class="flip-card-content">
              </div>
            </div>
          </div>
        </div>

        <!-- Print-only: all projects rendered statically by JS on load -->
        <div class="print-all-projects" aria-hidden="true"></div>
      </div>
    </section>
```

- [ ] **Step 2: Add card grid and flip-card styles to `css/style.css`**

```css
/* --- Card Grid --- */

/* Hidden on screen, shown in print */
.print-all-projects {
  display: none;
}
.card-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

/* --- Flip Card --- */
.flip-card {
  perspective: 800px;
  min-height: 180px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
}

.flip-card-content {
  background: var(--color-surface);
  border-radius: 16px;
  padding: 28px;
  min-height: 180px;
}

.card-title {
  font-size: 17px;
  font-weight: 600;
  letter-spacing: -0.3px;
  color: var(--color-primary);
}

.card-description {
  font-size: 13px;
  color: var(--color-tertiary);
  margin-top: 6px;
  line-height: 1.5;
}

.card-tags {
  display: flex;
  gap: 6px;
  margin-top: 12px;
  flex-wrap: wrap;
}

.card-tag {
  font-size: 10px;
  background: var(--color-border);
  color: var(--color-secondary);
  padding: 3px 8px;
  border-radius: 100px;
}

.card-role {
  font-size: 11px;
  color: var(--color-tertiary);
  margin-top: 12px;
}

/* --- Split-Flap Animation --- */
.flip-card-inner {
  overflow: hidden;
  border-radius: 16px;
}

/* Top half clip */
.flip-card .flip-top {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  overflow: hidden;
  transform-origin: bottom center;
  backface-visibility: hidden;
  will-change: transform;
  z-index: 2;
}

.flip-card .flip-top .flip-card-content {
  border-radius: 16px 16px 0 0;
}

/* Bottom half */
.flip-card .flip-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  overflow: hidden;
  z-index: 1;
}

.flip-card .flip-bottom .flip-card-content {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-radius: 0 0 16px 16px;
}

/* Phase 1: Old top flips away */
.flip-card.is-flipping .flip-top.old {
  animation: flipTopOut 0.3s ease-in forwards;
}

@keyframes flipTopOut {
  from { transform: rotateX(0); }
  to { transform: rotateX(-90deg); }
}

/* Phase 2: New top flips in */
.flip-card.is-flipping .flip-top.new {
  animation: flipTopIn 0.3s ease-out 0.3s forwards;
  transform: rotateX(90deg);
}

@keyframes flipTopIn {
  from { transform: rotateX(90deg); }
  to { transform: rotateX(0); }
}
```

- [ ] **Step 3: Commit card markup and styles**

```bash
git add index.html css/style.css
git commit -m "feat: add featured work section with split-flap card markup and styles"
```

---

### Task 4: Add Experience, Capabilities, Contact, and Footer HTML + CSS

**Files:**
- Modify: `index.html`
- Modify: `css/style.css`

- [ ] **Step 1: Add Experience section HTML to `index.html`**

Insert after Featured Work section:

```html
    <div class="divider"></div>

    <!-- Experience -->
    <section id="experience" class="section" aria-label="Experience">
      <div class="container">
        <p class="section-label">Experience</p>
        <h2 class="section-title">Career.</h2>

        <div class="exp-chapter">
          <h3 class="exp-chapter-title">Building &amp; Leading</h3>
          <div class="exp-row animate-on-scroll slide-left">
            <div class="exp-info">
              <span class="exp-role">Mobile Development Manager</span>
              <span class="exp-company"> · Tommy Car Wash Systems</span>
            </div>
            <span class="exp-date">2024–Present</span>
          </div>
          <div class="exp-row animate-on-scroll slide-left">
            <div class="exp-info">
              <span class="exp-role">Senior iOS Engineer</span>
              <span class="exp-company"> · Tommy Car Wash Systems</span>
            </div>
            <span class="exp-date">2022–2024</span>
          </div>
        </div>

        <div class="exp-chapter">
          <h3 class="exp-chapter-title">Crafting</h3>
          <div class="exp-row animate-on-scroll slide-left">
            <div class="exp-info">
              <span class="exp-role">iOS Engineer</span>
              <span class="exp-company"> · Two Barrels</span>
            </div>
            <span class="exp-date">2021–2022</span>
          </div>
          <div class="exp-row animate-on-scroll slide-left">
            <div class="exp-info">
              <span class="exp-role">Frontend Developer</span>
              <span class="exp-company"> · 14Four</span>
            </div>
            <span class="exp-date">2020–2021</span>
          </div>
          <div class="exp-row animate-on-scroll slide-left">
            <div class="exp-info">
              <span class="exp-role">iOS Engineer</span>
              <span class="exp-company"> · Titanian Inc</span>
            </div>
            <span class="exp-date">2018–2020</span>
          </div>
        </div>

        <div class="exp-chapter">
          <h3 class="exp-chapter-title">Founding</h3>
          <div class="exp-row animate-on-scroll slide-left">
            <div class="exp-info">
              <span class="exp-role">Lead Full Stack Engineer</span>
              <span class="exp-company"> · Polyphasic Developers</span>
            </div>
            <span class="exp-date">2016–2020</span>
          </div>
          <div class="exp-row animate-on-scroll slide-left">
            <div class="exp-info">
              <span class="exp-role">JavaScript Teacher</span>
              <span class="exp-company"> · Le Wagon</span>
            </div>
            <span class="exp-date">2017–2019</span>
          </div>
          <div class="exp-row animate-on-scroll slide-left">
            <div class="exp-info">
              <span class="exp-role">Web Dev / Analytics</span>
              <span class="exp-company"> · Self Employed</span>
            </div>
            <span class="exp-date">2010–2016</span>
          </div>
        </div>
      </div>
    </section>

    <div class="divider"></div>

    <!-- Capabilities -->
    <section id="capabilities" class="section animate-on-scroll" aria-label="Capabilities">
      <div class="container">
        <p class="section-label">Capabilities</p>

        <div class="skills-group">
          <h3 class="skills-group-title">Mobile Development</h3>
          <div class="skills-tags">
            <span class="skill-tag">iOS App Architecture</span>
            <span class="skill-tag">Swift &amp; SwiftUI</span>
            <span class="skill-tag">Cross-Platform (React Native)</span>
            <span class="skill-tag">App Store Deployment</span>
            <span class="skill-tag">Payment Integration</span>
          </div>
        </div>

        <div class="skills-group">
          <h3 class="skills-group-title">Engineering Leadership</h3>
          <div class="skills-tags">
            <span class="skill-tag">Team Management</span>
            <span class="skill-tag">CI/CD Pipeline Design</span>
            <span class="skill-tag">Code Review &amp; Mentorship</span>
            <span class="skill-tag">Agile / Scrum</span>
          </div>
        </div>

        <div class="skills-group">
          <h3 class="skills-group-title">Full Stack &amp; Cloud</h3>
          <div class="skills-tags">
            <span class="skill-tag">Node.js &amp; REST APIs</span>
            <span class="skill-tag">PostgreSQL</span>
            <span class="skill-tag">AWS &amp; Docker</span>
            <span class="skill-tag">Firebase</span>
          </div>
        </div>

        <div class="skills-group">
          <h3 class="skills-group-title">Specialized</h3>
          <div class="skills-tags">
            <span class="skill-tag">AR/VR &amp; Immersive Experiences</span>
            <span class="skill-tag">Process Automation</span>
            <span class="skill-tag skill-tag--accent">FAA Remote Pilot &#9992;</span>
          </div>
        </div>
      </div>
    </section>

    <div class="divider"></div>

    <!-- Contact -->
    <section id="contact" class="section animate-on-scroll" aria-label="Contact">
      <div class="container contact-content">
        <h2 class="section-title contact-title">Let's work together.</h2>
        <p class="contact-subline">Available for consulting, contract work, and interesting projects.</p>
        <div class="contact-links">
          <a href="mailto:unipheas@protonmail.com">unipheas@protonmail.com &#8599;</a>
          <a href="https://github.com/unipheas" target="_blank" rel="noopener noreferrer">GitHub &#8599;</a>
        </div>
      </div>
    </section>

  </main>

  <!-- Footer -->
  <footer class="site-footer" role="contentinfo">
    <p>&copy; 2026 Brian Phillips</p>
  </footer>

  <script src="js/site.js"></script>
</body>
</html>
```

Note: Remove the duplicate `<script>` tag and `</main>` that were in the earlier partial HTML. The final file should have one `</main>`, one `<footer>`, and one `<script>` tag.

- [ ] **Step 2: Add Experience, Capabilities, Contact, and Footer styles to `css/style.css`**

```css
/* --- Experience --- */
.exp-chapter {
  margin-bottom: 28px;
}

.exp-chapter:last-child {
  margin-bottom: 0;
}

.exp-chapter-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: 4px;
}

.exp-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 8px 0;
  border-bottom: 1px solid var(--color-border);
  font-size: 14px;
  color: var(--color-secondary);
}

.exp-role {
  font-weight: 500;
}

.exp-company {
  color: var(--color-tertiary);
}

.exp-date {
  color: var(--color-tertiary);
  font-size: 13px;
  white-space: nowrap;
  margin-left: 16px;
}

/* --- Capabilities --- */
.skills-group {
  margin-bottom: 24px;
}

.skills-group:last-child {
  margin-bottom: 0;
}

.skills-group-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: 10px;
}

.skills-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-tag {
  font-size: 13px;
  background: var(--color-surface);
  color: var(--color-primary);
  padding: 6px 14px;
  border-radius: 100px;
}

.skill-tag--accent {
  border: 1.5px solid var(--color-accent);
  background: rgba(0, 113, 227, 0.05);
  color: var(--color-accent);
}

/* --- Contact --- */
.contact-content {
  text-align: center;
}

.contact-title {
  margin-bottom: 12px;
}

.contact-subline {
  font-size: 15px;
  color: var(--color-tertiary);
  margin-bottom: 24px;
}

.contact-links {
  display: flex;
  justify-content: center;
  gap: 24px;
}

.contact-links a {
  font-size: 14px;
}

/* --- Footer --- */
.site-footer {
  border-top: 1px solid var(--color-border);
  padding: 20px 40px;
  text-align: center;
  font-size: 12px;
  color: var(--color-tertiary);
}
```

- [ ] **Step 3: Commit all remaining HTML sections**

```bash
git add index.html css/style.css
git commit -m "feat: add experience, capabilities, contact, and footer sections"
```

---

## Chunk 2: Animations & Interactivity

### Task 5: Add scroll animation CSS and responsive styles

**Files:**
- Modify: `css/style.css`

- [ ] **Step 1: Add scroll animation classes to `css/style.css`**

```css
/* --- Scroll Animations --- */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.animate-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Slide from left variant */
.slide-left {
  opacity: 0;
  transform: translateX(-30px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.slide-left.is-visible {
  opacity: 1;
  transform: translateX(0);
}

/* Staggered tag fade-in */
.skills-tags .skill-tag {
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.animate-on-scroll.is-visible .skill-tag {
  opacity: 1;
  transform: translateY(0);
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .hero-content {
    animation: none;
    opacity: 1;
    transform: none;
  }

  .animate-on-scroll {
    opacity: 1;
    transform: none;
    transition: none;
  }

  .slide-left {
    opacity: 1;
    transform: none;
    transition: none;
  }

  .skills-tags .skill-tag {
    opacity: 1;
    transform: none;
    transition: none;
  }

  .flip-card.is-flipping .flip-top.old,
  .flip-card.is-flipping .flip-top.new {
    animation: none;
  }
}
```

- [ ] **Step 2: Add responsive breakpoint styles**

```css
/* --- Responsive --- */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .nav-toggle {
    display: block;
  }

  .mobile-nav {
    display: block;
  }

  .nav-inner {
    padding: 16px 24px;
  }

  .container {
    padding: 0 24px;
  }

  .section {
    padding: 40px 0;
  }

  .divider {
    margin: 0 24px;
  }

  .hero {
    padding: 60px 0 50px;
  }

  .hero-headline {
    font-size: 36px;
  }

  .card-grid {
    grid-template-columns: 1fr;
  }

  .exp-row {
    flex-direction: column;
    gap: 2px;
  }

  .exp-date {
    margin-left: 0;
  }

  .mobile-nav-links {
    padding: 8px 24px 16px;
  }

  .contact-links {
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
}

@media (max-width: 480px) {
  .hero-headline {
    font-size: 28px;
    letter-spacing: -1px;
  }

  .container {
    padding: 0 16px;
  }

  .section {
    padding: 32px 0;
  }

  .divider {
    margin: 0 16px;
  }

  .hero {
    padding: 48px 0 40px;
  }

  .section-title {
    font-size: 24px;
  }

  .subheading {
    font-size: 18px;
  }

  .site-footer {
    padding: 16px;
  }
}

/* --- Print --- */
@media print {
  .hero-content {
    animation: none;
    opacity: 1;
    transform: none;
  }

  .animate-on-scroll,
  .slide-left {
    opacity: 1;
    transform: none;
    transition: none;
  }

  .skills-tags .skill-tag {
    opacity: 1;
    transform: none;
  }

  .nav-header,
  .hero-scroll-indicator,
  .nav-toggle {
    display: none;
  }

  .flip-card-content {
    border: 1px solid var(--color-border);
  }

  /* Show all projects statically in print */
  .card-grid {
    display: block;
  }

  .flip-card {
    display: block;
    margin-bottom: 12px;
    perspective: none;
  }

  .flip-top,
  .flip-bottom {
    display: none;
  }

  /* Print-only: all projects list (populated by JS on load) */
  .print-all-projects {
    display: block;
  }

  body {
    font-size: 12px;
  }

  .section {
    padding: 20px 0;
    page-break-inside: avoid;
  }
}
```

- [ ] **Step 3: Commit animations and responsive styles**

```bash
git add css/style.css
git commit -m "feat: add scroll animations, responsive breakpoints, and print styles"
```

---

### Task 6: Build `js/site.js` — Intersection Observer and mobile nav

**Files:**
- Create: `js/site.js`

- [ ] **Step 1: Create `js/site.js` with Intersection Observer for scroll animations and mobile nav**

```javascript
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
    var staggerIndex = 0;

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

  // --- Split-flap card cycling is added in Task 7 below ---
  // DO NOT close the IIFE here. Task 7 continues inside it.
```

**IMPORTANT:** The IIFE is intentionally left open. Task 7 adds the split-flap code and closes it.

- [ ] **Step 2: Remove old `js/site.js`**

The old `js/site.js` (1,110 lines of jQuery) will be replaced by the new one. Since we already `git rm`'d the `js/` subdirectories in Task 1, we just need to replace the file.

```bash
git rm js/site.js
```

Then the new `js/site.js` from Step 1 takes its place.

- [ ] **Step 3: Commit JS foundation**

```bash
git add js/site.js
git commit -m "feat: add Intersection Observer scroll animations and mobile nav"
```

---

### Task 7: Build split-flap card cycling engine

**Files:**
- Modify: `js/site.js`

- [ ] **Step 1: Add project data and split-flap cycling logic to end of `js/site.js`**

Replace the placeholder comment at the end of `js/site.js` (the line `// --- Split-flap card cycling is added in Task 7 below ---` and the unclosed IIFE) with the following code. This code goes inside the IIFE and closes it:

```javascript
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
    cards.forEach(function (card, i) {
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
```

- [ ] **Step 2: Verify the split-flap animation works by opening the page locally**

```bash
# Open in default browser
open index.html
```

Watch for 15-20 seconds to confirm cards cycle with the split-flap effect.

- [ ] **Step 3: Commit split-flap engine**

```bash
git add js/site.js
git commit -m "feat: add split-flap card cycling engine with project data"
```

---

## Chunk 3: Polish & Cleanup

### Task 8: Update 404 page to match new design

**Files:**
- Modify: `404.html`

- [ ] **Step 1: Replace `404.html` content to match new design**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>404 — Brian Phillips</title>
  <link rel="shortcut icon" type="image/x-icon" href="img/favicon.ico">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header class="nav-header" role="banner">
    <nav class="nav-bar" role="navigation" aria-label="Main navigation">
      <div class="nav-inner">
        <a href="/" class="nav-logo">Brian Phillips</a>
      </div>
    </nav>
  </header>
  <main role="main">
    <section class="hero" aria-label="Page not found">
      <div class="container hero-content" style="animation:none;opacity:1;transform:none;">
        <p class="hero-label">404</p>
        <h1 class="hero-headline">Page not found.</h1>
        <p class="hero-subline">The page you're looking for doesn't exist or has been moved.</p>
        <div style="margin-top:32px;">
          <a href="/" style="font-size:14px;">Back to home &#8599;</a>
        </div>
      </div>
    </section>
  </main>
  <footer class="site-footer" role="contentinfo">
    <p>&copy; 2026 Brian Phillips</p>
  </footer>
</body>
</html>
```

- [ ] **Step 2: Commit 404 update**

```bash
git add 404.html
git commit -m "feat: update 404 page to match new design"
```

---

### Task 9: Remove remaining old files

**Files:**
- Remove: remaining old files not caught in Task 1

- [ ] **Step 1: Remove old sitemap and unnecessary files**

Check what old files remain and remove ones not in the "keep" list:

```bash
# Remove old sitemap (domain-specific XML)
git rm brianphillips.tech.xml 2>/dev/null || true
# Remove old README (will not create new one per instructions)
git rm README.md 2>/dev/null || true
git rm LICENSE.md 2>/dev/null || true
```

- [ ] **Step 2: Verify `.gitignore` includes `.superpowers/`**

Check if `.gitignore` has the `.superpowers/` entry. If not, add it:

```
.DS_Store
.superpowers/
```

- [ ] **Step 3: Commit cleanup**

```bash
git add -A
git commit -m "chore: remove old files and update .gitignore"
```

---

### Task 10: Final verification and visual QA

- [ ] **Step 1: Open the site locally and verify all sections render**

```bash
open index.html
```

Check:
- Nav bar sticky + links work (smooth scroll)
- Hero text visible, fade-up animation plays
- About section fades in on scroll
- 4 project cards populate, split-flap cycles every 10-15s
- Experience rows slide in from left
- Skill tags fade in with stagger
- FAA Remote Pilot tag has blue accent style
- Contact section centered, email + GitHub links work
- Footer visible

- [ ] **Step 2: Test mobile responsive**

Resize browser to ≤768px:
- Hamburger icon appears, nav links hidden
- Hamburger opens dropdown with links
- Card grid becomes 1 column
- Experience rows stack vertically
- All padding adjusts

Resize to ≤480px:
- Hero headline smaller (28px)
- Tighter padding throughout

- [ ] **Step 3: Test reduced motion**

In browser devtools → Rendering → check "Emulate prefers-reduced-motion: reduce":
- No animations play
- All content visible immediately
- Split-flap cards do not cycle

- [ ] **Step 4: Commit any final fixes if needed**

```bash
git add -A
git commit -m "fix: final polish and adjustments"
```
