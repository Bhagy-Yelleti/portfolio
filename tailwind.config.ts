import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#06070b",
        ink: "#0d1017",
        mist: "#95a3bf",
        line: "rgba(255,255,255,0.1)",
        glow: "#7c8cff",
        violet: "#7d59ff",
        cyan: "#52d1ff"
      },
      boxShadow: {
        aura: "0 0 0 1px rgba(255,255,255,0.06), 0 20px 60px rgba(10,14,28,0.6), 0 0 80px rgba(91,106,255,0.15)"
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)"
      },
      animation: {
        pulseSlow: "pulseSlow 8s ease-in-out infinite",
        float: "float 7s ease-in-out infinite"
      },
      keyframes: {
        pulseSlow: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.62" },
          "50%": { transform: "scale(1.06)", opacity: "1" }
        },
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -10px, 0)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
