const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        black: colors.black,
        white: colors.white,
        rose: colors.rose,
        rtPrimary: '#53575a',
        rtTertiary: '#949698',
        rtSecondary: '#be1622',
        'warm-gray': colors.warmGray,
      },
      fontFamily: {
        heading: ['"DM Serif Text"', ...defaultTheme.fontFamily.sans],
        sans: ['Merriweather', ...defaultTheme.fontFamily.sans],
      }
    },
    theme: {},
  },
  variants: {
    extend: {
      animation: ['responsive', 'motion-safe', 'motion-reduce'],
      translate: ['motion-safe'],
    },
  },
  plugins: [],
}
