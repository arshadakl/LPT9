/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mk: ["Mukta", "sans-serif"],
        fcode: ["Source Code Pro", "monospace"]
      },
      colors:{
        "bl":"#91d1f8",
        
      },
      
    },
  },
  plugins: [],
}