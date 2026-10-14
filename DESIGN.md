---
name: NB MAX LUXURY
description: Material-scale industrial identity for a company showcase and inquiry catalog.
colors:
  ground: "#ffffff"
  ink: "#202220"
  surface: "#f0f1ed"
  muted: "#555954"
  primary: "#c83425"
  primary-hover: "#aa291d"
typography:
  display:
    fontFamily: "Unbounded, sans-serif"
    fontSize: "104px"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "0"
  headline:
    fontFamily: "Unbounded, sans-serif"
    fontSize: "45px"
    fontWeight: 600
    lineHeight: 1.17
    letterSpacing: "0"
  body:
    fontFamily: "Onest, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0"
rounded:
  square: "0px"
spacing:
  desktop-gutter: "32px"
  tablet-gutter: "24px"
  phone-gutter: "20px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ground}"
    rounded: "{rounded.square}"
    padding: "13px 21px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-light:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "13px 21px"
---

# NB MAX LUXURY Visual System

## Overview

**Creative North Star: "Materials at MAX scale"**
2026-10-14 redesign: a material-scale industrial identity. The NB MAX name becomes a monumental typographic structure, with the warehouse's organized rows supplying the depth behind it. This replaces the former green, serif, numbered material-index treatment.

Taste Skill dealt name-as-monument, page-is-the-object, and sentence-as-layout. Selected name-as-monument; seed 2135472913. The name is the client's strongest confirmed brand asset, while a brochure-shaped page would repeat a materials-catalog default. Impeccable new-work and craft-floor guided the replacement, with planning and QA references used directly. Its binary context engine was not run successfully; no engine, remote direction service, telemetry, or automatic hook was enabled.

### Process And Compatibility
- Palette redrawn once because night/cornflower would repeat a dark-slate theme, inconsistent with the workspace constraints. The resulting charcoal/sage roles are translated to white, charcoal, a pale neutral supporting surface, and a restrained material/safety red. This avoids repeating the site's former dominant green.
- Full-bleed real warehouse photography instead of inserting imagery into individual letters: retains the monumental name while satisfying the image-led corporate hero requirement and preserving inspectable real materials.
- Existing approved product and warehouse images replace the dealt botanical atmosphere: plants would be unrelated to the company.
- Fixed font sizes by breakpoint and zero tracking, not viewport-scaled type or negative tracking.
- One restrained image entrance and functional hover/focus feedback, not mandatory motion counts, parallax, or background video.
- A native expandable supply sequence instead of a complex horizontal accordion. Contact form and material selection functionality remain available.

## Colors
- Ground: #ffffff.
- Ink / dark section: #202220.
- Supporting surface: #f0f1ed.
- Muted text: #555954.
- Accent: #c83425; hover: #aa291d.

## Typography

- Display: Unbounded variable, locally hosted, weights 600 and 800.
- Body and controls: Onest variable, locally hosted, weights 400-600.
- Typeface origins: Google Fonts repositories, ofl/unbounded and ofl/onest. Full SIL Open Font Licenses are shipped in public/fonts.
- Body: 16px minimum. Secondary notes: 13px minimum. Tracking: 0. Base display scale: 104px hero, 45-62px main headings, 22-28px item headings. Smaller explicit breakpoint scales support 320px screens.
- Outer margins: 32px desktop, 24px tablet, 20px phone; maximum content width 1440px.
- Corners: square. No resting shadows, ornamental gradients, card nesting, or numbered decorative chapter labels. A neutral photo scrim is used solely for text contrast. Form borders and modal focus protection remain functional.

## Layout
Home: image-led monumental brand; compact business introduction; category navigation; unequal and staggered material pairs; dark warehouse spread; application-led selection story; expandable supply process; red inquiry band; large closing wordmark.

The material brief is the signature useful interaction, not a decorative animation. Users collect real category IDs, inspect requirements, download a list, and bring the same selections into Contact. The library retains a three-column desktop catalog and one-column phone catalog. Homepage material images use different-size pairs; phones replace that composition with full-width images and readable captions.

Header, footer, SVG monogram, favicon, inner pages, form, empty states, dialogs, native disclosure controls, keyboard focus, and text selection share these tokens. The original architectural N symbol is retained and recolored for continuity; the wordmark uses the new display face.

## Elevation & Depth

Flat tonal surfaces instead of decorative shadows. Dialogs use a neutral backdrop for protected focus; the hero uses a neutral photograph scrim to separate readable text from changing image tones.

## Shapes

Square media and controls. Image enlargement remains clipped within stable aspect-ratio frames. The architectural N symbol remains the original vector brand asset, adapted to the new palette.

## Components

Primary actions use red filled buttons with white type; secondary commands use tonal controls. Icons come from Lucide, with named icon buttons. Material selection uses native dialogs and persistent category IDs, not a cart. The supply sequence uses native details. Forms retain visible labels, native validation, required consent, and an honest mailto handoff. Global focus is a 3px accent outline at a 5px offset. Reduced-motion preference suppresses nonessential animation.

## Do's and Don'ts

- Do keep supplied company facts and contact information unchanged.
- Do show material photography at useful inspection sizes and label warehouse references honestly.
- Do keep captions readable at 13px or larger and body copy at 16px or larger.
- Don't use warehouse stock photography as evidence of actual company inventory or ownership.
- Don't restore the old green serif chapter-index styling or invent proof to fill a layout.
- Don't use negative letter spacing, viewport-scaled type, autoplay video, or many entrance animations.

### Evidence And Limits
All 23 photographs remain local reference imagery, with no repeated promotional photo on the same home page. Warehouse ownership and stock strength are not asserted from stock images. A source backup is retained in output/NB-MAX-Luxury/before-redesign outside the delivery folder. See docs/REDESIGN_QA.md for executed checks and their limitations.
