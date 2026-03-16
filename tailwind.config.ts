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
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E8C85A",
          dark: "#A8872A",
          muted: "#D4AF3720",
        },
        obsidian: "#0B0B0B",
        charcoal: {
          DEFAULT: "#1A1A1A",
          light: "#242424",
          mid: "#2E2E2E",
        },
        ivory: {
          DEFAULT: "#F5F5F5",
          dark: "#E0E0E0",
          muted: "#C8C8C8",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        cinzel: ["var(--font-cinzel)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #D4AF37 0%, #A8872A 50%, #D4AF37 100%)",
        "dark-gradient": "linear-gradient(180deg, #0B0B0B 0%, #1A1A1A 100%)",
        "glass-gradient": "linear-gradient(135deg, rgba(212,175,55,0.05) 0%, rgba(255,255,255,0.02) 100%)",
        "hero-gradient": "radial-gradient(ellipse at center, #1A1A1A 0%, #0B0B0B 70%)",
      },
      boxShadow: {
        gold: "0 0 20px rgba(212,175,55,0.3)",
        "gold-sm": "0 0 10px rgba(212,175,55,0.2)",
        "gold-lg": "0 0 40px rgba(212,175,55,0.4)",
        glass: "0 8px 32px rgba(0,0,0,0.6)",
        card: "0 4px 24px rgba(0,0,0,0.5)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease forwards",
        "slide-up": "slideUp 0.8s ease forwards",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
        "float": "float 4s ease-in-out infinite",
        "shimmer": "shimmer 2.5s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 10px rgba(212,175,55,0.2)" },
          "50%": { boxShadow: "0 0 30px rgba(212,175,55,0.5)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
