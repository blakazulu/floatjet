#!/usr/bin/env python3
"""
Convert Pinterest CSVs to Zoho Social bulk upload format.

Zoho format (NO HEADERS):
Column A: Schedule Time (MM/DD/YYYY HH:MM)
Column B: Post Content (text in double quotes)
Column C: Link (destination URL)
Column D: Media (image URL)
"""

import csv
import os
from pathlib import Path
from datetime import datetime

PROJECT_ROOT = Path(__file__).parent.parent
BOARDS_DIR = PROJECT_ROOT / "docs" / "social" / "content" / "pinterest" / "boards"
OUTPUT_DIR = PROJECT_ROOT / "docs" / "social" / "content" / "pinterest"

# Base URL for images
IMAGE_BASE_URL = "https://floatjet.com/images/pins"

def convert_iso_to_zoho_time(iso_time):
    """Convert ISO 8601 time to Zoho format (MM/DD/YYYY HH:MM)."""
    # Parse: 2025-12-21T13:00:00Z
    try:
        dt = datetime.fromisoformat(iso_time.replace('Z', '+00:00'))
        return dt.strftime("%m/%d/%Y %H:%M")
    except:
        return iso_time

def process_board(board_name):
    """Process a board's CSV and return Zoho-formatted rows."""
    csv_path = BOARDS_DIR / board_name / "dec-2025-pins.csv"

    if not csv_path.exists():
        print(f"  No CSV found for {board_name}")
        return []

    rows = []
    with open(csv_path, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for i, row in enumerate(reader, 1):
            text = row.get('text', '').strip('"')
            link = row.get('link', '')

            # Find the schedule time (check multiple possible columns due to earlier CSV issues)
            schedule_time = ''
            # Check postAtSpecificTime column first
            for key in row.keys():
                if 'postAtSpecificTime' in key:
                    if row[key]:
                        schedule_time = row[key]
                        break
            # If not found, check videoUrls (data got shifted there earlier)
            if not schedule_time and row.get('videoUrls', ''):
                val = row['videoUrls']
                if val and 'T' in val and '-' in val:  # Looks like ISO date
                    schedule_time = val

            # Generate image URL
            slug = link.split('/')[-1] if link else f"pin-{i}"
            filename = f"{slug}-{i}.jpg"
            image_url = f"{IMAGE_BASE_URL}/{board_name}/{filename}"

            # Convert time format
            zoho_time = convert_iso_to_zoho_time(schedule_time)

            # Zoho format: Schedule Time, Post Content, Link, Media
            rows.append({
                'schedule_time': zoho_time,
                'content': text,
                'link': link,
                'media': image_url
            })

    return rows

def write_zoho_csv(board_name, rows, output_path):
    """Write Zoho-formatted CSV (no headers)."""
    with open(output_path, 'w', encoding='utf-8', newline='') as f:
        for row in rows:
            # Format: Schedule Time,"Content",Link,Media
            content = row['content'].replace('"', "'")  # Use single quotes inside
            line = f"{row['schedule_time']},\"{content}\",{row['link']},{row['media']}\n"
            f.write(line)
    print(f"  Created: {output_path} ({len(rows)} pins)")

def main():
    print("=" * 60)
    print("Converting Pinterest CSVs to Zoho Format")
    print("=" * 60)

    boards = [
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

    all_rows = []

    for board in boards:
        print(f"\nProcessing: {board}")
        rows = process_board(board)
        all_rows.extend(rows)

        # Write individual board CSV
        output_path = OUTPUT_DIR / "boards" / board / "dec-2025-zoho.csv"
        write_zoho_csv(board, rows, output_path)

    # Write combined CSV for all boards
    combined_path = OUTPUT_DIR / "dec-2025-pinterest-all-boards-zoho.csv"
    write_zoho_csv("all-boards", all_rows, combined_path)

    print("\n" + "=" * 60)
    print(f"Done! Created Zoho-formatted CSVs.")
    print(f"Individual board CSVs: docs/social/content/pinterest/boards/[board]/dec-2025-zoho.csv")
    print(f"Combined CSV: docs/social/content/pinterest/dec-2025-pinterest-all-boards-zoho.csv")
    print("=" * 60)

if __name__ == "__main__":
    main()
