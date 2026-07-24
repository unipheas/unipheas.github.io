# Design System — Unipheas Autonomous CTO

## Product

Unipheas is Brian Phillips' productized Autonomous CTO practice. It helps
founders and operators replace opaque, agency-dependent software delivery with
a client-owned engineering operation.

The site has three jobs:

1. Name the expensive failure mode.
2. Prove the operating model through the Let's Ride transformation.
3. Convert qualified visitors into a $12,500 Engineering Rescue Audit.

## Visual thesis

**An engineering control room with editorial confidence.**

The design should feel operational, exact, and calm under pressure. It is not a
generic SaaS product, an AI-agent novelty site, or a traditional consulting
brochure. Visible grids, status language, monospaced metadata, and the orbiting
network mark make the system legible. Large editorial typography makes the
commercial point unmistakable.

## Brand mark

The primary mark is the orbiting connected-node system in
`img/autonomous-cto-mark.jpg`. It represents a governed network: many connected
operating nodes, one highlighted human decision point, and an outer continuity
loop.

- Use the complete mark when it can render at 280px or larger.
- Do not recolor, rotate, crop through the network, or add effects.
- The blue node defines the brand signal color.
- At small sizes, use the `BP` monogram rather than shrinking the full mark
  until its structure disappears.

## Typography

- **Display and body:** Manrope
- **Operational labels, prices, metadata:** IBM Plex Mono
- **Maximum typefaces:** two
- **Hero:** `clamp(52px, 7.1vw, 104px)`, tight tracking and line height
- **Section heading:** `clamp(38px, 5.2vw, 72px)`
- Body text should remain between 14px and 24px depending on hierarchy.

## Color

Color is restrained. Blue is a signal, not decoration.

- Background: `#0a0a08`
- Elevated background: `#11110e`
- Surface: `#171713`
- Primary text: `#f2f0e8`
- Secondary text: `#c5c1b3`
- Muted text: `#898679`
- Line: `#2d2c25`
- Signal blue: `#4d8ee8`
- Signal blue hover: `#76aaff`
- Healthy state: `#93bd73`
- Risk state: `#d3755f`

Light mode uses warm paper neutrals, not pure white. The logo remains on its
native dark field in both themes.

## Layout

- Maximum canvas: 1240px
- Horizontal gutter: `clamp(20px, 4vw, 64px)`
- Desktop grid: 12 visible columns
- Mobile grid: 4 visible columns
- Section spacing: `clamp(88px, 11vw, 160px)`
- Prefer borders, rails, and spatial grouping over decorative cards.
- Every section gets one job and one dominant headline.

## Motion

Motion communicates system state:

- A slow pulse indicates healthy human governance.
- Scroll reveals are subtle vertical entrances.
- Buttons move no more than 2px on hover.
- All nonessential motion is disabled for `prefers-reduced-motion`.

No decorative parallax, floating blobs, carousels, or continuous card cycling.

## Voice

Direct, evidence-led, and commercially specific.

- Name costs, timeframes, boundaries, and ownership.
- Prefer "client-owned" to abstract claims about transformation.
- Do not promise outcomes outside Brian's control.
- Distinguish real Let's Ride results from guarantees.
- Avoid generic phrases such as "unlock the power," "innovative solutions," or
  "AI-powered."

## Accessibility and responsive rules

- Minimum interactive target: 44px on mobile.
- Keyboard focus uses a 2px signal-blue outline.
- No horizontal overflow at 320px and above.
- Navigation collapses before labels become crowded.
- Anchor navigation must clear the sticky header.
- Images include intrinsic dimensions and useful alternative text.
- The page must remain understandable with motion disabled and in either theme.
