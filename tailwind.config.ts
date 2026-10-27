import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        muted: "var(--muted)",
        line: "var(--line)",
        canvas: "var(--bg)",
        elevated: "var(--bg-elevated)",
        panel: {
          DEFAULT: "var(--panel)",
          strong: "var(--panel-strong)",
        },
        header: "var(--header-bg)",
        fb: "var(--fb)",
        messenger: "var(--messenger)",
        ig: {
          pink: "var(--ig-pink)",
          purple: "var(--ig-purple)",
          orange: "var(--ig-orange)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover)",
          fg: "var(--accent-fg)",
          soft: "var(--accent-soft)",
        },
        cta: {
          ink: "var(--cta-ink)",
          muted: "var(--cta-muted)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        page: "72rem",
      },
      backgroundImage: {
        meta: "var(--meta-gradient)",
        "meta-soft": "var(--meta-gradient-soft)",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
      },
    },
  },
  plugins: [],
};

export default config;
