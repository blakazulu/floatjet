# FloatJet Accessibility Guidelines (WCAG 2.2 Level AA)

## 1. Overview

FloatJet is committed to being accessible to everyone, including users with disabilities. We adhere to the **Web Content
Accessibility Guidelines (WCAG) 2.2 Level AA**.

## 2. Perceivable

*Information and user interface components must be presentable to users in ways they can perceive.*

### 1.1 Text Alternatives

- **Images:** All non-decorative images must have descriptive `alt` text.
- **Icons:** Interactive icons (buttons) must have `aria-label` or screen-reader-only text. Decorative icons must use
  `aria-hidden="true"`.

### 1.3 Adaptable

- **Semantic HTML:** Use correct heading hierarchy (`h1` > `h2` > `h3`). Never skip levels.
- **Landmarks:** Use `<nav>`, `<main>`, `<aside>`, `<footer>` to define page structure.

### 1.4 Distinguishable

- **Contrast:**
    - **Normal Text:** Minimum **4.5:1** contrast ratio against background.
    - **Large Text (18pt+ or 14pt bold):** Minimum **3:1** contrast ratio.
    - **UI Components (Borders/Icons):** Minimum **3:1** contrast ratio.
- **Color Independence:** Color must not be the only visual means of conveying information (e.g., use icons or text
  labels for errors, not just red borders).

## 3. Operable

*User interface components and navigation must be operable.*

### 2.1 Keyboard Accessible

- **Focus Visible:** All interactive elements must have a clearly visible focus indicator (CSS `outline` or `ring`). *
  *Never** remove outline without providing a custom alternative.
- **No Keyboard Traps:** Users must be able to tab in and out of all components.

### 2.4 Navigable

- **Bypass Blocks:** Include a "Skip to Content" link at the top of the page.
- **Page Titles:** Each page must have a unique, descriptive `<title>`.
- **Focus Order:** The tab order must follow the logical reading order.

### 2.5 Input Modalities (WCAG 2.2 Updates)

- **Target Size (Minimum):** Interactive targets should be at least **24x24 CSS pixels**.
    - *FloatJet Standard:* We aim for **44x44px** (Apple/Google standard) for touch targets.
- **Dragging Movements:** Any action involving dragging (e.g., sliders) must have a simple pointer alternative (e.g.,
  tap to jump).

## 4. Understandable

*Information and the operation of user interface must be understandable.*

### 3.2 Predictable

- **Consistent Navigation:** Navigation mechanisms must be consistent across the site.
- **On Input:** Changing a setting should not automatically cause a change of context (e.g., submitting a form just by
  selecting a dropdown option) without warning.

### 3.3 Input Assistance

- **Error Identification:** Errors must be described in text and identified.
- **Labels or Instructions:** Inputs must have visible labels. Placeholders are **not** replacements for labels.

## 5. Robust

*Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive
technologies.*

### 4.1 Compatible

- **Parsing:** IDs must be unique on the page to prevent ARIA errors.
- **Name, Role, Value:** Custom components must expose their name, role, and current value to assistive technology (
  using ARIA attributes correctly).

## 6. Implementation Checklist

- [ ] Run Lighthouse Accessibility Audit on every build.
- [ ] Test with keyboard navigation (Tab, Enter, Space, Esc).
- [ ] Verify color contrast using a contrast checker tool.
- [ ] Ensure all images have `alt` attributes.
- [ ] Check touch target sizes on mobile view.
