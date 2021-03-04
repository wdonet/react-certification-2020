import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

import GlobalStyle, { lightTheme, darkTheme } from '../../globalStyles';
import Header from '../Header';

import { useCustom } from '../../providers/Custom';

const StyledGrowDiv = styled.div`
  flex-grow: 1;
  height: 100%;
`;

function Layout({ children }) {
  const { darkMode } = useCustom();

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <StyledGrowDiv>
        <Header />
        {children}
      </StyledGrowDiv>
    </ThemeProvider>
  );
}

export default Layout;
