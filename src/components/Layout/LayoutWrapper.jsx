import React from 'react';
import Navbar from './Navbar';
import MainContent from './MainContent';
import styled from 'styled-components';

const StyledLayoutWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const LayoutWrapper = () => {
  return (
    <StyledLayoutWrapper data-testid="layout-wrapper">
      <Navbar />
      <MainContent />
    </StyledLayoutWrapper>
  );
};

export default LayoutWrapper;
