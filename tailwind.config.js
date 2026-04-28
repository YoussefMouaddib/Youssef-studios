/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#05060a",
          900: "#0a0c14",
          800: "#11141d",
          700: "#1a1e2c",
        },
        gold: {
          400: "#d4b66a",
          500: "#c9a14a",
          600: "#a3822f",
        },
        accent: {
          400: "#7dd3fc",
          500: "#38bdf8",
        },
      },
      fontFamily: {
        display: ["'Fraunces'", "Georgia", "serif"],
        sans: ["'Inter'", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 60px -10px rgba(201,161,74,0.45)",
        soft: "0 30px 80px -30px rgba(0,0,0,0.6)",
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(ellipse at top, rgba(201,161,74,0.18), transparent 60%)",
      },
    },
  },
  plugins: [],
};
