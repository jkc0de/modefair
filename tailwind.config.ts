import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#0066cc",
        secondary: "#e8e8ed",
      },
      boxShadow: {
        primary: "inset 0 0 0 1.1px #06c",
      },
      animation: {
        fade: "fadeIn .4s ease-in-out",
      },
      keyframes: (theme) => ({
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "100" },
        },
      }),
    },
  },
  plugins: [],
};
export default config;
