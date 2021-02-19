import React from 'react';
import NavigationBar from '../NavigationBar';
import Styled from './Layout.styled';

function Layout({ children }) {
  return (
    <>
      <Styled.Header data-testid="Layout">
        <NavigationBar />
      </Styled.Header>
      <Styled.Container>
        <Styled.Main>{children}</Styled.Main>
      </Styled.Container>
    </>
  );
}

export default Layout;
