import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../../providers/themes';

const renderWithTheme = (Component, theme = lightTheme) => {
  const contextValue = { theme, switchTheme: jest.fn() };
  return render(<ThemeProvider theme={contextValue}>{Component}</ThemeProvider>);
};

export default renderWithTheme;
