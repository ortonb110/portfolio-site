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
      backgroundImage: {
        desktop:
          'url("/src/assets/images/homepage/desktop/image-homepage-hero.jpg")',
        desktopXL:
          'url("/src/assets/images/homepage/desktop/image-homepage-hero@2x.jpg")',
        tablet:
          'url("/src/assets/images/homepage/tablet/image-homepage-hero@2x.jpg")',
        mobile:
          'url("/src/assets/images/homepage/mobile/image-homepage-hero.jpg")',
      },
    },
  },
  plugins: [],
};
