import React from 'react';
import styled from 'styled-components';

import Header from '../Header';

const StyledGrowDiv = styled.div`
  flex-grow: 1;
  height: 100%;
`;

function Layout({ children }) {
  return (
    <StyledGrowDiv>
      <Header />
      <main>{children}</main>
    </StyledGrowDiv>
  );
}

export default Layout;
