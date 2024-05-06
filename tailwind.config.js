/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          '900': '#111827',
        },
      },
    },
  },
  plugins: [],
}