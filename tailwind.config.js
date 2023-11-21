/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#0e1e2c",
        greenyellow: "#a1ff08",
      },
      spacing: {},
      fontFamily: {
        inika: "Inika",
        hanuman: "Hanuman",
        "inknut-antiqua": "'Inknut Antiqua'",
      },
      borderRadius: {
        xl: "20px",
        "3xs": "10px",
      },
    },
    fontSize: {
      sm: "14px",
      mid: "17px",
      xl: "20px",
      mini: "15px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
