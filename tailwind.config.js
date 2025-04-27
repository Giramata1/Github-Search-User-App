// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',  // Tailwind dark mode uses class strategy
  theme: {
    extend: {
      colors: {
        'light-bg': '#F6F8FF',
        'light-text': '#4B6A9B',
        'dark-bg': '#141D2F',
        'dark-text': '#FFFFFF',
        'dark-secondary': '#1E2A47',
      },
    },
  },
  plugins: [],
};
