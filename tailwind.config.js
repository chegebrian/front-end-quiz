/** @type {import('tailwindcss').Config} */
// const withMT = require("@material-tailwind/react/utils/withMT");

export default{
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    // "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "mobile-dark": "url(/images/pattern-background-mobile-dark.svg)",
        "mobile-light": "url(/images/pattern-background-mobile-light.svg)",
        "tablet-dark": "url(/images/pattern-background-tablet-dark.svg)",
        "tablet-light": "url(/images/pattern-background-tablet-light.svg)",
        "desktop-dark": "url(/images/pattern-background-desktop-dark.svg)",
        "desktop-light": "url(/images/pattern-background-desktop-light.svg)",
      },
    },
  },
  plugins: [],
};
