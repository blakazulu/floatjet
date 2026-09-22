# Article Card Guide

All article cards on FloatJet come from one component: `src/components/ui/ArticleCard.astro`. Do not hand-build card
markup on new pages - import the component so every card stays consistent with the "Desk Party" design
([design-guidelines.md](./design-guidelines.md)).

## Usage

```astro
---
import ArticleCard from "@components/ui/ArticleCard.astro";
---

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
  {articles.map((article) => (
    <ArticleCard
      href={getArticlePath(article)}
      title={article.title}
      description={article.description}
      image={article.image}
      imageAlt={article.imageAlt}
      category="Audio"
      readTime={article.readingTime}
    />
  ))}
</div>
```

## Props

| Prop           | Type                     | Default  | Notes                                                    |
|----------------|--------------------------|----------|----------------------------------------------------------|
| `href`         | `string`                 | required | Whole card is one link                                   |
| `title`        | `string`                 | required | Rendered as `h3` (or `h2` via `headingLevel`)            |
| `image`        | `string`                 | required | Public path, rendered with Astro `<Image>`               |
| `imageAlt`     | `string`                 | `""`     | Always pass a real description                           |
| `description`  | `string`                 | -        | Clamped to 2 lines                                       |
| `category`     | `string`                 | -        | Ink/sun tag pill (on the image for `tile`)               |
| `readTime`     | `number \| string`        | -        | Numbers render as "14 min read"                          |
| `note`         | `string`                 | -        | Handwritten caption, `polaroid` variant only            |
| `variant`      | `"tile" \| "polaroid"`    | `tile`   | See below                                                |
| `index`        | `number`                 | `0`      | Alternates the polaroid tilt                             |
| `headingLevel` | `"h2" \| "h3"`            | `h3`     | Keep the page's heading order correct                    |
| `eager`        | `boolean`                | `false`  | Eager-load only for cards above the fold                 |

## Variants

### `tile` (default) - listing grids

Used on hub/category pages, related articles and "Latest reviews".

```
+----------------------------------+   white card, 1.5px ink border, rounded 22px
| [ Audio ]                        |   tag pill over the 16:10 image
|           image 16:10            |
|----------------------------------|   1.5px ink divider
| Best Audio Interfaces for        |   Bricolage 18-20px, underlines on hover
| Remote Work                      |
| Professional audio quality...    |   ink-soft, 2 lines max
| 14 min read               Read ->|   meta + teal-ink CTA with sliding arrow
+----------------------------------+
     solid ink shadow 4px 5px, lifts on hover
```

Cards in grids stay straight (no tilt) so long lists scan cleanly.

### `polaroid` - curated features

Not used since the Sept 2026 tone-down (kept for reference; all cards are now straight tiles).

```
   +----------------------------+     rotated -2 / +1.5 / -1 / +2 deg (by index)
   | +------------------------+ |     white frame, small radius
   | |      image 4:3         | |
   | +------------------------+ |
   |  our backs say thanks      |     Caveat note in teal-ink
   |  Best Ergonomic Chairs     |     Bricolage title
   |  [ Gear ]    18 min read ->|     tag pill + read time
   +----------------------------+
```

## Rules

- One card = one link. Never nest buttons or other links inside a card.
- Always pass `imageAlt`.
- Grid gaps: `gap-6` mobile, `gap-7` desktop; 1 / 2 / 3 columns (4 on the homepage rows).
- No emojis in cards (or anywhere in UI copy).
