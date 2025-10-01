# Stevens Online - Global Font Management System

## Overview

This system provides centralized font management for the entire Stevens Online application. Change fonts in one place and they'll be applied everywhere automatically.

## 📁 Files

- `src/config/fonts.js` - Main font configuration
- `src/globals.css` - CSS custom properties (`:root` variables)
- `tailwind.config.js` - Tailwind font family definitions

## 🎯 Quick Font Changes

### To Change Header Font Site-Wide:
1. Edit `src/config/fonts.js`
2. Update the `header` property:
   ```javascript
   header: ['Your New Font', 'sans-serif'],
   ```
3. Update Google Fonts URL if needed
4. Done! All headers will use the new font.

### To Change Navigation Font:
1. Edit `src/config/fonts.js`
2. Update the `navigation` property:
   ```javascript
   navigation: ['Your New Font', 'sans-serif'],
   ```

### To Change Body Text Font:
1. Edit `src/config/fonts.js`
2. Update the `body` property:
   ```javascript
   body: ['Your New Font', 'sans-serif'],
   ```

## 🔧 Usage Methods

### Method 1: Tailwind Classes (Recommended)
```jsx
<h1 className="font-stevens-headers">Header Text</h1>
<nav className="font-stevens-nav">Navigation</nav>
<p className="font-stevens-body">Body text</p>
<div className="font-stevens-display">Display text</div>
```

### Method 2: CSS Variables (Direct CSS)
```css
.my-header {
  font-family: var(--font-header);
  font-weight: var(--weight-bold);
}

.my-nav {
  font-family: var(--font-navigation);
  font-weight: var(--weight-bold);
}
```

### Method 3: JavaScript/React (Dynamic)
```javascript
import { FONTS, getFontCSS } from '@/config/fonts';

// Get font array
const headerFont = FONTS.header;

// Get CSS string
const headerCSS = getFontCSS('header');

// Use in style prop
<div style={{ fontFamily: FONTS.header.join(', ') }}>
```

## 📊 Available Font Types

| Type | Tailwind Class | CSS Variable | Purpose |
|------|----------------|--------------|---------|
| Headers | `font-stevens-headers` | `var(--font-header)` | All headings (h1-h6) |
| Navigation | `font-stevens-nav` | `var(--font-navigation)` | Navbar, menus |
| Body | `font-stevens-body` | `var(--font-body)` | Paragraphs, content |
| Display | `font-stevens-display` | `var(--font-display)` | Large text, banners |
| Serif | `font-stevens-serif` | `var(--font-serif)` | Traditional serif |
| Sans | `font-stevens-sans` | `var(--font-sans)` | Clean sans-serif |
| Mono | `font-stevens-mono` | `var(--font-mono)` | Code, monospace |

## 🎨 Font Weights

| Weight | Tailwind | CSS Variable | Value |
|--------|----------|--------------|-------|
| Thin | `font-thin` | `var(--weight-thin)` | 100 |
| Light | `font-light` | `var(--weight-light)` | 300 |
| Normal | `font-normal` | `var(--weight-normal)` | 400 |
| Medium | `font-medium` | `var(--weight-medium)` | 500 |
| Semibold | `font-semibold` | `var(--weight-semibold)` | 600 |
| Bold | `font-bold` | `var(--weight-bold)` | 700 |
| Extrabold | `font-extrabold` | `var(--weight-extrabold)` | 800 |
| Black | `font-black` | `var(--weight-black)` | 900 |

## 🔄 Adding New Fonts

1. **Add to Google Fonts URL** (if using Google Fonts):
   ```javascript
   export const GOOGLE_FONTS_URL = "...&family=New+Font:wght@400;700&display=swap";
   ```

2. **Update index.html** with new Google Fonts URL

3. **Add to FONTS object**:
   ```javascript
   export const FONTS = {
     // existing fonts...
     myNewFont: ['New Font Name', 'fallback', 'sans-serif'],
   };
   ```

4. **Add to CSS variables** (optional):
   ```css
   :root {
     --font-mynew: 'New Font Name', fallback, sans-serif;
   }
   ```

5. **Add to Tailwind config** (automatic via fonts.js import)

## 🚀 Benefits

- ✅ **Single source of truth** - Change fonts in one place
- ✅ **Type safety** - All fonts defined and documented
- ✅ **Consistent naming** - Clear, predictable class names
- ✅ **Fallback support** - CSS variables + Tailwind classes
- ✅ **Easy maintenance** - No searching through files
- ✅ **Team-friendly** - Clear documentation and structure

## 📝 Examples

### Complete Header Update
```javascript
// In src/config/fonts.js
export const FONTS = {
  header: ['Roboto Slab', 'serif'], // Changed from Saira Extra Condensed
  // ... other fonts stay the same
};
```
Result: ALL headers site-wide now use Roboto Slab!

### Font Weight Adjustment
```javascript
// In src/config/fonts.js
export const FONT_STYLES = {
  header: {
    fontFamily: FONTS.header,
    fontWeight: FONT_WEIGHTS.extrabold, // Changed from bold
    fontStyle: 'normal',
  },
  // ... other styles
};
```
Result: All headers now use font-weight: 800!

## 🔧 Troubleshooting

- **Font not loading?** Check Google Fonts URL in index.html
- **Tailwind not working?** Restart dev server after config changes
- **CSS variables not working?** Check browser support or use Tailwind fallback
- **Inconsistent fonts?** Ensure all components use the standardized classes
