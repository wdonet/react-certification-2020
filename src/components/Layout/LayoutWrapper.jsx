import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Header from './Header';
import HomeView from './HomeView';
import { SearchWrapper } from '../../wrappers/SearchWrapper';

const StyledLayoutWrapper = styled.div`
  background: ${({ theme }) => theme.color.background};
  width: 100%;
  height: 100%;
`;

const LayoutWrapper = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <StyledLayoutWrapper data-testid="layout-wrapper" theme={theme} role="application">
      <SearchWrapper>
        <Header />
        <HomeView>{children}</HomeView>
      </SearchWrapper>
    </StyledLayoutWrapper>
  );
};

export default LayoutWrapper;
