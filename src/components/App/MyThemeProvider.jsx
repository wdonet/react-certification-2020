import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useYouTube } from '../YouTube/YouTubeProvider';

const theme = {
  dark: {
    primary: '#4396f3',
    secondary: '#4a4646',
    color: '#f7f7f7',
  },
};

function MyThemeProvider({ children }) {
  const { state } = useYouTube();
  const { theme: stateTheme } = state;
  return <ThemeProvider theme={theme[stateTheme] || {}}>{children}</ThemeProvider>;
}

export default MyThemeProvider;
