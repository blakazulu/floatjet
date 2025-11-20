# FloatJet

**Affiliate marketing platform for remote work and productivity tools**

FloatJet is a mobile-first, SEO-optimized affiliate marketing website focused on helping remote workers and digital
nomads discover the best productivity tools, VPNs, project management software, and other essential tools for
location-independent work.

---

## 🎯 Project Overview

**Mission:** Help remote workers find the best tools while generating sustainable affiliate revenue

**Target Revenue:** $2,000+/month by month 12

**Niche:** Remote Work & Productivity Tools

- Project management software (Notion, ClickUp, Monday.com)
- VPN services for digital nomads
- Time tracking and productivity apps
- Cloud storage and collaboration tools
- Web hosting and email marketing platforms

**Traffic Strategy:**

- Primary: Organic SEO (Google, Bing)
- AI search engines: ChatGPT, Perplexity, Claude
- Secondary: Pinterest, Reddit, organic social

---

## 🚀 Tech Stack

- **Framework:** [Astro](https://astro.build) (Static Site Generation)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **Hosting:** [Netlify](https://netlify.com) (CI/CD, Edge Functions)
- **Content:** MDX files (Markdown + Components)
- **Analytics:** PostHog + Google Analytics 4
- **Domain:** floatjet.com

**Key Features:**

- ⚡ 100/100 Lighthouse scores (mobile-first)
- 🤖 AI crawler optimized (robots.txt configured)
- ♿ WCAG 2.2 Level AA accessible
- 📱 Mobile-first responsive design
- 🔍 Comprehensive SEO with Schema.org markup

---

## 📁 Project Structure

```
floatjet/
├── docs/                     # Complete project documentation
│   ├── summery.md            # Documentation index (start here!)
│   ├── 01-planning/          # Business strategy & technical specs
│   │   ├── master-plan.md    # Complete business plan
│   │   └── prd.md            # Product requirements document
│   ├── 02-content/           # Content guidelines & affiliate programs
│   │   ├── content-guidelines.md
│   │   └── affiliate-programs.md
│   ├── 03-design/            # Design system & accessibility
│   │   ├── design-guidelines.md
│   │   ├── accessibility-guidelines.md
│   │   ├── component-specifications.md
│   │   └── mockups/
│   └── 04-tasks/             # Task management system
│       ├── README.md         # Task dashboard
│       ├── 01-month-1/       # Month 1 tasks by week
│       ├── by-category/      # Tasks by work stream
│       ├── 00-backlog/       # Future ideas
│       └── completed/        # Archived completed tasks
├── src/                      # Astro source code (to be created)
├── public/                   # Static assets (to be created)
└── README.md                 # This file
```

---

## 📚 Documentation

**Start here:** [`docs/summery.md`](docs/summery.md)

The complete documentation is organized into four main areas:

### 01-planning/

- **[master-plan.md](docs/01-planning/master-plan.md)** (~7,500 words) - Complete business strategy, revenue
  projections, content roadmap, and month-by-month implementation timeline
- **[prd.md](docs/01-planning/prd.md)** (~6,000 words) - Technical specifications, performance requirements, SEO
  strategy, and component API reference

### 02-content/

- **[content-guidelines.md](docs/02-content/content-guidelines.md)** (~8,000 words) - Writing standards, 4 article
  templates, SEO checklist (40+ items), affiliate compliance
- **[affiliate-programs.md](docs/02-content/affiliate-programs.md)** (~5,000 words) - Complete affiliate program
  tracker, commission details, link management

### 03-design/

- **[design-guidelines.md](docs/03-design/design-guidelines.md)** - Brand colors, typography (Outfit, Inter, JetBrains
  Mono), glassmorphism design system
- **[accessibility-guidelines.md](docs/03-design/accessibility-guidelines.md)** - WCAG 2.2 Level AA compliance
  requirements
- **[component-specifications.md](docs/03-design/component-specifications.md)** (~1,670 lines) - Production-ready code
  for all 8 UI components

### 04-tasks/

- **[README.md](docs/04-tasks/README.md)** - Task dashboard with current sprint status, progress tracking, and key
  metrics
- **Task organization:** Time-based (month/week) + category-based (work stream) views
- **60+ detailed tasks:** Each 2-8 hours with subtasks, dependencies, and progress tracking

---

## 🎨 Design System

**Color Palette:**

- Ocean Deep: `#0F4C5C` (primary)
- Jet Stream: `#38A3A5` (accent)
- Sky Light: `#80CED7` (highlights)
- Sand: `#E0FBFC` (backgrounds)

**Typography:**

- Headings: Outfit (Google Fonts)
- Body: Inter (Google Fonts)
- Code: JetBrains Mono

**Design Philosophy:** Glassmorphism with subtle transparency, soft shadows, and modern rounded corners

**Breakpoints:** 375px (mobile), 768px (tablet), 1024px (desktop), 1280px (wide)

---

## ✅ Task Management

FloatJet uses a comprehensive markdown-based task management system located in [`docs/04-tasks/`](docs/04-tasks/).

### Quick Start

1. **View current tasks:** Check [`docs/04-tasks/README.md`](docs/04-tasks/README.md) for the task dashboard
2. **Current sprint:** See `docs/04-tasks/01-month-1/week-X-XXXX/WEEK-OVERVIEW.md` for weekly tasks
3. **Pick a task:** Choose from priority list (P0 = Critical, P1 = High)
4. **Update progress:** Edit task file to update status and log progress
5. **Category views:** Use `docs/04-tasks/by-category/` for strategic planning

### Task Organization

- **Time-based:** `01-month-1/` → `week-1-setup/` → `task-001-astro-setup.md`
- **Category-based:** `by-category/CONTENT.md`, `TECHNICAL.md`, `SEO.md`, etc.
- **Backlog:** `00-backlog/` for future ideas
- **Archive:** `completed/` for finished tasks

**Total planned tasks:** 60+ detailed tasks across 3 months

---

## 🚀 Quick Start (Development)

### Prerequisites

- Node.js 18+ and npm
- Git
- Text editor (VS Code recommended)

### Setup

```bash
# Clone the repository
git clone <repository-url> floatjet
cd floatjet

# Install dependencies (after FJ-001 task is complete)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Workflow

1. **Check tasks:** Review [`docs/04-tasks/README.md`](docs/04-tasks/README.md)
2. **Pick next task:** Follow priority order (P0 → P1 → P2)
3. **Follow specs:** Reference design and component specifications
4. **Update progress:** Log hours and mark subtasks complete
5. **Test:** Check Lighthouse scores, accessibility, mobile responsiveness
6. **Deploy:** Push to main branch (auto-deploys via Netlify)

---

## 📊 Project Status

**Current Phase:** Month 1, Week 1 - Infrastructure Setup

**Progress:**

- ✅ Planning phase complete (master-plan.md, prd.md)
- ✅ Design phase complete (design system, components, mockups)
- ✅ Task management system created (60+ detailed tasks)
- 🔄 Week 1 tasks: 0/5 complete
- 📝 Content: 0/60 articles published

**Immediate Goals (Week 1):**

- Set up Astro project with Tailwind CSS
- Create base layout components
- Design homepage and article templates
- Implement navigation and footer
- Configure all 8 UI components

**Month 1 Goals:**

- Launch FloatJet with 10 money pages
- Publish 10 supporting articles
- Join first 3-5 affiliate programs
- Set up analytics (PostHog, Google Analytics)
- Achieve 100/100 Lighthouse scores

---

## 📝 Content Plan

**Total Articles Planned:** 60 (across 3 months)

**Article Types:**

1. **Money Pages** (10 articles, 2,500-3,500 words)
    - "Best [Category]" roundups with affiliate links
    - Deep product comparisons with pros/cons
    - Examples: "Best Project Management Software 2025"

2. **Supporting Content** (30 articles, 1,500-2,000 words)
    - How-to guides and tutorials
    - Tool-specific deep dives
    - Productivity tips and workflows

3. **SEO Traffic Builders** (20 articles, 800-1,200 words)
    - Question-based content (People Also Ask)
    - Quick comparisons and definitions
    - Entry points to money pages

---

## 💰 Affiliate Programs (Priority)

**Tier 1 Programs:**

1. **Notion** - $100-500/sale via Impact Radius
2. **ClickUp** - $50-200/sale + 20% recurring via PartnerStack
3. **ConvertKit** - $100 + 40% recurring (24 months!) via FirstPromoter
4. **WPEngine** - $200 + $50/month lifetime via ShareASale
5. **NordVPN** - $50-100/sale + 30% recurring via Impact

**See:** [`docs/02-content/affiliate-programs.md`](docs/02-content/affiliate-programs.md) for complete program tracker
and commission details

---

## 🔍 SEO Strategy

**Traditional Search (Google, Bing):**

- Comprehensive keyword research (Ahrefs, SEMrush)
- Schema.org markup (Article, Product, FAQ, BreadcrumbList)
- Mobile-first indexing optimization
- Internal linking strategy
- Technical SEO (sitemap, robots.txt)

**AI Search Optimization:**

- Allow all AI crawlers (ChatGPT, Perplexity, Claude, Gemini)
- Structured content with clear headings
- Data-driven recommendations with evidence
- FAQ sections for natural language queries
- robots.txt configured for AI crawler access

**Performance Targets:**

- ⚡ 100/100 Lighthouse Performance (mobile)
- ♿ 100/100 Lighthouse Accessibility
- 🎯 100/100 Lighthouse Best Practices
- 🔍 100/100 Lighthouse SEO

---

## 🤝 Contributing

This is currently a solo project, but the comprehensive documentation makes it easy to onboard collaborators.

**If you're joining the project:**

1. Read [`docs/summery.md`](docs/summery.md) - Complete documentation index
2. Review [`docs/01-planning/master-plan.md`](docs/01-planning/master-plan.md) - Business strategy
3. Check [`docs/04-tasks/README.md`](docs/04-tasks/README.md) - Current tasks and priorities
4. Follow design guidelines in [`docs/03-design/`](docs/03-design/)
5. Use content templates in [`docs/02-content/content-guidelines.md`](docs/02-content/content-guidelines.md)

---

## 📄 License

Copyright (c) 2025 FloatJet. All rights reserved.

This is proprietary commercial software. Unauthorized use, copying, modification, or distribution is strictly
prohibited. See [LICENSE](LICENSE) for full terms.

---

**Last Updated:** November 20, 2025

**Status:** Planning complete, design complete, ready to build! 🚀

**Next Steps:** Complete Week 1 tasks (FJ-001 through FJ-005) to establish technical foundation
