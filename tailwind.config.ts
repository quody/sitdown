import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"] ,
  theme: {
    extend: {
      colors: {
        background: "#f6f4f0",
        foreground: "#121212",
        muted: "#6b6870",
        accent: "#ff6a3d",
        "accent-dark": "#eb4f20",
        card: "#ffffff",
        stroke: "#e0ddd7"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Playfair Display", "serif"]
      },
      boxShadow: {
        hero: "0 22px 60px rgba(18, 18, 18, 0.12)",
        soft: "0 10px 30px rgba(18, 18, 18, 0.06)",
        glow: "0 18px 40px rgba(255, 106, 61, 0.3)"
      }
    }
  },
  plugins: []
};

export default config;
