/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      background: "rgb(0, 0, 0, 0.9)",
    },
    fontFamily: {
      primary: ["Graphik", "sans-serif"],
      secondary: ["Merriweather", "serif"],
      lato: ["Lato", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
