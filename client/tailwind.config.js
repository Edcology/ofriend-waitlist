/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-img": "url('./assets/herobg.png')",
        "serve": "url('./assets/serve.png')",
        "serves": "url('./assets/serves.png')",

      },
      colors: {
        "blue": "#00132B",
        "lightblue": "#11CBF5",
        "gray": "#827F7F",
        "darkblue":"#063146",
        "vlightblue": "#CDF5FF",
        "vdarkblue": "#134566",
        "darkred": "#92301A",
        "lightred": "#EB6924",
        "darkgreen": "#205B27",
        "lightgreen": "#38AF48",
        "vlightred": "#FDEBD8",
        "vlightgreen": "#E0F8E2",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}