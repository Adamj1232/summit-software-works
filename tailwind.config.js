/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f3f8f3',
          100: '#e7f1e7',
          200: '#c2dcc2',
          300: '#9dc79d',
          400: '#53a253',
          500: '#2b7d2b',
          600: '#1f5e1f',
          700: '#194d19',
          800: '#133d13',
          900: '#0f2f0f',
        },
        mountain: {
          50: '#f6f7f9',
          100: '#edf0f3',
          200: '#d2d9e2',
          300: '#b7c3d1',
          400: '#8196ae',
          500: '#4b698b',
          600: '#3b537d',
          700: '#314468',
          800: '#273553',
          900: '#1f2a3f',
        },
        earth: {
          50: '#fbf7f4',
          100: '#f7efe9',
          200: '#ead7c9',
          300: '#ddbfa8',
          400: '#c38f67',
          500: '#a95f25',
          600: '#984b1e',
          700: '#7e3e19',
          800: '#653214',
          900: '#4c2610',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mountain-pattern': "url('/src/assets/mountain-pattern.svg')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

