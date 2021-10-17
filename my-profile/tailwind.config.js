const { repeat } = require('rxjs')
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'first': '#2B2E4A',
      'second': '#E84545',
      'third': '#903749',
      'quarter': '#53354A',
      'five': '#424565',
     }),
     maxWidth: {
      '1/4': '25%',
      '1/2': '50%',
      '2/5': '60%',
      '3/4': '75%',
     },
     minWidth: {
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
     },
     gridTemplateColumns: {
      // Complex site-specific column configuration
     'resume': 'repeat(2, minmax(2/5, 1fr))',
    },
    boxShadow: {
      'white': '0 10px 15px -3px rgba(255,255,255), 0 4px 6px -2px rgba(255,255,255)',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
