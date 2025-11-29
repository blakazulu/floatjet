const fs = require("fs");
const path = require("path");

// Link and asset audit
const issues = [];
const stats = {
  totalArticles: 0,
  totalInternalLinks: 0,
  totalExternalLinks: 0,
  totalImages: 0,
  brokenInternalLinks: [],
  imagesWithoutAlt: [],
  externalLinksWithoutNofollow: [],
  httpLinks: [],
  missingTitleLinks: []
};

function checkFileExists(filePath) {
  // Convert URL path to file path
  let checkPath = filePath.replace(/^\//, "");

  // Check if it's an article page
  const possiblePaths = [
    `src/pages/${checkPath}.astro`,
    `src/pages/${checkPath}/index.astro`,
    `public/${checkPath}`
  ];

  return possiblePaths.some(p => fs.existsSync(p));
}

function auditLinks(content, filePath) {
  const relativePath = filePath.replace(/.*src\/pages\//, "/").replace(".astro", "");

  // Find all <a> tags
  const linkRegex = /<a\s+([^>]*?)href=["']([^"']+)["']([^>]*?)>/g;
  let match;

  while ((match = linkRegex.exec(content)) !== null) {
    const beforeHref = match[1];
    const href = match[2];
    const afterHref = match[3];
    const fullTag = match[0];

    // Skip anchor links
    if (href.startsWith("#")) continue;

    // Check if external
    if (href.startsWith("http://") || href.startsWith("https://")) {
      stats.totalExternalLinks++;

      // Check for http (not https)
      if (href.startsWith("http://") && !href.includes("localhost")) {
        stats.httpLinks.push({
          path: relativePath,
          link: href
        });
      }

      // Check for nofollow on external links (except whitelisted domains)
      const isWhitelisted = href.includes("floatjet.com") || href.includes("schema.org");
      if (!isWhitelisted && !fullTag.includes("nofollow")) {
        stats.externalLinksWithoutNofollow.push({
          path: relativePath,
          link: href
        });
      }
    } else {
      // Internal link
      stats.totalInternalLinks++;

      // Check if file exists
      if (!checkFileExists(href)) {
        stats.brokenInternalLinks.push({
          path: relativePath,
          link: href
        });
      }
    }
  }
}

function auditImages(content, filePath) {
  const relativePath = filePath.replace(/.*src\/pages\//, "/").replace(".astro", "");

  // Find all <Image> components and <img> tags
  const imageRegex = /<(?:Image|img)\s+([^>]*?)(?:src|image)=["']([^"']+)["']([^>]*?)(?:\/>|>)/g;
  let match;

  while ((match = imageRegex.exec(content)) !== null) {
    const before = match[1];
    const src = match[2];
    const after = match[3];
    const fullTag = match[0];

    stats.totalImages++;

    // Check for alt text
    if (!fullTag.includes("alt=")) {
      stats.imagesWithoutAlt.push({
        path: relativePath,
        image: src
      });
    } else {
      // Check for empty alt
      const altMatch = fullTag.match(/alt=["']([^"']*)["']/);
      if (altMatch && altMatch[1].trim() === "") {
        stats.imagesWithoutAlt.push({
          path: relativePath,
          image: src,
          reason: "Empty alt attribute"
        });
      }
    }
  }
}

function scanArticles(dir) {
  const entries = fs.readdirSync(dir, {withFileTypes: true});

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      scanArticles(fullPath);
    } else if (entry.name.endsWith(".astro")) {
      stats.totalArticles++;

      const content = fs.readFileSync(fullPath, "utf-8");
      auditLinks(content, fullPath);
      auditImages(content, fullPath);
    }
  }
}

console.log("🔍 Auditing links and assets across all pages...\n");

// Scan all directories
const pageDirs = [
  "src/pages/blog",
  "src/pages/gear",
  "src/pages/guides",
  "src/pages/tools",
  "src/pages"
];

for (const dir of pageDirs) {
  if (fs.existsSync(dir)) {
    scanArticles(dir);
  }
}

console.log("📊 LINK & ASSET AUDIT SUMMARY\n");
console.log(`Total pages scanned: ${stats.totalArticles}`);
console.log(`Internal links: ${stats.totalInternalLinks}`);
console.log(`External links: ${stats.totalExternalLinks}`);
console.log(`Images: ${stats.totalImages}\n`);

// Report issues
let hasIssues = false;

if (stats.brokenInternalLinks.length > 0) {
  hasIssues = true;
  console.log(`❌ BROKEN INTERNAL LINKS: ${stats.brokenInternalLinks.length}\n`);
  stats.brokenInternalLinks.slice(0, 10).forEach(({path, link}) => {
    console.log(`  ${path}`);
    console.log(`    → ${link}`);
  });
  if (stats.brokenInternalLinks.length > 10) {
    console.log(`  ... and ${stats.brokenInternalLinks.length - 10} more\n`);
  } else {
    console.log("");
  }
}

if (stats.imagesWithoutAlt.length > 0) {
  hasIssues = true;
  console.log(`⚠️  IMAGES WITHOUT ALT TEXT: ${stats.imagesWithoutAlt.length}\n`);
  stats.imagesWithoutAlt.slice(0, 10).forEach(({path, image, reason}) => {
    console.log(`  ${path}`);
    console.log(`    → ${image}${reason ? ` (${reason})` : ""}`);
  });
  if (stats.imagesWithoutAlt.length > 10) {
    console.log(`  ... and ${stats.imagesWithoutAlt.length - 10} more\n`);
  } else {
    console.log("");
  }
}

if (stats.httpLinks.length > 0) {
  hasIssues = true;
  console.log(`⚠️  HTTP LINKS (should be HTTPS): ${stats.httpLinks.length}\n`);
  stats.httpLinks.slice(0, 5).forEach(({path, link}) => {
    console.log(`  ${path}`);
    console.log(`    → ${link}`);
  });
  if (stats.httpLinks.length > 5) {
    console.log(`  ... and ${stats.httpLinks.length - 5} more\n`);
  } else {
    console.log("");
  }
}

if (stats.externalLinksWithoutNofollow.length > 0) {
  console.log(`💡 EXTERNAL LINKS WITHOUT NOFOLLOW: ${stats.externalLinksWithoutNofollow.length}`);
  console.log(`   (Not critical - but recommended for affiliate links)\n`);
}

if (!hasIssues) {
  console.log("✅ No critical link or asset issues found!\n");
}

// Save detailed report
const report = {
  summary: stats,
  timestamp: new Date().toISOString()
};

fs.writeFileSync(
  "docs/LINK-ASSET-AUDIT-REPORT.json",
  JSON.stringify(report, null, 2),
  "utf-8"
);

console.log("✅ Detailed report saved to: docs/LINK-ASSET-AUDIT-REPORT.json");

// Exit code
process.exit(hasIssues ? 1 : 0);
