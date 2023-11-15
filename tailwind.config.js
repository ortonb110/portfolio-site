/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5FB4A2",
        primaryDarkBlue: "#203A4C",
        primaryGreyishBlue: "#33323D",
        veryLightGrey: "#FAFAFA",
        lightGrey: "#EAEAEB",
        brightRed: "#F43030",
      },
    },
  },
  plugins: [],
};
