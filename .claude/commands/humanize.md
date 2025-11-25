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

### Step 3: Humanize Using Style Guide

Read `/mnt/c/My Stuff/floatjet/docs/writing_style_guide.md` and apply these rules:

**Voice Changes:**

- Use "I" not "we" - first person, conversational
- Add specific real experiences, locations, scenarios
- State clear opinions, don't hedge everything
- Include self-deprecating humor, casual asides

**Sentence Structure:**

- Vary lengths wildly (3 words to 25 words)
- Use intentional fragments: "Pure value." "No complaints."
- Start sentences with And, But, So, Okay
- Add rhetorical questions: "Living the dream, right?"

**Words to Replace:**

- comprehensive → solid, thorough
- exceptional → really good, great
- optimal → best, ideal
- utilize → use
- robust → strong, solid
- seamless → smooth, easy
- furthermore → also, plus
- additionally → and, also

**Structure Changes:**

- Vary paragraph lengths (some 1 sentence, some 5+)
- Use casual headers ("What's annoying:" not "Cons:")
- Unbalanced pros/cons (reflect reality)
- Short FAQ answers (1-3 sentences max)

**Must Preserve:**

- All affiliate links and CTAs
- Product names, prices, specs
- Astro component structure (`<ComparisonTable>`, etc.)
- Frontmatter and imports
- Technical accuracy

### Step 4: Test with ZeroGPT API

1. Save the humanized article text (content only, no Astro code) to a temp file:
   `/mnt/c/My Stuff/floatjet/docs/human/temp-humanize-test.txt`

2. Run the ZeroGPT detection script:
   ```bash
   node "/mnt/c/My Stuff/floatjet/scripts/zerogpt-detect.js" --file "/mnt/c/My Stuff/floatjet/docs/human/temp-humanize-test.txt" --debug
   ```

3. Parse the output for:
    - `data.fakePercentage` - the AI detection percentage
    - `data.feedback` - human/AI classification
   - `data.h` - flagged sentences array (focus re-humanization on these)

### Step 5: Handle Results

**If API Error:**

```
⚠️ API Error for Article #XXX
Error: [message]
Please check network connection or API token validity.
```

Stop processing this article, continue to next.

**If `fakePercentage > 8`:**

1. Report: "Article #XXX: AI detected at X.X% (target: ≤8%) - Re-humanizing..."
2. Focus on the flagged sentences from response
3. Apply more aggressive humanization to those sections
4. Re-test with API
5. Repeat up to 5 attempts total
6. Use the response to improve our `/mnt/c/My Stuff/floatjet/docs/writing_style_guide.md`

**If max attempts reached without success:**

```
⚠️ Article #XXX: Best achieved X.X% after 5 attempts
Manual review recommended.
```

**If `fakePercentage ≤ 8`:**

```
✅ Article #XXX: PASSED at X.X%
```

### Step 6: Apply Changes

Once passed (≤8%):

1. Write the humanized content back to the `.astro` file
2. Count words in the new content

### Step 7: Update Article Summary

Edit `/mnt/c/My Stuff/floatjet/docs/article-summey.md`:

1. Find the article row by number
2. Update `Word Count` to new count
3. Change `Humanized content` from `false` to `true`
4. Update `### Word Count Summary`
5. Update `### Word Count Summary for Non-Humanized Content`

### Step 8: Final Report

After all articles processed, show summary:

```
════════════════════════════════════════════════════
         HUMANIZER COMPLETE
════════════════════════════════════════════════════

✅ #012: Home Office Setup - 6.2% (2,569 → 2,487 words)
✅ #013: Find Reliable WiFi - 4.8% (1,552 → 1,621 words)
⚠️ #014: Travel Tech - 9.1% (needs manual review)

Passed: 2 | Review needed: 1 | Errors: 0
article-summey.md updated ✓
════════════════════════════════════════════════════
```

---

## Important Notes

- NEVER skip the API verification step
- ALWAYS preserve Astro components and structure
- If unsure about a section, err on the side of more human-sounding
- The detection script is at: `scripts/zerogpt-detect.js`
- API key is embedded in the script - no additional auth needed
- Word count changes are normal (±10% typical)
- Delete temp file after processing: `docs/human/temp-humanize-test.txt`
