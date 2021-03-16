const defaultColors = {
  white: '#FFFFFF',
  black: '#000000',
};

const font = {
  h1: {
    fontSize: '',
    fontWeight: '',
    letterSpacing: 1.5,
  },
};

export const lightTheme = {
  font,
  color: {
    ...defaultColors,

    primary: '#dce775',
    primaryVariant: '#c0ca33',
    secondary: '#c8ff00',

    background: '#ffffff',
    surface: '#f5f5f5',
    error: '#e64a19',
  },
};

export const darkTheme = {
  font,
  color: {
    ...defaultColors,

    primary: '#00695c',
    primaryVariant: '#004d40',
    secondary: '#1de9b6',

    background: '#616161',
    surface: '#757575',
    error: '#e65100',
  },
};
