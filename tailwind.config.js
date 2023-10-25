/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1300px",
    },
    extend: {
      colors: {
        primary: "#101828",
        secondary: "#667885",
        accent: {
          DEFAULT: "#ed1d24",
          hover: "#dd242a",
        },
        body: "#dedede",
      },
    },
  },
  plugins: [],
};
