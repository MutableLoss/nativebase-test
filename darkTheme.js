const DarkTheme = {
  colors: {
    primary: {
      50: '#E3F2F9',
      100: '#C5E4F3',
      200: '#A2D4EC',
      300: '#7AC1E4',
      400: '#47A9DA',
      500: '#0088CC',
      600: '#007AB8',
      700: '#006BA1',
      800: '#005885',
      900: '#003F5E',
    },
    secondary: {
      50: 'red.200',
    },
  },
  components: {
    Text: {
      baseStyle: {
        fontWeight: 600,
      },
      defaultProps: {
        fontFamily: 'body',
      },
    },
    Button: {
      variants: {
        rounded: ({colorScheme}) => ({
          backgroundColor: `${colorScheme}.400`,
          borderRadius: 12,
        }),
      },
    },
  },
  config: {
    initialColorMode: 'dark',
  },
  fontConfig: {
    Poppins: {
      100: {
        normal: 'Poppins',
      },
      200: {
        normal: 'Poppins',
      },
      300: {
        normal: 'Poppins',
      },
      400: {
        normal: 'Poppins',
      },
      500: {
        normal: 'Poppins',
      },
      600: {
        normal: 'Poppins',
      },
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'mono',
    mono: 'Poppins',
  },
};

export default DarkTheme;
