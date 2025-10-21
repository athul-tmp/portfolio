import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme") // Import default font helper

const config: Config = {
  // 1. Enable dark mode via CSS class for 'next-themes'
  darkMode: "class",
  
  // 2. Point Tailwind to scan all your files for utility classes
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Shadcn Color Variables (must match your globals.css)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        // ... (rest of your shadcn color palette)
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        // ... (standard shadcn keyframes)
      },
      animation: {
        // ... (standard shadcn animations)
      },
    },
  },
  
  // 3. Load the 'tailwindcss-animate' plugin to resolve the 'tw-animate-css' error
  plugins: [
    require("tailwindcss-animate"), 
  ],
};

export default config;