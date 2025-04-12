/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
        cinzel: ['Cinzel', 'serif'],
      },
      colors: {
        'primary': {
          DEFAULT: '#2E7D32',
          light: 'rgba(46, 125, 50, 0.1)',
          dark: '#1B5E20',
        },
        'secondary': {
          DEFAULT: '#4E342E',
          light: 'rgba(78, 52, 46, 0.1)',
          dark: '#3E2723',
        },
      },
      animation: {
        'bounce': 'bounce 1s infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};