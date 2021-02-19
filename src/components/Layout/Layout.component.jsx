import React from 'react';
import Menu from '../Menu';
import { ContentContainer } from './Layout.styled';

function Layout({ children }) {
  return (
    <>
      <Menu />
      <ContentContainer>{children}</ContentContainer>
    </>
  );
}

export default Layout;
