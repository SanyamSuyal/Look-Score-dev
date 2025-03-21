/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1E1E2E',     // Dark background
        'secondary': '#1F1F3B',   // Slightly lighter dark
        'accent-blue': '#00BFFF', // Neon blue
        'accent-purple': '#8A2BE2', // Neon purple
        'text-primary': '#F5F5F7', // Light text
        'text-secondary': '#BBBBCB', // Secondary text
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(138, 43, 226, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 191, 255, 0.8), 0 0 30px rgba(138, 43, 226, 0.5)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}; 