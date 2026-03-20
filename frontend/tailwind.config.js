/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0A0F2C",
        card: "#0F1535",
        orange: "#FF6B2C",
        blue: "#00D4FF",
        green: "#00E676",
        amber: "#FFB347",
        red: "#FF4444",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};