#!/usr/bin/env node
/**
 * Script to download all Unsplash images and save them locally
 * This eliminates external dependencies and prevents build failures from network issues
 */

const https = require("https");
const fs = require("fs");
const path = require("path");

// All unique Unsplash photo IDs from the codebase
const photoIds = [
  // Secure email providers article (Dec 2025)
  // Padlock on keyboard - email/encryption security by Sasun Bughdaryan
  "2T4l02ZYj-k",
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
