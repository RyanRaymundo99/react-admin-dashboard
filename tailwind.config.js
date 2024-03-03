/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
      extend: {
        height: {
          '112': '28rem', // You can adjust the value as needed
          // Add more custom heights if required
        },
        
      },
    },
    variants: {},
    plugins: [],
  };