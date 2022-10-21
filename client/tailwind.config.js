/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#141414", // Background Default
        bghl: "#5aff67", // Background Highlight
        bgll: "#2c8b32", // Background Lowlight
        txt: "#fff", // Text Default
        txthl: "#4ee15b", // Text Highlight
        txtll: "#16a321", // Text Lowlight
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
