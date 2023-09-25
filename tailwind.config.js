/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-50": "#f7f9fc",
        "gray-1001": "#eee",
        black: "#000",
        honeydew: "#d8f4e6",
        "gray-100": "#f2f4f7",
        "gray-5001": "#667085",
        white: "#fff",
        "secondary-green-500-g": "#12b76a",
        "primary-purple-50": "#f9f5ff",
        gray1: {
          "100": "#15170f",
          "200": "#0e1218",
          "300": "#0e0e0e",
        },
        dodgerblue: {
          "100": "#3f93ff",
          "200": "#148fff",
        },
        silver: "#bdbdbd",
        "gray-400": "#aaa",
        limegreen: "#05d34b",
        aliceblue: "#e5e8ef",
        "gray-200": "#e1e1e1",
        "gray-900": "#111",
        "primary-purple-700-p": "#6941c6",
        "gray-700": "#4f4f4f",
        tomato: "#ed5b53",
        "gray-500": "#898989",
        "primary-purple-100": "#f4ebff",
        ghostwhite: "#f9fbff",
      },
      spacing: {},
      fontFamily: {
        "quote-medium": "Poppins",
        inter: "Inter",
      },
      borderRadius: {
        "3xs": "10px",
        "181xl": "200px",
      },
    },
    fontSize: {
      xl: "20px",
      sm: "14px",
      base: "16px",
      xs: "12px",
      "base-1": "15.1px",
      "3xs-1": "9.1px",
      "4xs": "9px",
      "13xl": "32px",
      "5xl": "24px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
