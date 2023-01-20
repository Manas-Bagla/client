/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'connect': "url('/public/images/connect.png')", 
        'home': "url('/public/images/home.jpg')",
        'con':"url('/public/images/connectionss.png')",
        'crops':"url('/public/images/crops.jpg')"
      },
      fontFamily: {
        mont: "Montserrat",
        pop: "Poppins"
      }

    },
  },
  plugins: [
    require('flowbite/plugin')

  ],
}