# Design system — Brian Phillips / Autonomous CTO

## Purpose

This site presents Brian Phillips’ productized Autonomous CTO practice. It is
for founders and operators who need an independent view of stalled, expensive,
or provider-dependent software delivery.

The site has three jobs:

1. Name the business consequences of opaque software delivery.
2. Establish senior-practitioner credibility without exposing private client work.
3. Convert a qualified visitor into a $12,500 Engineering Rescue Audit inquiry.

## Information architecture

- `index.html` — positioning, problem recognition, method, commercial path, fit
- `engineering-rescue-audit.html` — offer, deliverables, process, scope, FAQ
- `approach.html` — ownership, sequencing, governance, visibility, exit
- `about.html` — operator background, public experience, working style
- `contact.html` — fit filter and structured email inquiry
- `Privacy_Policy.html` — website and published-app privacy practices
- `404.html` — recovery route

All public content is English-only. Private or embargoed client evidence is not
used as public marketing proof.

## Visual thesis

**An owner’s field brief: editorial confidence with operational precision.**

The system combines warm paper, strong ink, restrained cobalt signals, large
serif headlines, compact sans-serif labels, visible rules, and evidence-led
records. It should feel composed under pressure—not like a SaaS dashboard, an
AI novelty, or a generic agency brochure.

## Typography

- **Display:** Newsreader, with Georgia as the fallback
- **Body and interface:** Manrope, with Helvetica Neue as the fallback
- **Hero:** `clamp(62px, 8.2vw, 126px)` with tight tracking
- **Section heading:** `clamp(44px, 5.4vw, 74px)`
- **Body:** 14–20px depending on hierarchy

## Color

- Warm paper: `#f4f1e8`
- Deep paper: `#ebe6da`
- Light paper: `#fbfaf5`
- Ink: `#171714`
- Soft ink: `#49483f`
- Muted: `#747166`
- Rule: `#cbc6b9`
- Cobalt: `#215ccf`
- Cobalt dark: `#16479f`
- Risk rust: `#bd4a2c`
- Dark field: `#171a1d`

Cobalt indicates priority or action. Rust indicates risk or exclusion. Neither
is used as ambient decoration.

## Layout

- Maximum canvas: 1360px
- Horizontal gutter: `clamp(20px, 4.2vw, 72px)`
- Section spacing: `clamp(88px, 11vw, 168px)`
- Desktop compositions use asymmetric two-column editorial grids.
- Mobile compositions collapse to a single reading order at 900px or below.
- Prefer borders, rails, records, and spatial grouping over card collections.

## Voice and evidence

- Direct, commercially specific, and calm.
- Name fees, timeframes, boundaries, ownership, and decision rights.
- Separate verifiable experience from promised outcomes.
- Record unknowns as unknowns and avoid unsupported performance claims.
- Prefer “client-controlled” and “human-governed” to abstract transformation language.
- Avoid generic phrases such as “unlock the power,” “innovative solutions,” and
  “AI-powered.”

## Interaction

- JavaScript is limited to the mobile menu and sticky-header state.
- Essential navigation and content remain usable without JavaScript.
- No browser storage, cookies, theme control, language control, carousels, or
  scroll-triggered content reveals.
- Hover changes are small and nonessential.
- All transitions are removed when `prefers-reduced-motion: reduce` is set.

## Accessibility and responsive rules

- Minimum interactive target: 44px.
- Keyboard focus uses a 3px cobalt outline.
- No horizontal overflow at 320px and above.
- Navigation collapses before labels crowd.
- Anchor navigation clears the sticky header.
- Images have intrinsic dimensions and useful alternative text.
- Page hierarchy and actions remain understandable without motion or JavaScript.
