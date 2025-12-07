# FloatJet New Article Creation Guide

> Complete step-by-step process for creating new articles on FloatJet.

---

## Quick Reference

| Step | Action                           | Tool/File                                     |
| ---- | -------------------------------- | --------------------------------------------- |
| 1    | Choose writer based on topic     | `docs/writing/writers-summery.md`           |
| 2    | Write article content            | `docs/writing/writing-style-guide.md`       |
| 3    | Check AI detection               | `node scripts/zerogpt-detect.js`            |
| 4    | Update style guide with patterns | `docs/writing/writing-style-guide.md`       |
| 5    | Repeat until <4% AI detected     | -                                             |
| 6    | Find unique hero image           | Unsplash + check `src/data/articles.ts`     |
| 7    | Download hero image              | `node scripts/download-unsplash-images.cjs` |
| 8    | Optimize image                   | `node scripts/optimize-images.cjs`          |
| 9    | Create article page              | Use existing article as template              |
| 10   | Ensure SEO/AEO/GEO compliance    | Match existing articles                       |
| 11   | Update articles metadata         | `src/data/articles.ts`                      |
| 12   | Regenerate article summary       | `npm run docs:articles`                     |

---

## Step 1: Choose the Writer

Based on the article topic, select the appropriate writer from `docs/writing/writers-summery.md`:

| Writer                   | Slug               | Categories                                    |
| ------------------------ | ------------------ | --------------------------------------------- |
| **Marcus Chen**    | `marcus-chen`    | SaaS, Hosting, Computers, Audio, Accessories  |
| **Sarah Mitchell** | `sarah-mitchell` | Communication, Productivity, Setup, Furniture |
| **Daniel Brooks**  | `daniel-brooks`  | Travel, Finance, Security, VPN                |

### Writer Assignment Matrix

| Section | Sub-Category  | Writer                 |
| ------- | ------------- | ---------------------- |
| Tools   | VPN           | Daniel Brooks          |
| Tools   | SaaS          | Marcus Chen            |
| Tools   | Hosting       | Marcus Chen            |
| Tools   | Finance       | Daniel Brooks          |
| Gear    | Computers     | Marcus Chen            |
| Gear    | Audio         | Marcus Chen            |
| Gear    | Furniture     | Sarah Mitchell         |
| Gear    | Accessories   | Marcus Chen            |
| Guides  | Communication | Sarah Mitchell         |
| Guides  | Productivity  | Sarah Mitchell         |
| Guides  | Security      | Daniel Brooks          |
| Guides  | Finance       | Daniel Brooks          |
| Guides  | Travel        | Daniel Brooks          |
| Guides  | Setup         | Sarah Mitchell         |
| Blog    | *             | Same as Guides mapping |

---

## Step 2: Write the Article Content

### Use the Writer's Style Guide

Each writer has a unique voice. Reference `docs/writing/writers-summery.md` for:

- **Tone & Voice** - How they speak
- **Sentence Structure** - Length, rhythm
- **Words to Use** - Signature phrases
- **Words to Avoid** - Banned terms
- **Article Structure** - Hook, body, conclusion

And reference `docs/writing/writing-style-guide.md` for general writing guidelines

### Key Writing Rules (All Writers)

1. **First person only** - Use "I", never corporate "we"
2. **No hype words** - Never use "game-changer", "revolutionary", "seamless"
3. **Specific numbers** - "8.2 hours" not "all-day battery"
4. **Real experience** - "After testing 12 options..." not "Experts say..."
5. **Natural headers** - "What's annoying:" not "Cons:"

### Example Opening by Writer

**Marcus Chen (Tech):**

> I've tested 23 webcams in the past two years, and most of them end up in a drawer after a week.

**Sarah Mitchell (Productivity):**

> I used to think standing desks were a Silicon Valley gimmick. Then I spent six months unable to sit for more than 20 minutes without pain.

**Daniel Brooks (Finance/Travel):**

> The first time I tried to file US taxes from Bali, I made three mistakes that cost me $4,200.

---

## Step 3: Check AI Detection

Run the article text through ZeroGPT:

```bash
# Direct text
node scripts/zerogpt-detect.js "Your article text here..."

# From file
node scripts/zerogpt-detect.js --file path/to/article.txt

# With debug output
node scripts/zerogpt-detect.js --file article.txt --debug
```

### Understanding Results

| AI %   | Verdict       | Action                       |
| ------ | ------------- | ---------------------------- |
| 0-4%   | Human written | Ready to publish             |
| 4-10%  | Mostly human  | Minor revisions needed       |
| 10-50% | Mixed content | Significant rewriting needed |
| 50%+   | AI generated  | Complete rewrite required    |

---

## Step 4: Update Writing Style Guide

When you discover patterns that reduce AI detection:

1. Open `docs/writing/writing-style-guide.md`
2. Add successful patterns to "What Works" sections
3. Add flagged patterns to "What to Avoid" sections

### Common AI-Flagged Patterns

- Starting sentences with "This"
- Using "Additionally", "Furthermore", "Moreover"
- Lists with parallel structure
- Generic transitional phrases
- Passive voice constructions

### Human-Sounding Replacements

- Start with specific examples or stories
- Use contractions ("I've" instead of "I have")
- Add parenthetical asides (like this one)
- Include self-deprecating humor
- Reference specific places, times, costs

---

## Step 5: Iterate Until <4% AI

Repeat steps 2-4 until the article passes with <4% AI detection.

### Quick Humanization Tips

1. **Add specific details** - "$847 last year" not "significant savings"
2. **Include failures** - "I tried X, it didn't work because..."
3. **Use sentence fragments** - For emphasis. Like this.
4. **Add em-dashes** - For asideseven mid-sentence
5. **Reference real places** - "When I was in Lisbon..." not "When traveling..."

---

## Step 6: Find Unique Hero Image

**IMPORTANT:** Each article must have a unique hero image that is not used by any other article.

### Check Existing Images

Before selecting an Unsplash image, verify it's not already in use:

1. Open `src/data/articles.ts`
2. Search for the Unsplash photo ID you want to use
3. If found, choose a different image

### Find an Image on Unsplash

1. Go to [unsplash.com](https://unsplash.com)
2. Search for relevant topic
3. Copy the photo ID from the URL
   - URL: `https://unsplash.com/photos/abc123xyz`
   - Photo ID: `photo-abc123xyz` (add `photo-` prefix)
4. **Verify the ID is not already used** in `src/data/articles.ts`

### Quick Check Command

```bash
# Search for a photo ID in articles.ts
grep "photo-YOUR-ID" src/data/articles.ts
```

If no results, the image is available to use.

---

## Step 7: Download Hero Image

### Add to Download Script

Edit `scripts/download-unsplash-images.cjs` and add your photo ID:

```javascript
const photoIds = [
  // ... existing IDs ...
  "photo-YOUR-NEW-ID",  // Add your new photo ID
];
```

### Run Download Script

```bash
node scripts/download-unsplash-images.cjs
```

This downloads the image to `public/images/unsplash/` as a JPG.

### Remove ID from Script

**After the image downloads successfully**, remove the photo ID from the `photoIds` array in `scripts/download-unsplash-images.cjs`. This keeps the script clean and prevents re-downloading the same images.

---

## Step 8: Optimize Image

```bash
node scripts/optimize-images.cjs
```

This script:

1. Converts JPG to WebP format
2. Optimizes for web (quality 80, effort 6)
3. Deletes the original JPG automatically

### Image Path Format

After optimization, your image path will be:

```
/images/unsplash/photo-YOUR-ID-1200w.webp
```

---

## Step 9: Create the Article Page

### File Location

```
src/pages/{section}/{slug}.astro

Examples:
- src/pages/tools/best-vpn-digital-nomads.astro
- src/pages/gear/best-standing-desks.astro
- src/pages/guides/digital-nomad-visa-portugal.astro
- src/pages/blog/top-destinations-digital-nomads.astro
```

### Use Existing Article as Template

1. Copy a similar article from the same section
2. Update the slug in `getArticleBySlug()` call
3. Update page-specific content:
   - `headings` array (table of contents)
   - Comparison tables (columns, rows)
   - FAQ data
   - Related articles
   - Article body HTML

### Required Imports

```astro
---
import AffiliateButton from "@components/article/AffiliateButton.astro";
import ComparisonTable from "@components/article/ComparisonTable.astro";
import FAQSection from "@components/article/FAQSection.astro";
import RelatedArticles from "@components/article/RelatedArticles.astro";
import ArticleLayout from "../../layouts/ArticleLayout.astro";
import { getArticleBySlug } from "../../data/articles";

// Get article metadata from central data file
const article = getArticleBySlug("your-article-slug", "section")!;
const { title, description, authorSlug, readingTime, image, imageAlt } = article;
const pubDate = new Date(article.pubDate);

// Page-specific content goes here...
---
```

### Article Body Structure

```astro
<ArticleLayout
  title={title}
  description={description}
  pubDate={pubDate}
  authorSlug={authorSlug}
  readingTime={readingTime}
  image={image}
  imageAlt={imageAlt}
  headings={headings}
  category="Category Name"
  categorySlug="section"
  subcategorySlug="subcategory"
>
  <!-- Article content here -->

  <section id="introduction">
    <h2>Opening Hook</h2>
    <p>Your opening paragraph...</p>
  </section>

  <!-- More sections... -->

  <FAQSection faqs={faqs} />
  <RelatedArticles articles={relatedArticles} />
</ArticleLayout>
```

---

## Step 10: SEO/AEO/GEO Compliance

### SEO Checklist

- [ ] Title includes primary keyword (60 chars max)
- [ ] Meta description is compelling (150-160 chars)
- [ ] H1 matches title, H2s include secondary keywords
- [ ] Internal links to related articles (3-5 minimum)
- [ ] External links to authoritative sources
- [ ] Alt text on all images
- [ ] URL slug is keyword-rich and readable

### AEO (Answer Engine Optimization)

- [ ] FAQ section with common questions
- [ ] Clear, direct answers in first paragraph
- [ ] Structured data (FAQ schema via FAQSection component)
- [ ] Comparison tables with clear data
- [ ] Step-by-step instructions where applicable

### GEO (Generative Engine Optimization)

- [ ] Author attribution with expertise signals
- [ ] First-person experience statements
- [ ] Specific data points and test results
- [ ] Clear recommendations with reasoning
- [ ] Natural, conversational language

---

## Step 11: Update Articles Metadata

Add the new article to `src/data/articles.ts`:

### Find the Correct Array

| Section | Array Name         |
| ------- | ------------------ |
| Tools   | `toolsArticles`  |
| Gear    | `gearArticles`   |
| Guides  | `guidesArticles` |
| Blog    | `blogArticles`   |

### Add Article Entry

```typescript
{
  slug: "your-article-slug",
  section: "tools",  // tools | gear | guides | blog
  title: "Your Article Title (2025)",
  description: "Compelling meta description under 160 characters.",
  authorSlug: "daniel-brooks",  // marcus-chen | sarah-mitchell | daniel-brooks
  pubDate: "2025-01-15",
  readingTime: 12,  // estimated minutes
  image: "/images/unsplash/photo-YOUR-ID-1200w.webp",
  imageAlt: "Descriptive alt text for the image",
  category: "vpn",  // lowercase category
  featured: false,  // true for featured articles on bento grid
},
```

### Category Values by Section

| Section | Valid Categories                                                                                |
| ------- | ----------------------------------------------------------------------------------------------- |
| Tools   | `vpn`, `saas`, `hosting`, `finance`                                                     |
| Gear    | `computers`, `audio`, `furniture`, `accessories`                                        |
| Guides  | `travel`, `communication`, `productivity`, `security`, `setup`, `finance`, `gear` |
| Blog    | `communication`, `finance`, `hosting`, `productivity`, `security`, `travel`         |

---

## Step 12: Regenerate Article Summary

After adding the article to `articles.ts`, regenerate the documentation:

```bash
npm run docs:articles
```

This updates `docs/article-summey.md` with the new article.

---

## Final Checklist

Before committing:

- [ ] Article passes AI detection (<4%)
- [ ] Writer style matches assigned author
- [ ] All SEO/AEO/GEO requirements met
- [ ] Hero image downloaded and optimized
- [ ] Article added to `src/data/articles.ts`
- [ ] Article summary regenerated
- [ ] Build passes: `npm run build`
- [ ] Preview looks correct: `npm run preview`

---

## Quick Commands Reference

```bash
# Check AI detection
node scripts/zerogpt-detect.js --file article.txt

# Download new Unsplash images
node scripts/download-unsplash-images.cjs

# Optimize images (JPG � WebP)
node scripts/optimize-images.cjs

# Regenerate article summary
npm run docs:articles

# Build site
npm run build

# Preview site
npm run preview
```

---

## Troubleshooting

### Article not showing on bento grid

1. Check `src/data/articles.ts` - is the article in the correct array?
2. Check category matches a valid category for that section
3. Run `npm run build` to regenerate pages

### Image not displaying

1. Verify image exists in `public/images/unsplash/`
2. Check file extension is `.webp` not `.jpg`
3. Verify path in `articles.ts` matches actual file

### High AI detection score

1. Remove transitional phrases ("Additionally", "Furthermore")
2. Add specific numbers, dates, places
3. Include personal anecdotes and failures
4. Use more contractions and informal language
5. Reference the writer's style guide in `docs/writing/writers-summery.md`

---

*Last updated: 2025-12-07*
