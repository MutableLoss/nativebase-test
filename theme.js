const LightTheme = {
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
      50: 'teal.50',
      500: 'teal.500',
    },
  },
  components: {
    Box: {
      variants: {
        section: {
          mt: 12,
          px: 6,
        },
      },
    },
    Heading: {
      baseStyle: {
        _light: {
          color: 'primary.800',
        },
        _dark: {
          color: 'primary.50',
        },
      },
      variants: {
        themed: ({colorMode}) => ({
          // color: colorMode !== 'light' ? 'primary.50' : 'primary.800',
        }),
      },
    },
    Text: {
      baseStyle: {
        fontWeight: 600,
        _light: {
          color: 'primary.800',
        },
        _dark: {
          color: 'primary.50',
        },
      },
      defaultProps: {
        fontFamily: 'body',
      },
      variants: {
        themed: {
          m: 1,
          fontSize: 18,
        },
        themedShort: {
          fontSize: 22,
          m: 0,
          mx: 1,
        },
        paragraph: {
          fontSize: 18,
          fontWeight: 400,
          mt: 4,
        },
      },
    },
    Button: {
      baseStyle: {
        color: 'primary.800',
        _text: {
          color: 'primary.50',
        },
      },
      variants: {
        rounded: ({colorScheme}) => ({
          bg: `${colorScheme}.400`,
          borderRadius: 12,
          m: 4,
        }),
        wideSecondary: ({colorScheme}) => ({
          bg: `${colorScheme}.700`,
          borderRadius: 4,
          m: 4,
        }),
      },
    },
    VStack: ({colorMode}) => ({
      baseStyle: {
        _light: {
          bg: 'primary.50',
        },
        _dark: {
          bg: 'primary.800',
        },
      },
    }),
  },
  config: {
    initialColorMode: 'light',
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
      700: {
        normal: 'Poppins',
      },
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Roboto',
    mono: 'Poppins',
  },
  space: {
    sp1: '4px',
    sp2: '8px',
    sp3: '12px',
    sp4: '16px',
    sp5: '20px',
    sp6: '24px',
  },
};

export default LightTheme;
