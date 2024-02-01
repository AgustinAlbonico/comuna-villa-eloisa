/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: 'Montserrat',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '968px',
        xl: '1280px',
        xxl: '1528px',
      },
      colors: {
        primary: '#062C3B',
        primaryHover: '#20648063',
        textHover: '#22d3ee',
      },
    },
  },
  plugins: [],
}
