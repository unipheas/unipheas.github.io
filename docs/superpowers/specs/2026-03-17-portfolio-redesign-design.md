# Portfolio Website Redesign — Design Spec

## Overview

Complete redesign of Brian Phillips' portfolio site (unipheas.github.io) from a jQuery-based template to a clean, minimal, Apple-inspired static HTML site. The site positions Brian as a premium freelance/consulting resource and thought leader in mobile development.

## Goals

- **Primary audience:** Business partners, potential consulting clients, employers
- **Tone:** Technical authority — clean, minimal, let the work speak (Apple developer docs energy)
- **Key narrative:** Enterprise mobile at scale (250+ location POS) + global/unconventional path (agency in Asia, drone piloting, Nike/Amazon/Toyota brand work)
- **Deployment:** Static HTML on GitHub Pages (no build tools)

## Tech Stack

- Pure HTML5, CSS3, vanilla JavaScript
- No frameworks, no build tools, no npm
- System font stack: `-apple-system, SF Pro Display, SF Pro Text, system-ui, sans-serif`
- CSS-only animations with Intersection Observer for scroll triggers
- `prefers-reduced-motion` media query respected throughout
- Deploys directly to GitHub Pages via push

## Design System

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | `#1d1d1f` | Primary text |
| `--color-secondary` | `#424245` | Body text |
| `--color-tertiary` | `#86868b` | Labels, captions, dates |
| `--color-background` | `#fbfbfd` | Page background |
| `--color-surface` | `#f5f5f7` | Cards, tag backgrounds |
| `--color-border` | `#e8e8e8` | Dividers, borders |
| `--color-accent` | `#0071e3` | Links, FAA badge |

### Typography

| Element | Size | Weight | Tracking |
|---------|------|--------|----------|
| Hero headline | 48px (desktop) / 32px (mobile) | 700 | -1.5px |
| Section title | 28px | 700 | -0.5px |
| Section label | 11px uppercase | 400 | 2px |
| Subheading | 21px | 600 | -0.3px |
| Body | 15px | 400 | normal |
| Card title | 17px | 600 | -0.3px |
| Card body | 13px | 400 | normal |
| Tags | 13px | 400 | normal |
| Nav links | 12px | 400 | normal |

### Spacing

- Page max-width: 800px centered
- Section padding: 60px vertical, 40px horizontal
- Card border-radius: 16px
- Tag border-radius: 100px (pill)
- Card grid gap: 16px

## Site Structure

Single-page layout with 6 sections, smooth-scroll navigation.

### 1. Navigation

Fixed top bar:
- Left: "Brian Phillips" (text, font-weight 600)
- Right: About | Work | Experience | Contact (12px, color-tertiary)
- Mobile: hamburger menu
- Border-bottom: 1px solid color-border
- Becomes sticky on scroll

### 2. Hero Section

- Centered layout, generous vertical padding (100px top, 80px bottom)
- Label: "iOS Engineer · Mobile Development Manager" (11px uppercase, color-tertiary)
- Headline: "Mobile systems at scale." (48px, bold)
- Subline: "15 years building high-performance apps for enterprise clients and global brands." (17px, color-tertiary, max-width 460px)
- Scroll indicator: chevron character (▾)
- **Animation:** Fade-up with 20px Y offset on page load (0.8s ease-out)

### 3. About Section

- Section label: "About" (11px uppercase)
- Lead statement: "I build mobile systems that work at scale — from architecture to App Store." (21px, semibold)
- Bio paragraph (15px, color-secondary, line-height 1.7):

  > Currently leading mobile development at Tommy Car Wash Systems, where I manage a cross-functional team building iOS/Android apps and POS systems deployed across 250+ locations. Previously built immersive experiences for Nike, Amazon, and Toyota at 14Four, co-founded a development agency across Asia, and maintained open-source drone SDKs. FAA-certified remote pilot.

- Links: GitHub ↗ | unipheas@protonmail.com ↗ (color-accent)
- No LinkedIn
- **Animation:** Fade-in on scroll into view

### 4. Featured Work — Split-Flap Cycling Cards

- Section label: "Featured Work" (11px uppercase)
- Section title: "Select projects." (28px, bold)
- **Layout:** 2×2 grid of cards (stacks to 1 column on mobile)
- **Behavior:** Each card independently cycles to a random project every 10–15 seconds
- **Constraint:** No two cards show the same project simultaneously
- **Animation:** Split-flap effect — card content splits horizontally at midpoint, top half flips down revealing new content, bottom half follows. CSS 3D transforms with `perspective` and `rotateX`.

#### Card Structure

Each card displays:
- Project name (17px, semibold)
- One-line description (13px, color-tertiary)
- Tech tags (pill badges, 10px)
- Role label (11px, color-tertiary)
- Background: color-surface, border-radius 16px, padding 28px

#### Project Pool (~15 projects)

| Project | Description | Tags | Role |
|---------|------------|------|------|
| Tommy's Express POS | Mission-critical POS across 250+ locations with Stripe & LPR integration | Swift, SwiftUI, Stripe | Mobile Dev Manager |
| Tommy Express App | Cross-platform consumer app for iOS and Android | React Native | Mobile Dev Manager |
| TCW FLEX POS | Interior detail belt management system for new wash sites | Swift, SwiftUI, SPM | Senior iOS Engineer |
| Infinite Miner | Browser-based idle mining game with procedural generation & prestige systems | Web App, Game Dev | Co-Creator |
| MAVSDK-Swift | Open-source Swift library for autonomous drone control via MAVLink | Swift, RxSwift, MAVLink | OSS Maintainer |
| MotoCare | iOS app for motorcycle riders to track service history and maintenance | SwiftUI, SwiftData | Creator |
| StreetBookies | iOS app helping homeschoolers find local neighborhood libraries | SwiftUI, Firebase | Creator |
| Circle Check | GPS-powered safety inspection app for fleet operations | Swift, GPS, Maps | iOS Engineer |
| Corporate Tools | Enterprise backend suite — automated filing system increased revenue $300K/week | Node.js, Puppeteer, Rails | Software Engineer |
| Corporate Phone | Cutting-edge iOS app built from ground up with TDD and CI/CD | Swift, SPM, CircleCI | iOS Engineer |
| Pepsi Halftime Show | Interactive Super Bowl halftime experience for PepsiCo & NFL | Vue/Nuxt, Animation | Frontend Developer |
| Nike / Amazon / Toyota | Immersive digital brand experiences for global campaigns | AR/VR, WebXR | Frontend Developer |
| QuickLoad | Hackathon-winning logistics app automating shipment assignments | Swift, UX Design | Hackathon Winner |
| Lucky English | Phonics app teaching English alphabet sounds to children | Swift, EdTech | Creator |
| RipATrip | Travel search iOS app with GPS features and REST API integration | Swift, REST APIs | iOS Developer |

### 5. Experience Section

- Section label: "Experience" (11px uppercase)
- Section title: "Career." (28px, bold)
- Grouped into three narrative chapters:

**Building & Leading**
| Role | Company | Period |
|------|---------|--------|
| Mobile Development Manager | Tommy Car Wash Systems | 2024–Present |
| Senior iOS Engineer | Tommy Car Wash Systems | 2022–2024 |

**Crafting**
| Role | Company | Period |
|------|---------|--------|
| iOS Engineer | Two Barrels | 2021–2022 |
| Frontend Developer | 14Four | 2020–2021 |
| iOS Engineer | Titanian Inc | 2018–2020 |

**Founding**
| Role | Company | Period |
|------|---------|--------|
| Lead Full Stack Engineer | Polyphasic Developers | 2016–2020 |
| JavaScript Teacher | Le Wagon | 2017–2019 |
| Web Dev / Analytics | Self Employed | 2010–2016 |

- Each row: role (font-weight 500) · company (color-tertiary) | date (color-tertiary, right-aligned)
- Rows separated by 1px color-border
- **Animation:** Each row slides in from left, staggered 100ms on scroll

### 6. Capabilities Section

Skills grouped into business-friendly categories with pill tags:

**Mobile Development**
- iOS App Architecture
- Swift & SwiftUI
- Cross-Platform (React Native)
- App Store Deployment
- Payment Integration

**Engineering Leadership**
- Team Management
- CI/CD Pipeline Design
- Code Review & Mentorship
- Agile / Scrum

**Full Stack & Cloud**
- Node.js & REST APIs
- PostgreSQL
- AWS & Docker
- Firebase

**Specialized**
- AR/VR & Immersive Experiences
- Process Automation
- FAA Remote Pilot ✈ (accent-colored border, light accent background)

- **Animation:** Tags fade in with stagger on scroll

### 7. Contact Section

- Centered layout
- Headline: "Let's work together." (28px, bold)
- Subline: "Available for consulting, contract work, and interesting projects." (15px, color-tertiary)
- Links: unipheas@protonmail.com ↗ | GitHub ↗ (color-accent)
- **Animation:** Fade-up on scroll

### 8. Footer

- 1px border-top
- "© 2026 Brian Phillips" (12px, color-tertiary, centered)

## Responsive Breakpoints

| Breakpoint | Changes |
|------------|---------|
| ≤ 768px (tablet) | Hero headline 36px, project grid 1 column, nav becomes hamburger, section padding 40px/24px |
| ≤ 480px (phone) | Hero headline 28px, tags wrap tighter, reduce padding to 32px/16px |

## Animation Summary

| Section | Animation | Trigger | Duration |
|---------|-----------|---------|----------|
| Hero | Fade-up (20px Y offset) | Page load | 0.8s ease-out |
| About | Fade-in | Scroll into view | 0.6s ease |
| Featured Work | Split-flap card cycling | Every 10–15s per card | 0.6s (flip) |
| Experience | Slide-in from left, staggered | Scroll into view | 0.5s per row, 100ms stagger |
| Capabilities | Fade-in tags, staggered | Scroll into view | 0.3s per tag, 50ms stagger |
| Contact | Fade-up | Scroll into view | 0.6s ease |

All animations:
- CSS-only (transforms + opacity), no JS animation libraries
- Intersection Observer API triggers scroll-based animations
- `@media (prefers-reduced-motion: reduce)` disables all animations
- Each animation fires once (no repeat on re-scroll)

## Files to Create

| File | Purpose |
|------|---------|
| `index.html` | Complete single-page site |
| `css/style.css` | All styles including animations |
| `js/site.js` | Split-flap cycling logic, Intersection Observer, mobile nav |

## Files to Keep

- `img/favicon.ico`
- `img/uploads/` (existing portfolio images, referenced if needed)
- `404.html` (update to match new design)
- `googledb128e04b37c42ca.html` (Google verification)
- `keybase.txt`
- `Privacy_Policy.html`

## Files to Remove

- `css/style.css` (replaced entirely)
- `colors/` directory (no theme system needed)
- `fonts/` directory (using system fonts)
- `js/` directory (replaced entirely — all plugins removed)
- Old jQuery plugins, bxslider, fancybox, isotope, etc.

## Out of Scope

- Blog / writing section
- Dark mode toggle
- Contact form
- Analytics (can be added later)
- Custom domain setup
- Portfolio detail pages (all info on cards)
