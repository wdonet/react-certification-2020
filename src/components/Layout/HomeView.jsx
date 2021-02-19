import React from 'react';
import styled from 'styled-components';

const StyledHomeView = styled.div`
  padding-top: 64px;
  height: calc(100% - 64px);
`;

const HomeView = () => {
  return (
    <StyledHomeView data-testid="main-content">
      I am your main content, brother.
    </StyledHomeView>
  );
};

export default HomeView;
