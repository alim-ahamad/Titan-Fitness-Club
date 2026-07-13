import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      background: "#050505",
      card: "#111111",
      secondary: "#1A1A1A",
      accent: "#E53935",
      "accent-light": "#FF5B3A",
      text: "#F8F8F8",
      "text-muted": "#9A9A9A",
      border: "rgba(255,255,255,0.08)",
      white: "#FFFFFF",
      black: "#000000",
      transparent: "transparent",
      red: {
        900: "#1a0f0f",
      },
    },
    fontFamily: {
      sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      mono: ["var(--font-mono)", "monospace"],
    },
    animation: {
      "fade-in": "fadeIn 0.6s ease-out",
      "slide-up": "slideUp 0.8s ease-out",
      "text-reveal": "textReveal 0.8s ease-out forwards",
      float: "float 6s ease-in-out infinite",
    },
    keyframes: {
      fadeIn: {
        from: { opacity: "0" },
        to: { opacity: "1" },
      },
      slideUp: {
        from: { opacity: "0", transform: "translateY(40px)" },
        to: { opacity: "1", transform: "translateY(0)" },
      },
      textReveal: {
        "0%": { opacity: "0", transform: "translateY(10px)" },
        "100%": { opacity: "1", transform: "translateY(0)" },
      },
      float: {
        "0%, 100%": { transform: "translateY(0px)" },
        "50%": { transform: "translateY(-20px)" },
      },
    },
  },
  plugins: [],
};
export default config;
