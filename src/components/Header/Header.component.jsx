import React from 'react';
import StyledHeader from './Header.styles';
import SearchInput from '../SearchInput';
import SwitchButton from '../SwitchButton';
import Button from '../Button';

function Header() {
  return (
    <StyledHeader>
      <SearchInput data-testid="search-bar" />
      <SwitchButton
        data-testid="theme-switch-button"
        toggled={false}
        onChange={() => {}}
      />
      <Button label="Login" />
    </StyledHeader>
  );
}

export default Header;
