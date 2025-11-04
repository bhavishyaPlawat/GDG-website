/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'gdsc-blue': '#4285F4',
        'gdsc-red': '#EA4335',
        'gdsc-yellow': '#FBBC05',
        'gdsc-green': '#34A853',
        'gdsc-gray': '#F1F3F4',
        'gdsc-dark': '#202124',
        'gdsc-surface': '#303134'
      },
      boxShadow: { 'elevated': '0 6px 18px rgba(60,64,67,0.08)' }
    }
  },
  plugins: []
}
