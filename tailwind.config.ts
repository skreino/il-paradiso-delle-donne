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
        ivory: "#F4EEE7",
        porcelain: "#FCFAF7",
        nude: "#E7D8CD",
        almond: "#AA9587",
        espresso: "#765A4A",
        cocoa: "#7A6860",
        rose: "#D7B9B1",
        champagne: "#C7A979",
        charcoal: "#1C1A19"
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
