"""
Auto-generate docs/article-summey.md from src/data/articles.ts

This script reads the centralized article data and generates a human-readable
markdown summary table. Run this after making changes to articles.ts.

Usage: python scripts/generate-article-summary.py
"""

import re
from pathlib import Path
from datetime import datetime

PROJECT_ROOT = Path(__file__).parent.parent
DATA_FILE = PROJECT_ROOT / "src" / "data" / "articles.ts"
OUTPUT_FILE = PROJECT_ROOT / "docs" / "article-summey.md"

# Author slug to name mapping
AUTHOR_NAMES = {
    "daniel-brooks": "Daniel Brooks",
    "sarah-mitchell": "Sarah Mitchell",
    "marcus-chen": "Marcus Chen",
    "liraz-amir": "Liraz Amir",
}

def parse_articles_ts():
    """Parse articles.ts and extract all article data."""
    content = DATA_FILE.read_text(encoding='utf-8')

    articles = []

    # Match each article object
    pattern = r'\{\s*slug:\s*"([^"]+)",\s*section:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*description:\s*"([^"]+)",\s*authorSlug:\s*"([^"]+)",\s*pubDate:\s*"([^"]+)",\s*readingTime:\s*(\d+),\s*image:\s*"([^"]+)",\s*imageAlt:\s*"([^"]+)",\s*category:\s*"([^"]+)"'

    for match in re.finditer(pattern, content, re.DOTALL):
        slug, section, title, description, authorSlug, pubDate, readingTime, image, imageAlt, category = match.groups()

        # Check if featured
        featured = 'featured: true' in content[match.end():match.end()+50]

        articles.append({
            'slug': slug,
            'section': section,
            'title': title,
            'description': description,
            'authorSlug': authorSlug,
            'authorName': AUTHOR_NAMES.get(authorSlug, authorSlug),
            'pubDate': pubDate,
            'readingTime': int(readingTime),
            'image': image,
            'imageAlt': imageAlt,
            'category': category,
            'featured': featured,
        })

    return articles

def generate_markdown(articles):
    """Generate the markdown content."""
    # Sort by section then category
    section_order = {'blog': 1, 'gear': 2, 'guides': 3, 'tools': 4}
    articles.sort(key=lambda a: (section_order.get(a['section'], 99), a['category'], a['title']))

    lines = [
        "# FloatJet Article Summary",
        "",
        "> **Auto-generated** from `src/data/articles.ts`",
        f"> Last updated: {datetime.now().strftime('%Y-%m-%d %H:%M')}",
        ">",
        "> To regenerate: `python scripts/generate-article-summary.py`",
        "",
        f"**Total Articles:** {len(articles)}",
        "",
        "---",
        "",
        "## Articles by Section",
        "",
    ]

    # Group by section
    sections = {}
    for article in articles:
        section = article['section'].capitalize()
        if section not in sections:
            sections[section] = []
        sections[section].append(article)

    # Generate tables per section
    for section in ['Blog', 'Gear', 'Guides', 'Tools']:
        if section not in sections:
            continue

        section_articles = sections[section]
        lines.append(f"### {section} ({len(section_articles)} articles)")
        lines.append("")
        lines.append("| # | Title | Author | Category | Read Time | Hero Image |")
        lines.append("|---|-------|--------|----------|-----------|------------|")

        for i, article in enumerate(section_articles, 1):
            title = article['title'][:60] + "..." if len(article['title']) > 60 else article['title']
            link = f"/{article['section']}/{article['slug']}"
            image_name = article['image'].split('/')[-1][:30] + "..." if len(article['image'].split('/')[-1]) > 30 else article['image'].split('/')[-1]

            lines.append(f"| {i:03d} | [{title}]({link}) | {article['authorName']} | {article['category'].capitalize()} | {article['readingTime']} min | `{image_name}` |")

        lines.append("")

    # Summary stats
    lines.append("---")
    lines.append("")
    lines.append("## Statistics")
    lines.append("")
    lines.append("### By Section")
    lines.append("| Section | Count |")
    lines.append("|---------|-------|")
    for section in ['Blog', 'Gear', 'Guides', 'Tools']:
        if section in sections:
            lines.append(f"| {section} | {len(sections[section])} |")
    lines.append(f"| **Total** | **{len(articles)}** |")
    lines.append("")

    # By category
    lines.append("### By Category")
    categories = {}
    for article in articles:
        cat = article['category'].capitalize()
        categories[cat] = categories.get(cat, 0) + 1

    lines.append("| Category | Count |")
    lines.append("|----------|-------|")
    for cat, count in sorted(categories.items(), key=lambda x: -x[1]):
        lines.append(f"| {cat} | {count} |")
    lines.append("")

    # By author
    lines.append("### By Author")
    authors = {}
    for article in articles:
        author = article['authorName']
        authors[author] = authors.get(author, 0) + 1

    lines.append("| Author | Count |")
    lines.append("|--------|-------|")
    for author, count in sorted(authors.items(), key=lambda x: -x[1]):
        lines.append(f"| {author} | {count} |")
    lines.append("")

    return "\n".join(lines)

def main():
    print("Parsing articles.ts...")
    articles = parse_articles_ts()
    print(f"Found {len(articles)} articles")

    print("Generating markdown...")
    markdown = generate_markdown(articles)

    print(f"Writing to {OUTPUT_FILE}...")
    OUTPUT_FILE.write_text(markdown, encoding='utf-8')

    print("Done!")

if __name__ == "__main__":
    main()
