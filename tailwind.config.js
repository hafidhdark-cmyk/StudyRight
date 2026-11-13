/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          charcoal: "var(--color-charcoal, #2B2B2B)",
          orange: "var(--color-orange, #F27A2E)",
          blue: "var(--color-blue, #1E9BE0)",
          yellow: "var(--color-yellow, #FFD92E)",
          royal: "var(--color-royal, #1050B2)",
          gold: "var(--color-gold, #B08821)",
          dark: "#1A1A1A",
          muted: "#6B7280",
          surface: "#F8FAFC",
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)',
        'premium': '0 12px 32px -4px rgba(43, 43, 43, 0.08), 0 4px 12px -2px rgba(43, 43, 43, 0.04)',
        'glow-orange': '0 10px 25px -3px rgba(242, 122, 46, 0.25)',
        'glow-blue': '0 10px 25px -3px rgba(30, 155, 224, 0.25)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
