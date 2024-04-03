/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0B090D",
        secondary: "#1A1A1A",
        footer: "#190024",
        text: {
          primary: "#AD00FF",
          light: "#FFFFFF",
          secondary: "#747474",
          info: "#00FFA3",
          danger: "#FF6868",
        },
        border: {
          secondary: "#323232",
        },
      },
      fontFamily: {
        sans: ["Lexend", "sans-serif"],
      },
    },
  },
  plugins: [],
};
