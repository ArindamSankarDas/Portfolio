/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "400px",
      ...defaultTheme.screens,
    },

    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Raleway: ["Raleway", "sans-serif"],
        "Protest-guerilla": ["Protest Guerrilla", "sans-serif"],
      },

      boxShadow: {
        arrowShadow: "-3px 2px 28px -8px rgba(0,0,0,0.75)",
        btnShadow: "1px 1px 28px 0px rgba(173,173,173,1)",
      },
    },
  },
  plugins: [],
};
