/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A',
        secondary: '#14B8A6',
        accent: '#FBBF24',
        neutral: {
          light: '#F3F4F6',
          dark: '#6B7280',
        },
        brand: {
          blue: 'var(--brand-blue)',
          green: 'var(--brand-green)',
          orange: 'var(--brand-orange)',
        },
        accent: {
          glow: 'var(--accent-glow)',
          highlight: 'var(--accent-highlight)',
        },
        mountain: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        forest: {
          50: '#F3FAF7',
          100: '#DEF7EC',
          200: '#BCF0DA',
          300: '#84E1BC',
          400: '#31C48D',
          500: '#0E9F6E',
          600: '#057A55',
          700: '#046C4E',
          800: '#03543F',
          900: '#014737',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['Open Sans', 'system-ui', 'sans-serif'],
        sans: ['Inter var', 'system-ui', 'sans-serif'],
        display: ['Quicksand', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'brand-gradient': 'linear-gradient(135deg, var(--brand-gradient-start), var(--brand-gradient-middle), var(--brand-gradient-end))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}