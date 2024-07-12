/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pt: ["PT Sans", "sans-serif"],
        fcode: ["Source Code Pro", "monospace"]
      },
    },
  },
  plugins: [],
}