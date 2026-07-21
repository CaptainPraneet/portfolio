/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: {
          950: '#05070f',
          900: '#0a0e1a',
          800: '#0f1424',
          700: '#161d33',
          600: '#1e2745',
          500: '#2a3556',
        },
        cloud: {
          50: '#f4f8ff',
          100: '#e6eefc',
          200: '#cdddf7',
          300: '#a8c2ee',
          400: '#7aa0e0',
          500: '#527fcc',
          600: '#3a64b0',
          700: '#2e4f8c',
          800: '#1f3a68',
          900: '#15294a',
        },
        cyan: {
          DEFAULT: '#22d3ee',
          glow: '#67e8f9',
        },
        mint: {
          DEFAULT: '#34d399',
          glow: '#6ee7b7',
        },
        amber: {
          DEFAULT: '#fbbf24',
        },
        rose: {
          DEFAULT: '#fb7185',
        },
      },
      boxShadow: {
        'glow-cyan': '0 0 24px -4px rgba(34, 211, 238, 0.45)',
        'glow-mint': '0 0 24px -4px rgba(52, 211, 153, 0.45)',
        'glow-soft': '0 0 40px -8px rgba(34, 211, 238, 0.25)',
        'card-dark': '0 8px 32px -8px rgba(0, 0, 0, 0.6), inset 0 1px 0 0 rgba(255,255,255,0.04)',
        'card-light': '0 8px 32px -10px rgba(30, 58, 138, 0.18), inset 0 1px 0 0 rgba(255,255,255,0.6)',
      },
      keyframes: {
        'float-soft': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'dash-flow': {
          to: { strokeDashoffset: '-40' },
        },
        'scan': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'grid-pan': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '40px 40px' },
        },
      },
      animation: {
        'float-soft': 'float-soft 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'blink': 'blink 1s step-end infinite',
        'dash-flow': 'dash-flow 1.5s linear infinite',
        'scan': 'scan 3s linear infinite',
        'grid-pan': 'grid-pan 8s linear infinite',
      },
    },
  },
  plugins: [],
};
