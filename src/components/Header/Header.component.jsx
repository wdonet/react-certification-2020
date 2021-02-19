import React from 'react';
import Styled from './Header.styles';

const Header = () => (
  <Styled.Container>
    <Styled.Menu>Menu</Styled.Menu>
    <Styled.SearchContainer>
      <Styled.SearchBar />
      <Styled.SearchButton>Search</Styled.SearchButton>
    </Styled.SearchContainer>
    <Styled.LoginButton>Login</Styled.LoginButton>
  </Styled.Container>
);

export default Header;
