# FloatJet Documentation

**Welcome to the FloatJet documentation!** This folder contains all planning, content, and design documentation for
building and running FloatJet.

---

## 📁 Folder Structure

```
docs/
├── summery.md (you are here)
├── 01-planning/              # Strategic & technical planning
│   ├── master-plan.md        # Complete business strategy
│   └── prd.md                # Technical specifications
├── 02-content/               # Content creation & affiliate management
│   ├── content-guidelines.md # Writing standards & SEO
│   └── affiliate-programs.md # Affiliate program tracker
├── 03-design/                # Design, accessibility, mockups
│   ├── design-guidelines.md         # Brand colors & typography
│   ├── accessibility-guidelines.md  # WCAG 2.2 Level AA
│   ├── component-specifications.md  # 8 UI components (Astro code)
│   ├── concepts/                    # Design concept notes
│   └── mockups/                     # Visual mockups
└── 04-tasks/                 # Task management & tracking
    ├── README.md             # Task dashboard
    ├── task-template.md      # Template for new tasks
    ├── 01-month-1/           # Month 1 tasks by week
    ├── by-category/          # Tasks organized by category
    ├── 00-backlog/           # Future ideas & enhancements
    └── completed/            # Archived completed tasks
```

---

## 📋 01-planning/

**High-level business strategy and technical specifications**

### [master-plan.md](01-planning/master-plan.md) (~7,500 words)

**Complete business strategy and execution plan**

**Contents:**

- Executive summary & business model
- Niche analysis (Remote Work & Productivity Tools)
- Revenue projections ($2,000+/month in 6-12 months)
- Mobile-first & AI crawler strategy
- Content strategy (60 articles mapped out)
- Affiliate programs to join ($50-500/sale commissions)
- Traffic acquisition (SEO, Pinterest, Reddit)
- Month-by-month implementation timeline
- Success metrics & KPIs
- Risk mitigation & scaling strategy

**Use this for:**

- Understanding the overall business strategy
- Revenue goals and timelines
- Content planning roadmap
- Monthly implementation tasks

---

### [prd.md](01-planning/prd.md) (~6,000 words)

**Product Requirements Document - Technical specifications**

**Contents:**

- Infrastructure status (domain, hosting, CI/CD)
- Mobile-first development strategy
- AI crawler optimization strategy
- Product overview and goals
- Target audience & user personas
- Technical requirements (Astro SSG + Netlify)
- Performance requirements (100/100 Lighthouse)
- SEO requirements (traditional + AI search engines)
- Feature requirements (all page types)
- Component specifications
- Complete robots.txt configuration
- Launch criteria checklist
- 4-week development timeline

**Use this for:**

- Technical implementation details
- Development requirements
- Performance benchmarks
- SEO specifications
- Component API reference

---

## ✍️ 02-content/

**Content creation guidelines and affiliate program management**

### [content-guidelines.md](02-content/content-guidelines.md) (~8,000 words)

**Writing standards, SEO checklist, and article templates**

**Contents:**

- Writing tone & voice (helpful, data-driven, honest)
- 4 article structure templates:
    - "Best [Category]" money pages
    - "[Tool A] vs [Tool B]" comparisons
    - "How to [Do Something]" guides
    - SEO traffic builders (short form)
- Complete SEO pre-publish checklist (40+ items)
- Affiliate disclosure requirements (FTC compliant)
- Image guidelines (formats, optimization, alt text)
- Word count targets by article type
- Internal linking strategy
- Mobile-first writing principles
- AI crawler optimization for content
- Example: Perfect money page (fully annotated)
- Final publishing checklist

**Use this for:**

- Writing every article (consistency)
- SEO optimization before publishing
- Affiliate compliance
- Quality control

---

### [affiliate-programs.md](02-content/affiliate-programs.md) (~5,000 words)

**Affiliate program tracker and commission management**

**Contents:**

- Complete program tracker (Tier 1, 2, 3)
- Detailed info for 10+ programs:
    - Notion ($100-500, recurring)
    - ClickUp ($50-200, 20% recurring)
    - ConvertKit ($100 + 40% recurring for 24 months!)
    - WPEngine ($200 + $50/month lifetime!)
    - NordVPN ($50-100, 30% recurring)
    - ShareASale, CJ Affiliate, Amazon, etc.
- Application tracker and checklist
- Link management strategy (/go/program-name)
- Commission tracking process (weekly, monthly, quarterly)
- Payment details for each program
- Performance analytics setup
- Monthly report template

**Use this for:**

- Joining affiliate programs
- Tracking commissions
- Managing affiliate links
- Performance optimization

---

## 🎨 03-design/

**Visual design, accessibility, and mockups**

### [design-guidelines.md](03-design/design-guidelines.md)

**Brand colors, typography, and design system**

**Contents:**

- Color palette: Ocean Deep (#0F4C5C), Jet Stream (#38A3A5), Sky Light (#80CED7), Sand (#E0FBFC)
- Typography: Outfit (headings), Inter (body), JetBrains Mono (code)
- Glassmorphism design philosophy
- Mobile-first responsive breakpoints (375px, 768px, 1024px, 1280px)
- Component styling principles
- Button styles, card designs, form elements

**Use this for:**

- Consistent visual design across all pages
- Color palette reference
- Typography system
- Component styling
- Design decisions

---

### [accessibility-guidelines.md](03-design/accessibility-guidelines.md)

**WCAG 2.2 Level AA compliance requirements**

**Contents:**

- Color contrast requirements (4.5:1 for text, 3:1 for UI)
- Touch target sizes (minimum 44x44px for mobile)
- Keyboard navigation patterns
- Screen reader support (ARIA labels, roles)
- Semantic HTML requirements
- Focus indicators and visible states
- Skip navigation links
- Testing checklist with automated tools

**Use this for:**

- Ensuring WCAG 2.2 Level AA compliance
- Accessibility testing
- Mobile touch target requirements
- ARIA implementation

---

### [component-specifications.md](03-design/component-specifications.md) (~1,670 lines)

**Complete specifications for all UI components with production-ready code**

**Contents:**

- **8 Fully-Specified Components:**
    1. Affiliate Disclosure Box - FTC compliant, Ocean Deep styling
    2. Breadcrumbs - SEO navigation with Schema.org markup
    3. FAQ Section - Accordion with FAQ Schema for rich snippets
    4. Related Articles - 3-column responsive grid with hover effects
    5. Mobile Table of Contents - Floating button + glassmorphic overlay
    6. Comparison Table (Enhanced) - Mobile scroll optimization
    7. CTA Buttons (Affiliate) - 3 variants with conversion-optimized copy
    8. Article Metadata - Author, dates, reading time display

**Each component includes:**

- Purpose and SEO benefits
- Placement guidelines (desktop + mobile)
- Visual specifications (colors, spacing, typography)
- Complete Astro component code (copy-paste ready)
- CSS styling (mobile-first, responsive)
- Accessibility requirements (WCAG 2.2 AA)
- Usage examples with sample data

**Use this for:**

- Implementing Astro components
- Understanding component behavior
- Ensuring design consistency
- Copy-paste code during development

---

### mockups/

**Visual mockups and design concepts**

Files:

- `homepage_mockup.png` - Homepage design (desktop + mobile views)
- `article_mockup.png` - Money page design with comparison table

**Use this for:**

- Visual reference during development
- Design iteration
- Stakeholder presentations
- Component layout reference

---

### concepts/

**Design concepts and explorations**

Files:

- `homepage-concept.md` - Homepage design concept notes
- `article-page-concept.md` - Article page design concept notes

**Use this for:**

- Design ideation
- Concept documentation
- Feature planning

---

## ✅ 04-tasks/

**Task management and progress tracking**

### [README.md](04-tasks/README.md)

**Task dashboard and system overview**

**Contents:**

- Current sprint status
- Active tasks table
- Progress overview by month and category
- Quick navigation to all tasks
- Key metrics (velocity, time tracking, content progress)
- How to use the task system
- Task management conventions

**Use this for:**

- Daily work prioritization
- Tracking overall progress
- Understanding what needs to be done next
- Weekly/monthly reviews

---

### [task-template.md](04-tasks/task-template.md)

**Template for creating new tasks**

**Contents:**

- Task frontmatter (ID, priority, status, dates, hours)
- Goals and success criteria
- Dependencies tracking
- Subtask breakdown template
- Progress logging format
- Acceptance checklist

**Use this for:**

- Creating new tasks consistently
- Ensuring all task details are captured
- Copy-paste starting point

---

### Month 1 Tasks (01-month-1/)

**Organized by week for Month 1**

**Week 1 (Nov 20-26): Setup & Infrastructure**

- FJ-001: Set up Astro project with Tailwind CSS
- FJ-002: Create base layout components
- FJ-003: Design homepage template
- FJ-004: Create article page template
- FJ-005: Set up navigation and footer

**Week 2 (Nov 27 - Dec 3): First Content**

- FJ-006: Money page - Best Project Management Software
- FJ-007: Money page - Top VPNs for Digital Nomads
- FJ-008: Join first 3 affiliate programs
- FJ-009: Set up Google Search Console
- FJ-010: Configure PostHog analytics

**Week 3 (Dec 4-10): Content Blitz**

- FJ-011-013: 3 more money pages
- FJ-014: Supporting content batch 1 (5 articles)
- FJ-015: Internal linking optimization

**Week 4 (Dec 11-17): Launch**

- FJ-016-017: Final money pages (complete 10 total)
- FJ-018: Supporting content batch 2
- FJ-019: SEO traffic builders
- FJ-020: Comprehensive SEO audit
- FJ-021: Launch announcement

**Use this for:**

- Weekly sprint planning
- Understanding task sequence
- Tracking Month 1 progress

---

### Category Views (by-category/)

**Tasks organized by work stream instead of time**

**Available views:**

- `CONTENT.md` - All content creation tasks (60 articles)
- `TECHNICAL.md` - Infrastructure and development tasks
- `SEO.md` - Search optimization tasks
- `AFFILIATES.md` - Affiliate program management
- `DESIGN.md` - UI/UX and visual design tasks
- `ANALYTICS.md` - Tracking and measurement setup
- `MARKETING.md` - Promotion and outreach tasks

**Use this for:**

- Seeing all tasks in a specific area
- Understanding dependencies within a category
- Strategic planning by work stream

---

### Backlog (00-backlog/)

**Future ideas and enhancements**

**Files:**

- `content-ideas.md` - Future article topics
- `feature-requests.md` - Site features to add later
- `optimization-ideas.md` - Performance and UX improvements

**Use this for:**

- Capturing ideas without creating tasks yet
- Monthly review to promote items to active
- Long-term planning

---

### Completed (completed/)

**Archive of finished tasks**

Organized by month (e.g., `2025-11/`, `2025-12/`)

**Use this for:**

- Historical record
- Velocity analysis
- Learning from past tasks

---

## 🚀 Quick Start Guide

### For Task Management:

1. Review [`04-tasks/README.md`](04-tasks/README.md) - Task dashboard
2. Check current week overview in `04-tasks/01-month-1/week-X-XXXX/`
3. Pick next task from priority list
4. Update task progress as you work
5. Use category views for strategic planning

### For Business Strategy:

1. Read [`01-planning/master-plan.md`](01-planning/master-plan.md) - Complete business overview
2. Review [`02-content/affiliate-programs.md`](02-content/affiliate-programs.md) - Revenue sources

### For Development:

1. Read [`01-planning/prd.md`](01-planning/prd.md) - Technical requirements
2. Reference [`03-design/design-guidelines.md`](03-design/design-guidelines.md) - Visual system
3. Use [`03-design/component-specifications.md`](03-design/component-specifications.md) - Copy-paste Astro components
4. Check [`03-design/accessibility-guidelines.md`](03-design/accessibility-guidelines.md) - WCAG 2.2 compliance

### For Writing Content:

1. Read [`02-content/content-guidelines.md`](02-content/content-guidelines.md) - Complete writing guide
2. Use SEO checklist before publishing
3. Follow article templates

### For Design:

1. Review [`03-design/design-guidelines.md`](03-design/design-guidelines.md) - Brand system
2. Check [`03-design/accessibility-guidelines.md`](03-design/accessibility-guidelines.md) - Accessibility
3. Reference [`03-design/component-specifications.md`](03-design/component-specifications.md) - All UI components
4. View mockups in `03-design/mockups/` - Visual concepts

---

## 📊 Key Information At a Glance

### Business Model

- **Niche:** Remote Work & Productivity Tools
- **Revenue:** Affiliate commissions
- **Goal:** $2,000+/month by month 12
- **Traffic:** Organic SEO (primary), Pinterest, Reddit

### Tech Stack

- **Framework:** Astro (SSG)
- **Hosting:** Netlify
- **Styling:** Tailwind CSS
- **Content:** MDX files
- **Analytics:** PostHog + Google Analytics 4

### Strategy

- **Mobile-first:** Design for 375px first, scale up
- **AI-optimized:** Allow all AI crawlers (ChatGPT, Perplexity, Claude)
- **Performance:** Target 100/100 Lighthouse (mobile)
- **SEO:** Comprehensive Schema.org markup

### Content Plan

- **Month 1:** 10 money pages + 10 supporting articles
- **Month 2:** 15 supporting + 10 SEO builders
- **Month 3:** Complete 60-article backlog
- **Ongoing:** 2-4 new articles/month + updates

### Affiliate Programs (Priority)

1. Notion ($100-500/sale)
2. ClickUp ($50-200/sale + recurring)
3. ConvertKit ($100 + 40% recurring for 24 months!)
4. WPEngine ($200 + $50/month lifetime!)
5. NordVPN ($50-100/sale + recurring)

---

## 📝 Document Maintenance

### When to Update These Docs

**master-plan.md:**

- Monthly progress updates
- Revenue milestone achievements
- Strategy pivots
- New opportunities

**prd.md:**

- New feature requirements
- Technical changes
- Performance target updates

**content-guidelines.md:**

- New article templates
- SEO best practice updates
- Style guide changes

**affiliate-programs.md:**

- New programs added
- Commission rate changes
- Performance data updates
- Monthly/quarterly reviews

**component-specifications.md:**

- New components added
- Component API changes
- Accessibility improvements
- Design system updates

---

## 🔗 External Resources

**SEO Tools:**

- [Ahrefs](https://ahrefs.com) - Keyword research, backlink tracking
- [Google Search Console](https://search.google.com/search-console) - Index monitoring
- [Google Analytics 4](https://analytics.google.com) - Traffic analytics

**Design:**

- [Figma](https://figma.com) - Design mockups
- [Coolors](https://coolors.co) - Color palettes
- [Google Fonts](https://fonts.google.com) - Typography

**Affiliate Networks:**

- [Impact Radius](https://impact.com) - Notion, Webflow
- [PartnerStack](https://partnerstack.com) - ClickUp, Monday.com
- [ShareASale](https://shareasale.com) - Various merchants
- [CJ Affiliate](https://cj.com) - Commission Junction

---

## ❓ FAQ

### Where do I start?

Read [`master-plan.md`](01-planning/master-plan.md) first for the complete business overview, then [
`prd.md`](01-planning/prd.md) for technical details.

### How do I write an article?

Follow [`content-guidelines.md`](02-content/content-guidelines.md) for templates, SEO checklist, and standards.

### What affiliate programs should I join?

See [`affiliate-programs.md`](02-content/affiliate-programs.md) for prioritized list and application process.

### What are the design requirements?

Check [`design-guidelines.md`](03-design/design-guidelines.md) for brand colors, typography, and component styles.

### What's the tech stack?

Astro (SSG) + Netlify + Tailwind CSS. See [`prd.md`](01-planning/prd.md) for complete technical specifications.

### Where are the component specifications?

All UI components (8 total) with production-ready Astro code are in [
`component-specifications.md`](03-design/component-specifications.md). Each component includes visual specs,
accessibility requirements, and copy-paste code.

### Is the design phase complete?

Yes! All design documentation is complete:

- ✅ Design system (colors, typography, glassmorphism)
- ✅ Accessibility guidelines (WCAG 2.2 Level AA)
- ✅ 8 UI components fully specified with Astro code
- ✅ Homepage and article page mockups
- **Ready for development!**

---

**Last Updated:** November 20, 2025

**Planning phase complete. Design phase complete. Ready to build FloatJet!** 🚀
