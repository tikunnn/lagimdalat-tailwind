/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#87B540',
        'secondary-color': '#9FC466',
      }
    },

    boxShadow: {
      fm: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 4px -1px;',
    }
  },
  plugins: [require('./plugins/openVariant')],
}

