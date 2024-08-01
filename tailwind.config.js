/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        avenir: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        roboto:['Roboto']
      },
      colors:{
        "bgclr": "#0B1E59",
        "bgclr2": "#1F3860",
        "bgclr3": "#192136",
        "bgclr4": "#2C4E86",
        "bgclr5": "#192136",
        "bgclr6": "#051547",
        "bgclr7": "#40739e",
        "bgclr8": "#f8f9fb",
        "bgclr9": "#FFFFFF",
        "txt-clr2": "#2C4E86",
        "hover-clr": "#17C4BB",
        "txtclr": "#fff",
        "txtclr2": "#666666",
        "txtclr3": "#1F3860",
        "txtclr4": "#FFFFF2",
        "txtclr5": "#969696",
        "btnclr": "#1F3860",
        "btnhover": "#337AB7"
      }
    },
  },
  plugins: [],
}

