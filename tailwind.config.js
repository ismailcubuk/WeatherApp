/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
     screens: {
      'mbl': '500px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      backgroundImage: {
        'bg-image': "url('../src/assets/background/backgroundImage.jpg')",
      },
    },
  },
  plugins: [],
}