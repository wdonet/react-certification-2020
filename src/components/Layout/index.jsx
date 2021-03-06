import React from 'react';
import { Container } from './styled';

function Layout({ children }) {
  return (
    <Container className="container" data-testid="layout">
      {children}
    </Container>
  );
}

export default Layout;
