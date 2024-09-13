/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-img": "url('./assets/herobg.png')"
      },
      colors: {
        "blue": "#00132B",
        "lightblue": "#11CBF5",
        "grey": "#827F7F"
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}