import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        // HealthInCode Brand Colors - Updated Design
        brand: {
          pink: "#d81b60",           // Primary brand color
          "pink-hover": "#c2185b",   // Hover state
          "pink-light": "#f8bbd0",   // Light variant
          purple: "#5D1F5E",         // Secondary
          gray: {
            50: "#fafafa",
            100: "#f4f4f5",
            200: "#e4e4e7",
            500: "#71717a",
            600: "#52525b",
            700: "#3f3f46",
            900: "#18181b",
          },
        },

        // Semantic Colors
        validate: {
          DEFAULT: "#00C389",
          hover: "#00A876",
          light: "#E6F9F4",
        },
        reject: {
          DEFAULT: "#FF5757",
          hover: "#E63F3F",
          light: "#FFE6E6",
        },
        warning: {
          DEFAULT: "#FFB800",
          light: "#FFF4E6",
        },

        primary: {
          DEFAULT: "#d81b60",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#F5E6F0",
          foreground: "#5D1F5E",
        },
        destructive: {
          DEFAULT: "#FF5757",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F9F9F9",
          foreground: "#6B6B6B",
        },
        accent: {
          DEFAULT: "#F5E6F0",
          foreground: "#5D1F5E",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#2D2D2D",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#2D2D2D",
        },
      },
      borderRadius: {
        lg: "12px",
        md: "8px",
        sm: "6px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
