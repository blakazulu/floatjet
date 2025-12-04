# Generative Engine Optimization (GEO) Guide

GEO is the practice of optimizing content to appear in AI-generated answers from tools like ChatGPT, Perplexity, Claude, Google's AI Overviews, and Bing Copilot.

## SEO vs GEO

| SEO | GEO |
|-----|-----|
| Optimizes for search engine rankings | Optimizes for AI citation/inclusion |
| Focus on keywords and backlinks | Focus on being a quotable, authoritative source |
| Users click through to your site | AI may summarize your content without a click |
| Blue link competition | Citation competition |

## Current GEO Status

### Already Implemented

- **robots.txt** allows all AI crawlers (GPTBot, ChatGPT-User, PerplexityBot, Claude-Web, Google-Extended)
- **llms.txt** file at `/public/llms.txt` — tells AI crawlers what the site is about and best content to cite
- **"Best For" labels** in article headings (e.g., "Best Overall," "Best Budget") across 36+ articles
- **FAQ Schema** with FAQPage structured data on articles
- **Article Schema** with proper metadata (author, dates, publisher)
- **Semantic HTML** throughout (`<article>`, `<section>`, `<header>`, `<nav>`)
- **Clean Astro SSG** output (minimal/zero JS = easy for AI to parse)
- **Breadcrumb Schema** for navigation context

---

## Recommended Improvements (Sorted by Ease of Implementation)

### 1. Statistics with Sources

**Effort:** Ongoing, 5 min per stat | **Impact:** Medium

No code changes. Just update content when writing/editing articles.

**Current (weak):**
> "Many remote workers use VPNs for security."

**Improved (strong):**
> "According to a 2024 Statista report, 31% of internet users worldwide have used a VPN in the past month."

**Guidelines:**
- Include year of statistic
- Name the source
- Link to original when possible
- Use specific numbers, not vague terms

---

### 2. TL;DR / Key Takeaways Component

**Effort:** 2 hours (component) + 10 min per article | **Impact:** High

Create one reusable component, then add to articles.

**Implementation:**
- Create `KeyTakeaways.astro` component
- Place after hero image, before main content
- Keep to 3-5 bullet points

**Example structure:**
```astro
<aside class="key-takeaways">
  <h2>Key Takeaways</h2>
  <ul>
    <li>NordVPN is best for most digital nomads due to speed and server coverage</li>
    <li>ExpressVPN offers the best streaming unblocking</li>
    <li>Surfshark is the budget pick with unlimited devices</li>
  </ul>
</aside>
```

**Why it works:** AI often pulls the first clear summary it finds.

---

### 3. Definition Boxes

**Effort:** 2 hours (component) + 5 min per definition | **Impact:** Medium

Create a reusable component for term definitions.

**Example:**
```html
<dl class="definition">
  <dt>VPN Kill Switch</dt>
  <dd>A security feature that automatically disconnects your internet if the VPN connection drops, preventing your real IP address from being exposed.</dd>
</dl>
```

**Optional Schema:**
```json
{
  "@type": "DefinedTerm",
  "name": "VPN Kill Switch",
  "description": "A security feature that..."
}
```

---

### 4. HowTo Schema on Guide Pages

**Effort:** 3-4 hours | **Impact:** Medium

Add HowTo schema to step-by-step guides. Requires modifying ArticleLayout or creating a GuideLayout.

**Pages to add HowTo schema:**
- `/guides/how-to-setup-vpn-all-devices`
- `/guides/secure-home-wifi-network`
- `/guides/two-factor-authentication-guide`
- `/tools/migrate-website-without-downtime`
- Any page with numbered steps

**Schema structure:**
```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Set Up a VPN on All Your Devices",
  "description": "Step-by-step guide to installing and configuring a VPN...",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Choose a VPN provider",
      "text": "Select a reputable VPN service like NordVPN or ExpressVPN..."
    },
    {
      "@type": "HowToStep",
      "name": "Download the app",
      "text": "Visit your VPN provider's website and download..."
    }
  ]
}
```

---

### 5. Enhanced Author Expertise Signals

**Effort:** 4-5 hours | **Impact:** Medium

Most complex change. Requires new pages and schema updates.

**Current:** Basic author name and link

**Improvements:**
- Add author bio with credentials on each article
- Create dedicated author pages (`/authors/name`)
- Include years of experience, relevant background
- Add author schema with `sameAs` links to LinkedIn, Twitter

**Author schema enhancement:**
```json
{
  "@type": "Person",
  "name": "Author Name",
  "jobTitle": "Remote Work Consultant",
  "description": "10+ years helping teams transition to remote work",
  "sameAs": [
    "https://linkedin.com/in/author",
    "https://twitter.com/author"
  ]
}
```

---

## Quick Reference: Implementation Order

| # | Task | Effort | Impact | Status |
|---|------|--------|--------|--------|
| ~~1~~ | ~~Add llms.txt~~ | ~~10 min~~ | ~~High~~ | Done |
| ~~2~~ | ~~Add "Best For" labels~~ | ~~30 min/article~~ | ~~Medium~~ | Done |
| 1 | Add statistics with sources | Ongoing | Medium | Todo |
| 2 | KeyTakeaways component | 2 hours | High | Todo |
| 3 | Definition boxes component | 2 hours | Medium | Todo |
| 4 | HowTo schema for guides | 3-4 hours | Medium | Todo |
| 5 | Author pages & enhanced schema | 4-5 hours | Medium | Todo |

---

## Measuring GEO Success

Unlike SEO, GEO is harder to measure directly. Approaches:

1. **Manual testing:** Ask AI tools questions your content answers, see if you're cited
2. **Referral tracking:** Monitor traffic from `chat.openai.com`, `perplexity.ai`, etc.
3. **Brand mentions:** Search for "FloatJet" in AI responses
4. **Rich snippet appearance:** Check Google AI Overviews for your topics

---

## Resources

- [llmstxt.org](https://llmstxt.org/) - llms.txt standard
- [Google Search Central - AI and Search](https://developers.google.com/search/docs/crawling-indexing/google-extended)
- [Perplexity Pages](https://www.perplexity.ai/) - See how AI summarizes content
- [Schema.org](https://schema.org/) - Structured data reference

---

## Notes

- GEO and SEO are complementary, not competing strategies
- Good GEO often improves SEO (structured content, clear answers)
- AI crawlers generally respect robots.txt (with some exceptions)
- Zero-click answers may reduce traffic but increase brand visibility
