/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Palestinian flag colors - Primary palette
        primary: "#000000", // Black
        secondary: "#CE1126", // Red
        accent: "#007A3D", // Green
        light: "#FFFFFF", // White

        // Text colors based on Palestinian palette
        textPrimary: "#f8fafc", // Pure white text
        textSecondary: "#e2e8f0", // Light gray text
        textMuted: "#cbd5e1", // Muted text
        textFaded: "#94a3b8", // Faded text

        // Background variants with Palestinian influence
        bgPrimary: "#0a0a0a", // Deep black background
        bgSecondary: "#1a1a1a", // Dark gray background
        bgCard: "#262626", // Card backgrounds
        bgMuted: "#404040", // Muted backgrounds

        // Palestinian themed grays (with slight green/red tints)
        palGray: {
          50: "#f8faf9",
          100: "#f1f5f3",
          200: "#e5ebe8",
          300: "#d1ddd6",
          400: "#9fb3a8",
          500: "#6b8075",
          600: "#4a5c52",
          700: "#3a4740",
          800: "#2d3530",
          900: "#1f251f",
        },

        // Error and success with Palestinian colors
        success: "#007A3D", // Palestinian green
        error: "#CE1126", // Palestinian red
        warning: "#b45309", // Amber warning

        // Interactive states
        hover: "#f0f9ff10", // Light hover
        focus: "#CE112620", // Red focus with opacity
        disabled: "#6b7280", // Disabled state
      },
      animation: {
        grid: "grid 20s linear infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        spin: "spin 1s linear infinite",
        ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
        bounce: "bounce 1s infinite",
      },
      keyframes: {
        grid: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
