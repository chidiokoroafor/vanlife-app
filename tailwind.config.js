/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": '#FFF7ED',
        "primary2": '#FFCC8D',
        "filter": '#FFEAD0',
        "btn": "#FF8C38",
        "Text": "#161616",
        "Text2": "#4D4D4D",
        "Footer": "#252525",
        "Simple": "#E17654",
        "Rugged": "#115E59",
      },
      fontFamily: {
        Inter: ["Inter", "serif"]
      }
    },
  },
  plugins: [],
}

