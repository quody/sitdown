import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Midnight Ember - Dark Theme
        background: "#0a0a0b",
        "background-alt": "#111113",
        "background-elevated": "#18181b",
        foreground: "#fafafa",
        "foreground-muted": "#a1a1aa",
        muted: "#71717a",

        // Primary accent - Emerald (trust, growth)
        accent: "#10b981",
        "accent-dark": "#059669",
        "accent-light": "#34d399",
        "accent-glow": "rgba(16, 185, 129, 0.15)",

        // Secondary accent - Amber (energy, creativity)
        spark: "#f59e0b",
        "spark-dark": "#d97706",
        "spark-light": "#fbbf24",

        // Surfaces
        card: "#141416",
        "card-hover": "#1c1c1f",
        stroke: "#27272a",
        "stroke-light": "#3f3f46",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Outfit", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Fraunces", "serif"],
      },
      boxShadow: {
        hero: "0 25px 80px rgba(0, 0, 0, 0.5)",
        soft: "0 4px 20px rgba(0, 0, 0, 0.3)",
        card: "0 2px 8px rgba(0, 0, 0, 0.2), 0 8px 32px rgba(0, 0, 0, 0.3)",
        glow: "0 0 40px rgba(16, 185, 129, 0.3), 0 0 80px rgba(16, 185, 129, 0.1)",
        "glow-sm": "0 0 20px rgba(16, 185, 129, 0.25)",
        "glow-spark": "0 0 30px rgba(245, 158, 11, 0.25)",
        "inner-glow": "inset 0 1px 0 0 rgba(255, 255, 255, 0.05)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-mesh": "radial-gradient(at 40% 20%, rgba(16, 185, 129, 0.08) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(245, 158, 11, 0.05) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(16, 185, 129, 0.05) 0px, transparent 50%)",
      },
    },
  },
  plugins: [],
};

export default config;
