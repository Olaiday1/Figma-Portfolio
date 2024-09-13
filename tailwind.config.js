/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customBlue: '#3D5A80',
        pink:'#EE6C4D',
        ash: '#2932415E',
        deepBlue:'#293241',
        blueAsh:'#2F3746',
        black: '#00000073',
        blackBlue: '#00000061',
      }
    },
  },
  plugins: [],
}


