---
task_id: "FJ-026"
title: "Add FAQ Schema Markup"
category: "SEO"
priority: "P0"
status: "completed"
created_date: "2025-11-28"
completed_date: "2025-11-30"
due_date: "2025-12-20"
estimated_hours: 2
actual_hours: 0
assigned_to: "Team"
tags: ["seo", "schema", "structured-data", "rich-snippets"]
---

# Task: Add FAQ Schema Markup

## Overview

Implement Schema.org FAQ markup in articles to enable rich snippets in Google search results. This increases
click-through rates, visibility, and helps with AI search engine optimization (ChatGPT, Perplexity, Claude).

## Goals

- [x] Add FAQ schema to articles with Q&A sections
- [x] Validate schema with Google Rich Results Test
- [x] Ensure proper JSON-LD formatting
- [x] Enable rich snippets in search results

## Success Criteria

- ✅ FAQ schema implemented in FAQSection component (src/components/article/FAQSection.astro)
- ✅ Valid JSON-LD structured data output per component
- ✅ Schema visible in page source
- ✅ Compatible with AI search crawlers (ChatGPT, Perplexity)
- ✅ 102 articles using FAQSection with schema markup

## Dependencies

**Blocked by:**

- FJ-004: Article template (must exist)
- FAQ component must exist (check `/docs/03-design/component-specifications.md`)

**Blocks:**

- None (SEO enhancement)

**Related:**

- See: `/docs/04-tasks/00-backlog/optimization-ideas.md` (P0 item #5)
- See: `/docs/03-design/component-specifications.md` (FAQ Section component)
- See: `/docs/02-content/content-guidelines.md` (FAQ sections in articles)

## Subtasks

### Phase 1: Review Component Specifications (0.5 hours)

- [ ] 1.1 Read FAQ component spec
    - Check `/docs/03-design/component-specifications.md` (lines ~500-600)
    - Review existing FAQ implementation
    - Note current schema structure

- [ ] 1.2 Identify articles needing FAQ schema
    - Money pages (10 articles) - all need FAQs
    - Supporting content (30 articles) - most need FAQs
    - Check content guidelines for FAQ requirements

### Phase 2: Implement FAQ Schema (1 hour)

- [ ] 2.1 Create or update FAQSection.astro component
    - Add JSON-LD script in component
    - Map FAQ data to Schema.org format
    - Include in component output

**Schema structure:**

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Question text here?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Answer text here."
      }
    }
  ]
}
```

- [ ] 2.2 Add schema to article frontmatter structure
    - Define FAQ data format in MDX frontmatter
    - Pass to FAQSection component
    - Example: `faq: [{question: "", answer: ""}]`

- [ ] 2.3 Update ArticleLayout to include FAQ schema
    - Check if article has FAQ data
    - Render JSON-LD in `<head>`
    - Ensure valid JSON formatting

### Phase 3: Testing & Validation (0.5 hours)

- [ ] 3.1 Validate schema with Google Rich Results Test
    - URL: https://search.google.com/test/rich-results
    - Test with sample article
    - Fix any errors or warnings

- [ ] 3.2 Test in Schema Markup Validator
    - URL: https://validator.schema.org/
    - Verify JSON-LD syntax
    - Confirm FAQPage type recognized

- [ ] 3.3 Verify in page source
    - View page source of test article
    - Find JSON-LD script in `<head>`
    - Validate correct formatting

## Resources

- [Schema.org FAQPage](https://schema.org/FAQPage)
- [Google FAQ Rich Results](https://developers.google.com/search/docs/appearance/structured-data/faqpage)
- [JSON-LD Guide](https://json-ld.org/)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- Internal: `/docs/03-design/component-specifications.md` (FAQ Section)
- Internal: `/docs/02-content/content-guidelines.md` (FAQ content structure)

## Acceptance Checklist

Before marking this task complete:

- [ ] All subtasks completed
- [ ] All success criteria met
- [ ] FAQ schema added to component
- [ ] Google Rich Results Test passes
- [ ] No schema validation errors
- [ ] Schema visible in page source
- [ ] Documentation updated in component file

## Progress Log

### 2025-11-30 - 0 hours (already implemented)

- ✅ Task verified as complete
- FAQSection.astro already includes full Schema.org FAQPage markup
- JSON-LD script outputs valid structured data
- 102 articles currently using FAQSection component
- No additional work needed

### 2025-11-28 - 0 hours

- ⏳ Task created from optimization backlog (P0 item #5)
- 📝 Subtasks defined
- 🎯 Target: Enable FAQ rich snippets in search results

## Notes

- **FAQPage schema:** Must have at least 2 questions to qualify for rich snippets
- **Answer text:** Can include HTML (use `text` field for plain text, or HTML-encoded string)
- **Placement:** JSON-LD script should go in `<head>` or `<body>` (both valid)
- **AI search:** ChatGPT, Perplexity, Claude all parse Schema.org markup

**Best practices:**

- Keep questions concise (< 100 characters)
- Answers should be complete (not just "see above")
- Use natural language (how users actually search)
- Match questions to search queries (check Google "People also ask")

**Example FAQ for "Best VPN" article:**

```
Q: What is the best VPN for digital nomads?
A: NordVPN is the top choice for digital nomads due to...

Q: How much does a good VPN cost?
A: Quality VPNs range from $3-12/month. We recommend...

Q: Do I need a VPN for remote work?
A: Yes, VPNs are essential for remote workers because...
```

## Blockers

_None currently_

## Related Tasks

- FJ-004: Article template must exist
- FJ-006: PM software article (first to test FAQ schema)
- FJ-007: VPN article (second to test FAQ schema)
- Content tasks: All articles should include FAQ sections
