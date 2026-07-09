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
        ivory: "#F8F1EA",
        porcelain: "#FFFDF9",
        nude: "#EFE2D6",
        almond: "#D8C2AE",
        espresso: "#2B211D",
        cocoa: "#7A6860",
        rose: "#B97A7A",
        champagne: "#C8A96A",
        charcoal: "#1E1714"
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
