/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-primary': '#a855f7',
        'dark-bg': '#0a0a0c',
        'dark-secondary': '#1a1a1a',
        'dark-card': 'rgba(25, 25, 30, 0.7)',
        'dark-nav': 'rgba(18, 18, 22, 0.85)',
        'dark-icon': 'rgba(255, 255, 255, 0.05)',
        'dark-border': 'rgba(255, 255, 255, 0.1)',
        'light-bg': '#f5f5f7',
        'light-card': 'rgba(255, 255, 255, 0.95)',
        'light-nav': 'rgba(255, 255, 255, 0.85)',
        'light-icon': 'rgba(0, 0, 0, 0.03)',
        'light-border': 'rgba(0, 0, 0, 0.15)',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'mono': ['"PT Mono"', 'monospace'],
      },
      animation: {
        'wave': 'wave-animation 2.1s infinite',
        'like': 'likeAnimation 0.85s forwards',
      },
      keyframes: {
        'wave-animation': {
          '0%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10deg)' },
          '60%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        'likeAnimation': {
          '0%': { transform: 'scale(1.5)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      backgroundImage: {
        'dark-gradient': 'linear-gradient(to left, rgb(27 20 41), rgb(20 15 35))',
        'section-gradient': 'linear-gradient(to bottom left, rgba(17, 16, 16, 0.582), rgba(12, 8, 24, 0.904))',
        'image-gradient': 'linear-gradient(to bottom left, rgba(17, 16, 16, 0.678), rgba(12, 10, 22, 0.863))',
        'light-gradient': 'linear-gradient(to bottom left, rgba(245, 245, 250, 0.8), rgba(235, 235, 255, 0.9))',
      },
    },
  },
  plugins: [],
};
