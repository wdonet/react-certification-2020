import React, { useState } from 'react';
import {
  IoEnterOutline,
  IoExitOutline,
  IoOptions,
  IoPersonCircle,
} from 'react-icons/io5';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../providers/Auth';
import Popup from '../Popup';
import {
  User,
  Container,
  Header,
  Content,
  OptionsList,
  OptionsListItem,
  OptionsLink,
  OptionsButton,
  CloseButton,
} from './UserImage.styles';

const UserImage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();
  const { authenticated, logout } = useAuth();

  const toggleUserMenu = (value) => {
    setShowMenu(value);
  };

  const deAuthenticate = (event) => {
    event.preventDefault();
    toggleUserMenu(false);
    logout();
    history.push('/');
  };

  return (
    <>
      <User
        type="button"
        onClick={() => toggleUserMenu(!showMenu)}
        data-testid="user-default-icon"
      >
        <IoPersonCircle />
      </User>
      <Popup data-testid="user-popup" visible={showMenu} onClose={toggleUserMenu}>
        <Container>
          <Header>
            <h4>{authenticated ? 'Username' : 'Hello Stranger!'}</h4>
            <CloseButton
              type="button"
              onClick={() => toggleUserMenu(false)}
              data-testid="button-close"
            />
          </Header>
          <Content>
            <OptionsList>
              {authenticated ? (
                <>
                  <OptionsListItem>
                    <OptionsButton type="button">
                      <IoOptions /> <span>Options</span>
                    </OptionsButton>
                  </OptionsListItem>
                  <OptionsListItem>
                    <OptionsLink
                      to="/"
                      onClick={deAuthenticate}
                      data-testid="button-logout"
                    >
                      <IoExitOutline />
                      <span>Logout</span>
                    </OptionsLink>
                  </OptionsListItem>
                </>
              ) : (
                <OptionsListItem>
                  <OptionsLink
                    to="/login"
                    onClick={() => toggleUserMenu(false)}
                    data-testid="link-login"
                  >
                    <IoEnterOutline />
                    <span>Login</span>
                  </OptionsLink>
                </OptionsListItem>
              )}
            </OptionsList>
          </Content>
        </Container>
      </Popup>
    </>
  );
};

export default UserImage;
