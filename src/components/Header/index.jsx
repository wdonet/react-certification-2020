import React from 'react';
import { Link } from 'react-router-dom';
import { faHome, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';

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
        <Link
          style={{
            'text-decoration': 'none',
          }}
          to="/"
        >
          <HeaderButton>
            <Icon icon={faHome} size="xsmall" />
          </HeaderButton>
        </Link>
        <ToggleContainer>
          <Toggle onChange={handleThemeSwitch} />
        </ToggleContainer>
      </LeftItems>
      <CenterItems>
        <SearchInput />
      </CenterItems>
      <RightItems>
        <Link
          style={{
            'text-decoration': 'none',
          }}
          to="/favorites"
        >
          <HeaderButton>
            <Icon icon={faHeart} size="xsmall" />
          </HeaderButton>
        </Link>
        <Link
          style={{
            'text-decoration': 'none',
          }}
          to="/profile"
        >
          <HeaderButton>
            <Icon icon={faUser} size="xsmall" />
          </HeaderButton>
        </Link>
      </RightItems>
    </HeaderContainer>
  );
};

export default Header;
