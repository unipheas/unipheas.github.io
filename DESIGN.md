# Design system — Brian Phillips / AI and software consulting

## Purpose

This site presents Brian Phillips' independent AI and software consulting
practice for business owners and teams. Mobile development is the specialty;
the offer covers both practical AI for everyday work and software from concept
through production release.

The site has three jobs:

1. Explain how Brian helps with AI workflows, mobile apps, and supporting systems.
2. Establish hands-on engineering experience across planning, design, development,
   testing, release, operations, and owner training.
3. Start a conversation, followed by an agreed scope and fee.

## Information architecture

- `index.html` — positioning, services, background, illustrative AI workflow, lifecycle
- `ai-for-business.html` — concrete uses, sample workflow, setup, testing, and training
- `mobile-app-development.html` — idea-to-release mobile services and supporting systems
- `approach.html` — full development process, collaboration, ownership, and FAQs
- `about.html` — mobile specialization, broad engineering experience, AI practice
- `contact.html` — inclusive inquiry for ideas, AI workflows, and existing products
- `engineering-rescue-audit.html` — optional independent review
- `sample-assessment.html` — explicitly fictional handoff assessment
- `Privacy_Policy.html` — website and published-app privacy practices
- `404.html` — recovery route

All content is English-only. No private client details, quotations, metrics,
or unsupported claims are used as public proof. Illustrations are labeled.
Avoid implying the practice serves only distressed or existing products.
AI is a concrete client capability and an engineering tool; it does not replace
Brian's accountability for the work. Keep implementation details on service
pages where they help a visitor decide.

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

Use the custom inline SVG product map in the experience section, showing the
relationship between business goals, mobile apps, AI workflows, and supporting
systems. It is explanatory artwork, not a live status dashboard or a client
architecture. Keep the portrait on the About page. The audit remains a secondary
footer offer labeled "Software audit".
