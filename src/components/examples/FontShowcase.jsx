import React from 'react';
import { FONTS, getFontCSS } from '@/config/fonts';

/**
 * FontShowcase Component
 * 
 * Demonstrates all available font options in the Stevens Online font system.
 * Use this component to preview font changes before applying them site-wide.
 */
export default function FontShowcase() {
  return (
    <div className="p-8 space-y-8 bg-gray-50">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Stevens Online Font System</h1>
        <p className="text-gray-600">Preview all available fonts and their usage</p>
      </div>

      {/* Tailwind Classes Method */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Method 1: Tailwind Classes (Recommended)</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-stevens-headers text-2xl font-bold text-gray-800">
              Headers: font-stevens-headers
            </h3>
            <code className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
              className="font-stevens-headers"
            </code>
          </div>

          <div>
            <nav className="font-stevens-nav font-normal text-lg text-blue-600">
              Navigation: font-stevens-nav (font-weight: 400)
            </nav>
            <code className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
              className="font-stevens-nav font-normal"
            </code>
          </div>

          <div>
            <p className="font-stevens-content font-normal text-base text-gray-700">
              Content Text: font-stevens-content (Saira Extra Condensed, weight: 400)
            </p>
            <code className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
              className="font-stevens-content font-normal"
            </code>
          </div>

          <div>
            <span className="font-stevens-label font-normal text-sm text-gray-600">
              Label Text: font-stevens-label (Saira Extra Condensed, weight: 400)
            </span>
            <code className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
              className="font-stevens-label font-normal"
            </code>
          </div>

          <div>
            <p className="font-stevens-body text-base text-gray-700">
              Body Text: font-stevens-body - This is regular paragraph text that would be used throughout the site for content.
            </p>
            <code className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
              className="font-stevens-body"
            </code>
          </div>

          <div>
            <div className="font-stevens-display text-xl font-bold text-purple-600">
              Display Text: font-stevens-display
            </div>
            <code className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
              className="font-stevens-display"
            </code>
          </div>
        </div>
      </section>

      {/* CSS Variables Method */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Method 2: CSS Variables</h2>
        <div className="space-y-4">
          <div>
            <h3 style={{ fontFamily: 'var(--font-header)', fontWeight: 'var(--weight-bold)' }} 
                className="text-2xl text-gray-800">
              Headers: var(--font-header)
            </h3>
            <code className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
              font-family: var(--font-header)
            </code>
          </div>

          <div>
            <nav style={{ fontFamily: 'var(--font-navigation)', fontWeight: 'var(--weight-bold)' }} 
                 className="text-lg text-blue-600">
              Navigation: var(--font-navigation)
            </nav>
            <code className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
              font-family: var(--font-navigation)
            </code>
          </div>

          <div>
            <p style={{ fontFamily: 'var(--font-body)' }} 
               className="text-base text-gray-700">
              Body Text: var(--font-body) - This shows how to use CSS variables directly.
            </p>
            <code className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
              font-family: var(--font-body)
            </code>
          </div>
        </div>
      </section>

      {/* JavaScript Method */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Method 3: JavaScript Import</h2>
        <div className="space-y-4">
          <div>
            <h3 style={{ fontFamily: FONTS.header.join(', '), fontWeight: 700 }} 
                className="text-2xl text-gray-800">
              Headers: FONTS.header
            </h3>
            <code className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
              fontFamily: FONTS.header.join(', ')
            </code>
          </div>

          <div>
            <p style={{ fontFamily: FONTS.body.join(', ') }} 
               className="text-base text-gray-700">
              Body Text: FONTS.body - Imported directly from the config file.
            </p>
            <code className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
              fontFamily: FONTS.body.join(', ')
            </code>
          </div>
        </div>
      </section>

      {/* Current Font Values */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Current Font Configuration</h2>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Font Families:</h4>
            <ul className="space-y-1 text-gray-600">
              <li><strong>Header:</strong> {FONTS.header.join(', ')}</li>
              <li><strong>Navigation:</strong> {FONTS.navigation.join(', ')}</li>
              <li><strong>Body:</strong> {FONTS.body.join(', ')}</li>
              <li><strong>Display:</strong> {FONTS.display.join(', ')}</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Quick Edit:</h4>
            <p className="text-gray-600">
              To change fonts site-wide, edit: <br />
              <code className="bg-gray-100 px-1 rounded">src/config/fonts.js</code>
            </p>
          </div>
        </div>
      </section>

      {/* Usage Instructions */}
      <section className="bg-blue-50 p-6 rounded-lg border border-blue-200">
        <h2 className="text-xl font-bold mb-4 text-blue-800">🚀 How to Use</h2>
        <ol className="list-decimal list-inside space-y-2 text-blue-700">
          <li>Edit <code className="bg-blue-100 px-1 rounded">src/config/fonts.js</code></li>
          <li>Change the font family in the FONTS object</li>
          <li>Update Google Fonts URL if needed</li>
          <li>Save and see changes apply everywhere!</li>
        </ol>
      </section>
    </div>
  );
}
