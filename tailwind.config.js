module.exports = {
  important: true,
  purge: [],
  theme: {
    fill: theme => ({
      'primary': theme('colors.light.primary'),
      'white': theme('colors.white')
    }),
    extend: {
      borderRadius: {
        'circle': '50%'
      },
      height: {
        h200: '200px',
        h250: '250px',
        h300: '300px',
        h400: '400px',
      },
      width: {
        w200: '200px',
        w250: '250px',
        w300: '300px',
        w400: '400px',
        w33: '33.33333%',
        w50: '50%'
      },
      strokeWidth: {
        '3': '3',
        '4': '4',
      },
      colors: {
        black: '#000',
        white: '#fff',
        solar: {
          primary: "#ffcdb2",
          tetiary: "#ffb4a2",
          secondary: "#6d6875"
        },
        light: {
          primary: "#14213D",
          tetiary: "#E5E5E5",
          secondary: "#FCA311"
        }
      }

    },
  },
  variants: {},
  plugins: [],
}
