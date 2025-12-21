#!/usr/bin/env python3
"""
Fix Pinterest CSV posting times:
1. Minimum time is today 15:00
2. At least 15 minutes between any two posts
"""

import os
from pathlib import Path
from datetime import datetime, timedelta
import re

PROJECT_ROOT = Path(__file__).parent.parent
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

# Minimum posting time
MIN_TIME = datetime(2025, 12, 21, 15, 0)
# Interval between posts
INTERVAL = timedelta(minutes=15)

def parse_time(time_str):
    """Parse MM/DD/YYYY HH:MM format."""
    return datetime.strptime(time_str, "%m/%d/%Y %H:%M")

def format_time(dt):
    """Format to MM/DD/YYYY HH:MM."""
    return dt.strftime("%m/%d/%Y %H:%M")

def read_csv(path):
    """Read CSV and return list of (time, rest_of_line) tuples."""
    rows = []
    with open(path, 'r', encoding='utf-8') as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            # Split on first comma to get time
            match = re.match(r'^(\d{2}/\d{2}/\d{4} \d{2}:\d{2}),(.*)$', line)
            if match:
                time_str = match.group(1)
                rest = match.group(2)
                rows.append({
                    'time': parse_time(time_str),
                    'rest': rest,
                    'original': line
                })
    return rows

def write_csv(path, rows):
    """Write rows back to CSV."""
    with open(path, 'w', encoding='utf-8', newline='') as f:
        for row in rows:
            f.write(f"{format_time(row['time'])},{row['rest']}\n")

def main():
    print("=" * 60)
    print("Fixing Pinterest CSV posting times")
    print(f"Minimum time: {format_time(MIN_TIME)}")
    print(f"Interval: {INTERVAL.seconds // 60} minutes")
    print("=" * 60)

    # Collect all posts from all boards
    all_posts = []
    for board in BOARDS:
        csv_path = BOARDS_DIR / board / "dec-2025-zoho.csv"
        if not csv_path.exists():
            continue
        rows = read_csv(csv_path)
        for row in rows:
            row['board'] = board
            row['csv_path'] = csv_path
            all_posts.append(row)

    print(f"\nTotal posts: {len(all_posts)}")

    # Sort by time
    all_posts.sort(key=lambda x: x['time'])

    # Fix times
    current_time = MIN_TIME
    changes = 0

    for post in all_posts:
        original_time = post['time']

        # If post is before minimum time, move it
        if post['time'] < MIN_TIME:
            post['time'] = current_time
            current_time += INTERVAL
            changes += 1
        # If post conflicts with current_time, move it
        elif post['time'] < current_time:
            post['time'] = current_time
            current_time += INTERVAL
            changes += 1
        else:
            # Post is fine, update current_time for next check
            current_time = post['time'] + INTERVAL

    print(f"Times adjusted: {changes}")

    # Group posts back by board and write
    for board in BOARDS:
        csv_path = BOARDS_DIR / board / "dec-2025-zoho.csv"
        if not csv_path.exists():
            continue

        board_posts = [p for p in all_posts if p['board'] == board]
        # Sort by time again for this board
        board_posts.sort(key=lambda x: x['time'])

        write_csv(csv_path, board_posts)
        print(f"  {board}: {len(board_posts)} posts")

    print("\n" + "=" * 60)
    print("Done! All CSVs updated.")
    print("=" * 60)

if __name__ == "__main__":
    main()
