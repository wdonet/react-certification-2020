import React from 'react';
import Styled from './styled';

function Layout({ children }) {
  return (
    <Styled.Container className="container" data-testid="layout">
      {children}
    </Styled.Container>
  );
}

export default Layout;
