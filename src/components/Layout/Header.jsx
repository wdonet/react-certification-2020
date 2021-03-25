import React, { useContext, useRef, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { TextField, IconWrapper, Avatar, Switch, Overlay, Button } from '../../ui';
import hamburger from '../../assets/icons/hamburguer.png';
import defaultUser from '../../assets/icons/default_user.jpg';
import AppContext from '../../providers/AppContext';
import Login from '../Login/Login';
import Menu from '../../ui/Menu/Menu';

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({theme}) => theme.color.primary};
  justify-content: space-between;
  width: 100%;
  height: 64px;
  overflow: inherit;
  position: fixed;
  top: 0;
`;

const StyledSection = styled.div`
  display: flex;
  align-items: center;
`;

const Header = () => {
  const { search, switchTheme, theme } = useContext(AppContext);
  const [isAvatarMenuOpen, setIsAvatarMenuOpen] = useState(false);
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
  const ref = useRef(null);
  const { push } = useHistory();

  const setHomeVideosViewAndSearch = (query) => {
    search(query);
    push({pathname: "/home"});
  };

  return (
    <StyledHeader role="toolbar" data-testid="header" theme={theme}>
      <Overlay show={isLoginFormOpen}>
        <Login onCancel={() => setIsLoginFormOpen(false)}/>
      </Overlay>
      <StyledSection>
        <IconWrapper role="button" src={hamburger} alt="hamburguer" />
        <TextField
          role="search"
          ref={ref}
          data-testid="search-input"
          onKeyPress={({ charCode }) =>
            charCode === 13 && setHomeVideosViewAndSearch(ref.current.value)
          }
        />
      </StyledSection>
      <StyledSection>
        <Switch onClick={switchTheme} data-testid="theme-mode-switch"/>
        <Menu
          show={isAvatarMenuOpen}
          right="4px"
          onClose={() => setIsAvatarMenuOpen(false)}
          menuButton={<Avatar 
            role="button" 
            alt="profile" 
            src={defaultUser}
            data-testid="user-avatar"
            onClick={() => setIsAvatarMenuOpen(true)}
          />}
        >
          <Button 
            data-testid="menu-login-button" 
            onClick={()=> setIsLoginFormOpen(true)}
          >
              Iniciar sesion
          </Button>
        </Menu>
      </StyledSection>
    </StyledHeader>
  );
};

export default Header;
