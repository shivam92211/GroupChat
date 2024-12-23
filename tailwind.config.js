// tailwind.config.js
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",           // Include Next.js App directory
    "./src/components/**/*.{js,ts,jsx,tsx}",    // Include Components
    "./public/**/*.html",                    // Include public folder if needed
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};