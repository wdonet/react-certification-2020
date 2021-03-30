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
    secondary: '#a2cf00',

    fontPrimary: '#fafafa',
    fontSecondary: '#eeeeee',
    
    background: '#f9ffc2',
    surface: '#a2ab55',
    surfaceShadow: '#c5d15c',
  },
};

export const darkTheme = {
  font,
  color: {
    ...defaultColors,

    primary: '#00695c',
    primaryVariant: '#004d40',
    secondary: '#119171',

    fontPrimary: '#00e5ff',
    fontSecondary: '#bdbdbd',
    
    background: '#004a41',
    surface: '#006e63',
    surfaceShadow: '#18877c',
  },
};
