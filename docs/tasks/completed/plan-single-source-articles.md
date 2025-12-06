# Plan: Single Source of Truth for Article Data

## Goal

Create a centralized data file for all article metadata so that both article pages and bento grids pull from the same source. This eliminates data duplication and ensures consistency across the site.

## Status: ✅ COMPLETE

All phases implemented successfully. Build passes with 139 pages.

## Previous State (Before Implementation)

- **Article pages**: Each `.astro` file had hardcoded metadata (title, description, image, etc.)
- **Bento grids**: 8 files had separate hardcoded arrays with article data

## Current State (After Implementation)

- **Single source of truth**: `src/data/articles.ts` contains all 102 articles
- **Article pages**: Import metadata via `getArticleBySlug()`
- **Bento grids**: Import article arrays and transform for display

## Problem Solved

- Images and metadata can no longer get out of sync
- Updating an article requires only ONE change in `src/data/articles.ts`
- Consistent data across all pages

---

## Implementation Steps

### Phase 1: Create Data File ✅ COMPLETED

- [X] Create `src/data/articles.ts` with TypeScript interfaces
- [X] Define `Article` type with all required fields
- [X] Export arrays by section: `toolsArticles`, `gearArticles`, `guidesArticles`, `blogArticles`
- [X] Export helper functions: `getArticleBySlug()`, `getArticlesByCategory()`, `getArticlePath()`, etc.

### Phase 2: Update Bento Grid Pages (Main) ✅ COMPLETED

- [X] Update `src/pages/tools.astro` to import from data file
- [X] Update `src/pages/gear.astro` to import from data file
- [X] Update `src/pages/guides.astro` to import from data file
- [X] Update `src/pages/blog.astro` to import from data file

### Phase 3: Update Bento Grid Pages (Dynamic) ✅ COMPLETED

- [X] Update `src/pages/tools/[category].astro` to import from data file
- [X] Update `src/pages/gear/[category].astro` to import from data file
- [X] Update `src/pages/guides/[category].astro` to import from data file
- [X] Update `src/pages/blog/[category].astro` to import from data file

### Phase 4: Update Article Pages ✅ COMPLETED

- [X] Update all 28 `src/pages/tools/*.astro` articles to import metadata
- [X] Update all 23 `src/pages/gear/*.astro` articles to import metadata
- [X] Update all 35 `src/pages/guides/*.astro` articles to import metadata
- [X] Update all 16 `src/pages/blog/*.astro` articles to import metadata

### Phase 5: Verification & Cleanup ✅ COMPLETED

- [X] Run build to verify no errors
- [X] Spot check pages to ensure images/data display correctly
- [X] Remove any orphaned hardcoded data
- [X] Update `docs/article-summey.md` if needed (optional - data file is now source of truth)

---

## Data Structure

```typescript
// src/data/articles.ts

export interface Article {
  slug: string;                    // URL slug (e.g., "best-vpn-digital-nomads")
  title: string;                   // Full title
  description: string;             // Meta description
  section: "tools" | "gear" | "guides" | "blog";
  category: string;                // Subcategory (e.g., "VPN", "Finance")
  authorSlug: string;              // Author identifier
  pubDate: string;                 // ISO date string
  readingTime: number;             // Minutes
  image: string;                   // Hero image path
  imageAlt: string;                // Alt text
  featured?: boolean;              // For bento grid featuring
  wordCount?: number;              // Optional
}

export const toolsArticles: Article[] = [...];
export const gearArticles: Article[] = [...];
export const guidesArticles: Article[] = [...];
export const blogArticles: Article[] = [...];

export const allArticles: Article[] = [
  ...toolsArticles,
  ...gearArticles,
  ...guidesArticles,
  ...blogArticles,
];

// Helper functions
export function getArticleBySlug(slug: string): Article | undefined;
export function getArticlesBySection(section: string): Article[];
export function getArticlesByCategory(section: string, category: string): Article[];
```

---

## Files to Modify

| File                                  | Action                    |
| ------------------------------------- | ------------------------- |
| `src/data/articles.ts`                | CREATE - new data file    |
| `src/pages/tools.astro`               | UPDATE - import from data |
| `src/pages/gear.astro`                | UPDATE - import from data |
| `src/pages/guides.astro`              | UPDATE - import from data |
| `src/pages/blog.astro`                | UPDATE - import from data |
| `src/pages/tools/[category].astro`    | UPDATE - import from data |
| `src/pages/gear/[category].astro`     | UPDATE - import from data |
| `src/pages/guides/[category].astro`   | UPDATE - import from data |
| `src/pages/blog/[category].astro`     | UPDATE - import from data |
| `src/pages/tools/*.astro` (28 files)  | UPDATE - import metadata  |
| `src/pages/gear/*.astro` (23 files)   | UPDATE - import metadata  |
| `src/pages/guides/*.astro` (35 files) | UPDATE - import metadata  |
| `src/pages/blog/*.astro` (16 files)   | UPDATE - import metadata  |

**Total: 1 new file + 110 updated files**

---

## Risks & Mitigations

| Risk                          | Mitigation                               |
| ----------------------------- | ---------------------------------------- |
| Build errors from typos       | Run build after each phase               |
| Missing articles in data file | Cross-reference with `article-summey.md` |
| Breaking existing pages       | Test locally before commit               |

---

## Success Criteria

- [X] All 102 articles render correctly
- [X] All bento grids show correct images matching articles
- [X] Single change to data file updates everywhere
- [X] Build passes with no errors (139 pages built)
- [X] No SEO impact (same HTML output)

---

## Progress Log

| Date       | Phase   | Status      | Notes                                                                                          |
| ---------- | ------- | ----------- | ---------------------------------------------------------------------------------------------- |
| 2025-12-06 | Phase 1 | ✅ Completed | Created `src/data/articles.ts` with 102 articles, TypeScript interfaces, and helper functions  |
| 2025-12-06 | Phase 2 | ✅ Completed | Updated all 4 main bento pages to import from data file                                        |
| 2025-12-06 | Phase 3 | ✅ Completed | Updated all 4 dynamic `[category].astro` pages, removed old hardcoded arrays                   |
| 2025-12-07 | Phase 4 | ✅ Completed | Updated all 102 article pages via Python script; fixed 14 files with broken multi-line imports |
| 2025-12-07 | Phase 5 | ✅ Completed | Build succeeded (139 pages), all pages render correctly                                        |

---

## What Was Created

### `src/data/articles.ts`

- **TypeScript interfaces**: `Section` type, `Article` interface
- **Article arrays**: `blogArticles` (16), `gearArticles` (23), `guidesArticles` (35), `toolsArticles` (28)
- **Helper functions**:
  - `getArticleBySlug(slug, section?)` - Find article by slug
  - `getArticlesBySection(section)` - Get all articles for a section
  - `getArticlesByCategory(section, category)` - Filter by category
  - `getFeaturedArticles(section)` - Get featured articles
  - `getCategoriesForSection(section)` - Get unique categories
  - `getArticlePath(article)` - Generate URL path

### Bento Grid Updates

All bento pages now:

1. Import article arrays from `../../data/articles` (or `../data/articles` for main pages)
2. Use `getArticlePath()` for generating hrefs
3. Transform articles with `.map()` to match existing grid data structure
4. Use lowercase `filterKey` values to match article categories

### Article Page Updates

All 102 article pages now:

1. Import `getArticleBySlug` from `../../data/articles`
2. Destructure metadata: `const { title, description, authorSlug, readingTime, image, imageAlt } = article;`
3. Convert pubDate: `const pubDate = new Date(article.pubDate);`
4. Page-specific content (headings, FAQs, comparison tables) remains in individual files

### Scripts Created

- `scripts/update-article-imports.py` - Automated transformation of 102 article files

---

## How to Update Article Metadata

To change any article's title, description, image, etc.:

1. Open `src/data/articles.ts`
2. Find the article by slug in the appropriate array (`toolsArticles`, `gearArticles`, etc.)
3. Update the field(s)
4. Run build - changes will propagate to both the article page AND bento grids

---

*Created: 2025-12-06*
*Completed: 2025-12-07*
