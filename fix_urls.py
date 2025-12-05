#!/usr/bin/env python3
"""Fix remaining broken URLs from em-dash script."""

import os
import re

FIXES = [
    # Specific broken URLs
    (r'ics\. Uci\. Edu', 'ics.uci.edu'),
    (r'www\. Cdc\. Gov', 'www.cdc.gov'),
    (r'www\. Ncbi\. Nlm\. Nih\. Gov', 'www.ncbi.nlm.nih.gov'),
    (r'www\. Aoa\. Org', 'www.aoa.org'),
    (r'www\. Osha\. Gov', 'www.osha.gov'),
    (r'www\. Mayoclinicproceedings\. Org', 'www.mayoclinicproceedings.org'),
    (r'www\. Apa\. Org', 'www.apa.org'),
    (r'www\. Who\. Int', 'www.who.int'),
    (r'www\. Bls\. Gov', 'www.bls.gov'),
    (r'www\. Fda\. Gov', 'www.fda.gov'),
    (r'www\. Ftc\. Gov', 'www.ftc.gov'),
    (r'www\. Sec\. Gov', 'www.sec.gov'),
    (r'www\. Epa\. Gov', 'www.epa.gov'),
    (r'www\. Fcc\. Gov', 'www.fcc.gov'),
    (r'www\. Nist\. Gov', 'www.nist.gov'),

    # Generic pattern: any word. Word. Word in URLs
    # Match within href="https://..." context
]

def fix_url_spaces(content):
    """Fix spaces in URLs like https://www. Example. Com/path"""
    # Find all href="https://..." and fix spaces in them
    def fix_href(match):
        url = match.group(1)
        # Remove " ." patterns (space before dot)
        fixed = re.sub(r'\s+\.', '.', url)
        # Remove ". " patterns followed by lowercase (space after dot in domain)
        fixed = re.sub(r'\.\s+([a-z])', r'.\1', fixed)
        # Fix ". C" -> ".c" etc for TLDs
        fixed = re.sub(r'\.\s+([A-Z])([a-z]+)(?=[/"\s])', lambda m: '.' + m.group(1).lower() + m.group(2), fixed)
        return f'href="{fixed}"'

    return re.sub(r'href="(https?://[^"]+)"', fix_href, content)

def fix_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except:
        return 0

    original = content

    # Apply specific fixes
    for pattern, replacement in FIXES:
        content = re.sub(pattern, replacement, content, flags=re.IGNORECASE)

    # Apply general URL space fixing
    content = fix_url_spaces(content)

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return 1
    return 0

def main():
    src_dir = r"C:\My Stuff\floatjet\src"
    fixed = 0
    for root, dirs, files in os.walk(src_dir):
        dirs[:] = [d for d in dirs if d != 'node_modules']
        for f in files:
            if f.endswith(('.astro', '.ts', '.tsx', '.js', '.jsx')):
                if fix_file(os.path.join(root, f)):
                    print(f"Fixed: {f}")
                    fixed += 1
    print(f"\nTotal: {fixed} files fixed")

if __name__ == "__main__":
    main()
