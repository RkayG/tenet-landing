import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1e3b8a",
        "primary-hover": "#1e40af",
        "background-light": "#f6f6f8",
        "background-dark": "#121620",
        "surface-dark": "#1a1f2e",
        "accent-gold": "#fbbf24",
        "code-bg": "#0f1117",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        full: "9999px",
      },
      keyframes: {
        "gradient-xy": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: "0.2" },
          "50%": { transform: "translate(10px, -10px) scale(1.1)", opacity: "0.3" },
        },
      },
      animation: {
        blob: "gradient-xy 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
