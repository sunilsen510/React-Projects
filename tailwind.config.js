/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#123456",
        secondary: "#FCD34D",
      },
      scale: {
        '166': '1.66',
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'scroll-x': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'ring-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
        'scroll-x': 'scroll-x 30s linear infinite',
        scrollSwiper: 'scroll-x 60s linear infinite',
        'fade-in': 'fadeIn 0.3s ease-out',
        fadeInUp: 'fadeInUp 0.7s ease forwards',
        fadeIn: 'fadeIn 0.3s ease-out forwards',
        'ring-spin': 'ring-spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite',
      },
    },
  },
  plugins: [],
};
