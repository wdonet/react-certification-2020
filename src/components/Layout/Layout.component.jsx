import React from 'react';
import Menu from '../Menu/Menu.component';
import { ContentContainer } from './Layout.styled';

function Layout({ children }) {
  return (
    <>
      <Menu />
      <ContentContainer data-testid="ContentContainer">{children}</ContentContainer>
    </>
  );
}

export default Layout;
