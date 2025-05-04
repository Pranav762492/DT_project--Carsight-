/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#d9e3ff',
          200: '#bccaff',
          300: '#94a7ff',
          400: '#6679fb',
          500: '#4b52f2',
          600: '#3a36e4',
          700: '#3228c8',
          800: '#2b24a2',
          900: '#272380',
          950: '#1a1651',
        },
        secondary: {
          50: '#f8f9fa',
          100: '#eceef2',
          200: '#d9dde5',
          300: '#b8c0cf',
          400: '#929db4',
          500: '#77839c',
          600: '#626d85',
          700: '#51596d',
          800: '#454c5c',
          900: '#3b414d',
        },
        accent: {
          50: '#fff7ed',
          100: '#ffecd3',
          200: '#ffd6a6',
          300: '#ffb86f',
          400: '#fd9132',
          500: '#fb7112',
          600: '#e85408',
          700: '#c13c09',
          800: '#9a2f10',
          900: '#7d2810',
          950: '#431105',
        },
        success: {
          500: '#22c55e',
          600: '#16a34a',
        },
        warning: {
          500: '#f59e0b',
          600: '#d97706',
        },
        error: {
          500: '#ef4444',
          600: '#dc2626',
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};