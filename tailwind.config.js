/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF4D00",
        accent: "#FF8C00",
        bg: "#050505",
        bg2: "#0a0a0a",
        bg3: "#121212",
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 20px rgba(255, 77, 0, 0.4)',
      },
      borderRadius: {
        'premium': '24px',
      }
    },
  },
  plugins: [],
}
