const { colors: defaultColors } = require("tailwindcss/defaultTheme");

const newColors = {
  ...defaultColors,
  ...{
    primary: "#0AC4B5",
    light: "#61f8e7",
    dark: "#009385"
  }
};

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        auto: "auto",
        negative: -1,
        "0": 0
      }
    },
    colors: newColors
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      outline: ["hover", "active"]
    }
  },
  plugins: []
};
