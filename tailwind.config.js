/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        basicColor: "#D80032",
        secondaryColor: "#F9DEC9",
      },
      backgroundColor: {
        basicColor: "#D80032",
        secondaryColor: "#F9DEC9",
      },
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui")],
};
