#!/usr/bin/env python3
"""
Pinterest Pin Generator for FloatJet
Generates stunning 1000x1500 branded pins with unique board templates.
"""

import csv
import os
import re
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageFilter, ImageEnhance

# Paths
PROJECT_ROOT = Path(__file__).parent.parent
FONTS_DIR = PROJECT_ROOT / "public" / "fonts"
IMAGES_DIR = PROJECT_ROOT / "public" / "images"
UNSPLASH_DIR = IMAGES_DIR / "unsplash"
BOARDS_DIR = PROJECT_ROOT / "docs" / "social" / "content" / "pinterest" / "boards"
OUTPUT_DIR = PROJECT_ROOT / "public" / "images" / "pins"

# Pin dimensions (800x1200 for smaller file size, still good quality)
PIN_WIDTH = 800
PIN_HEIGHT = 1200

# FloatJet brand colors
COLORS = {
    "ocean_deep": (15, 76, 92),
    "jet_stream": (56, 163, 165),
    "sky_light": (128, 206, 215),
    "sand": (224, 251, 252),
    "white": (255, 255, 255),
    "black": (0, 0, 0),
    "alert": (193, 18, 31),
    "gold": (212, 160, 62),
    "purple": (124, 58, 237),
    "coral": (255, 107, 107),
}

# Board configurations with background images and accent colors
BOARD_CONFIG = {
    "vpns-digital-nomads": {
        "bg_image": "category-vpn-security.webp",
        "accent": "alert",
        "overlay_color": (15, 30, 40),
        "overlay_opacity": 0.75,
        "tagline": "SECURITY & PRIVACY",
        "icon_emoji": None,
    },
    "home-office-setup": {
        "bg_image": "category-setup.webp",
        "accent": "jet_stream",
        "overlay_color": (15, 76, 92),
        "overlay_opacity": 0.7,
        "tagline": "WORKSPACE ESSENTIALS",
        "icon_emoji": None,
    },
    "budget-home-office": {
        "bg_image": "category-furniture.webp",
        "accent": "gold",
        "overlay_color": (20, 50, 40),
        "overlay_opacity": 0.75,
        "tagline": "SMART SAVINGS",
        "icon_emoji": None,
    },
    "laptops-tech-gear": {
        "bg_image": "category-computers.webp",
        "accent": "sky_light",
        "overlay_color": (10, 20, 35),
        "overlay_opacity": 0.8,
        "tagline": "TECH & GEAR",
        "icon_emoji": None,
    },
    "productivity-tips": {
        "bg_image": "category-productivity.webp",
        "accent": "jet_stream",
        "overlay_color": (15, 60, 70),
        "overlay_opacity": 0.7,
        "tagline": "PRODUCTIVITY",
        "icon_emoji": None,
    },
    "remote-work-tools": {
        "bg_image": "category-saas-dashboard.webp",
        "accent": "purple",
        "overlay_color": (30, 20, 50),
        "overlay_opacity": 0.8,
        "tagline": "TOOLS & SOFTWARE",
        "icon_emoji": None,
    },
    "web-hosting": {
        "bg_image": "category-hosting-cloud.webp",
        "accent": "sky_light",
        "overlay_color": (10, 30, 50),
        "overlay_opacity": 0.75,
        "tagline": "HOSTING & CLOUD",
        "icon_emoji": None,
    },
    "digital-nomad-finance": {
        "bg_image": "category-finance-charts.webp",
        "accent": "gold",
        "overlay_color": (20, 40, 35),
        "overlay_opacity": 0.8,
        "tagline": "MONEY & FINANCE",
        "icon_emoji": None,
    },
    "travel-remote-workers": {
        "bg_image": "category-travel.webp",
        "accent": "coral",
        "overlay_color": (40, 30, 30),
        "overlay_opacity": 0.65,
        "tagline": "TRAVEL & DESTINATIONS",
        "icon_emoji": None,
    },
    "freelance-business-tools": {
        "bg_image": "category-communication.webp",
        "accent": "jet_stream",
        "overlay_color": (15, 50, 60),
        "overlay_opacity": 0.8,
        "tagline": "FREELANCE BUSINESS",
        "icon_emoji": None,
    },
}


def load_font(size, bold=False):
    """Load font at specified size. Uses Arial Bold for impact."""
    # Try Arial Bold first (great for Pinterest pins)
    font_names = [
        "arialbd.ttf",  # Arial Bold
        "arial.ttf",    # Arial Regular
        "C:/Windows/Fonts/arialbd.ttf",
        "C:/Windows/Fonts/arial.ttf",
    ]

    for font_name in font_names:
        try:
            return ImageFont.truetype(font_name, size)
        except:
            continue

    # Fallback to default
    return ImageFont.load_default()


def load_background(image_name):
    """Load and resize background image."""
    image_path = UNSPLASH_DIR / image_name
    try:
        img = Image.open(image_path).convert("RGB")
        # Resize to cover pin dimensions (crop to fit)
        img_ratio = img.width / img.height
        pin_ratio = PIN_WIDTH / PIN_HEIGHT

        if img_ratio > pin_ratio:
            # Image is wider, scale by height
            new_height = PIN_HEIGHT
            new_width = int(PIN_HEIGHT * img_ratio)
        else:
            # Image is taller, scale by width
            new_width = PIN_WIDTH
            new_height = int(PIN_WIDTH / img_ratio)

        img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)

        # Center crop
        left = (new_width - PIN_WIDTH) // 2
        top = (new_height - PIN_HEIGHT) // 2
        img = img.crop((left, top, left + PIN_WIDTH, top + PIN_HEIGHT))

        return img
    except Exception as e:
        print(f"Error loading background {image_name}: {e}")
        # Return solid color fallback
        return Image.new("RGB", (PIN_WIDTH, PIN_HEIGHT), COLORS["ocean_deep"])


def apply_overlay(img, color, opacity):
    """Apply a colored overlay to darken the background."""
    overlay = Image.new("RGB", (PIN_WIDTH, PIN_HEIGHT), color)
    return Image.blend(img, overlay, opacity)


def add_gradient_overlay(img):
    """Add a gradient overlay (darker at top and bottom for text readability)."""
    gradient = Image.new("RGBA", (PIN_WIDTH, PIN_HEIGHT), (0, 0, 0, 0))
    draw = ImageDraw.Draw(gradient)

    # Top gradient (for logo area)
    for y in range(300):
        alpha = int(180 * (1 - y / 300))
        draw.line([(0, y), (PIN_WIDTH, y)], fill=(0, 0, 0, alpha))

    # Bottom gradient (for URL)
    for y in range(PIN_HEIGHT - 200, PIN_HEIGHT):
        progress = (y - (PIN_HEIGHT - 200)) / 200
        alpha = int(200 * progress)
        draw.line([(0, y), (PIN_WIDTH, y)], fill=(0, 0, 0, alpha))

    img = img.convert("RGBA")
    return Image.alpha_composite(img, gradient).convert("RGB")


def extract_headline(description, max_words=8):
    """Extract a punchy headline from the description."""
    text = description.strip('"').strip()
    first_sentence = re.split(r'[.!?]', text)[0].strip()

    # Look for key patterns
    patterns = [
        r'^(\d+\s+[Bb]est\s+.+?)(?:\s+(?:for|in|under|that|to)\b|$)',
        r'^([Bb]est\s+.+?)(?:\s+(?:for|in|under|that|to|compared)\b|$)',
        r'^([Hh]ow\s+to\s+.+?)(?:\s+(?:in|when|that|with)\b|$)',
        r'^(.+?\s+vs\s+.+?)(?:\s+[-–—]|$)',
        r'^(\d+\s+.+?)(?:\s+(?:that|in|for|you)\b|$)',
    ]

    for pattern in patterns:
        match = re.match(pattern, first_sentence, re.IGNORECASE)
        if match:
            headline = match.group(1).strip()
            words = headline.split()[:max_words]
            return ' '.join(words)

    # Default: take first N words
    words = first_sentence.split()[:max_words]
    return ' '.join(words)


def wrap_text_center(text, font, max_width, draw):
    """Wrap text to fit within max_width, centered."""
    words = text.split()
    lines = []
    current_line = []

    for word in words:
        test_line = ' '.join(current_line + [word])
        bbox = draw.textbbox((0, 0), test_line, font=font)
        width = bbox[2] - bbox[0]

        if width <= max_width:
            current_line.append(word)
        else:
            if current_line:
                lines.append(' '.join(current_line))
            current_line = [word]

    if current_line:
        lines.append(' '.join(current_line))

    return lines


def draw_text_with_effects(draw, text, position, font, fill_color, shadow_color=None, shadow_offset=4, outline_color=None, outline_width=2):
    """Draw text with shadow and/or outline effects."""
    x, y = position

    # Draw shadow
    if shadow_color:
        for offset in range(shadow_offset, 0, -1):
            alpha = int(255 * (shadow_offset - offset + 1) / shadow_offset * 0.5)
            shadow = shadow_color[:3] + (alpha,) if len(shadow_color) == 4 else shadow_color
            draw.text((x + offset, y + offset), text, font=font, fill=shadow, anchor="mm")

    # Draw outline
    if outline_color:
        for dx in range(-outline_width, outline_width + 1):
            for dy in range(-outline_width, outline_width + 1):
                if dx != 0 or dy != 0:
                    draw.text((x + dx, y + dy), text, font=font, fill=outline_color, anchor="mm")

    # Draw main text
    draw.text((x, y), text, font=font, fill=fill_color, anchor="mm")


def draw_accent_line(draw, y, accent_color, width=200):
    """Draw a decorative accent line."""
    x_start = (PIN_WIDTH - width) // 2
    x_end = x_start + width

    # Main line
    draw.rectangle([x_start, y, x_end, y + 6], fill=accent_color)

    # Decorative ends
    draw.ellipse([x_start - 8, y - 4, x_start + 8, y + 10], fill=accent_color)
    draw.ellipse([x_end - 8, y - 4, x_end + 8, y + 10], fill=accent_color)


def generate_pin(headline, board_name, output_path, index):
    """Generate a stunning pin image."""
    config = BOARD_CONFIG.get(board_name, BOARD_CONFIG["remote-work-tools"])
    accent_color = COLORS[config["accent"]]

    # Load and process background
    bg = load_background(config["bg_image"])
    bg = apply_overlay(bg, config["overlay_color"], config["overlay_opacity"])

    # Add slight blur for depth
    bg_blurred = bg.filter(ImageFilter.GaussianBlur(radius=2))
    bg = Image.blend(bg, bg_blurred, 0.3)

    # Add gradient overlay for text areas
    bg = add_gradient_overlay(bg)

    # Increase contrast slightly
    enhancer = ImageEnhance.Contrast(bg)
    bg = enhancer.enhance(1.1)

    img = bg.convert("RGBA")
    draw = ImageDraw.Draw(img)

    # Load fonts (scaled for 800x1200)
    font_tagline = load_font(26)
    font_headline = load_font(66)
    font_subtitle = load_font(30)
    font_url = load_font(28)

    # === TAGLINE (top) ===
    tagline_y = 95

    # Tagline background pill
    tagline_text = config["tagline"]
    tagline_bbox = draw.textbbox((0, 0), tagline_text, font=font_tagline)
    tagline_width = tagline_bbox[2] - tagline_bbox[0]
    pill_padding = 20
    pill_x1 = (PIN_WIDTH - tagline_width) // 2 - pill_padding
    pill_x2 = (PIN_WIDTH + tagline_width) // 2 + pill_padding

    # Draw pill background
    draw.rounded_rectangle(
        [pill_x1, tagline_y - 18, pill_x2, tagline_y + 22],
        radius=20,
        fill=accent_color + (230,)
    )

    # Draw tagline text
    draw.text(
        (PIN_WIDTH // 2, tagline_y),
        tagline_text,
        font=font_tagline,
        fill=COLORS["white"],
        anchor="mm"
    )

    # === MAIN HEADLINE ===
    headline_upper = headline.upper()
    lines = wrap_text_center(headline_upper, font_headline, PIN_WIDTH - 100, draw)

    # Calculate vertical position (centered in middle area)
    line_height = 76
    total_height = len(lines) * line_height
    start_y = (PIN_HEIGHT // 2) - (total_height // 2) + 40

    # Draw each line with effects
    for i, line in enumerate(lines[:4]):
        y = start_y + i * line_height

        # Strong shadow for depth
        draw_text_with_effects(
            draw,
            line,
            (PIN_WIDTH // 2, y),
            font_headline,
            fill_color=COLORS["white"],
            shadow_color=(0, 0, 0, 180),
            shadow_offset=6,
            outline_color=(0, 0, 0),
            outline_width=3
        )

    # === ACCENT LINE ===
    line_y = start_y + len(lines[:4]) * line_height + 40
    draw_accent_line(draw, line_y, accent_color, width=250)

    # === SUBTITLE ===
    subtitle = "Tested & Reviewed"
    subtitle_y = line_y + 60

    draw_text_with_effects(
        draw,
        subtitle,
        (PIN_WIDTH // 2, subtitle_y),
        font_subtitle,
        fill_color=COLORS["sand"],
        shadow_color=(0, 0, 0, 150),
        shadow_offset=3
    )

    # === BOTTOM SECTION - LOGO ONLY ===
    logo = None
    logo_path = IMAGES_DIR / "logo.webp"
    try:
        logo = Image.open(logo_path).convert("RGBA")
        # Resize logo to be noticeable (height ~48px for 800px width)
        logo_height = 48
        logo_ratio = logo.width / logo.height
        logo_width = int(logo_height * logo_ratio)
        logo = logo.resize((logo_width, logo_height), Image.Resampling.LANCZOS)
    except Exception as e:
        print(f"Logo loading error: {e}")
        logo = None

    if logo:
        logo_y = PIN_HEIGHT - 70

        # White pill background behind logo
        pill_padding_x = 24
        pill_padding_y = 12
        pill_x1 = (PIN_WIDTH - logo.width) // 2 - pill_padding_x
        pill_x2 = (PIN_WIDTH + logo.width) // 2 + pill_padding_x
        pill_y1 = logo_y - logo.height // 2 - pill_padding_y
        pill_y2 = logo_y + logo.height // 2 + pill_padding_y

        draw.rounded_rectangle(
            [pill_x1, pill_y1, pill_x2, pill_y2],
            radius=35,
            fill=COLORS["white"]
        )

        # Center logo on the pill
        logo_x = (PIN_WIDTH - logo.width) // 2
        logo_y_pos = logo_y - logo.height // 2
        img.paste(logo, (logo_x, logo_y_pos), logo)

    # === DECORATIVE CORNER ACCENTS ===
    corner_size = 48
    corner_thickness = 3
    margin = 32

    # Top-left corner
    draw.rectangle([margin, margin, margin + corner_size, margin + corner_thickness], fill=accent_color + (200,))
    draw.rectangle([margin, margin, margin + corner_thickness, margin + corner_size], fill=accent_color + (200,))

    # Top-right corner
    draw.rectangle([PIN_WIDTH - margin - corner_size, margin, PIN_WIDTH - margin, margin + corner_thickness], fill=accent_color + (200,))
    draw.rectangle([PIN_WIDTH - margin - corner_thickness, margin, PIN_WIDTH - margin, margin + corner_size], fill=accent_color + (200,))

    # Bottom-left corner
    draw.rectangle([margin, PIN_HEIGHT - margin - corner_thickness, margin + corner_size, PIN_HEIGHT - margin], fill=accent_color + (200,))
    draw.rectangle([margin, PIN_HEIGHT - margin - corner_size, margin + corner_thickness, PIN_HEIGHT - margin], fill=accent_color + (200,))

    # Bottom-right corner
    draw.rectangle([PIN_WIDTH - margin - corner_size, PIN_HEIGHT - margin - corner_thickness, PIN_WIDTH - margin, PIN_HEIGHT - margin], fill=accent_color + (200,))
    draw.rectangle([PIN_WIDTH - margin - corner_thickness, PIN_HEIGHT - margin - corner_size, PIN_WIDTH - margin, PIN_HEIGHT - margin], fill=accent_color + (200,))

    # Save as WebP (optimized for small file size)
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    img_rgb = img.convert("RGB")
    # Change extension to .webp
    output_path_webp = str(output_path).replace('.png', '.webp')
    img_rgb.save(output_path_webp, "WEBP", quality=65, method=6)  # method=6 = best compression
    print(f"  Generated: {output_path_webp}")


def process_board(board_name):
    """Process all pins for a board."""
    csv_path = BOARDS_DIR / board_name / "dec-2025-pins.csv"

    if not csv_path.exists():
        print(f"  No CSV found for {board_name}")
        return []

    output_subdir = OUTPUT_DIR / board_name
    generated_pins = []

    with open(csv_path, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for i, row in enumerate(reader, 1):
            description = row.get('text', '')
            link = row.get('link', '')

            if not description:
                continue

            # Extract headline
            headline = extract_headline(description)

            # Generate filename from link
            slug = link.split('/')[-1] if link else f"pin-{i}"
            filename = f"{slug}-{i}.webp"
            output_path = output_subdir / filename.replace('.webp', '.png')  # generate_pin will convert

            # Generate pin
            generate_pin(headline, board_name, output_path, i)

            # Store info for CSV update
            generated_pins.append({
                'index': i,
                'headline': headline,
                'filename': filename,
                'image_url': f"https://floatjet.com/images/pins/{board_name}/{filename}"
            })

    return generated_pins


def main():
    """Main function to generate all pins."""
    print("=" * 60)
    print("FloatJet Pinterest Pin Generator v2.0")
    print("=" * 60)

    # Clear old pins
    import shutil
    if OUTPUT_DIR.exists():
        shutil.rmtree(OUTPUT_DIR)
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    # Process each board
    all_pins = {}
    for board_name in BOARD_CONFIG.keys():
        print(f"\nProcessing: {board_name}")
        pins = process_board(board_name)
        all_pins[board_name] = pins
        print(f"  Generated {len(pins)} pins")

    # Summary
    total = sum(len(pins) for pins in all_pins.values())
    print("\n" + "=" * 60)
    print(f"Total pins generated: {total}")
    print(f"Output directory: {OUTPUT_DIR}")
    print("=" * 60)

    return all_pins


if __name__ == "__main__":
    main()
