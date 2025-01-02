/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: '#7E3AF2'
      }
    },
  },
  plugins: [
    require('daisyui'),
    

  ],
}