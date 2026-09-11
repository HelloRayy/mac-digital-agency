/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#010205',
          surface: '#0d1117',
          card: '#12161f',
          cardHover: '#181e2b',
          border: 'rgba(255, 255, 255, 0.08)',
          borderSubtle: 'rgba(255, 255, 255, 0.14)',
          lime: '#99ea48',
          limeHover: '#88d63a',
          limeLight: '#bae289',
          limeDeep: '#77b248',
          muted: '#878c91',
          subtext: '#b0b5ba',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Manrope', 'system-ui', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
      maxWidth: {
        'site': '1440px',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
}
