/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'c0' : '#250729',
        'c1' : '#f06992',
        'c2' : '#170B2D',
        'c3' : '#5CD3A0',
        'c4' : '#FF9970',
        'c5' : '#A6F069',
        'gold' : '#FFD700',
        'silver' : '#C0C0C0',
        't1' : '#F5A623',
        't2' : '#8BC34A',
        't3' : '#9C27B0'
      }
    },
  },
  plugins: [],
}