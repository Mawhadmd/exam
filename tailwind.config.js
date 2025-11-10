/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        main: '#464655',
        accent: '#E94560',
        border: '#9CA3AF',
        background: '#1E1E2F',
        text: '#FFFFFF',
      },
    },
  },
  plugins: [],
}

