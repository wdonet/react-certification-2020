import React from 'react';
import { ThemeProvider } from 'styled-components';

const ThemeContext = React.createContext();

export const Theme = {
  primary: '#1c5476;',
  secondary: 'white',
  textcolor: '#7698ac',
};

function LocalThemeProvider({ children }) {
  return (
    <ThemeContext.Provider>
      <ThemeProvider theme={Theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

export { ThemeContext };
export default LocalThemeProvider;
