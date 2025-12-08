#!/usr/bin/env python3
"""
Fix CTA buttons in article files to use AffiliateButton component.
Converts inline <a> tags with specific styling to AffiliateButton components.
"""

import re
import os
from pathlib import Path

# Files to process
files_to_fix = [
    "src/pages/tools/best-budgeting-apps-for-remote-workers.astro",
    "src/pages/tools/best-time-tracking-software-for-billing-clients.astro",
    "src/pages/tools/best-retirement-planning-apps-for-freelancers.astro",
    "src/pages/tools/best-static-site-hosting-for-developers.astro",
    "src/pages/tools/best-email-hosting-for-small-businesses.astro",
    "src/pages/tools/best-cdn-services-for-faster-websites.astro",
    "src/pages/tools/best-crm-software-for-freelancers.astro",
    "src/pages/tools/best-scheduling-tools-for-remote-teams.astro",
    "src/pages/tools/best-browser-extensions-for-privacy.astro",
    "src/pages/tools/best-encrypted-messaging-apps-for-remote-teams.astro",
    "src/pages/tools/best-dns-services-for-privacy-and-speed.astro",
]

# URL to /go/ path mapping
url_mappings = {
    # AI Writing
    "https://www.jasper.ai/": "/go/jasper",
    "https://writesonic.com/": "/go/writesonic",
    "https://www.copy.ai/": "/go/copy-ai",
    # Budgeting
    "https://www.ynab.com/": "/go/ynab",
    "https://www.rocketmoney.com/": "/go/rocket-money",
    # Time Tracking
    "https://toggl.com/track/": "/go/toggl",
    "https://www.getharvest.com/": "/go/harvest",
    "https://clockify.me/": "/go/clockify",
    "https://www.timedoctor.com/": "/go/time-doctor",
    "https://timingapp.com/": "/go/timing",
    # Retirement
    "https://www.betterment.com/": "/go/betterment",
    "https://www.wealthfront.com/": "/go/wealthfront",
    "https://www.acorns.com/": "/go/acorns",
    # Static Hosting
    "https://www.netlify.com/": "/go/netlify",
    "https://vercel.com/": "/go/vercel",
    "https://pages.cloudflare.com/": "/go/cloudflare-pages",
    "https://pages.github.com/": "/go/github-pages",
    "https://render.com/": "/go/render",
    "https://surge.sh/": "/go/surge",
    # Email Hosting
    "https://workspace.google.com/": "/go/google-workspace",
    "https://www.microsoft.com/en-us/microsoft-365/business": "/go/microsoft-365",
    "https://www.zoho.com/mail/": "/go/zoho-mail",
    # CDN
    "https://www.cloudflare.com/": "/go/cloudflare",
    "https://www.fastly.com/": "/go/fastly",
    "https://bunny.net/": "/go/bunnycdn",
    "https://www.keycdn.com/": "/go/keycdn",
    "https://aws.amazon.com/cloudfront/": "/go/cloudfront",
    # CRM
    "https://www.hubspot.com/products/crm": "/go/hubspot",
    "https://www.pipedrive.com/": "/go/pipedrive",
    "https://www.notion.so/": "/go/notion",
    "https://www.zoho.com/crm/": "/go/zoho-crm",
    "https://www.freshworks.com/crm/": "/go/freshworks",
    # Scheduling
    "https://calendly.com/": "/go/calendly",
    "https://acuityscheduling.com/": "/go/acuity",
    "https://cal.com/": "/go/cal-com",
    # Browser Extensions / Privacy
    "https://nordpass.com/": "/go/nordpass",
    "https://proton.me/pass": "/go/proton-pass",
    "https://nordvpn.com/": "/go/nordvpn",
}

# Regex to match inline CTA buttons
# Matches: <div class="not-prose my-8">...<a href="URL" ... class="inline-flex...">TEXT<svg...></svg></a></div>
cta_pattern = re.compile(
    r'<div class="not-prose my-8">\s*'
    r'<a\s+href="([^"]+)"\s+'
    r'target="_blank"\s+'
    r'rel="[^"]*"\s+'
    r'class="inline-flex items-center gap-2[^"]*"[^>]*>\s*'
    r'([^<]+)\s*'
    r'<svg[^>]*>.*?</svg>\s*'
    r'</a>\s*'
    r'</div>',
    re.DOTALL
)

# Also match the variant with slightly different attribute order
cta_pattern2 = re.compile(
    r'<div class="not-prose my-8">\s*'
    r'<a\s+'
    r'href="([^"]+)"\s+'
    r'target="_blank"\s+'
    r'rel="[^"]*"\s+'
    r'class="inline-flex[^"]*"[^>]*>\s*'
    r'([^<]+)\s*'
    r'<svg[^>]*>.*?</svg>\s*'
    r'</a>\s*'
    r'</div>',
    re.DOTALL
)

def get_program_name(url):
    """Extract program name from URL for the program prop."""
    for u, path in url_mappings.items():
        if url.startswith(u.rstrip('/')):
            return path.split('/')[-1]
    # Default: extract domain name
    match = re.search(r'https?://(?:www\.)?([^/]+)', url)
    if match:
        return match.group(1).split('.')[0]
    return "affiliate"

def convert_cta(match):
    """Convert a CTA match to AffiliateButton component."""
    url = match.group(1)
    text = match.group(2).strip()

    # Get the /go/ path
    go_path = url_mappings.get(url)
    if not go_path:
        # Try without trailing slash
        go_path = url_mappings.get(url.rstrip('/') + '/')
    if not go_path:
        go_path = url_mappings.get(url.rstrip('/'))
    if not go_path:
        # Use direct URL as fallback
        go_path = url
        print(f"  WARNING: No mapping for {url}, using direct URL")

    program = get_program_name(url)

    return f'<AffiliateButton href="{go_path}" text="{text}" program="{program}"/>'

def add_import_if_missing(content):
    """Add AffiliateButton import if not present."""
    if 'import AffiliateButton' in content:
        return content

    # Find the first import line and add after imports block
    import_line = 'import AffiliateButton from "@components/article/AffiliateButton.astro";\n'

    # Add after the opening ---
    if content.startswith('---'):
        return content.replace('---\n', '---\n' + import_line, 1)

    return content

def process_file(filepath):
    """Process a single file."""
    print(f"Processing: {filepath}")

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content

    # Add import
    content = add_import_if_missing(content)

    # Replace CTA buttons
    content, count1 = cta_pattern.subn(convert_cta, content)
    content, count2 = cta_pattern2.subn(convert_cta, content)

    total_replacements = count1 + count2

    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"  Updated: {total_replacements} CTA buttons replaced")
    else:
        print(f"  No changes needed")

    return total_replacements

def main():
    base_path = Path("C:/My Stuff/floatjet")

    total = 0
    for file in files_to_fix:
        filepath = base_path / file
        if filepath.exists():
            total += process_file(filepath)
        else:
            print(f"File not found: {filepath}")

    print(f"\nTotal CTA buttons converted: {total}")

if __name__ == "__main__":
    main()
