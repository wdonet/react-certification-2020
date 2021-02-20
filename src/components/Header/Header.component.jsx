import React from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { HeaderStyled, HeaderContainer } from './Header.styles';

import SearchInput from '../SearchInput';
import HeaderButton from '../HeaderButton';

const Header = () => {
  return (
    <HeaderStyled>
      <HeaderContainer>
        <HeaderButton icon={faBars} onClick={() => {}} />
        <SearchInput />
      </HeaderContainer>
    </HeaderStyled>
  );
};

export default Header;
