/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0f1c2e',
          900: '#152238',
          800: '#1a2a4a',
          700: '#1e3354',
          600: '#264060',
          500: '#3a5a80',
          400: '#5a7a9a',
          300: '#8aa0b8',
          200: '#b8c8d8',
        },
        gold: {
          600: '#b8973f',
          500: '#c9a962',
          400: '#d4b56a',
          300: '#e0c88a',
        }
      }
    },
  },
  plugins: [],
}
