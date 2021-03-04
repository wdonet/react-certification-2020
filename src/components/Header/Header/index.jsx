import React from 'react';
import Styled from './styled';
import './header.css';

import Logo from '../Logo';
import SearchBar from '../SearchBar';
import Login from '../Login';

const Header = () => {
  return (
    <Styled.Header>
      <Styled.LogoImage>
        <Logo />
      </Styled.LogoImage>
      <Styled.SearchBar>
        <SearchBar />
      </Styled.SearchBar>
      <Styled.Login>
        <Login />
      </Styled.Login>
    </Styled.Header>
  );
};

export default Header;
