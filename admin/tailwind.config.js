/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy:     { DEFAULT: '#1A1F3D', light: '#2A3058' },
        gold:     { DEFAULT: '#C9A96E', light: '#E8D5A3', dark: '#A8884D' },
        cream:    { DEFAULT: '#FAF8F3' },
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}