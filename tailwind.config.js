/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors:{
        primary:"#9A4C1E",
        secondary:"#6A1039",
        success:"#027A48",
        danger:"#F15046",
        subText:"#6B788E",
        text:"#091E42",
        border:"#EFF1F4",
        dark:"#101828",
      }
    },
  },
  plugins: [],
}

