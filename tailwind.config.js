const rtl = require('tailwindcss-rtl');

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
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        ringSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        // slideFadeIn: {
        //   '0%': { opacity: '0', transform: 'translateY(-40px)' },
        //   '100%': { opacity: '1', transform: 'translateY(0)' },
        // },
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
        'scroll-x': 'scroll-x 30s linear infinite',
        scrollSwiper: 'scroll-x 60s linear infinite',
        'fade-in': 'fadeIn 0.3s ease-out',
        fadeInUp: 'fadeInUp 0.7s ease-out forwards',
        fadeIn: 'fadeIn 0.5s ease-in-out forwards',
        fadeDown: 'fadeDown 0.5s ease-in-out forwards',
        // slideFadeIn: 'slideFadeIn 0.5s ease-out forwards',
        ringSpin: 'ringSpin 1s linear infinite',
      },
    },
  },
  plugins: [rtl],
};
