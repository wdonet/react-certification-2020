import React from 'react';
import styled from 'styled-components';

const StyledHomeView = styled.div`
  padding-top: 64px;
  height: calc(100% - 64px);
`;

const HomeView = ({children}) => {
  return (
    <StyledHomeView data-testid="main-content">
      {children}
    </StyledHomeView>
  );
};

export default HomeView;
