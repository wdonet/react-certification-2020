import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    blueGrey: { normal: '#263238', dark: '#000a12', light: '#4f5b62' },
    white: '#FFFFFF',
  },
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
};

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
