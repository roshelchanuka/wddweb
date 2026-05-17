/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#e8f6ea',
          DEFAULT: '#088178',
          dark: '#06655e',
        },
        velvet: {
          50: '#fbf7f8',
          100: '#f6eff1',
          200: '#eddfe3',
          300: '#dcc5cb',
          400: '#c5a3ad',
          500: '#ae828f',
          600: '#946673',
          700: '#7a505c',
          800: '#66434d',
          900: '#563a43',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.08)',
        premium: '0 20px 40px -15px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
