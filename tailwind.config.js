const { Palanquin } = require("next/font/google");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg-dot": 'url("/bg.png")',
      },
      fontFamily: {
        Palanquin: ["palanquin", "sans-serif"],
        montserrat: ["montserrat", "sans-serif"],
      },
      colors: {
        primary: "#013B6D",
        orange: "#Fb7508",
        "bright-red": "#013B6",
      },
    },
  },
  plugins: [],
};
