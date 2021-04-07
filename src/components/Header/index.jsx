import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { faHome, faHeart, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

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
import Login from '../Login';

import { useAuth } from '../../providers/Auth';

const Header = ({ handleThemeSwitch }) => {
  const [displayLogin, setDisplayLogin] = useState(false);

  const { authenticated, logout } = useAuth();

  const showLoginModal = () => setDisplayLogin(true);
  const closeLoginModal = () => setDisplayLogin(false);

  return (
    <>
      <HeaderContainer>
        <LeftItems>
          <Link
            style={{
              textDecoration: 'none',
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
          {authenticated && (
            <Link
              style={{
                textDecoration: 'none',
              }}
              to="/favorites"
            >
              <HeaderButton>
                <Icon icon={faHeart} size="xsmall" />
              </HeaderButton>
            </Link>
          )}

          <HeaderButton onClick={authenticated ? logout : showLoginModal}>
            <Icon icon={authenticated ? faSignOutAlt : faUser} size="xsmall" />
          </HeaderButton>
        </RightItems>
      </HeaderContainer>
      <Login open={displayLogin} closeModal={closeLoginModal} />
    </>
  );
};

export default Header;
