/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#E6E6E6",
        accent: "#C5A880",
        text: "#532E1C",
        border: "#0F0F0F",
      },
    },
  },
  plugins: [],
};
