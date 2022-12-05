const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        bg: "#141414", // Background Default
        bghl: "#5aff67", // Background Highlight
        bgll: "#2c8b32", // Background Lowlight
        txt: "#fff", // Text Default
        txthl: "#4ee15b", // Text Highlight
        txtll: "#16a321", // Text Lowlight
        projlow: "rgba(47, 51, 47, 0.438)",
        projlowshadow: "rgb(51, 53, 50)",
        projhigh: "rgb(223, 232, 219)",
        projhighshadow: "rgb(101, 103, 99)",
      },
      dropShadow: {
        green: "0 0 5px rgba(0, 255, 0, 0.2)",
        white: "0 0 5px rgba(255, 255, 255, 0.2)",
      },
      textShadow: {
        sm: "0 1px 2px rgba(0, 255, 0, 0.5)",
        DEFAULT: "0 2px 4px rgba(0, 255, 0, 0.5)",
        lg: "0 8px 16px rgba(0, 255, 0, 0.5)",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        sponsor: "url('/src/images/subackground.jpeg')",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
