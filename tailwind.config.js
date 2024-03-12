/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    screen: {
      'sm': '576px',

      'md': '960px',

      'lg': '1440px',
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      padding:{
        "lg": "70px",
        "sm": "16px"
      },
      margin:{
        "lg": "70px",
        "sm": "16px"
      },
      colors: {
        primary: "#06A77D",
        secondary: "#F1A208",
        accent: "#153B50",
        TBlack: "#1D1E2C",
        TWhite: "#F8F8FF",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate", '@tailwindcss/typography')],
};
