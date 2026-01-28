import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"] ,
  theme: {
    extend: {
      colors: {
        background: "#faf9f7",
        "background-alt": "#f3f1ed",
        foreground: "#1a1a1a",
        muted: "#71706e",
        accent: "#ff6a3d",
        "accent-dark": "#eb4f20",
        "accent-light": "#f7f6f4",
        card: "#ffffff",
        stroke: "#e5e2dc"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "DM Sans", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Fraunces", "serif"]
      },
      boxShadow: {
        hero: "0 25px 80px rgba(18, 18, 18, 0.12)",
        soft: "0 4px 20px rgba(18, 18, 18, 0.06)",
        card: "0 2px 8px rgba(18, 18, 18, 0.04), 0 8px 32px rgba(18, 18, 18, 0.06)",
        glow: "0 18px 50px rgba(255, 106, 61, 0.25)",
        "glow-sm": "0 8px 30px rgba(255, 106, 61, 0.15)"
      }
    }
  },
  plugins: []
};

export default config;
