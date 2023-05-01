/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.jsx",
  ],
  theme: {
    extend: {
      screens: {
        'sm2': '730px',
        // => @media (min-width: 730px) { ... }
        'lgMax': {'max': '1024px'},
        // => @media (max-width: 1024px) { ... }
        'xs3': {'max': '500px'},
        // => @media (max-width: 500px) { ... }
        'xs2': {'max': '790px'},
        // => @media (max-width: 790px) { ... }
        'xs1': {'max': '400px'},
        // => @media (max-width: 400px) { ... }
        'xs0': {'max': '360px'},
        // => @media (max-width: 360px) { ... }
        'xs': {'max': '300px'}
        // => @media (max-width: 360px) { ... }
      },
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
        },
      }
    },
  },
  plugins: [],
}
