import React from 'react';
import { useHistory } from 'react-router';
import Switch from '../Switch';
import { HeaderContainer, Loggin, Menu, SearchInput, SearchLabel } from './Header.styled';
import { DARK_THEME } from '../../utils/constants';

function Header() {
  const history = useHistory();

  function search({ key, target }) {
    if (key === 'Enter') {
      history.push(`/search/${target.value}`);
    }
  }

  return (
    <HeaderContainer>
      <Menu
        blurImage="/images/menu.svg"
        focusImage="/images/menu-focus.svg"
        clickHandler={() => console.log('Menu')}
        alt="Menu"
        name="Menu"
      />
      <SearchLabel htmlFor="search-input">search</SearchLabel>
      <SearchInput
        id="search-input"
        placeholder="Search for videos..."
        onKeyDown={search}
      />
      <Switch
        valueName={DARK_THEME}
        textOn="☽"
        textOff="☼"
        onToggle={(darkTheme) => console.log(darkTheme ? 'Dark' : 'Light')}
      />
      <Loggin
        blurImage="/images/loggin.svg"
        focusImage="/images/loggin-focus.svg"
        clickHandler={() => console.log('Loggin')}
        alt="Loggin"
        name="Loggin"
      />
    </HeaderContainer>
  );
}

export default Header;
