import React from 'react';

import {
  HeaderContainer,
  StyledBarsIcon,
  StyledUserIcon,
  StyledHeartIcon,
  LeftItems,
  CenterItems,
  RightItems,
} from './styled';

import SearchInput from '../SearchInput';
import HeaderButton from '../HeaderButton';

const Header = () => {
  return (
    <HeaderContainer>
      <LeftItems>
        <HeaderButton onClick={() => {}}>
          <StyledBarsIcon />
        </HeaderButton>
      </LeftItems>
      <CenterItems>
        <SearchInput />
      </CenterItems>
      <RightItems>
        <HeaderButton onClick={() => {}}>
          <StyledHeartIcon />
        </HeaderButton>
        <HeaderButton onClick={() => {}}>
          <StyledUserIcon />
        </HeaderButton>
      </RightItems>
    </HeaderContainer>
  );
};

export default Header;
