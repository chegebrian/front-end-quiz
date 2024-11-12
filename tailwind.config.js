/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        sans:["Poppins", 'sans-serif']
      },
      backgroundImage:{
        "mobile-dark": "url(/images/pattern-background-mobile-dark.svg)",
        "mobile-light": "url(/images/pattern-background-mobile-light.svg)",
        "tablet-dark": "url(/images/pattern-background-tablet-dark.svg)",
        "tablet-light": "url(/images/pattern-background-tablet-light.svg)",
        "desktop-dark": "url(/images/pattern-background-desktop-dark.svg)",
        "desktop-light": "url(/images/pattern-background-desktop-light.svg)",
      }
    },
  },
  plugins: [],
};

// const mobileBackgrd = isDarkMode
// ? "/images/pattern-background-mobile-dark.svg"
// : "/images/pattern-background-mobile-light.svg";
// const tabletBackgrd = isDarkMode
// ? "/images/pattern-background-tablet-dark.svg"
// : "/images/pattern-background-tablet-light.svg";
// const desktopBackgrd = isDarkMode
// ? "/images/pattern-background-desktop-dark.svg"
// : "/images/pattern-background-desktop-light.svg";