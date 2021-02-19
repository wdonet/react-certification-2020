import React from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HeaderWrapper, HamburgerButton, RightElements } from './Header.styled';
import SearchBar from '../SearchBar/SearchBar.component';
import ProfileButton from '../ProfileButton/ProfileButton.component';
import DisplayToggle from '../DisplayToggle/DisplayToggle.component';

function Header() {
  return (
    <HeaderWrapper>
      <HamburgerButton type="submit">
        <FontAwesomeIcon icon={faBars} size="lg" />
      </HamburgerButton>
      <SearchBar />
      <RightElements>
        <DisplayToggle />
        <ProfileButton />
      </RightElements>
    </HeaderWrapper>
  );
}

export default Header;
