// // tailwind.config.js
// module.exports = {
//   content: [
    // "./src/app/**/*.{js,ts,jsx,tsx}",           // Include Next.js App directory
    // "./src/components/**/*.{js,ts,jsx,tsx}",    // Include Components
    // "./public/**/*.html",                    // Include public folder if needed
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };


// tailwind.config.js

const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    // Update with your paths
    "./src/app/**/*.{js,ts,jsx,tsx}",           // Include Next.js App directory
    "./src/components/**/*.{js,ts,jsx,tsx}",    // Include Components
    "./public/**/*.html", 
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-dm-sans)', ...fontFamily.sans],
      },
      colors: {
        customPink: '#D7005A',
      },
    },
  },
  plugins: [],
};