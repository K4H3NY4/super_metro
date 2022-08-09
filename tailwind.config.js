/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'smoke': "url('/930Z.gif')",
       
      }


    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("@tailwindcss/forms")({
      strategy: 'base', // only generate global styles
      strategy: 'class', // only generate classes
    }),
  ],
  theme: {}
}