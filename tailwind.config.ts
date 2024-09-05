import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "menlo": '"Menlo", "Meslo LG", monospace;'
      },
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
        accent: {
          "1": 'var(--accent-1)',
          "2": 'var(--accent-2)',
          "3": 'var(--accent-3)',
          "4": 'var(--accent-4)',
          "5": 'var(--accent-5)',
          "6": 'var(--accent-6)',
          "7": 'var(--accent-7)',
          "8": 'var(--accent-8)',
          "9": 'var(--accent-9)',
          "10": 'var(--accent-10)',
          "11": 'var(--accent-11)',
          "12": 'var(--accent-12)',
          surface: 'var(--accent-surface)',
          indicator: 'var(--accent-indicator)',
          track: 'var(--accent-track)',
          contrast: 'var(--accent-contrast)',
        },
        'csharp-bg': '#1e1e1e',
        'csharp-text': '#dcdcdc',
        'csharp-keyword': '#569cd6',
        'csharp-string': '#d69d85',
        'csharp-comment': '#6a9955',
        'csharp-number': '#b5cea8',
        'csharp-function': '#dcdcaa',
        'csharp-variable': '#9cdcfe',
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
