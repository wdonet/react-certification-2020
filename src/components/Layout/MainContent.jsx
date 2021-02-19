import React from 'react';
import styled from 'styled-components';

const StyledMainContent = styled.div`
  margin-top: 64px;
  height: 100%;
`;

const MainContent = () => {
  return <StyledMainContent data-testid="main-content">I&apos;m your main content</StyledMainContent>;
};

export default MainContent;
