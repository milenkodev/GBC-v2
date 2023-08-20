/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    screens: {
      'sm': { 'max': '376px' },
      // Mobile	

      'md': { 'min': '377px', 'max': '959px' },
      // Tablet & lower

      'lg': { 'min': '960px' },
      // Laptop 
      'xl': { 'min': '980px' },
    },
    extend: {

    },
  },
  plugins: [],
}

