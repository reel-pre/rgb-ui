const colors = require('tailwindcss/colors')

module.exports = {
  // purge: {
  //   enabled: true,
  //   content: ['./src/**/*.{js,jsx,ts,tsx}']
  // },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus']
    }
  },
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    minWidth: {
      chip: '45px'
    },
    colors: {
      pureRed: '#FF0000',
      pureGreen: '#00FF00',
      pureBlue: '#0000FF',
      black: colors.black,
      gray: colors.gray,
      white: colors.white
    },
    boxShadow: {
      redShadow: '0px 0px 8px rgba(255, 0, 0, 0.93)',
      greenShadow: '0px 0px 8px rgba(0, 255, 0, 0.93)',
      blueShadow: '0px 0px 8px rgba(0, 0, 255, 0.93)'
    },
    extend: {}
  },
  plugins: []
}
