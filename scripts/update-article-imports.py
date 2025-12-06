"""
Script to update article pages to import metadata from src/data/articles.ts

This script:
1. Finds all article .astro files (excluding [category].astro)
2. Replaces hardcoded metadata with imports from the data file
3. Preserves page-specific content (headings, tables, FAQs, etc.)
"""

import os
import re
from pathlib import Path

# Project root
PROJECT_ROOT = Path(__file__).parent.parent
PAGES_DIR = PROJECT_ROOT / "src" / "pages"

# Sections to process
SECTIONS = ["tools", "gear", "guides", "blog"]

def get_slug_from_filename(filepath: Path) -> str:
    """Extract slug from filename (e.g., 'best-vpn-digital-nomads.astro' -> 'best-vpn-digital-nomads')"""
    return filepath.stem

def get_section_from_path(filepath: Path) -> str:
    """Extract section from path (e.g., 'tools', 'gear', etc.)"""
    return filepath.parent.name

def process_article_file(filepath: Path) -> bool:
    """
    Process a single article file to use imported metadata.
    Returns True if file was modified, False otherwise.
    """
    slug = get_slug_from_filename(filepath)
    section = get_section_from_path(filepath)

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Skip if already using getArticleBySlug
    if 'getArticleBySlug' in content:
        print(f"  SKIP (already updated): {filepath.name}")
        return False

    # Find the frontmatter section (between ---)
    frontmatter_match = re.match(r'^---\n(.*?)\n---', content, re.DOTALL)
    if not frontmatter_match:
        print(f"  ERROR (no frontmatter): {filepath.name}")
        return False

    frontmatter = frontmatter_match.group(1)
    rest_of_file = content[frontmatter_match.end():]

    # Check if this file has the standard metadata pattern
    if 'const title = ' not in frontmatter:
        print(f"  SKIP (no title const): {filepath.name}")
        return False

    # Find all imports
    import_lines = []
    other_lines = []

    lines = frontmatter.split('\n')
    i = 0

    while i < len(lines):
        line = lines[i]
        stripped = line.strip()

        # Collect import statements
        if stripped.startswith('import '):
            import_lines.append(line)
            i += 1
            continue

        # Skip the "// Article metadata" comment
        if stripped == '// Article metadata':
            i += 1
            continue

        # Skip metadata declarations (handle multi-line)
        metadata_patterns = [
            r'^const title\s*=',
            r'^const description\s*=',
            r'^const authorSlug\s*=',
            r'^const pubDate\s*=',
            r'^const readingTime\s*=',
            r'^const image\s*=',
            r'^const imageAlt\s*=',
        ]

        is_metadata = False
        for pattern in metadata_patterns:
            if re.match(pattern, stripped):
                is_metadata = True
                # Handle multi-line declarations - keep consuming until semicolon
                while i < len(lines) and not lines[i].rstrip().endswith(';'):
                    i += 1
                i += 1  # Skip the line with semicolon
                break

        if is_metadata:
            continue

        # Skip empty lines between imports and content
        if not stripped and not other_lines:
            i += 1
            continue

        other_lines.append(line)
        i += 1

    # Build new frontmatter
    new_lines = []

    # Add existing imports
    new_lines.extend(import_lines)

    # Add the data import
    new_lines.append('import { getArticleBySlug } from "../../data/articles";')

    # Add blank line
    new_lines.append('')

    # Add article lookup with destructuring
    new_lines.append('// Get article metadata from central data file')
    new_lines.append(f'const article = getArticleBySlug("{slug}", "{section}")!;')
    new_lines.append('const {{ title, description, authorSlug, readingTime, image, imageAlt }} = article;')
    new_lines.append('const pubDate = new Date(article.pubDate);')

    # Add remaining content (headings, faqs, etc.)
    if other_lines:
        # Ensure blank line before other content
        if other_lines[0].strip():
            new_lines.append('')
        new_lines.extend(other_lines)

    # Reconstruct the file
    new_frontmatter = '\n'.join(new_lines)
    new_content = f'---\n{new_frontmatter}\n---{rest_of_file}'

    # Write the updated file
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)

    print(f"  UPDATED: {filepath.name}")
    return True

def main():
    """Process all article files in all sections."""
    total_updated = 0
    total_skipped = 0
    total_errors = 0

    for section in SECTIONS:
        section_dir = PAGES_DIR / section
        if not section_dir.exists():
            print(f"Section directory not found: {section_dir}")
            continue

        print(f"\n=== Processing {section.upper()} ===")

        # Get all .astro files except [category].astro
        article_files = [
            f for f in section_dir.glob("*.astro")
            if f.name != "[category].astro"
        ]

        print(f"Found {len(article_files)} article files")

        for filepath in sorted(article_files):
            try:
                if process_article_file(filepath):
                    total_updated += 1
                else:
                    total_skipped += 1
            except Exception as e:
                print(f"  ERROR: {filepath.name} - {e}")
                total_errors += 1

    print(f"\n=== SUMMARY ===")
    print(f"Updated: {total_updated}")
    print(f"Skipped: {total_skipped}")
    print(f"Errors:  {total_errors}")

if __name__ == "__main__":
    main()
