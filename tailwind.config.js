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
      order: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
      },
    },
  },
  variants: {
    extend: {
      order: ["responsive"],
    },
  },
  plugins: [],
};
