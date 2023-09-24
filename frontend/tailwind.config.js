/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './components2/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './layouts2/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      peyda: ['peyda'],
    },
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1664px',
        '3xl': '1920px',
      },
      container: {
        screens: {
          // sm: "640px",
          // md: "768px",
          // lg: "1024px",
          // xl: "1280px",
          sm: '1664px',
          md: '1664px',
          lg: '1664px',
          xl: '1664px',
          '2xl': '1664px',
          // "3xl": '1920px'
        },
      },
      colors: {
        primary: {
          extraLight: '#B4F4E3',
          light: '#68E9C7',
          DEFAULT: '#36E2B4',
          dark: '#1AB88E',
          extraDark: '#093D2F',
        },
        secondary: {
          extraLight: '#E6D9FF',
          light: '#B38CFF',
          DEFAULT: '#9966FF',
          dark: '#7B39FF',
          extraDark: '#1E0059',
        },
        tertiary: {
          extraLight: '#BFE6FF',
          light: '#40B3FF',
          DEFAULT: '#0099FF',
          dark: '#0073BF',
          extraDark: '#002640',
        },
        // quaternary: {
        //   extraLight: '#B4F4E3',
        //   light: '#68E9C7',
        //   DEFAULT: '#36E2B4',
        //   dark: '#1AB88E',
        //   extraDark: '#093D2F',
        // },
        // quinary: {
        //   extraLight: '#B4F4E3',
        //   light: '#68E9C7',
        //   DEFAULT: '#36E2B4',
        //   dark: '#1AB88E',
        //   extraDark: '#093D2F',
        // },
        textLight: {
          // primary: 'rgb(var(--text-primary) / 0.87)',
          primary: '#131313',
          // secondary: 'rgb(var(--text-primary) / 0.54)',
          secondary: '#9a9a9a',
          // disabled: 'rgb(var(--text-primary) / 0.38)',
          disabled: '#cbcbcb',
        },
        textDark: {
          primary: 'rgb(var(--text-dark-primary) / 1)',
          secondary: 'rgb(var(--text-dark-primary) / 0.7)',
          disabled: 'rgb(var(--text-dark-primary) / 0.5)',
        },
        bgLight: {
          DEFAULT: '#fafafa',
          paper: '#fff',
        },
        bgDark: {
          DEFAULT: '#303030',
          paper: '#424242',
        },
        divider: 'rgb(var(--divider-primary) / 0.12)',
        dividerDark: 'rgb(var(--divider-dark-primary) / 0.12)',
      },
      zIndex: {
        mobileStepper: 1000,
        fab: 1050,
        speedDial: 1050,
        appBar: 1100,
        drawer: 1200,
        modal: 1300,
        snackbar: 1400,
        tooltip: 1500,
      },
    },
  },
  plugins: [],
}
