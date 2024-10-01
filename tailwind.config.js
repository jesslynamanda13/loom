/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        lines: "url('/assets/img/bg-lines.png')"
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif']
      }
    }
  },
  plugins: []
}
