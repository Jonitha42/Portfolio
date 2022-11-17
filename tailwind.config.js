/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/*.html"
  ],
  theme: {
    screens: {
      sm: "360px",
      md: "768px",
      lg: "1440px",
    },
    container: {
      // center: true,
      // padding: "1rem",
    },
    extend: {
      fontFamily: {
        raleway: "'Raleway', 'sans-serif'",
      },
    },
  },
  plugins: [],
}
