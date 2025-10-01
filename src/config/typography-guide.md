# Stevens Online Typography Guide

## Font Usage by Content Type

### Saira Extra Condensed (Primary Font)

#### **Headers (font-weight: 700)**
- **Usage:** All headings (h1, h2, h3, h4, h5, h6)
- **Classes:** `font-stevens-headers font-bold`
- **CSS:** `var(--font-header)` with `var(--weight-bold)`
- **Purpose:** Strong visual hierarchy, attention-grabbing

#### **Navigation (font-weight: 400)**
- **Usage:** Main navigation, menu items, breadcrumbs
- **Classes:** `font-stevens-nav font-normal`
- **CSS:** `var(--font-navigation)` with `var(--weight-normal)`
- **Purpose:** Clean, readable navigation that doesn't overpower content

#### **Content Text (font-weight: 400)**
- **Usage:** Descriptions, captions, labels, short text blocks
- **Classes:** `font-stevens-content font-normal`
- **CSS:** `var(--font-content)` with `var(--weight-normal)`
- **Purpose:** Consistent branding for secondary content

#### **Labels & Captions (font-weight: 400)**
- **Usage:** Form labels, image captions, metadata, tags
- **Classes:** `font-stevens-label font-normal`
- **CSS:** `var(--font-label)` with `var(--weight-normal)`
- **Purpose:** Subtle, informative text

### Other Fonts

#### **Body Text (Open Sans, font-weight: 400)**
- **Usage:** Long-form content, paragraphs, articles
- **Classes:** `font-stevens-body font-normal`
- **CSS:** `var(--font-body)` with `var(--weight-normal)`
- **Purpose:** Maximum readability for extended reading

#### **Display Text (Montserrat, varies)**
- **Usage:** Hero text, banners, decorative elements
- **Classes:** `font-stevens-display`
- **CSS:** `var(--font-display)`
- **Purpose:** Distinctive, branded display text

## Recommended Font Sizes

### Saira Extra Condensed Usage

| Element Type | Font Class | Weight | Size Classes | Example Usage |
|--------------|------------|--------|--------------|---------------|
| **Main Headers** | `font-stevens-headers` | `font-bold` | `text-4xl`, `text-5xl`, `text-6xl` | Page titles, section headers |
| **Sub Headers** | `font-stevens-headers` | `font-bold` | `text-2xl`, `text-3xl` | Subsection titles |
| **Small Headers** | `font-stevens-headers` | `font-bold` | `text-lg`, `text-xl` | Card titles, widget headers |
| **Navigation** | `font-stevens-nav` | `font-normal` | `text-base`, `text-lg` | Main nav, dropdowns |
| **Content Labels** | `font-stevens-content` | `font-normal` | `text-sm`, `text-base` | Descriptions, captions |
| **Small Labels** | `font-stevens-label` | `font-normal` | `text-xs`, `text-sm` | Tags, metadata, form labels |

## Complete Examples

### Headers (Bold Weight)
```jsx
<h1 className="font-stevens-headers font-bold text-5xl">Main Page Title</h1>
<h2 className="font-stevens-headers font-bold text-3xl">Section Header</h2>
<h3 className="font-stevens-headers font-bold text-xl">Subsection</h3>
```

### Navigation (Normal Weight)
```jsx
<nav className="font-stevens-nav font-normal text-lg">
  <a href="/">Home</a>
  <a href="/about">About</a>
</nav>
```

### Content Text (Normal Weight)
```jsx
<p className="font-stevens-content font-normal text-base">
  Short descriptive text or captions
</p>

<div className="font-stevens-label font-normal text-sm">
  Form Label or Metadata
</div>
```

### Body Text (Open Sans)
```jsx
<p className="font-stevens-body font-normal text-base leading-relaxed">
  Long-form content and paragraphs for maximum readability
</p>
```

## CSS Variable Usage

```css
/* Headers - Bold */
.my-header {
  font-family: var(--font-header);
  font-weight: var(--weight-bold);
}

/* Navigation - Normal */
.my-nav {
  font-family: var(--font-navigation);
  font-weight: var(--weight-normal);
}

/* Content - Normal */
.my-content {
  font-family: var(--font-content);
  font-weight: var(--weight-normal);
}

/* Labels - Normal */
.my-label {
  font-family: var(--font-label);
  font-weight: var(--weight-normal);
}
```

## Quick Reference

### When to Use Saira Extra Condensed (font-weight: 400):
- ✅ Navigation menus
- ✅ Button text
- ✅ Form labels
- ✅ Captions and metadata
- ✅ Short descriptive text
- ✅ Tags and badges
- ✅ Card descriptions

### When to Use Saira Extra Condensed (font-weight: 700):
- ✅ All headings (h1-h6)
- ✅ Page titles
- ✅ Section headers
- ✅ Important callouts

### When to Use Open Sans:
- ✅ Long paragraphs
- ✅ Article content
- ✅ Blog posts
- ✅ Documentation
- ✅ Terms and conditions

## Migration Tips

### From Bold to Normal Weight:
```jsx
// Before
<nav className="font-stevens-nav font-bold">Navigation</nav>

// After  
<nav className="font-stevens-nav font-normal">Navigation</nav>
```

### Adding Saira Extra Condensed to Content:
```jsx
// Before
<p className="font-stevens-body">Description text</p>

// After (for short descriptions)
<p className="font-stevens-content font-normal">Description text</p>

// Keep Open Sans for long content
<p className="font-stevens-body">Long paragraph content...</p>
```
