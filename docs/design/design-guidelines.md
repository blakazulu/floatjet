# FloatJet Design Guidelines - "Desk Party"

The site's visual language since September 2026. Every page sits on warm paper and borrows the look of a real desk:
sticker-like cards with solid offset shadows, bold rounded display type, handwritten notes and a few loud accent
colours. The homepage hero is a desk you can explore (every object is a link).

Live references:

- Homepage desk: `src/components/home/DeskScene.astro`
- Article card: `src/components/ui/ArticleCard.astro` (see [article-card-guide.md](./article-card-guide.md))
- Section/category listing: `src/components/hub/HubPage.astro`
- Tokens and shared classes: `src/styles/global.css`

## 1. Core Philosophy

* **Mobile-first:** every decision starts at 375px. If it does not work on a phone, it does not ship.
* **Tactile, not glossy:** things look like objects on a desk - paper, stickers, notebooks. No glassmorphism, no blur,
  no soft drop shadows, no gradient washes.
* **Playful but trustworthy:** personality lives in the accents (stickers, tilt, handwriting). Reading surfaces
  (article text, tables, FAQs) stay calm, high-contrast and straight.
* **Honest copy:** no invented stats or claims. Counts come from `src/data/articles.ts`.

## 2. Color Palette

All colours are Tailwind v4 theme tokens (`bg-paper`, `text-ink`, `border-ink`, `bg-sun` ...).

### Surfaces

| Token        | Hex       | Use                                              |
|--------------|-----------|--------------------------------------------------|
| `paper`      | `#F4F1EA` | Page background (warm paper)                     |
| `paper-deep` | `#EAE4D7` | Alternate bands (related articles)               |
| `card`       | `#FFFFFF` | Cards, tables, inputs, FAQ items                 |
| `sand`       | `#E0FBFC` | Mint "cutting mat", hover fills, chips           |

### Text

| Token      | Hex       | Contrast on paper | Use                                       |
|------------|-----------|-------------------|-------------------------------------------|
| `ink`      | `#082F38` | 12.6:1            | Body text, headings, outlines, shadows    |
| `ink-soft` | `#4A6166` | 5.8:1             | Secondary text, metadata                  |
| `teal-ink` | `#176466` | 6.1:1             | Links and teal text on light surfaces     |

### Brand teals and sticker accents

| Token        | Hex       | Use                                                                  |
|--------------|-----------|----------------------------------------------------------------------|
| `ocean-deep` | `#0F4C5C` | Secondary dark (laptop hinge, hover of ink elements)                 |
| `jet-stream` | `#38A3A5` | Fills and shadows only - never small text on paper (2.7:1)           |
| `sky-light`  | `#80CED7` | Sticky notes, CTA panels, check icons                                |
| `sun`        | `#FFD23F` | Primary sticker colour: active states, badges, highlights            |
| `coral`      | `#FF8A65` | Secondary sticker colour: notebook, "Popular" badge, cross icons     |
| `alert`      | `#B42318` | Errors                                                               |

### Pairing rules

* Text on `sun`, `coral`, `sky-light`, `sand`, `paper`, `card`: always `ink`.
* Text on `ink`: `sun` (buttons, tags) or `sand` (long text, footer).
* Never use `jet-stream` or `sky-light` as a text colour on light backgrounds - use `teal-ink`.
* Coloured status text on paper uses the Tailwind 700/800 shades (for example `text-green-800`, `text-red-700`).

## 3. Typography

| Role                  | Font                  | Weights   | Tailwind        |
|-----------------------|-----------------------|-----------|-----------------|
| Display / headings    | **Unbounded**         | 700, 900  | `font-display`  |
| Body and UI           | **Figtree**           | 400-700   | default         |
| Handwritten notes     | **Caveat**            | 700       | `hand` class    |
| Code                  | **JetBrains Mono**    | 400       | `font-jetbrains`|

Fonts are self-hosted via `@fontsource` (Latin subset only) and imported in `BaseLayout.astro`.

### Type scale (mobile / desktop)

* **Hero (H1 on homepage):** 40px / 88px, weight 900, letter-spacing -0.04em, leading 0.98
* **Page H1:** 36px / 60px, weight 900
* **Article H1:** 34px / 64px, weight 900
* **H2:** 26px / 32px (articles get a sun "tape" bar above every H2)
* **H3:** 21px
* **Body:** 18px in articles, 16-17px elsewhere, leading 1.75 for long text
* **Handwritten notes:** 20-30px, rotated -1 to -2 degrees, `text-teal-ink`

Handwriting is decoration: one short lowercase note per section at most ("new here?", "editor's picks"). Never use it
for body copy or anything a reader must read to use the page.

## 4. Components

### Sticker surface (`.sticker`)

White card, `2px` ink border, solid offset shadow `6px 8px 0 0 ink`. Add `.sticker-hover` on interactive cards to lift
on hover and press on click. Radii: 22-28px for cards, 999px for pills.

### Shadows

Solid only - no blur. Tokens: `shadow-sticker-sm` (4/5), `shadow-sticker` (6/8), `shadow-sticker-lg` (10/12). Dark
elements (ink buttons, laptop) cast a `jet-stream` or `ocean-deep` shadow instead of ink.

### Buttons (`.btn-pill` + variant)

* **`.btn-ink`** - ink pill, sun text, jet-stream shadow. Primary actions.
* **`.btn-sun`** - sun pill, ink border and shadow. Secondary or "fun" actions (Deals, Suggest a tool).
* **`.btn-outline`** - transparent with a 3px ink border; fills ink on hover.
* Affiliate CTAs use `AffiliateButton.astro` (`primary` = ink, `secondary` = sun, `ghost` = teal link) and support an
  optional `subtext` line.
* Minimum height 48px.

### Tags (`.tag-pill`)

Ink pill with sun text for categories. Read time and meta stay plain `ink-soft` text.

### Tilt

Rotation is for stickers and objects only (-8 to +8 degrees on the desk, -2 to +2 for polaroid cards). Grids of many
cards (listing pages, related articles) stay straight so they scan cleanly.

### Motion

Hover lift (`translate -2px`), the scrolling tool strip, the coffee steam and the loading sticker. Everything respects
`prefers-reduced-motion` (handled globally in `global.css`).

## 5. Layout & Spacing

* **Page container:** `max-w-7xl` (1280px) with `px-4` mobile / `px-6` desktop; articles use `max-w-6xl` with a 760px
  reading column plus a 280px sticky table of contents.
* **Fixed header:** 64px mobile / 80px desktop - top padding for pages is `pt-28 md:pt-36`.
* **Section rhythm:** `pt-20 md:pt-28` between homepage sections.
* **Grids:** 1 column mobile, 2 at `sm`, 3-4 at `lg`, gaps 24-28px.

## 6. Accessibility

We adhere to **WCAG 2.2 Level AA** - see [accessibility-guidelines.md](./accessibility-guidelines.md).

* Contrast pairs above are verified; stick to them.
* Touch targets at least 48x48px.
* Focus ring: 3px `ocean-deep` outline with offset (global `:focus-visible`).
* A "Skip to content" link is the first focusable element on every page.
* Decorative desk objects (plant, mug, stickers) are `aria-hidden`; every clickable object is a real `<a>` with a text
  label.
