import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../providers/themes';

export { data } from './mockData';

export const renderWithTheme = (Component, theme = lightTheme) => {
  const contextValue = { theme, switchTheme: jest.fn() };
  return render(<ThemeProvider theme={contextValue}>{Component}</ThemeProvider>);
};

export const contextWrapper = (
  ContextType = React.createContext({}),
  value,
  Component = <div />
) => <ContextType.Provider value={value}>{Component}</ContextType.Provider>;
