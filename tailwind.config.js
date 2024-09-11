/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  
  theme: {
    extend: {
      fontFamily: {
          poppins: 'Poppins, sans-serif'
      },
      colors: {
          'primary': '#205d80',
          'secondary': '#f2faff',
          'grey': '#ABB3C4',
          'dark': '#001b37',
          'page': '#F8F8FA',
          'success': '#2ED16C',
      }
    },
  },
  plugins: [],
}

