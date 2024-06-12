import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        slideDown: {
          from: { height: '0px' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0px' },
        },
      },
      animation: {
        slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
      },
      colors: {
        prettylights: {
          syntax: {
            comment: '#8b949e',
            constant: '#79c0ff',
            entity: '#d2a8ff',
            'storage-modifier-import': '#c9d1d9',
            'entity-tag': '#7ee787',
            keyword: '#ff7b72',
            string: '#a5d6ff',
            variable: '#ffa657',
            'brackethighlighter-unmatched': '#f85149',
            'invalid-illegal-text': '#f0f6fc',
            'invalid-illegal-bg': '#8e1519',
            'carriage-return-text': '#f0f6fc',
            'carriage-return-bg': '#b62324',
            'string-regexp': '#7ee787',
            'markup-list': '#f2cc60',
            'markup-heading': '#1f6feb',
            'markup-italic': '#c9d1d9',
            'markup-bold': '#c9d1d9',
            'markup-deleted-text': '#ffdcd7',
            'markup-deleted-bg': '#67060c',
            'markup-inserted-text': '#aff5b4',
            'markup-inserted-bg': '#033a16',
            'markup-changed-text': '#ffdfb6',
            'markup-changed-bg': '#5a1e02',
            'markup-ignored-text': '#c9d1d9',
            'markup-ignored-bg': '#1158c7',
            'meta-diff-range': '#d2a8ff',
            'brackethighlighter-angle': '#8b949e',
            'sublimelinter-gutter-mark': '#484f58',
            'constant-other-reference-link': '#a5d6ff',
          },
        },
        fg: {
          default: '#e6edf3',
          muted: '#848d97',
          subtle: '#6e7681',
        },
        canvas: {
          default: '#000',
          subtle: '#161b22',
        },
        border: {
          default: '#30363d',
          muted: '#21262d',
        },
        neutral: {
          muted: 'rgba(110,118,129,0.4)',
        },
        accent: {
          fg: '#2f81f7',
          emphasis: '#1f6feb',
        },
        success: {
          fg: '#3fb950',
          emphasis: '#238636',
        },
        attention: {
          fg: '#d29922',
          emphasis: '#9e6a03',
          subtle: 'rgba(187,128,9,0.15)',
        },
        danger: {
          fg: '#f85149',
          emphasis: '#da3633',
        },
        done: {
          fg: '#a371f7',
          emphasis: '#8957e5',
        },
      },

    },
  },
  plugins: [],
};
export default config;
