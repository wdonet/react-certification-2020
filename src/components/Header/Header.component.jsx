import React from 'react';
import Switch from '../Switch';
import { HeaderContainer, Loggin, Menu, SearchInput } from './Header.styled';
import { DARK_THEME } from '../../utils/constants';

function Header() {
  return (
    <HeaderContainer>
      <Menu
        blurImage="images/menu.svg"
        focusImage="images/menu-focus.svg"
        clickHandler={() => console.log('Menu')}
        alt="Menu"
      />
      <SearchInput placeholder="Search for videos..." />
      <Switch
        name={DARK_THEME}
        textOn="☽"
        textOff="☼"
        onToggle={(darkTheme) => console.log(darkTheme ? 'Dark' : 'Light')}
      />
      <Loggin
        blurImage="images/loggin.svg"
        focusImage="images/loggin-focus.svg"
        clickHandler={() => console.log('Loggin')}
        alt="Loggin"
      />
    </HeaderContainer>
  );
}

export default Header;
