# Article Humanizer

Humanize FloatJet articles to pass AI detection (target: ≤8% AI-detected).

**Input:** $ARGUMENTS

---

## Instructions

You are the Article Humanizer agent. Process the article number(s) provided above.

### Step 1: Parse Input & Lookup Articles

1. Parse the input to get article number(s):

   - Single: `12` or `012`
   - Range: `12-16`
   - Multiple: `12,15,17`
2. Read `/mnt/c/My Stuff/floatjet/docs/article-summey.md`
3. For each article number, find the row and extract:

   - Article name
   - Category & Sub-Category
   - Link path (e.g., `/blog/ultimate-home-office-setup`)
   - Current word count
   - Humanized status
4. **If article number invalid:** Stop and tell user valid range is 001-097
5. **If already humanized (true):** Ask user if they want to re-humanize, otherwise skip

### Step 2: Read Article File

Convert link path to file path:

- `/blog/xxx` → `/mnt/c/My Stuff/floatjet/src/pages/blog/xxx.astro`
- `/gear/xxx` → `/mnt/c/My Stuff/floatjet/src/pages/gear/xxx.astro`
- `/guides/xxx` → `/mnt/c/My Stuff/floatjet/src/pages/guides/xxx.astro`
- `/tools/xxx` → `/mnt/c/My Stuff/floatjet/src/pages/tools/xxx.astro`

Read the `.astro` file and identify the main article content sections.

### Step 3: Extract Text to Temp File

**BEFORE humanizing**, extract the article text content:

1. Extract only the readable text content (no Astro code, components, or frontmatter)
2. Save to temp file: `/mnt/c/My Stuff/floatjet/docs/human/humanized.txt`
3. This becomes the working file for humanization

**What to extract:**

- All paragraph text
- Headings
- List items
- FAQ questions and answers

**What NOT to extract:**

- Astro imports and frontmatter
- Component tags (`<ComparisonTable>`, etc.)
- HTML attributes
- Code blocks (preserve as-is)

### Step 4: Humanize Using Style Guide

Read and apply ALL rules from `/mnt/c/My Stuff/floatjet/docs/writing_style_guide.md` to the temp file.

The style guide is the single source of truth for humanization rules. It contains:

- Voice and tone guidelines
- Sentence structure patterns
- Words to avoid and replacements
- Learned patterns from previous API testing

**IMPORTANT:** Always read the latest version of the style guide before humanizing. It is updated after every API call
with new learnings.

**Must Preserve:**

- All affiliate links and CTAs
- Product names, prices, specs (accuracy matters)
- Technical accuracy

### Step 5: Test & Learn Loop

This is an iterative loop. For each API call (pass OR fail), learn and update the style guide.

#### 5a: Test with ZeroGPT API

Run the detection script on the temp file:

```bash
node "/mnt/c/My Stuff/floatjet/scripts/zerogpt-detect.js" --file "/mnt/c/My Stuff/floatjet/docs/human/humanized.txt"
```

Parse the output for:

- `fakePercentage` - the AI detection percentage
- `h` - array of sentences flagged as AI (CRITICAL for learning)

#### 5b: Learn & Update Style Guide (AFTER EVERY API CALL)

**IMPORTANT:** This happens after EVERY API call, not just failures. Both passes and fails contain valuable learning.

**Understanding the API Response:**

- `data.h` - Array of sentences flagged as AI-generated (AVOID these patterns)
- `data.fakePercentage` - Overall AI detection percentage

**What to analyze:**

1. **From flagged sentences (`data.h`):**

   - Identify common patterns that get flagged
   - Look for word choices, sentence structures, or phrases that trigger detection
   - Add these patterns to the style guide
2. **From sentences NOT flagged:**

   - These passed as human - identify what makes them work
   - Short fragments? Casual language? Questions? Specific details?
   - Reinforce successful patterns in the style guide

**How to update:**

1. Read `/mnt/c/My Stuff/floatjet/docs/writing_style_guide.md`
2. Find the "Part 8: Learned Patterns from API Testing" section
3. Add new insights with concrete examples from the actual flagged/passed sentences
4. Only add genuinely NEW insights - don't duplicate existing advice

**Example learning from a PASS (3.2% AI):**

```
Article passed but 2 sentences still flagged:
- "Here's how to get started." → Pattern: "Here's how to" gets flagged
- Add to guide: Replace "Here's how to" with "Let me show you"
```

**Example learning from a FAIL (15% AI):**

```
12 sentences flagged, pattern identified:
- ALL-CAPS headers consistently flagged
- Add to guide: Never use ALL-CAPS headers, use mixed-case casual headers
```

#### 5c: Handle Results

**If API Error:**

```
⚠️ API Error for Article #XXX
Error: [message]
Please check network connection or API token validity.
```

Stop processing this article, continue to next.

**If `fakePercentage > 8`:**

1. Report: "Article #XXX: AI detected at X.X% (target: ≤8%) - Re-humanizing..."
2. **IMPORTANT:** Re-humanize the CURRENT temp file content (`docs/human/humanized.txt`)
   - Do NOT re-extract from the original article
   - Only fix the specific flagged sentences from `data.h`
   - Keep all other content that already passed
3. Save the updated content back to the temp file
4. Go back to Step 5a (re-test)
5. Maximum 5 attempts total

**If max attempts reached without success:**

```
⚠️ Article #XXX: Best achieved X.X% after 5 attempts
Manual review recommended.
```

**If `fakePercentage ≤ 8`:**

```
✅ Article #XXX: PASSED at X.X%
```

Proceed to Step 6.

### Step 6: Apply Changes to Article

Once passed (≤8%):

1. Read the humanized content from temp file (`docs/human/humanized.txt`)
2. Apply the humanized text back to the original `.astro` file
3. Preserve all Astro structure:
   - Frontmatter and imports
   - Component tags and props
   - HTML structure
4. Count words in the new content

### Step 7: Update Article Summary

Edit `/mnt/c/My Stuff/floatjet/docs/article-summey.md`:

1. Find the article row by number
2. Update `Word Count` to new count
3. Change `Humanized content` from `false` to `true`
4. Update `### Word Count Summary`
5. Update `### Word Count Summary for Non-Humanized Content`

### Step 8: Final Report

After all articles processed, show detailed summary with API call tracking:

```
════════════════════════════════════════════════════════════════════════
                         HUMANIZER COMPLETE
════════════════════════════════════════════════════════════════════════

📄 Article #012: Home Office Setup
   ├─ API Calls: 3
   │  ├─ Attempt 1: 24.3% ❌ → Learned: ALL-CAPS headers flagged
   │  ├─ Attempt 2: 12.1% ❌ → Learned: "Here's how" pattern flagged
   │  └─ Attempt 3: 6.2% ✅ → Learned: Question-based format passes
   ├─ Final Result: PASSED at 6.2%
   └─ Words: 2,569 → 2,487

📄 Article #013: Find Reliable WiFi
   ├─ API Calls: 1
   │  └─ Attempt 1: 4.8% ✅ → Learned: Short fragments pass well
   ├─ Final Result: PASSED at 4.8%
   └─ Words: 1,552 → 1,621

📄 Article #014: Travel Tech
   ├─ API Calls: 5
   │  ├─ Attempt 1: 31.2% ❌ → Learned: Parallel structures flagged
   │  ├─ Attempt 2: 22.4% ❌ → Learned: Generic dialogue flagged
   │  ├─ Attempt 3: 15.8% ❌ → Learned: Clean tech statements flagged
   │  ├─ Attempt 4: 11.3% ❌ → Learned: Repeated patterns flagged
   │  └─ Attempt 5: 9.1% ❌ → Learned: Formal labels still triggering
   ├─ Final Result: NEEDS REVIEW (best: 9.1%)
   └─ Words: 1,450 → 1,512

────────────────────────────────────────────────────────────────────────
                            SUMMARY
────────────────────────────────────────────────────────────────────────
Articles Processed: 3
Total API Calls:    9
Passed (≤8%):       2
Needs Review:       1
Errors:             0

article-summey.md updated ✓
writing_style_guide.md updated with 8 new patterns ✓
════════════════════════════════════════════════════════════════════════
```

**Tracking Requirements:**

For each article, maintain a running log of:

1. Attempt number (1-5)
2. AI percentage returned from each API call
3. Pass/fail status for each attempt (✅ if ≤8%, ❌ if >8%)
4. Key learning from that API response

Display this information in the tree structure shown above after processing completes.

---

## Important Notes

- NEVER skip the API verification step
- ALWAYS learn from EVERY API call (pass or fail)
- ALWAYS preserve Astro components and structure when applying back
- If unsure about a section, err on the side of more human-sounding
- **Re-humanization:** Always work on the temp file content, NEVER re-extract from original article
- The detection script is at: `scripts/zerogpt-detect.js`
- API key is embedded in the script - no additional auth needed
- Word count changes are normal (±10% typical)
- Working file: `docs/human/humanized.txt`
