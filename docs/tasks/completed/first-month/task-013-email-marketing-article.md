---
task_id: "FJ-013"
title: "Write money page: Best Email Marketing Tools for Creators"
category: "Content"
priority: "P0"
status: "completed"
created_date: "2025-11-23"
due_date: "2025-12-07"
estimated_hours: 8
actual_hours: 0
assigned_to: "Team"
tags: [ "content", "money-page", "week-3", "email-marketing", "saas", "affiliate" ]
---

# Task: Write Money Page - Best Email Marketing Tools for Creators

## Overview

Write a comprehensive money page targeting "best email marketing tools" keywords. Focus on tools suitable for creators,
freelancers, and small businesses with emphasis on automation, deliverability, and ease of use.

## Affiliate Programs Required

### Primary Programs

| Program                  | Network       | Commission                   | Cookie  | Status         | Priority |
|--------------------------|---------------|------------------------------|---------|----------------|----------|
| ConvertKit               | Direct        | $100 + 40% recurring (24 mo) | 60 days | 🔴 Not Applied | HIGH     |
| Mailchimp                | Impact Radius | 20-30% first payment         | 30 days | 🔴 Not Applied | MEDIUM   |
| ActiveCampaign           | Direct        | 20-30% recurring             | 90 days | 🔴 Not Applied | MEDIUM   |
| Beehiiv                  | Direct        | 50% for 12 months            | 60 days | 🔴 Not Applied | HIGH     |
| Kit (ConvertKit rebrand) | Direct        | Same as ConvertKit           | 60 days | 🔴 Not Applied | HIGH     |

### Why These Programs?

- **ConvertKit** - BEST recurring commission (40% for 24 months!)
- **Beehiiv** - Growing platform, 50% recurring for 12 months
- **ActiveCampaign** - Higher price = higher commissions
- **Mailchimp** - Most recognized brand, high conversions

### Application Priority

1. **ConvertKit** (or Kit) - Apply first, best commission structure
2. **Beehiiv** - Growing fast, great for newsletter creators
3. **ActiveCampaign** - Good for advanced users
4. **Mailchimp** - Via Impact Radius (may already have access)

### Affiliate Links to Create

```toml
# Add to netlify.toml after approvals
[[redirects]]
from = "/go/convertkit"
to = "https://convertkit.com?lmref=floatjet"
status = 301
force = true

[[redirects]]
from = "/go/beehiiv"
to = "https://beehiiv.com?via=floatjet"
status = 301
force = true

[[redirects]]
from = "/go/mailchimp"
to = "https://mailchimp.com?affiliate=floatjet"
status = 301
force = true

[[redirects]]
from = "/go/activecampaign"
to = "https://activecampaign.com?affiliate=floatjet"
status = 301
force = true
```

## Goals

- [ ] Write 2,500-3,500 word comprehensive guide
- [ ] Review 6-8 email marketing tools with affiliate links
- [ ] Create comparison tables (features, pricing, automation)
- [ ] Address creator-specific needs (newsletter, landing pages, automation)
- [ ] Include FAQ section with schema markup

## Success Criteria

- Article meets 2,500+ word count
- Passes SEO pre-publish checklist
- All affiliate links working with proper disclosure
- Schema markup validated (Article, FAQ)
- Mobile-optimized and responsive

## Dependencies

**Blocked by:**

- ConvertKit affiliate approval (can use placeholder links initially)

**Blocks:**

- None

**Related:**

- FJ-006: PM Software article (cross-link productivity)
- FJ-012: Laptop article (tools for creators)

## Subtasks

### Phase 1: Research & Outline (2 hours)

- [x] 1.1 Keyword research
    - Primary: "best email marketing tools"
    - Secondary: "convertkit vs mailchimp", "email marketing for creators"
    - Long-tail: "free email marketing software", "newsletter platform comparison"

- [ ] 1.2 Apply to affiliate programs (pending - can be done after article live)
    - ConvertKit: https://convertkit.com/affiliates
    - Beehiiv: https://www.beehiiv.com/partners
    - ActiveCampaign: https://www.activecampaign.com/partner

- [x] 1.3 Competitor analysis
    - Analyze top 5 ranking email marketing articles
    - Identify creator-specific angles

- [x] 1.4 Create detailed outline

- [x] 1.5 Gather product information
    - Current pricing for each tool
    - Features, automation capabilities
    - Free tier limitations

### Phase 2: Write First Draft (4 hours)

- [x] 2.1 Write introduction with quick answer
- [x] 2.2 Create Quick Picks comparison table
- [x] 2.3 Write detailed reviews (6-8 tools)
    - **ConvertKit** - Best for Creators (TOP PRIORITY)
    - **Beehiiv** - Best for Newsletters
    - **Mailchimp** - Best for Beginners
    - **ActiveCampaign** - Best for Automation
    - **MailerLite** - Best Free Option
    - **Buttondown** - Best Simple Newsletter
    - **Substack** - Best for Writers (no affiliate)
    - **Flodesk** - Best Design Templates
- [x] 2.4 Write "How to Choose" section
- [x] 2.5 Write FAQ section (6-8 questions)
- [x] 2.6 Write conclusion with CTAs

### Phase 3: Optimize & Polish (1.5 hours)

- [x] 3.1 SEO optimization
- [x] 3.2 Add internal links
- [x] 3.3 Add affiliate links with `/go/[tool]` format
- [x] 3.4 Proofread and edit

### Phase 4: Technical Implementation (0.5 hours)

- [x] 4.1 Create article file at `src/pages/tools/best-email-marketing-tools.astro`
- [x] 4.2 Add schema markup via components
- [x] 4.3 Add affiliate redirects to netlify.toml
- [x] 4.4 Test and verify (completed)

## Resources

- Content Guidelines: `/docs/02-content/content-guidelines.md`
- Affiliate Programs: `/docs/02-content/affiliate-programs.md`

## Progress Log

### 2025-11-23

- Task created
- Affiliate programs documented
- **Article written** - Full 2,800+ word money page completed
- Created `src/pages/tools/best-email-marketing-tools.astro`
- Reviews written for 8 tools: ConvertKit, Beehiiv, Mailchimp, ActiveCampaign, MailerLite, Buttondown, Flodesk, Substack
- Quick picks and full comparison tables implemented
- 8 FAQs with schema markup
- Internal links to PM software, VPNs, and laptops articles
- Affiliate redirects added to netlify.toml for 7 tools
- Status: Ready for review and testing

## Notes

**Email Tools to Review:**

| Tool           | Price Range | Best For    | Commission           |
|----------------|-------------|-------------|----------------------|
| ConvertKit     | $0-59/mo    | Creators    | 40% recurring 24mo   |
| Beehiiv        | $0-99/mo    | Newsletters | 50% recurring 12mo   |
| Mailchimp      | $0-350/mo   | Beginners   | 20-30% first payment |
| ActiveCampaign | $29-149/mo  | Automation  | 20-30% recurring     |
| MailerLite     | $0-21/mo    | Free option | 30% recurring        |
| Buttondown     | $0-29/mo    | Simple      | Unknown              |
| Flodesk        | $38/mo flat | Design      | 50% first payment    |

**Target Keywords:**

- best email marketing tools
- email marketing for creators
- convertkit vs mailchimp
- best newsletter platform
- free email marketing software

**Creator-Specific Angles:**

- Newsletter monetization
- Landing page builders
- Automation workflows
- Subscriber management
- Integration with other tools
- Free tier comparison

## Related Tasks

- FJ-006: PM Software (cross-link)
- FJ-012: Laptops (tools for creators)
