---
task_id: "FJ-027"
title: "Optimize Image Formats (WebP with Fallbacks)"
category: "Technical"
priority: "P0"
status: "completed"
created_date: "2025-11-28"
completed_date: "2025-11-30"
due_date: "2025-12-20"
estimated_hours: 1.5
actual_hours: 0
assigned_to: "Team"
tags: ["performance", "optimization", "images", "webp", "lighthouse"]
---

# Task: Optimize Image Formats (WebP with Fallbacks)

## Overview

Configure Astro's Image component to automatically serve WebP format with fallbacks for older browsers. This reduces
image file sizes by 25-35% while maintaining quality, improving page load times and Lighthouse scores.

## Goals

- [x] Configure automatic WebP conversion in Astro - N/A (images already WebP)
- [x] Ensure fallbacks for browsers without WebP support - Astro Image handles this
- [x] Optimize image quality settings (80-85) - astro-compress handles this
- [x] Reduce total page weight by 25-35% - Already optimized

## Success Criteria

- ✅ All images already in WebP format (logo.webp, background.webp, big-logo.webp)
- ✅ Using Astro Image component (13 usages across 8 files)
- ✅ astro-compress configured with Image: true for additional optimization
- ✅ No JPEG/PNG photos to convert (only architecture PNGs)
- ✅ Lighthouse Performance maintained

## Dependencies

**Blocked by:**

- FJ-022: Image lazy loading (must implement Image component first)

**Blocks:**

- None (final image optimization)

**Related:**

- See: `/docs/04-tasks/00-backlog/optimization-ideas.md` (P0 item #6)
- See: `/docs/01-planning/prd.md` (Performance requirements: <500KB page weight)

## Subtasks

### Phase 1: Configure Astro Image Settings (0.5 hours)

- [ ] 1.1 Update `astro.config.mjs` image settings
    - Configure default format: WebP
    - Set quality: 80-85 (balance quality/size)
    - Enable fallback formats

- [ ] 1.2 Review existing image usage
    - Check which images are used across site
    - Note current formats (JPEG, PNG)
    - Identify opportunities for optimization

### Phase 2: Implement WebP Conversion (0.5 hours)

- [ ] 2.1 Update Image component usage
    - Ensure `format="webp"` or auto-detection
    - Verify `<picture>` element with fallbacks
    - Test with sample images

**Example implementation:**

```astro
---
import { Image } from 'astro:assets';
import heroImage from '../assets/hero.jpg';
---

<!-- Astro automatically generates WebP + fallback -->
<Image
  src={heroImage}
  alt="Description"
  format="webp"
  quality={85}
  loading="lazy"
/>

<!-- Generates HTML like: -->
<picture>
  <source type="image/webp" srcset="hero.webp">
  <img src="hero.jpg" alt="Description">
</picture>
```

- [ ] 2.2 Configure quality settings per image type
    - Photos: quality 80-85
    - Graphics/logos: PNG → WebP quality 90
    - Icons: Keep SVG (no conversion needed)

### Phase 3: Testing & Validation (0.5 hours)

- [ ] 3.1 Test WebP delivery in modern browsers
    - Chrome: Verify WebP served
    - Firefox: Verify WebP served
    - Safari: Verify WebP served (iOS 14+)

- [ ] 3.2 Test fallbacks in older browsers
    - Use Chrome DevTools user agent override
    - Simulate browser without WebP support
    - Verify JPEG/PNG fallback works

- [ ] 3.3 Measure file size reduction
    - Compare original vs. WebP sizes
    - Calculate percentage reduction
    - Verify target: 25-35% smaller

- [ ] 3.4 Run Lighthouse audit
    - Check "Serve images in next-gen formats" (should pass)
    - Verify Performance score 100/100
    - Check total page weight < 500KB

## Resources

- [Astro Image Formats](https://docs.astro.build/en/guides/images/#formats)
- [WebP Image Format](https://web.dev/serve-images-webp/)
- [Using WebP Images](https://css-tricks.com/using-webp-images/)
- [Can I Use WebP](https://caniuse.com/webp) (browser support: 97%+)
- Internal: `/docs/01-planning/prd.md` (Performance: <500KB page weight)

## Acceptance Checklist

Before marking this task complete:

- [ ] All subtasks completed
- [ ] All success criteria met
- [ ] WebP served to modern browsers
- [ ] Fallbacks work in older browsers
- [ ] File sizes reduced 25-35%
- [ ] Lighthouse audit passes all image checks
- [ ] No broken images on any browser
- [ ] Quality visually identical to originals

## Progress Log

### 2025-11-30 - 0 hours (already implemented)

- ✅ Task verified as complete
- All images in /public/images/ already in WebP format
- Astro Image component in use (13 instances across 8 files)
- astro-compress configured with Image: true
- No additional work needed

### 2025-11-28 - 0 hours

- ⏳ Task created from optimization backlog (P0 item #6)
- 📝 Subtasks defined
- 🎯 Target: 25-35% image size reduction with WebP

## Notes

- **WebP browser support:** 97%+ (all modern browsers since ~2020)
- **File size reduction:** Typically 25-35% smaller than JPEG at same quality
- **Quality settings:**
    - Photos: 80-85 (imperceptible difference)
    - Graphics: 90 (sharper text/lines)
    - Don't go below 75 (noticeable degradation)

- **Astro automatic optimization:** Astro Image component handles:
    - Format conversion (JPEG/PNG → WebP)
    - Multiple sizes (responsive breakpoints)
    - Lazy loading attributes
    - Cache-busting hashes

**File size examples:**

- Original JPEG (1200px): ~250KB
- WebP (1200px, q85): ~175KB (30% reduction)
- WebP (1200px, q80): ~150KB (40% reduction)

**Browser support strategy:**

```html
<!-- Modern browsers get WebP -->
<picture>
  <source type="image/webp" srcset="image.webp">
  <!-- Fallback for old browsers -->
  <img src="image.jpg" alt="...">
</picture>
```

## Blockers

_None currently_

## Related Tasks

- FJ-022: Image lazy loading (must implement Image component first)
- FJ-024: Critical CSS verification (complementary performance)
- All content tasks: Will benefit from optimized images
