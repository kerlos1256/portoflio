const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        DarkNavy: "#282C34",
        DarkCyan: "#85D1D6",
        lightGrey: "#474E5C",
        CardOverlay: "#282C34",
        borderGrey: "#393F4C",
      },
      fontSize: {
        44: "2.75rem",
        40: "2.5rem",
      },
      fontFamily: {
        Roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
