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
          bg: '#ffffff',
          bgAlt: '#fafafa',
          bgSection: '#f3f3f3',
          dark: '#010205',
          text: '#020407',
          surface: '#191f33',
          border: 'rgba(1, 2, 5, 0.12)',
          lime: '#99ea48',
          limeHover: '#88d63a',
          limeLight: '#bae289',
          muted: '#878c91',
          subtext: '#5c5d5f',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
      maxWidth: {
        'site': '1440px',
      },
    },
  },
  plugins: [],
}
