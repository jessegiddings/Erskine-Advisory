import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* PayrollPicker palette */
        bg: {
          DEFAULT: "var(--bg)",
          2: "var(--bg-2)",
          3: "var(--bg-3)",
        },
        ink: {
          DEFAULT: "var(--ink)",
          dim: "var(--ink-dim)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          dim: "var(--accent-dim)",
          on: "var(--accent-on)",
        },
        cool: {
          DEFAULT: "var(--cool)",
        },
        warn: "var(--warn)",
        outline: {
          DEFAULT: "var(--outline)",
          variant: "var(--outline-variant)",
        },

        /* Legacy aliases for existing FormRight components */
        cream: "var(--cream)",
        paper: "var(--paper)",
        sand: "var(--sand)",
        "warm-gray": "var(--warm-gray)",
        medium: "var(--medium)",
        dark: "var(--dark)",
        green: {
          DEFAULT: "var(--green)",
          light: "var(--green-light)",
          mid: "var(--green-mid)",
        },
        amber: {
          DEFAULT: "var(--amber)",
          light: "var(--amber-light)",
        },
        blue: {
          DEFAULT: "var(--blue)",
          light: "var(--blue-light)",
        },
        red: {
          DEFAULT: "var(--red)",
          light: "var(--red-light)",
        },
        border: "var(--border)",
      },
      fontFamily: {
        headline: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        serif: ["Instrument Serif", "serif"],
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
      },
      animation: {
        blink: "blink 2s ease-in-out infinite",
        fadeIn: "fadeIn 0.4s ease-out forwards",
        slideUp: "slideUp 0.5s ease-out forwards",
        pulse: "pulse 2s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
