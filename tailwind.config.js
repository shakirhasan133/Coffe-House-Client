/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#331A15",
          light: "#331A15",
          dark: "#331A15",
        },
      },
      textShadow: {
        default: "0 2px 4px rgba(0, 0, 0, 0.10)",
        md: "0 4px 6px rgba(0, 0, 0, 0.15)",
        lg: "0 10px 15px rgba(0, 0, 0, 0.25)",
        xl: "0 20px 25px rgba(0, 0, 0, 0.30)",
      },
    },
  },
  plugins: [require("daisyui")],
};
