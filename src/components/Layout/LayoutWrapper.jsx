import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import HomeView from './HomeView';

const StyledLayoutWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const LayoutWrapper = ({ children }) => {
  return (
    <StyledLayoutWrapper data-testid="layout-wrapper">
      <Header />
      <HomeView>{children}</HomeView>
    </StyledLayoutWrapper>
  );
};

export default LayoutWrapper;
