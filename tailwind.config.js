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
        // Soothing soft sky-blue accent (replaces previous gold)
        azure: {
          300: "#a9cdf0",
          400: "#7daed3",
          500: "#5a8fbf",
          600: "#3f72a3",
        },
      },
      fontFamily: {
        // Apple San Francisco UI font, falling back gracefully
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"SF Pro"',
          '"Helvetica Neue"',
          "Inter",
          "system-ui",
          "Segoe UI",
          "Arial",
          "sans-serif",
        ],
        display: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Display"',
          '"SF Pro"',
          '"Helvetica Neue"',
          "Inter",
          "system-ui",
          "sans-serif",
        ],
      },
      boxShadow: {
        glow: "0 0 60px -10px rgba(125,174,211,0.45)",
        soft: "0 30px 80px -30px rgba(0,0,0,0.6)",
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(ellipse at top, rgba(125,174,211,0.18), transparent 60%)",
      },
    },
  },
  plugins: [],
};
