#!/usr/bin/env node

/**
 * SEO Metadata Audit Script
 * Checks all article pages for title and description length issues
 */

const fs = require("fs");
const path = require("path");

const TITLE_MIN = 30;
const TITLE_MAX = 60;
const DESC_MIN = 150;
const DESC_MAX = 160;

// Categories to audit
const categories = ["blog", "gear", "guides", "tools"];

// Results storage
const results = {
  totalArticles: 0,
  titleIssues: [],
  descriptionIssues: [],
  goodArticles: [],
};

// Extract metadata from an Astro file
function extractMetadata(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");

  // Extract title
  const titleMatch = content.match(/const title = ['"](.+?)['"]/);
  const descMatch = content.match(/const description = ['"](.+?)['"]/s);

  if (!titleMatch || !descMatch) {
    return null;
  }

  const title = titleMatch[1];
  const description = descMatch[1].replace(/\\'/g, "'");

  return {
    title,
    titleLength: title.length,
    description,
    descLength: description.length,
  };
}

// Check all articles in a category
function auditCategory(category) {
  const categoryPath = path.join(__dirname, "..", "src", "pages", category);

  if (!fs.existsSync(categoryPath)) {
    return;
  }

  const files = fs.readdirSync(categoryPath);

  files.forEach((file) => {
    if (!file.endsWith(".astro")) {
      return;
    }

    const filePath = path.join(categoryPath, file);
    const metadata = extractMetadata(filePath);

    if (!metadata) {
      return;
    }

    results.totalArticles++;

    const articlePath = `/${category}/${file.replace(".astro", "")}`;

    // Check title length
    const titleIssue = metadata.titleLength > TITLE_MAX;
    const titleTooShort = metadata.titleLength < TITLE_MIN;

    // Check description length
    const descIssue = metadata.descLength < DESC_MIN || metadata.descLength > DESC_MAX;

    if (titleIssue || titleTooShort) {
      results.titleIssues.push({
        path: articlePath,
        title: metadata.title,
        length: metadata.titleLength,
        issue: titleIssue ? "TOO_LONG" : "TOO_SHORT",
        recommendation: titleIssue
          ? `Shorten by ${metadata.titleLength - TITLE_MAX} chars`
          : `Lengthen by ${TITLE_MIN - metadata.titleLength} chars`,
      });
    }

    if (descIssue) {
      results.descriptionIssues.push({
        path: articlePath,
        description: metadata.description,
        length: metadata.descLength,
        issue: metadata.descLength < DESC_MIN ? "TOO_SHORT" : "TOO_LONG",
        recommendation:
          metadata.descLength < DESC_MIN
            ? `Add ${DESC_MIN - metadata.descLength} chars`
            : `Remove ${metadata.descLength - DESC_MAX} chars`,
      });
    }

    if (!titleIssue && !titleTooShort && !descIssue) {
      results.goodArticles.push({
        path: articlePath,
        titleLength: metadata.titleLength,
        descLength: metadata.descLength,
      });
    }
  });
}

// Main audit
console.log("🔍 Starting SEO Metadata Audit...\n");

categories.forEach((category) => {
  auditCategory(category);
});

// Generate report
console.log("=".repeat(80));
console.log("SEO METADATA AUDIT REPORT");
console.log("=".repeat(80));
console.log();

console.log(`📊 SUMMARY:`);
console.log(`   Total Articles: ${results.totalArticles}`);
console.log(
  `   ✅ Perfect: ${results.goodArticles.length} (${Math.round((results.goodArticles.length / results.totalArticles) * 100)}%)`
);
console.log(`   ⚠️  Title Issues: ${results.titleIssues.length}`);
console.log(`   ⚠️  Description Issues: ${results.descriptionIssues.length}`);
console.log();

if (results.titleIssues.length > 0) {
  console.log("=".repeat(80));
  console.log("⚠️  TITLE ISSUES (Must be 30-60 chars)");
  console.log("=".repeat(80));

  // Sort by severity (most over/under)
  const sorted = [...results.titleIssues].sort((a, b) => {
    if (a.issue === "TOO_LONG" && b.issue === "TOO_LONG") {
      return b.length - a.length;
    }
    if (a.issue === "TOO_SHORT" && b.issue === "TOO_SHORT") {
      return a.length - b.length;
    }
    return a.issue === "TOO_LONG" ? -1 : 1;
  });

  sorted.forEach((item, index) => {
    console.log();
    console.log(`${index + 1}. ${item.path}`);
    console.log(`   Length: ${item.length} chars (${item.issue})`);
    console.log(`   Current: "${item.title}"`);
    console.log(`   Action: ${item.recommendation}`);
  });
  console.log();
}

if (results.descriptionIssues.length > 0) {
  console.log("=".repeat(80));
  console.log("⚠️  DESCRIPTION ISSUES (Must be 150-160 chars)");
  console.log("=".repeat(80));

  // Sort by severity
  const sorted = [...results.descriptionIssues].sort((a, b) => {
    const aDiff = a.issue === "TOO_SHORT" ? DESC_MIN - a.length : a.length - DESC_MAX;
    const bDiff = b.issue === "TOO_SHORT" ? DESC_MIN - b.length : b.length - DESC_MAX;
    return bDiff - aDiff;
  });

  sorted.forEach((item, index) => {
    console.log();
    console.log(`${index + 1}. ${item.path}`);
    console.log(`   Length: ${item.length} chars (${item.issue})`);
    console.log(`   Current: "${item.description}"`);
    console.log(`   Action: ${item.recommendation}`);
  });
  console.log();
}

console.log("=".repeat(80));
console.log("✅ ARTICLES WITH PERFECT METADATA");
console.log("=".repeat(80));
console.log(`${results.goodArticles.length} articles have optimal title and description lengths.`);
console.log();

// Save detailed JSON report
const reportPath = path.join(__dirname, "..", "docs", "SEO-AUDIT-METADATA-REPORT.json");
fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
console.log(`📝 Detailed JSON report saved to: docs/SEO-AUDIT-METADATA-REPORT.json`);
console.log();

// Exit with error code if issues found
process.exit(results.titleIssues.length + results.descriptionIssues.length > 0 ? 1 : 0);
