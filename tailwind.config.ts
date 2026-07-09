import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/config/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#fbf7ef",
        porcelain: "#fffdf8",
        nude: "#e8d8c8",
        almond: "#d6bfa9",
        espresso: "#3a241a",
        cocoa: "#6f5346",
        rose: "#b97975",
        champagne: "#c9a969",
        charcoal: "#2d2926"
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 70px rgba(58, 36, 26, 0.10)",
        button: "0 14px 30px rgba(58, 36, 26, 0.16)"
      },
      borderRadius: {
        "2xl": "1rem"
      }
    }
  },
  plugins: []
};

export default config;
