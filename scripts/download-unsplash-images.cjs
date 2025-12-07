#!/usr/bin/env node
/**
 * Script to download all Unsplash images and save them locally
 * This eliminates external dependencies and prevents build failures from network issues
 *
 * ============================================================================
 * HOW TO FIND UNSPLASH IMAGES
 * ============================================================================
 *
 * This script expects photo IDs in the format: "photo-TIMESTAMP-UNIQUEID"
 * Example: "photo-1633158829875-e5316a358c6f"
 *
 * IMPORTANT: Not all Unsplash URLs use this format! There are TWO types:
 *
 * 1. LONG FORMAT (works with this script):
 *    URL: https://unsplash.com/photos/photo-1633158829875-e5316a358c6f
 *    ID to use: "photo-1633158829875-e5316a358c6f"
 *
 * 2. SHORT FORMAT (does NOT work with this script):
 *    URL: https://unsplash.com/photos/jZnvn5x08BE
 *    These short IDs will return 404 errors!
 *
 * HOW TO DOWNLOAD IMAGES:
 *
 * Option A: Use this script (for long-format IDs only)
 *   1. Add the photo ID to the photoIds array below
 *   2. Run: node scripts/download-unsplash-images.cjs
 *   3. Run: node scripts/optimize-images.cjs
 *   4. Remove the ID from photoIds array (keep it clean)
 *
 * Option B: Use curl directly (works for ANY Unsplash image)
 *   This is the RECOMMENDED method since it works with all ID formats:
 *
 *   curl -L "https://images.unsplash.com/photo-ID?auto=format&fit=crop&w=1200&q=80" \
 *        -o "public/images/unsplash/photo-ID-1200w.jpg"
 *   curl -L "https://images.unsplash.com/photo-ID?auto=format&fit=crop&w=800&q=80" \
 *        -o "public/images/unsplash/photo-ID-800w.jpg"
 *
 *   Then run: node scripts/optimize-images.cjs
 *
 * FINDING UNIQUE IMAGES:
 *   1. Search Unsplash for your topic
 *   2. Copy the photo ID from the URL
 *   3. Check it's not already used: grep "photo-ID" src/data/articles.ts
 *   4. Download using curl (Option B above)
 *   5. Optimize with: node scripts/optimize-images.cjs
 *
 * ============================================================================
 */

const https = require("https");
const fs = require("fs");
const path = require("path");

// All unique Unsplash photo IDs from the codebase
// example: https://images.unsplash.com/photo-1511485977113-f34c92461ad9
const photoIds = [
];

const OUTPUT_DIR = path.join(__dirname, "..", "public", "images", "unsplash");

// Download image with size parameter
function downloadImage(photoId, width) {
  return new Promise((resolve, reject) => {
    const url = `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${width}&q=80`;
    const filename = `${photoId}-${width}w.jpg`;
    const filepath = path.join(OUTPUT_DIR, filename);

    // Skip if file already exists
    if (fs.existsSync(filepath)) {
      console.log(`  [SKIP] ${filename} (already exists)`);
      resolve(filepath);
      return;
    }

    const file = fs.createWriteStream(filepath);

    https
      .get(url, (response) => {
        if (response.statusCode === 301 || response.statusCode === 302) {
          // Follow redirect
          https
            .get(response.headers.location, (redirectResponse) => {
              redirectResponse.pipe(file);
              file.on("finish", () => {
                file.close();
                console.log(`  [OK] ${filename}`);
                resolve(filepath);
              });
            })
            .on("error", (err) => {
              fs.unlink(filepath, () => {});
              reject(err);
            });
        } else if (response.statusCode === 200) {
          response.pipe(file);
          file.on("finish", () => {
            file.close();
            console.log(`  [OK] ${filename}`);
            resolve(filepath);
          });
        } else {
          fs.unlink(filepath, () => {});
          reject(new Error(`HTTP ${response.statusCode} for ${photoId}`));
        }
      })
      .on("error", (err) => {
        fs.unlink(filepath, () => {});
        reject(err);
      });
  });
}

// Download all images at multiple sizes
async function downloadAllImages() {
  console.log(`\nDownloading ${photoIds.length} images to ${OUTPUT_DIR}\n`);

  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const sizes = [1200, 800]; // Hero images, thumbnails
  let downloaded = 0;
  let failed = 0;

  for (const photoId of photoIds) {
    console.log(`[${downloaded + failed + 1}/${photoIds.length}] ${photoId}`);

    for (const width of sizes) {
      try {
        await downloadImage(photoId, width);
        // Small delay to avoid rate limiting
        await new Promise((r) => setTimeout(r, 100));
      } catch (err) {
        console.error(`  [FAIL] ${photoId}-${width}w: ${err.message}`);
        failed++;
      }
    }
    downloaded++;
  }

  console.log(`\n========================================`);
  console.log(`Downloaded: ${downloaded} images`);
  console.log(`Failed: ${failed}`);
  console.log(`Output: ${OUTPUT_DIR}`);
  console.log(`========================================\n`);
}

downloadAllImages().catch(console.error);
