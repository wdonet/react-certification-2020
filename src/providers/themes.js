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
    fontSecondary: '#bdbdbd',
    
    background: '#ffffff',
  },
};

export const darkTheme = {
  font,
  color: {
    ...defaultColors,

    primary: '#00695c',
    primaryVariant: '#004d40',
    secondary: '#1de9b6',

    fontPrimary: '#757575',
    fontSecondary: '#bdbdbd',
    
    background: '#616161',
  },
};
