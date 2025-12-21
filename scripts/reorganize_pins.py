#!/usr/bin/env python3
"""
Reorganize Pinterest pin images into month-based folders.
Moves images from:
  public/images/pins/[board]/[image].webp
To:
  public/images/pins/[board]/dec/[image].webp

Also updates CSVs with new image paths.
"""

import os
import shutil
from pathlib import Path

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

def reorganize_images():
    """Move images to dec/ subfolders."""
    print("=" * 60)
    print("Reorganizing pin images into dec/ folders")
    print("=" * 60)

    for board in BOARDS:
        board_dir = PINS_DIR / board
        dec_dir = board_dir / "dec"

        if not board_dir.exists():
            print(f"  Skipping {board} (no folder)")
            continue

        # Create dec/ folder
        dec_dir.mkdir(exist_ok=True)

        # Move all .webp files to dec/
        moved = 0
        for img in board_dir.glob("*.webp"):
            dest = dec_dir / img.name
            shutil.move(str(img), str(dest))
            moved += 1

        print(f"  {board}: moved {moved} images to dec/")

    print()

def update_csvs():
    """Update CSVs with new image paths."""
    print("=" * 60)
    print("Updating CSVs with new image paths")
    print("=" * 60)

    for board in BOARDS:
        csv_path = BOARDS_DIR / board / "dec-2025-zoho.csv"

        if not csv_path.exists():
            print(f"  Skipping {board} (no CSV)")
            continue

        # Read CSV
        with open(csv_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Replace image paths: /[board]/ -> /[board]/dec/
        old_pattern = f"/images/pins/{board}/"
        new_pattern = f"/images/pins/{board}/dec/"

        updated_content = content.replace(old_pattern, new_pattern)

        # Write updated CSV
        with open(csv_path, 'w', encoding='utf-8') as f:
            f.write(updated_content)

        changes = content.count(old_pattern)
        print(f"  {board}: updated {changes} image URLs")

    print()

def main():
    reorganize_images()
    update_csvs()
    print("=" * 60)
    print("Done! Pin images reorganized into dec/ folders.")
    print("New structure: public/images/pins/[board]/dec/[image].webp")
    print("=" * 60)

if __name__ == "__main__":
    main()
