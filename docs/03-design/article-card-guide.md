# Article Card Design Guide

This guide documents the article card component used across FloatJet category pages (e.g., `/gear`, `/tools`, `/guides`).

## Visual Overview

```
┌──────────────────────────────────────────────────────────────────────┐
│  p-6 (24px padding all sides)                                        │
│                                                                      │
│  ┌─────┐  ┌────────────────────────────────────────────────────┐    │
│  │     │  │  ┌──────────────┐  ┌─────────┐                     │    │
│  │ 💻  │  │  │  Computers   │  │ 18 min  │  ← category + time  │    │
│  │     │  │  └──────────────┘  └─────────┘                     │    │
│  │     │  │                                                    │    │
│  │text │  │  Best Laptops for Remote Work  ← title (h2)        │    │
│  │-3xl │  │                                                    │    │
│  │     │  │  Find the perfect laptop for productivity on       │    │
│  └─────┘  │  the go. Our top picks for every budget.           │    │
│           │                                      ↑ description  │    │
│  ↑ icon   └────────────────────────────────────────────────────┘    │
│  gap-4                                                               │
│           Read Review →  ← CTA with animated arrow                   │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
  ↑ rounded-xl border border-white/10
```

## Card Container

```astro
<a
  href={item.href}
  class="group bg-black/40 hover:bg-black/50 border border-white/10 hover:border-white/20 rounded-xl p-6 transition-all duration-300"
>
```

| Property | Value | Description |
|----------|-------|-------------|
| Element | `<a>` | Entire card is clickable link |
| Background | `bg-black/40` | Semi-transparent black (40% opacity) |
| Background (hover) | `hover:bg-black/50` | Slightly darker on hover (50% opacity) |
| Border | `border border-white/10` | 1px white border at 10% opacity |
| Border (hover) | `hover:border-white/20` | Border brightens to 20% on hover |
| Border radius | `rounded-xl` | 12px rounded corners |
| Padding | `p-6` | 24px padding all sides |
| Transition | `transition-all duration-300` | Smooth 300ms transition |
| Group | `group` | Enables child hover effects |

## Internal Layout

```astro
<div class="flex items-start gap-4">
  <!-- Icon -->
  <span class="text-3xl">{item.icon}</span>

  <!-- Content -->
  <div class="flex-1">
    <!-- ... content elements ... -->
  </div>
</div>
```

| Property | Value | Description |
|----------|-------|-------------|
| Display | `flex` | Horizontal flexbox layout |
| Alignment | `items-start` | Top-align icon with content |
| Gap | `gap-4` | 16px gap between icon and content |

## Element Specifications

### 1. Icon (Left Side)

```astro
<span class="text-3xl">{item.icon}</span>
```

| Property | Value | Description |
|----------|-------|-------------|
| Element | `<span>` | Inline element |
| Size | `text-3xl` | 30px (1.875rem) |
| Content | Emoji | Category-specific emoji (💻, 🎧, 🪑, 🎒) |

### 2. Category Badge + Read Time Row

```astro
<div class="flex items-center gap-2 mb-2">
  <span class="inline-block px-2 py-0.5 bg-jet-stream/20 text-jet-stream text-xs font-medium rounded">
    {item.category}
  </span>
  <span class="text-white/40 text-xs">{item.readTime} min</span>
</div>
```

#### Container
| Property | Value | Description |
|----------|-------|-------------|
| Display | `flex items-center` | Horizontal, vertically centered |
| Gap | `gap-2` | 8px between badge and time |
| Margin | `mb-2` | 8px bottom margin |

#### Category Badge
| Property | Value | Description |
|----------|-------|-------------|
| Display | `inline-block` | Inline with block properties |
| Padding | `px-2 py-0.5` | 8px horizontal, 2px vertical |
| Background | `bg-jet-stream/20` | Jet-stream (#38A3A5) at 20% opacity |
| Text color | `text-jet-stream` | Jet-stream (#38A3A5) |
| Font size | `text-xs` | 12px (0.75rem) |
| Font weight | `font-medium` | 500 |
| Border radius | `rounded` | 4px |

#### Read Time
| Property | Value | Description |
|----------|-------|-------------|
| Text color | `text-white/40` | White at 40% opacity |
| Font size | `text-xs` | 12px (0.75rem) |
| Format | `{X} min` | e.g., "18 min" |

### 3. Title

```astro
<h2 class="text-lg font-semibold text-white group-hover:text-jet-stream transition-colors mb-2">
  {item.title}
</h2>
```

| Property | Value | Description |
|----------|-------|-------------|
| Element | `<h2>` | Semantic heading |
| Font size | `text-lg` | 18px (1.125rem) |
| Font weight | `font-semibold` | 600 |
| Text color | `text-white` | Pure white |
| Text color (hover) | `group-hover:text-jet-stream` | Changes to teal on card hover |
| Transition | `transition-colors` | Smooth color change |
| Margin | `mb-2` | 8px bottom margin |

### 4. Description

```astro
<p class="text-white/70 text-sm">
  {item.description}
</p>
```

| Property | Value | Description |
|----------|-------|-------------|
| Element | `<p>` | Paragraph |
| Text color | `text-white/70` | White at 70% opacity |
| Font size | `text-sm` | 14px (0.875rem) |
| Max length | ~100 chars | Keep descriptions concise |

### 5. CTA "Read Review" Link

```astro
<div class="mt-4 flex items-center text-jet-stream text-sm font-medium">
  Read Review
  <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
  </svg>
</div>
```

#### Container
| Property | Value | Description |
|----------|-------|-------------|
| Margin | `mt-4` | 16px top margin |
| Display | `flex items-center` | Horizontal, vertically centered |
| Text color | `text-jet-stream` | Teal accent color |
| Font size | `text-sm` | 14px (0.875rem) |
| Font weight | `font-medium` | 500 |

#### Arrow Icon
| Property | Value | Description |
|----------|-------|-------------|
| Size | `w-4 h-4` | 16x16px |
| Margin | `ml-1` | 4px left margin |
| Animation | `group-hover:translate-x-1` | Moves 4px right on card hover |
| Transition | `transition-transform` | Smooth movement |

## Grid Layout

```astro
<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {displayGear.map((item, index) => (
    <!-- Article cards -->
  ))}
</div>
```

| Breakpoint | Columns | Gap | Items Shown |
|------------|---------|-----|-------------|
| Mobile (default) | 1 | 24px | 3 |
| Tablet (`sm:` 640px+) | 2 | 24px | 6 |
| Desktop (`lg:` 1024px+) | 3 | 24px | 9 |

### Responsive Visibility Classes

```astro
<a
  class:list={[
    "group bg-black/40 ...",
    // Mobile: show first 3 items only
    index >= 3 && "hidden sm:block",
    // Tablet: show first 6 items only
    index >= 6 && "sm:hidden lg:block"
  ]}
>
```

| Index | Mobile | Tablet | Desktop |
|-------|--------|--------|---------|
| 0-2 | ✓ Visible | ✓ Visible | ✓ Visible |
| 3-5 | ✗ Hidden | ✓ Visible | ✓ Visible |
| 6-8 | ✗ Hidden | ✗ Hidden | ✓ Visible |

## Data Structure

```typescript
interface ArticleItem {
  title: string;       // "Best Laptops for Remote Work"
  description: string; // Short summary, ~100 chars
  href: string;        // "/gear/best-laptops-remote-work"
  category: string;    // "Computers" | "Furniture" | "Audio" | "Accessories"
  icon: string;        // Emoji: "💻" | "🪑" | "🎧" | "🎒"
  readTime: number;    // Minutes, e.g., 18
}
```

## Complete Card Code (Copy-Paste)

```astro
<a
  href={item.href}
  class="group bg-black/40 hover:bg-black/50 border border-white/10 hover:border-white/20 rounded-xl p-6 transition-all duration-300"
>
  <div class="flex items-start gap-4">
    <span class="text-3xl">{item.icon}</span>
    <div class="flex-1">
      <div class="flex items-center gap-2 mb-2">
        <span class="inline-block px-2 py-0.5 bg-jet-stream/20 text-jet-stream text-xs font-medium rounded">
          {item.category}
        </span>
        <span class="text-white/40 text-xs">{item.readTime} min</span>
      </div>
      <h2 class="text-lg font-semibold text-white group-hover:text-jet-stream transition-colors mb-2">
        {item.title}
      </h2>
      <p class="text-white/70 text-sm">
        {item.description}
      </p>
    </div>
  </div>
  <div class="mt-4 flex items-center text-jet-stream text-sm font-medium">
    Read Review
    <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
    </svg>
  </div>
</a>
```

## Color Reference

| Token | Hex | Usage |
|-------|-----|-------|
| `jet-stream` | `#38A3A5` | Category badge, title hover, CTA |
| `white` | `#FFFFFF` | Title text |
| `white/70` | `rgba(255,255,255,0.7)` | Description |
| `white/40` | `rgba(255,255,255,0.4)` | Read time |
| `white/20` | `rgba(255,255,255,0.2)` | Border hover |
| `white/10` | `rgba(255,255,255,0.1)` | Border default |
| `black/50` | `rgba(0,0,0,0.5)` | Background hover |
| `black/40` | `rgba(0,0,0,0.4)` | Background default |

## Adding New Articles

When adding a new article to a category page:

1. **Add item to data array:**
```javascript
const allGear = [
  // ... existing items
  {
    title: 'Your New Article Title',
    description: 'Brief description under 100 characters for best display.',
    href: '/gear/your-article-slug',
    category: 'Computers', // Must match category
    icon: '💻',            // Category-appropriate emoji
    readTime: 15           // Actual reading time from article
  }
];
```

2. **Verify responsive behavior** - Items are auto-shuffled and displayed based on screen size.

3. **Keep descriptions concise** - Aim for 80-100 characters max.

4. **Match category** - Use exact category string from categories array.

## Variations by Page Type

The same card pattern is used on:
- `/gear` - Remote work equipment
- `/tools` - Software tools
- `/guides` - How-to guides
- `/blog` - Blog articles

CTA text varies by context:
- Gear/Tools: "Read Review"
- Guides: "Read Guide"
- Blog: "Read Article"
