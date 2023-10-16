/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans'],
        'serif': ['Montserrat', 'serif'],
      },
    },
  },
  plugins: [],
}

