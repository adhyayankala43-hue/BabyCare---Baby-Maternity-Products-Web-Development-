---
name: Tender Bloom
colors:
  surface: '#fff8f6'
  surface-dim: '#f7d2c6'
  surface-bright: '#fff8f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff1ec'
  surface-container: '#ffe9e2'
  surface-container-high: '#ffe2d8'
  surface-container-highest: '#ffdbce'
  on-surface: '#2a170f'
  on-surface-variant: '#584143'
  inverse-surface: '#412b23'
  inverse-on-surface: '#ffede7'
  outline: '#8c7073'
  outline-variant: '#dfbfc1'
  surface-tint: '#b0274a'
  primary: '#ad2448'
  on-primary: '#ffffff'
  primary-container: '#cf3f5f'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb2bb'
  secondary: '#90485a'
  on-secondary: '#ffffff'
  secondary-container: '#ffa5b9'
  on-secondary-container: '#7a3749'
  tertiary: '#69575e'
  on-tertiary: '#ffffff'
  tertiary-container: '#827077'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd9dd'
  primary-fixed-dim: '#ffb2bb'
  on-primary-fixed: '#400012'
  on-primary-fixed-variant: '#8f0634'
  secondary-fixed: '#ffd9df'
  secondary-fixed-dim: '#ffb1c2'
  on-secondary-fixed: '#3c0518'
  on-secondary-fixed-variant: '#733143'
  tertiary-fixed: '#f4dce4'
  tertiary-fixed-dim: '#d7c1c8'
  on-tertiary-fixed: '#25181e'
  on-tertiary-fixed-variant: '#524249'
  background: '#fff8f6'
  on-background: '#2a170f'
  surface-variant: '#ffdbce'
typography:
  display-hero:
    fontFamily: Outfit
    fontSize: 56px
    fontWeight: '600'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Outfit
    fontSize: 38px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Outfit
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Outfit
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
  headline-md:
    fontFamily: Outfit
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Outfit
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '600'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embodies gentle security, maternal warmth, and refined care. Designed for modern parents and caregivers navigating early parenthood, it balances joyful tenderness with trustworthy clinical reassurance. The emotional response must be an immediate sense of calm, softness, and effortless delight.

The aesthetic fuses soft organic minimalism with tactile warmth:
- Generous, airy padding evoking quiet nursery spaces.
- Pill-shaped interaction targets providing a soft, infant-safe, touchable visual language.
- Tactile warmth delivered through cream bases, delicate rose-tinted diffusion, and rich espresso typography—avoiding sterile clinical whites and harsh charcoal blacks.
- Muted micro-moments: springy micro-interactions that feel bouncy, organic, and cushioned.

## Colors

The palette relies on soft maternal hues balanced by an assertive coral primary action tone and an espresso neutral for legibility.

### Surface and Canvas
- **Base Canvas (`#FFF9F9`)**: Warm cream undertone used for the overarching viewport background.
- **Surface Clean (`#FFFFFF`)**: Pure crisp white reserved for product cards, floating sheets, modals, and elevated inputs to retain e-commerce clarity.
- **Surface Tender (`#FCE4EC`)**: Pale pastel pink tint used for badge backdrops, subtle section banners, category pills, and table container headers.

### Accents and Interactivity
- **Primary CTA (`#F45B7A`)**: Vibrant coral pink for critical calls to action ("Add to Bag", checkout progression, primary toggles).
- **Secondary Accent (`#F9A0B4`)**: Soft blush for active pill states, hover accents, subtle border outlines, and secondary ratings icons.
- **Text & High Contrast Neutral (`#38231B`)**: Rich espresso brown. Replaces pure black entirely across typography, icon paths, and structure lines to deliver high contrast without harshness.
- **Subdued Neutral (`#826C65`)**: Lightened espresso for secondary helper text, metadata, and placeholder states.

## Typography

The pairing combines the open, friendly geometry of Outfit for headlines with the humanistic, legible clarity of Plus Jakarta Sans for body and interactive elements.

- **Display & Headlines (Outfit)**: Soft, circular counters with subtle elegance. Display sizes employ tight tracking (`-0.02em`) to ensure titles remain visually cohesive and warm rather than industrial.
- **Body & Captions (Plus Jakarta Sans)**: High x-height and generous apertures ensure effortless readability when exhausted parents are browsing on low screen brightness.
- **Labels & Microcopy**: Maintained in semibold or bold weights with slight letter spacing on micro labels (`label-sm`) for immediate scanning of sizes, specifications, and safety marks.

## Layout & Spacing

The layout model is built around a responsive 12-column fluid grid system on desktop, collapsing to an 8-column layout on tablet and a 4-column layout on mobile devices.

### Grid & Margins
- **Desktop (≥1024px)**: 12-column grid, max-width constrained to `1280px`, with `margin: 3rem` outer buffers and `gutter: 1.5rem`.
- **Tablet (768px - 1023px)**: 8-column grid with `margin: 2rem` and `gutter: 1.25rem`.
- **Mobile (<768px)**: 4-column grid with `margin-mobile: 1.25rem` and `gutter-mobile: 1rem`.

### Spacing Philosophy
Spacing tokens govern internal padding and margins through a relaxed rhythm. Content should feel uncluttered, allowing photography of babies and mothers breathing room. Vertical rhythms strictly use multi-step increments (`space-lg` to `space-xl`) between distinct e-commerce modules (e.g., product details, bundle selectors, reviews, related carousels).

## Elevation & Depth

Visual hierarchy uses soft ambient diffusion tinted with warm rose-espresso pigments, avoiding sharp, cold cast shadows.

- **Flat/Subtle Surface**: `#FFF9F9` background overlaid with `#FFFFFF` cards containing a subtle 1px border of `rgba(56, 35, 27, 0.05)`.
- **Level 1 (Product Cards, Floating Controls)**:
  `box-shadow: 0 4px 20px -2px rgba(244, 91, 122, 0.06), 0 2px 6px -1px rgba(56, 35, 27, 0.03)`.
  This injects an imperceptible warm glow around product imagery.
- **Level 2 (Dropdowns, Sticky Cart Bar, Hovered Cards)**:
  `box-shadow: 0 10px 28px -4px rgba(244, 91, 122, 0.12), 0 4px 12px -2px rgba(56, 35, 27, 0.05)`.
- **Level 3 (Modals, Sheet Drawers)**:
  `box-shadow: 0 20px 40px -6px rgba(56, 35, 27, 0.12)`.
  Combined with a warm backdrop blur: `backdrop-filter: blur(8px); background-color: rgba(56, 35, 27, 0.25)`.

## Shapes

The design system uses a pill-shaped aesthetic (`roundedness: 3`). Soft curves echo safety, gentleness, and organic nursery forms.

- **Extreme Softness (`9999px` / Full Pill)**: All primary buttons, action pills, input fields, tags, and badge counters use full capsule radiuses.
- **Large Panels & Containers (`rounded-xl` / 2rem - 3rem)**: Product cards, modular category banners, sheets, and popovers maintain large, soft outer corners.
- **Nested Inner Items (`rounded-lg` / 1rem - 1.5rem)**: Embedded thumbnails, inner carousels, and image containers balance pill contours with generous structural curving.

## Components

### Buttons
- **Primary CTA**: Full pill contour (`rounded: 9999px`), solid coral pink (`#F45B7A`) background, crisp white (`#FFFFFF`) bold label, with an elevation glow of `0 6px 16px rgba(244, 91, 122, 0.28)`. On hover, scales subtly (`transform: translateY(-1px) scale(1.01)`).
- **Secondary**: Full pill contour, `#FCE4EC` background with rich espresso (`#38231B`) text. Border: 1px solid `#F9A0B4`.
- **Ghost/Tertiary**: Transparent background, underline on hover, `#38231B` label, zero border.

### Chips & Pill Badges
- **Status / Sale Pill**: Pill shape, background `#FCE4EC`, text `#F45B7A`, typography `label-sm`.
- **Category Filter Chip**: Full pill with `space-sm` vertical, `space-md` horizontal padding. Default state is white with 1px `rgba(56, 35, 27, 0.1)` border; active state is `#38231B` text with a filled `#FCE4EC` surface and 1px `#F9A0B4` border.

### Product & Content Cards
- Background is pure `#FFFFFF` against the `#FFF9F9` background canvas.
- Radius: `rounded-xl` (2rem). Internal padding: `space-lg`.
- Image frames inside cards have `rounded-lg` (1.25rem) overflow-hidden borders with a light rose overlay tint on hover.
- Rating summaries rest inline below the title: 5 filled star icons in warm coral (`#F45B7A`) paired with espresso review count copy.

### Trust Badges & Clinical Highlights
- Pill containers with an icon slot (dermatologist tested, organic cotton, BPA-free).
- Surface: `#FFFFFF` with delicate 1px border of `#FCE4EC`.
- Icon tone: `#F45B7A`. Text: `#38231B` set to `label-md`.

### Form Fields & Inputs
- Fully rounded pill borders (`rounded: 9999px`).
- Background `#FFFFFF`, border 1.5px solid `rgba(56, 35, 27, 0.12)`.
- Height: 48px to 54px for comfortable touch accuracy.
- Focus state: Border color transitions to `#F45B7A` with a soft outer ring: `0 0 0 4px rgba(244, 91, 122, 0.15)`.
- Espresso text `#38231B` with muted placeholder `#826C65`.

### Checkboxes & Radio Buttons
- Radios are full circles; checkboxes are smoothly rounded squares (`rounded: 6px`).
- Inactive: 2px solid `rgba(56, 35, 27, 0.2)` on `#FFFFFF`.
- Selected: Background turns solid `#F45B7A` with a white custom-drawn rounded checkmark or inner dot. No harsh box-shadows.

### Quantity Selector (Specialized Component)
- Pill-shaped enclosure (`border: 1px solid #FCE4EC; background: #FFFFFF`).
- Subtract/Add buttons are circular soft disks with `#38231B` glyphs that pulse `#FCE4EC` when pressed.
- Central counter text set in Outfit `headline-sm` espresso font.