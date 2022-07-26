/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'display': ['Roboto Mono', 'sans-serif'],
      'body': ['Proxima Nova','sans-serif'],
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            padding: "2rem",
            maxWidth: "800px",
            margin: '4rem auto',
            "h1, h2, h3, h4": {
              fontFamily: "Roboto Mono"
            },
            "h4": {
              color: "darkcyan"
            },
            img: {
              position: "relative",
              cursor: "zoom-in",
              transition: "all 0.5s ease",
            },
          }
        }
      }
    },
  },
  // plugins: [],
  plugins: [require('@tailwindcss/typography')],
}
