/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

// console.log(colors)

module.exports = {
  important: true,
  prefix: "tw-",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        slate: colors.blueGray,
        rose: colors.rose,
      },
    },
  },
  plugins: [],
};
