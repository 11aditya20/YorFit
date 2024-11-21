/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-purple' : '#645bff',
        'custom-white': '#fff',
      }
    },
  },
  plugins: [
    // require('@tailwindcss/aspect-ratio'),
  ],
}

