/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Segoe UI", "system-ui", "sans-serif"]
      },
      colors: {
        "j-mint": "#8ef6ff",
        "j-sky": "#4387ff"
      },
      boxShadow: {
        "card-dark": "0 18px 38px rgba(6, 8, 14, 0.65)"
      }
    }
  },
  plugins: []
};
