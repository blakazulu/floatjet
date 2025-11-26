#!/usr/bin/env node
/**
 * Script to update all Unsplash image URLs to local paths
 * Run this AFTER download-unsplash-images.js has completed
 */

const fs = require("fs");
const path = require("path");

const SRC_DIR = path.join(__dirname, "..", "src");

// Regex to match Unsplash URLs with different sizes
const unsplashRegex = /https:\/\/images\.unsplash\.com\/(photo-[a-zA-Z0-9_-]+)\?auto=format&fit=crop&w=(\d+)&q=\d+/g;

// Find all .astro files recursively
function findAstroFiles(dir, files = []) {
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      findAstroFiles(fullPath, files);
    } else if (item.endsWith(".astro")) {
      files.push(fullPath);
    }
  }

  return files;
}

// Map width to closest available size
function mapWidth(width) {
  const w = parseInt(width, 10);
  if (w <= 400) return 400;
  if (w <= 800) return 800;
  return 1200;
}

// Update references in a file
function updateFile(filepath) {
  let content = fs.readFileSync(filepath, "utf8");
  let modified = false;
  let count = 0;

  content = content.replace(unsplashRegex, (match, photoId, width) => {
    const mappedWidth = mapWidth(width);
    const localPath = `/images/unsplash/${photoId}-${mappedWidth}w.jpg`;
    modified = true;
    count++;
    return localPath;
  });

  if (modified) {
    fs.writeFileSync(filepath, content, "utf8");
    return count;
  }

  return 0;
}

// Main function
function updateAllReferences() {
  console.log("\nUpdating Unsplash image references to local paths...\n");

  const astroFiles = findAstroFiles(SRC_DIR);
  let totalUpdated = 0;
  let filesModified = 0;

  for (const file of astroFiles) {
    const relativePath = path.relative(path.join(__dirname, ".."), file);
    const updated = updateFile(file);

    if (updated > 0) {
      console.log(`[${updated} refs] ${relativePath}`);
      totalUpdated += updated;
      filesModified++;
    }
  }

  console.log("\n========================================");
  console.log(`Files modified: ${filesModified}`);
  console.log(`References updated: ${totalUpdated}`);
  console.log("========================================\n");
}

updateAllReferences();
