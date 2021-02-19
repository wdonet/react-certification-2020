import React from 'react';
import Menu from '../Menu';
import { Container } from './Layout.styled';

function Layout({ children }) {
  return (
    <Container>
      <Menu />
      {children}
    </Container>
  );
}

export default Layout;
