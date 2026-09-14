# Design system — Brian Phillips / AI and software consulting

## Purpose

Unipheas is Brian Phillips' independent consulting practice. The offer is building
a business's capability to develop, release, and operate its own products.
AI workflows, company knowledge, development tools, testing, releases, and training
make that offer concrete. Mobile and full-stack development are the experience
behind it, rather than separate app-building packages.

The homepage moves from positioning and recognizable situations to three entry
points (establish, improve, stabilize), background, an illustrative example,
and an agreed first engagement. Unipheas is the primary identity; Brian remains
visible as the person doing the work.

## Information architecture

- `index.html` — product development systems, situations, outcomes, process graphic
- `ai-for-business.html` — AI workflows, implementation, testing, and training
- `mobile-app-development.html` — mobile expertise within the broader offer; retain URL
- `approach.html` — engagement process, deliverables, ownership, buyer questions
- `about.html` — user-confirmed experience and direct involvement
- `contact.html` — product, current development process, desired change
- `engineering-rescue-audit.html` — optional review; scope and fees agreed individually
- `sample-assessment.html` — explicitly fictional handoff assessment
- `Privacy_Policy.html` — website and published-app privacy practices
- `404.html` — recovery route

Keep English-only content, the homepage graphic, and the About portrait. Do not
publish private client names, results, logos, or records. User-confirmed 15+ years
and engineering breadth are used; unverified public-project credentials are omitted.
Do not promise autonomous development, guaranteed results, or preset engagement
prices or timelines. Retain the verified GitHub Pages production URL until custom
domain configuration is separately authorized and verified.

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
- Explain how scope and fees are agreed, along with ownership and responsibilities.
- Separate verifiable experience from promised outcomes.
- Record unknowns as unknowns and avoid unsupported performance claims.
- Use familiar business language: company access, clear updates, and agreed work.
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

## Homepage illustration

Use the custom inline SVG to show the repeating plan, build, check, and release
cycle. Company knowledge, AI, and human review support every step. It is explanatory
artwork, not a live dashboard or a client architecture. The audit remains a
secondary footer offer labeled "Software audit".
