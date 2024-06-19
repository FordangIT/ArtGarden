import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.cssnpm r"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      colors: {
        "main-pink": "#D73D55",
        "main-yellow": "#FFF200",
        "light-terracotta": "#DB8C5C",
        "deep-orange": "#E64A19",
        "lightcoral-pink": "#FF8289",
        "deep-blue": "#090E24",
        "review-section": "#F8F8F8"
      },
      keyframes: {
        slideFlow: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" }
        }
      },
      animation: {
        "slide-flow": "slideFlow 5s linear infinite"
      }
    }
  },
  plugins: [require("daisyui")]
};
export default config;
