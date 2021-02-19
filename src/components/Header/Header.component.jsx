import React from 'react';
import SearchField from './SearchField';
import DarkMode from './DarkMode';
import MenuItems from './MenuItems';
import LoginButton from './LoginButton';
import Styled from './Header.styled';

const Header = () => {
  return (
    <Styled.NavigationBar>
      <Styled.LeftContainer>
        <MenuItems />
        <SearchField placeholder="wizeline" />
      </Styled.LeftContainer>
      <Styled.RightContainer>
        <DarkMode />
        <LoginButton />
      </Styled.RightContainer>
    </Styled.NavigationBar>
  );
};

export default Header;
