import React from 'react';
import { Container, SubContainerLeft, SubContainerRight } from './styled';
import MenuToggle from '../MenuToggle';
import SearchBar from '../SearchBar';
import ThemeSwitch from '../ThemeSwitch';
import Avatar from '../Avatar';

const Header = () => {
  return (
    <Container>
      <SubContainerLeft>
        <MenuToggle />
        <SearchBar />
      </SubContainerLeft>
      <SubContainerRight>
        <ThemeSwitch />
        <Avatar />
      </SubContainerRight>
    </Container>
  );
};

export default Header;
