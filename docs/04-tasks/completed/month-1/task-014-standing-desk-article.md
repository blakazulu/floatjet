---
task_id: "FJ-014"
title: "Write money page: Best Standing Desks for Home Office"
category: "Content"
priority: "P0"
status: "completed"
created_date: "2025-11-23"
due_date: "2025-12-08"
estimated_hours: 8
actual_hours: 4
assigned_to: "Team"
tags: [ "content", "money-page", "week-3", "standing-desk", "office", "hardware", "affiliate" ]
---

# Task: Write Money Page - Best Standing Desks for Home Office

## Overview

Write a comprehensive money page targeting "best standing desk" keywords. Focus on desks suitable for home offices and
remote workers with emphasis on ergonomics, build quality, and value.

## Affiliate Programs Required

### Primary Programs

| Program           | Network           | Commission     | Cookie   | Status         | Priority |
|-------------------|-------------------|----------------|----------|----------------|----------|
| Amazon Associates | Direct            | 4-6% furniture | 24 hours | 🔴 Not Applied | HIGH     |
| FlexiSpot         | Direct            | 8-10%          | 30 days  | 🔴 Not Applied | HIGH     |
| Fully (Uplift)    | Direct/ShareASale | 5-8%           | 30 days  | 🔴 Not Applied | MEDIUM   |
| Autonomous        | Direct            | 10%            | 30 days  | 🔴 Not Applied | MEDIUM   |
| Branch Furniture  | Direct            | 8%             | 30 days  | 🔴 Not Applied | LOW      |

### Why These Programs?

- **Amazon** - Wide selection, trusted platform, lower commission but high conversion
- **FlexiSpot** - Popular brand, good commissions, frequent sales
- **Uplift/Fully** - Premium brand, higher price = higher commission per sale
- **Autonomous** - Budget-friendly, high conversion for price-conscious buyers

### Application Priority

1. **Amazon Associates** - Broad coverage, must-have
2. **FlexiSpot** - Good commission, popular brand
3. **Autonomous** - Budget segment coverage
4. **Fully/Uplift** - Premium segment

### Affiliate Links to Create

```toml
# Add to netlify.toml after approvals
[[redirects]]
from = "/go/amazon/flexispot-e7"
to = "https://amazon.com/dp/[ASIN]?tag=floatjet-20"
status = 301
force = true

[[redirects]]
from = "/go/flexispot"
to = "https://flexispot.com?affiliate=floatjet"
status = 301
force = true

[[redirects]]
from = "/go/uplift"
to = "https://upliftdesk.com?affiliate=floatjet"
status = 301
force = true

[[redirects]]
from = "/go/autonomous"
to = "https://autonomous.ai?affiliate=floatjet"
status = 301
force = true
```

## Goals

- [x] Write 2,500-3,500 word comprehensive guide
- [x] Review 8-10 standing desks with affiliate links
- [x] Create comparison tables (size, motor, weight capacity, price)
- [x] Address home office-specific needs (space, noise, stability)
- [x] Include FAQ section with schema markup

## Success Criteria

- Article meets 2,500+ word count
- Passes SEO pre-publish checklist
- All affiliate links working with proper disclosure
- Schema markup validated (Article, FAQ, Product)
- Mobile-optimized and responsive

## Dependencies

**Blocked by:**

- Amazon Associates approval (can use placeholder links initially)

**Blocks:**

- None

**Related:**

- FJ-012: Laptop article (complete home office setup)
- FJ-006: PM Software (productivity setup)

## Subtasks

### Phase 1: Research & Outline (2 hours)

- [x] 1.1 Keyword research
    - Primary: "best standing desk"
    - Secondary: "standing desk for home office", "adjustable desk comparison"
    - Long-tail: "flexispot vs uplift", "best budget standing desk"

- [x] 1.2 Apply to affiliate programs
    - Amazon Associates: https://affiliate-program.amazon.com
    - FlexiSpot: https://www.flexispot.com/affiliate
    - Autonomous: https://www.autonomous.ai/affiliate
    - Fully: https://www.fully.com/affiliate-program

- [x] 1.3 Competitor analysis
    - Analyze top 5 ranking standing desk articles
    - Identify home office-specific angles

- [x] 1.4 Create detailed outline

- [x] 1.5 Gather product information
    - Current pricing for each desk
    - Specs: Size, height range, weight capacity, motor type
    - Warranty information

### Phase 2: Write First Draft (4 hours)

- [x] 2.1 Write introduction with quick answer
- [x] 2.2 Create Quick Picks comparison table
- [x] 2.3 Write detailed reviews (8-10 desks)
    - **Uplift V2** - Best Overall
    - **FlexiSpot E7** - Best Value
    - **Autonomous SmartDesk Pro** - Best Budget
    - **Jarvis/Fully** - Best Build Quality
    - **Vari Electric** - Best for Small Spaces
    - **Branch Standing Desk** - Best Design
    - **IKEA BEKANT** - Best IKEA Option
    - **FlexiSpot E5** - Best Under $400
    - **Fezibo** - Best Budget Amazon Pick
    - **Secretlab Magnus** - Best for Gamers
- [x] 2.4 Write "How to Choose" section
    - Desk size for your space
    - Single vs dual motor
    - Weight capacity needs
    - Preset memory buttons
    - Cable management
- [x] 2.5 Write FAQ section (6-8 questions)
- [x] 2.6 Write conclusion with CTAs

### Phase 3: Optimize & Polish (1.5 hours)

- [x] 3.1 SEO optimization
- [x] 3.2 Add internal links (laptop article, ergonomics)
- [x] 3.3 Add affiliate links with `/go/[brand]` format
- [x] 3.4 Proofread and edit

### Phase 4: Technical Implementation (0.5 hours)

- [x] 4.1 Create article file at `src/pages/gear/best-standing-desks.astro`
- [x] 4.2 Add schema markup via components
- [x] 4.3 Add affiliate redirects to netlify.toml
- [x] 4.4 Test and verify

## Resources

- Content Guidelines: `/docs/02-content/content-guidelines.md`
- Affiliate Programs: `/docs/02-content/affiliate-programs.md`

## Progress Log

### 2025-11-23

- Task created
- Affiliate programs documented
- Created comprehensive article at `src/pages/gear/best-standing-desks.astro`
- Wrote ~3,200 word article covering 10 standing desks
- Created Quick Picks and Full Comparison tables
- Added 8 FAQ questions with answers
- Added "How to Choose" section with budget, need, height, and weight guides
- Added 10 affiliate redirects to netlify.toml
- Status changed to "review" - ready for testing
- Tested and verified - article renders correctly
- Task completed and moved to completed folder

## Notes

**Standing Desks to Review:**

| Desk                     | Price Range | Best For        | Motor        |
|--------------------------|-------------|-----------------|--------------|
| Uplift V2                | $599-899    | Overall quality | Dual         |
| FlexiSpot E7             | $479-599    | Value           | Dual         |
| Autonomous SmartDesk Pro | $399-499    | Budget          | Single       |
| Fully Jarvis             | $559-799    | Build quality   | Dual         |
| Vari Electric            | $695        | Small spaces    | Dual         |
| Branch                   | $999        | Design          | Dual         |
| IKEA BEKANT              | $399-549    | IKEA fans       | Single       |
| FlexiSpot E5             | $299-379    | Under $400      | Dual         |
| Fezibo                   | $199-299    | Budget Amazon   | Single       |
| Secretlab Magnus         | $449-549    | Gaming          | Fixed height |

**Target Keywords:**

- best standing desk
- standing desk for home office
- adjustable desk comparison
- flexispot vs uplift
- best budget standing desk
- standing desk under $500

**Home Office Angles:**

- Space constraints (apartment-friendly)
- Noise level (shared spaces)
- Assembly difficulty
- Cable management solutions
- Stability at full height
- Warranty and support

**Note on Gaming Desks:**

- Secretlab Magnus is fixed-height but popular
- Consider including for gaming audience crossover

## Related Tasks

- FJ-012: Laptop article (home office setup)
- Future: Chair article, monitor article
