/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Iowan Old Style"', '"Palatino Linotype"', 'Palatino', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        ink: {
          50: '#f7f6f3',
          100: '#eeece5',
          200: '#dcd7cb',
          300: '#c2baa8',
          400: '#a49883',
          500: '#8d7f68',
          600: '#786b57',
          700: '#635749',
          800: '#534a40',
          900: '#3b352e',
          950: '#22201c',
        },
        parchment: '#faf8f3',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn .35s ease-out both',
      },
    },
  },
  plugins: [],
};
