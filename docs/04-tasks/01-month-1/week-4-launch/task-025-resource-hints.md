---
task_id: "FJ-025"
title: "Add Resource Hints (Preconnect, Prefetch)"
category: "Technical"
priority: "P0"
status: "not-started"
created_date: "2025-11-28"
due_date: "2025-12-20"
estimated_hours: 1
actual_hours: 0
assigned_to: "Team"
tags: ["performance", "optimization", "lighthouse", "resource-hints"]
---

# Task: Add Resource Hints (Preconnect, Prefetch)

## Overview

Implement resource hints (`preconnect`, `dns-prefetch`, `prefetch`) in the base layout to establish early connections to
critical third-party domains. This reduces latency for Google Fonts, affiliate redirects, and analytics.

## Goals

- [ ] Add preconnect hints for Google Fonts
- [ ] Add preconnect for analytics domains (PostHog, Google Analytics)
- [ ] Add dns-prefetch for affiliate redirect domains
- [ ] Optimize third-party resource loading

## Success Criteria

- ✅ Preconnect to fonts.googleapis.com and fonts.gstatic.com
- ✅ Early connections to PostHog and GA4 domains
- ✅ DNS resolution for affiliate domains (Impact Radius, etc.)
- ✅ Lighthouse shows improved connection timing
- ✅ Performance score maintained at 100/100

## Dependencies

**Blocked by:**

- FJ-002: Base layouts (must exist to add `<head>` tags)

**Blocks:**

- None (independent optimization)

**Related:**

- See: `/docs/04-tasks/00-backlog/optimization-ideas.md` (P0 item #4)
- FJ-023: Font loading optimization (complementary)
- FJ-010: Analytics setup (know which domains to preconnect)

## Subtasks

### Phase 1: Identify Critical Domains (0.25 hours)

- [ ] 1.1 List all third-party domains used
    - Google Fonts: fonts.googleapis.com, fonts.gstatic.com
    - PostHog: app.posthog.com
    - Google Analytics: www.google-analytics.com
    - Affiliate programs: See `/docs/affiliate-programs.md`

- [ ] 1.2 Categorize by priority
    - **Preconnect:** Critical, used on every page (fonts, analytics)
    - **DNS-prefetch:** Important, but not immediate (affiliate redirects)
    - **Prefetch:** Future navigation hints (not needed yet)

### Phase 2: Implement Resource Hints (0.5 hours)

- [ ] 2.1 Add to BaseLayout.astro `<head>` section
    - Preconnect to Google Fonts
    - Preconnect to analytics domains
    - DNS-prefetch to affiliate domains

- [ ] 2.2 Use correct syntax and attributes
    - Add `crossorigin` for CORS resources
    - Verify `rel` attribute values
    - Order by priority (most critical first)

**Example implementation:**

```astro
<!-- Google Fonts (critical, on every page) -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Analytics (critical, on every page) -->
<link rel="preconnect" href="https://app.posthog.com">
<link rel="preconnect" href="https://www.google-analytics.com">

<!-- Affiliate domains (important, not immediate) -->
<link rel="dns-prefetch" href="https://impact.com">
```

### Phase 3: Testing & Validation (0.25 hours)

- [ ] 3.1 Verify in Chrome DevTools
    - Network tab → Check connection timing
    - Confirm preconnect happens before resource requests
    - Validate crossorigin attribute on CORS resources

- [ ] 3.2 Run Lighthouse audit
    - Check Performance score
    - Look for "Preconnect to required origins" suggestion (should be resolved)
    - Verify connection timing improved

- [ ] 3.3 Test on mobile viewport
    - Slow 3G throttling
    - Verify early connections reduce latency
    - Check resource loading waterfall

## Resources

- [Resource Hints Spec](https://www.w3.org/TR/resource-hints/)
- [Preconnect Guide](https://web.dev/uses-rel-preconnect/)
- [DNS-Prefetch vs Preconnect](https://www.smashingmagazine.com/2019/04/optimization-performance-resource-hints/)
- Internal: `/docs/affiliate-programs.md` (List of affiliate domains)

## Acceptance Checklist

Before marking this task complete:

- [ ] All subtasks completed
- [ ] All success criteria met
- [ ] Resource hints added to BaseLayout.astro
- [ ] Chrome DevTools shows early connections
- [ ] Lighthouse audit shows improvement
- [ ] No console warnings about incorrect hints

## Progress Log

### 2025-11-28 - 0 hours

- ⏳ Task created from optimization backlog (P0 item #4)
- 📝 Subtasks defined
- 🎯 Target: Reduce third-party connection latency

## Notes

- **Preconnect vs DNS-prefetch:**
    - `preconnect`: Full connection (DNS + TCP + TLS) - use for critical resources
    - `dns-prefetch`: DNS resolution only - use for nice-to-have resources
    - `prefetch`: Download resource for future navigation - not needed yet

- **CORS resources:** Add `crossorigin` attribute (e.g., fonts.gstatic.com)
- **Limit preconnects:** Only 4-6 critical domains (browser limit ~6 connections)
- **Order matters:** Put most critical preconnects first

**Critical domains (preconnect):**

1. fonts.googleapis.com
2. fonts.gstatic.com
3. app.posthog.com

**Important domains (dns-prefetch):**

1. Affiliate program domains (once /go/ redirects implemented)
2. Image CDNs (if using external hosting)

## Blockers

_None currently_

## Related Tasks

- FJ-002: Base layouts must exist
- FJ-023: Font loading optimization (uses preconnect)
- FJ-010: Analytics setup (know PostHog domain)
- FJ-008: Affiliate programs (know redirect domains)
