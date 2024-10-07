import defaultTheme from 'tailwindcss';
import colors from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      maxWidth: {
        '8xl': '90rem',
        '9xl': '94rem',
      },
      colors: {
        'dark-blue-dark-DME': '#2b3945',
        'very-dark-blue-DMB': '#202c37',
        'dark-blue-dark-LMT': '#111517',
        'dark-gray-LMT': '#858585',
        'very-light-gray-LMB': '#fafafa',
        cyan: colors.cyan,
        emerald: colors.emerald,
        ...defaultTheme.colors,
      },
      fontFamily:{
        roboto:['"Roboto", sans-serif']
      }
    },
  },
  plugins: [],
};
