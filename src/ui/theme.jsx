const colors = {
  base: '#d94c4b',
  gray1: '#efefef',
  white: '#ffffff',
  black: '#000000',
};

const theme = {
  light: {
    base: colors.base,
    background: '#fff',
    label: '#000',

    inputHoverBorder: colors.base,
    inputHoverBg: colors.gray1,

    colors,
  },
  dark: {
    base: colors.base,
    background: '#000',
    label: '#fff',

    inputHoverBorder: colors.base,
    inputHoverBg: colors.gray1,

    colors,
  },
};

export default theme;
