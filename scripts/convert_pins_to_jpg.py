#!/usr/bin/env python3
"""
Convert Pinterest pin images from WebP to JPEG.
Also updates all CSVs to reference .jpg instead of .webp.
"""

import os
from pathlib import Path
from PIL import Image

PROJECT_ROOT = Path(__file__).parent.parent
PINS_DIR = PROJECT_ROOT / "public" / "images" / "pins"
BOARDS_DIR = PROJECT_ROOT / "docs" / "social" / "content" / "pinterest" / "boards"

BOARDS = [
    "vpns-digital-nomads",
    "home-office-setup",
    "budget-home-office",
    "laptops-tech-gear",
    "productivity-tips",
    "remote-work-tools",
    "web-hosting",
    "digital-nomad-finance",
    "travel-remote-workers",
    "freelance-business-tools",
]

# JPEG quality (80-85 is good balance)
JPEG_QUALITY = 82

def convert_images():
    """Convert WebP images to JPEG."""
    print("=" * 60)
    print("Converting WebP to JPEG")
    print(f"Quality: {JPEG_QUALITY}")
    print("=" * 60)

    total_converted = 0
    total_saved_bytes = 0

    for board in BOARDS:
        dec_dir = PINS_DIR / board / "dec"
        if not dec_dir.exists():
            continue

        converted = 0
        board_saved = 0

        for webp_file in dec_dir.glob("*.webp"):
            jpg_file = webp_file.with_suffix(".jpg")

            # Get original size
            original_size = webp_file.stat().st_size

            # Convert
            img = Image.open(webp_file)
            # Convert to RGB (JPEG doesn't support alpha)
            if img.mode in ('RGBA', 'P'):
                img = img.convert('RGB')
            img.save(jpg_file, "JPEG", quality=JPEG_QUALITY, optimize=True)

            # Get new size
            new_size = jpg_file.stat().st_size
            board_saved += (new_size - original_size)

            # Delete WebP
            webp_file.unlink()
            converted += 1

        total_converted += converted
        total_saved_bytes += board_saved
        print(f"  {board}: {converted} images converted")

    print(f"\nTotal: {total_converted} images")
    if total_saved_bytes > 0:
        print(f"Size increase: +{total_saved_bytes / 1024:.1f} KB")
    else:
        print(f"Size saved: {abs(total_saved_bytes) / 1024:.1f} KB")

def update_csvs():
    """Update CSVs to reference .jpg instead of .webp."""
    print("\n" + "=" * 60)
    print("Updating CSVs")
    print("=" * 60)

    for board in BOARDS:
        csv_path = BOARDS_DIR / board / "dec-2025-zoho.csv"
        if not csv_path.exists():
            continue

        with open(csv_path, 'r', encoding='utf-8') as f:
            content = f.read()

        updated = content.replace('.webp', '.jpg')

        with open(csv_path, 'w', encoding='utf-8') as f:
            f.write(updated)

        changes = content.count('.webp')
        print(f"  {board}: {changes} URLs updated")

def main():
    convert_images()
    update_csvs()
    print("\n" + "=" * 60)
    print("Done! All images converted to JPEG.")
    print("=" * 60)

if __name__ == "__main__":
    main()
