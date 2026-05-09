import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          DEFAULT: "#043927",
          dark: "#022518",
          light: "#065438",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E8C84A",
          dark: "#B8961E",
          muted: "#C9A227",
        },
        cream: {
          DEFAULT: "#F5F5DC",
          light: "#FAFAF0",
          dark: "#EDEDC8",
        },
        charcoal: {
          DEFAULT: "#1A1A1A",
          light: "#333333",
          muted: "#666666",
        },
        bridal: {
          DEFAULT: "#8B1E3F",
          light: "#A4253A",
          dark: "#6D1830",
        },
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
        jost: ["var(--font-jost)", "system-ui", "sans-serif"],
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      letterSpacing: {
        widest: "0.25em",
        "ultra-wide": "0.35em",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
        shimmer: "shimmer 2s infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #D4AF37 0%, #F0D060 50%, #D4AF37 100%)",
        "emerald-gradient":
          "linear-gradient(180deg, #043927 0%, #022518 100%)",
      },
      boxShadow: {
        gold: "0 4px 24px rgba(212, 175, 55, 0.15)",
        "gold-lg": "0 8px 40px rgba(212, 175, 55, 0.25)",
        elegant: "0 2px 20px rgba(0, 0, 0, 0.08)",
        "elegant-lg": "0 8px 40px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
