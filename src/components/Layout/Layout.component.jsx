import React from 'react';
import Header from './Header';
import { Content, MainContainer } from './Layout.styled';

function Layout({ children }) {
  return (
    <MainContainer>
      <Header>This is the header</Header>
      <Content>{children}</Content>
    </MainContainer>
  );
}

export default Layout;
