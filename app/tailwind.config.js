/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./JS/main.js",
    "./JS/**/*.js",
    "./CSS/**/*.css",
    "./public/**/*.html",
  ],
  theme: {
    screens: {
      sm: "724px",
      md: "1082px",
      lg: "1290px",
      xl: "1440px",
    },
    colors: {
      // special colors
      blue: "#1fb6ff",
      darkBlue: "#0e4c75",
      purple: "#7e8bef",
      red: "#ff7169",
      pink: "#ff49db",
      green: "#13ce66",
      yellow: "#ffeb3b",
      white: "#f5f5f5",
      black: "#000000",
    },
    fontFamily: {
      // for fonts
    },
  },
  plugins: [require("daisyui")],
};
