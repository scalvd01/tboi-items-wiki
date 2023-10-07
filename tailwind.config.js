/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        upheavtt: ['upheavtt'],
        SilomBol: ['SilomBol']
      }
    }
  },
  plugins: [require('flowbite/plugin')]
}
