/**
 * Stevens Online - Global Font Configuration
 * 
 * This file contains all font family definitions for the entire application.
 * Change fonts here and they'll be applied everywhere automatically.
 */

// Google Fonts to load (add to index.html when changing)
export const GOOGLE_FONTS_URL = "https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100..900;1,100..900&family=Saira+Extra+Condensed:wght@100;200;300;400;500;600;700;800;900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap";

// Central Font Configuration
export const FONTS = {
  // Primary fonts - change these to update site-wide
  header: ['Saira Extra Condensed', 'sans-serif'],
  navigation: ['Saira Extra Condensed', 'sans-serif'], 
  body: ['Open Sans', 'sans-serif'],
  display: ['Montserrat', 'sans-serif'],
  
  // Secondary/utility fonts
  serif: ['Georgia', 'Times New Roman', 'serif'],
  sans: ['Helvetica Neue', 'Arial', 'sans-serif'],
  monospace: ['ui-monospace', 'SFMono-Regular', 'Consolas', 'monospace'],
  
  // Legacy/specific use cases
  bitter: ['Bitter', 'serif'],
};

// Font weights (consistent across the app)
export const FONT_WEIGHTS = {
  thin: '100',
  extralight: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
};

// Default font styles for different text types
export const FONT_STYLES = {
  header: {
    fontFamily: FONTS.header,
    fontWeight: FONT_WEIGHTS.bold, // Headers remain bold for hierarchy
    fontStyle: 'normal',
  },
  navigation: {
    fontFamily: FONTS.navigation,
    fontWeight: FONT_WEIGHTS.normal, // Navigation uses normal weight
    fontStyle: 'normal',
  },
  body: {
    fontFamily: FONTS.body,
    fontWeight: FONT_WEIGHTS.normal,
    fontStyle: 'normal',
  },
  display: {
    fontFamily: FONTS.display,
    fontWeight: FONT_WEIGHTS.normal, // Display text uses normal weight
    fontStyle: 'normal',
  },
  // New: Saira Extra Condensed for body-like content
  content: {
    fontFamily: FONTS.header, // Uses Saira Extra Condensed
    fontWeight: FONT_WEIGHTS.normal, // 400 weight
    fontStyle: 'normal',
  },
  // New: Saira Extra Condensed for labels/captions
  label: {
    fontFamily: FONTS.header, // Uses Saira Extra Condensed
    fontWeight: FONT_WEIGHTS.normal, // 400 weight
    fontStyle: 'normal',
  },
};

// Helper function to get font CSS string
export const getFontCSS = (type) => {
  const style = FONT_STYLES[type];
  if (!style) return '';
  
  return `font-family: ${style.fontFamily.join(', ')}; font-weight: ${style.fontWeight}; font-style: ${style.fontStyle};`;
};

// Helper function to get Tailwind font family array
export const getTailwindFont = (type) => {
  return FONTS[type] || FONTS.body;
};

// Export for easy access
export default FONTS;
