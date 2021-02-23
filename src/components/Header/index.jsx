import React from 'react';

import {
  HeaderContainer,
  StyledBars,
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
          <StyledBars />
        </HeaderButton>
      </LeftItems>
      <CenterItems>
        <SearchInput />
      </CenterItems>
      <RightItems>
        <HeaderButton onClick={() => {}}>
          <StyledBars />
        </HeaderButton>
      </RightItems>
    </HeaderContainer>
  );
};

export default Header;
