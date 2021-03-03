import React from 'react';
import { faBars, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';

import {
  HeaderContainer,
  LeftItems,
  CenterItems,
  RightItems,
  ToggleContainer,
} from './styled';

import SearchInput from '../SearchInput';
import HeaderButton from '../HeaderButton';
import Icon from '../Icon';
import Toggle from '../Toggle';

const Header = ({ handleThemeSwitch }) => {
  return (
    <HeaderContainer>
      <LeftItems>
        <HeaderButton onClick={() => {}}>
          <Icon icon={faBars} size="xsmall" />
        </HeaderButton>
        <ToggleContainer>
          <Toggle onChange={handleThemeSwitch} />
        </ToggleContainer>
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
