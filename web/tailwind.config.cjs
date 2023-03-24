/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.jsx",
  ],
  theme: {
    colors: {
      "cyan": {
        100: '#CCDBDC',
        300: '#C1DFF0',
        500: '#3587A4',
        700: '#17455A',
        900: '#003249'
      },
      "gray": {
        200: '#C8C2C5',
        300: '#A29FA0',
        600: '#2E2E2E'
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'ubuntu': ['Ubuntu', 'sans-serif']
      }
    },
    extend: {},
  },
  plugins: [],
}
