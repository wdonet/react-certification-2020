import React from 'react';
import { faBars, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';

import {
  HeaderContainer,
  LeftItems,
  CenterItems,
  RightItems,
  StyledIcon,
} from './styled';

import SearchInput from '../SearchInput';
import HeaderButton from '../HeaderButton';
import Icon from '../Icon';

const Header = () => {
  return (
    <HeaderContainer>
      <LeftItems>
        <HeaderButton onClick={() => {}}>
          <StyledIcon icon={faBars} size="xsmall" />
        </HeaderButton>
      </LeftItems>
      <CenterItems>
        <SearchInput />
      </CenterItems>
      <RightItems>
        <HeaderButton onClick={() => {}}>
          <Icon icon={faHeart} size="xsmall" />
        </HeaderButton>
        <HeaderButton onClick={() => {}}>
          <Icon icon={faUser} size="xsmall" />
        </HeaderButton>
      </RightItems>
    </HeaderContainer>
  );
};

export default Header;
