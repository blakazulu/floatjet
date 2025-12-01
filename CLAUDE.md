# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project: FloatJet

Affiliate marketing platform for remote work and productivity tools. Mobile-first, SEO-optimized website built with Astro SSG, hosted on Netlify.

**Mission:** Help remote workers find the best tools while generating sustainable affiliate revenue ($2,000+/month by month 12)

## Critical Constraints

- **only commit to git after the user approved** (per user instructions)
- **Always follow accessibility-guidelines.md** (WCAG 2.2 Level AA compliance)
- **Always follow design-guidelines.md** (color palette, typography, glassmorphism)
- **Always follow all guidelines in the docs/ folder**

## Project Status & Development Flow

**Current Phase:** Month 1, Week 1 - Infrastructure Setup (not yet started)

**Workflow:**
1. Check current tasks at `docs/04-tasks/README.md` (task dashboard)
2. View current week at `docs/04-tasks/01-month-1/week-X-XXXX/WEEK-OVERVIEW.md`
3. Pick next task by priority (P0 = Critical, P1 = High)
4. Follow task file subtasks and update progress as you work
5. Mark subtasks complete with `[x]` and log hours in Progress Log section

**Next immediate task:** FJ-001 (Set up Astro project) - See `docs/04-tasks/01-month-1/week-1-setup/task-001-astro-setup.md`

## Tech Stack

- **Framework:** Astro 4.x (Static Site Generation)
- **Styling:** Tailwind CSS with custom theme
- **TypeScript:** Strict mode enabled
- **Hosting:** Netlify (auto-deploy on git push)
- **Domain:** floatjet.com (already configured)
- **Content:** MDX files (Markdown + Components)
- **Analytics:** PostHog + Google Analytics 4

## Development Commands

Once project is initialized (after FJ-001 is complete):

```bash
# Start development server
npm run dev

# Preview production build (DO NOT RUN BUILD - per user constraints)
npm run preview
```

**Important:** Never run `npm run build` - builds are handled by Netlify CI/CD.

## Architecture Overview

### Mobile-First Philosophy

**CRITICAL:** Design and build for mobile (375px) FIRST, then enhance for larger screens.

- Default styles = mobile (no media queries)
- Use `sm:`, `md:`, `lg:`, `xl:` for progressive enhancement
- NEVER use `max-width` media queries (desktop-first anti-pattern)
- Test on 375px viewport first (iPhone SE)
- Target: 100/100 Lighthouse Performance on mobile

### Project Structure (To Be Created)

```
floatjet/
├── src/
│   ├── components/
│   │   ├── ui/              # Reusable UI components (8 specified)
│   │   ├── sections/        # Page sections
│   │   └── layout/          # Layout components
│   ├── layouts/             # Base layouts
│   ├── content/
│   │   ├── articles/        # MDX articles (60 planned)
│   │   └── pages/           # Static pages
│   ├── pages/               # Astro pages (routes)
│   └── styles/              # Global styles
├── public/                  # Static assets
└── docs/                    # Complete documentation (existing)
```

### Required Components (8 Total)

Reference: `docs/03-design/component-specifications.md` (~1,670 lines of production-ready code)

1. **Affiliate Disclosure Box** - FTC compliant, Ocean Deep styling
2. **Breadcrumbs** - SEO navigation with Schema.org BreadcrumbList
3. **FAQ Section** - Accordion with FAQ Schema for rich snippets
4. **Related Articles** - 3-column responsive grid
5. **Mobile Table of Contents** - Floating button + glassmorphic overlay
6. **Comparison Table** - Mobile horizontal scroll optimization
7. **CTA Buttons** - 3 variants (Primary, Affiliate, Secondary)
8. **Article Metadata** - Author, dates, reading time

**Each component includes:**
- Complete Astro component code (copy-paste ready)
- Mobile-first CSS
- WCAG 2.2 AA accessibility
- Schema.org markup where applicable

## Design System

**Color Palette:**
- Ocean Deep: `#0F4C5C` (primary)
- Jet Stream: `#38A3A5` (accent)
- Sky Light: `#80CED7` (highlights)
- Sand: `#E0FBFC` (backgrounds)
- Alert: `#C1121F` (errors/warnings)

**Typography:**
- Headings: Outfit (Google Fonts)
- Body: Inter (Google Fonts)
- Code: JetBrains Mono

**Breakpoints:**
- `sm:` 640px (tablets)
- `md:` 768px (small desktop)
- `lg:` 1024px (desktop)
- `xl:` 1280px (wide desktop)

**Design Philosophy:** Glassmorphism with subtle transparency, soft shadows, rounded corners

## SEO & Performance Requirements

### Performance Targets (All Pages)
- ⚡ Lighthouse Performance: 100/100 (mobile)
- ♿ Lighthouse Accessibility: 100/100
- 🎯 Lighthouse Best Practices: 100/100
- 🔍 Lighthouse SEO: 100/100
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- Total Page Weight: <500KB (including images)

### SEO Requirements
- Schema.org markup (Article, Product, FAQ, BreadcrumbList, HowTo)
- Semantic HTML (`<article>`, `<section>`, `<header>`, `<nav>`)
- Proper heading hierarchy (H1 → H2 → H3)
- Meta descriptions (150-160 characters)
- Open Graph tags for social sharing
- robots.txt allowing all AI crawlers (ChatGPT, Perplexity, Claude, etc.)

### AI Crawler Optimization
- Allow all AI bots in robots.txt (ChatGPT-User, GPTBot, PerplexityBot, Claude-Web, etc.)
- Clean semantic HTML (Astro SSG = zero JS by default)
- Structured content with logical headings
- FAQ sections for natural language queries
- Fast loading (<3s Time to Interactive)

## Content Guidelines

**3 Article Types:**

1. **Money Pages** (10 articles, 2,500-3,500 words)
   - "Best [Category]" roundups with affiliate links
   - Deep product comparisons
   - High conversion focus

2. **Supporting Content** (30 articles, 1,500-2,000 words)
   - How-to guides
   - Tool-specific deep dives
   - Productivity workflows

3. **SEO Traffic Builders** (20 articles, 800-1,200 words)
   - Question-based content
   - Quick comparisons
   - Entry points to money pages

**Templates & SEO Checklist:**
- Complete writing templates: `docs/02-content/content-guidelines.md` (~8,000 words)
- 40+ item SEO pre-publish checklist
- FTC-compliant affiliate disclosure requirements
- Internal linking strategy

## Affiliate Programs

**Priority programs** (see `docs/02-content/affiliate-programs.md`):
- Notion ($100-500/sale via Impact Radius)
- ClickUp ($50-200/sale + 20% recurring)
- ConvertKit ($100 + 40% recurring for 24 months)
- WPEngine ($200 + $50/month lifetime)
- NordVPN ($50-100/sale + 30% recurring)

**Link format:** `/go/program-name` (redirect setup TBD)

## Task Management System

**Location:** `docs/04-tasks/`

**Organization:**
- Time-based: `01-month-1/week-1-setup/task-001-astro-setup.md`
- Category-based: `by-category/CONTENT.md`, `TECHNICAL.md`, etc.
- Backlog: `00-backlog/` (future ideas, not yet tasks)
- Archive: `completed/` (organized by month)

**Task Format (Frontmatter):**
```yaml
task_id: "FJ-XXX"
title: "Task name"
category: "Technical|Content|SEO|Affiliates|Design|Analytics|Marketing"
priority: "P0|P1|P2|P3"
status: "not-started|in-progress|blocked|review|completed|archived"
estimated_hours: X
actual_hours: X
```

**Progress Tracking:**
- Update task status in frontmatter
- Check off subtasks `[x]`
- Log progress with dated entries in Progress Log section
- Move to `completed/` when done

**Current Sprint:** Month 1, Week 1 (Nov 20-26)
- FJ-001: Astro setup (P0, 4h)
- FJ-002: Base layouts (P0, 3h)
- FJ-003: Homepage template (P1, 4h)
- FJ-004: Article template (P0, 5h)
- FJ-005: Navigation/footer (P1, 3h)

## Documentation Structure

**Start here:** `docs/summery.md` - Complete documentation index

**Key documents:**
1. **`docs/01-planning/master-plan.md`** (~7,500 words)
   - Complete business strategy
   - Revenue projections
   - Content roadmap (60 articles)
   - Month-by-month timeline

2. **`docs/01-planning/prd.md`** (~6,000 words)
   - Technical specifications
   - Performance requirements
   - Component API reference
   - Complete robots.txt configuration

3. **`docs/02-content/content-guidelines.md`** (~8,000 words)
   - 4 article templates
   - 40+ item SEO checklist
   - Affiliate disclosure requirements
   - Writing standards

4. **`docs/03-design/component-specifications.md`** (~1,670 lines)
   - Production-ready Astro code for all 8 components
   - Visual specifications
   - Accessibility requirements
   - Usage examples

5. **`docs/04-tasks/README.md`**
   - Task dashboard
   - Current sprint status
   - Progress tracking

## Important Patterns

### When Writing Components
1. Reference `docs/03-design/component-specifications.md` first (copy-paste ready code)
2. Follow mobile-first approach (default = 375px)
3. Include WCAG 2.2 AA compliance (contrast, touch targets, keyboard nav)
4. Add Schema.org markup where applicable
5. Use Tailwind custom theme colors (`bg-ocean-deep`, `text-jet-stream`)

### When Writing Content
1. Use templates from `docs/02-content/content-guidelines.md`
2. Follow SEO checklist before publishing
3. Include required affiliate disclosure
4. Add internal links to money pages
5. Optimize for both traditional search and AI search

### When Creating Tasks
1. Use `docs/04-tasks/task-template.md` as starting point
2. Break tasks into 2-8 hour chunks
3. Define clear success criteria
4. Track dependencies (blocked by / blocks)
5. Log progress in task file as you work

## Deployment

**Automatic:** Git push → Netlify auto-deploy → floatjet.com

**MCP Integration:** Netlify MCP server available for deployment management

**No manual deployment needed** - Netlify handles builds, CDN, SSL, etc.

## License

**Proprietary.** All rights reserved. See LICENSE file.

Unauthorized use, copying, modification, or distribution is strictly prohibited.

## Key Files Reference

- **README.md** - Project overview and quick start
- **docs/summery.md** - Documentation index (start here for deep dives)
- **docs/04-tasks/README.md** - Task dashboard (what to work on)
- **docs/03-design/component-specifications.md** - Copy-paste component code
- **docs/02-content/content-guidelines.md** - Writing standards
- **docs/01-planning/prd.md** - Technical requirements
- after finishing a task - always update it's progress in the task and in completed folder in docs
- after each task - show me the git commit message and i will commit it
- never run dev server - ask me to run it
- after finishing a task - ask me to review and test it - once tested - only then mark it as completed and move it to completed folder then give me the git message
- always use Astro's Image component for better performance
- when creating a new page - look at docs/new-page-creation.md for correct way to do it
- when creating a new article-card please refer to docs/03-design/article-card-guide.md