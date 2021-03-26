import React, { useContext, useReducer, useRef } from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { TextField, IconWrapper, Avatar, Switch, Overlay, Button } from '../../ui';
import { headerReducer } from '../../reducers/headerReducer';
import { 
  SET_SIDEBAR_OPEN, 
  SET_AVATAR_MENU_OPEN, 
  SET_LOGIN_FORM_OPEN, 
} from '../../reducers/actionTypes';
import hamburger from '../../assets/icons/hamburguer_icon.jpeg';
import defaultUser from '../../assets/icons/default_user.jpg';
import AppContext from '../../providers/AppContext';
import Login from '../Login/Login';
import Menu from '../../ui/Menu/Menu';
import Sidebar from './Sidebar';

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

const initialState = {
  sidebarOpen: false,
  avatarMenuOpen: false,
  loginFormOpen: false,
};

const Header = () => {
  const ref = useRef(null);
  const { push } = useHistory();
  const { 
    search, 
    userSession,
    setUserSession,
    switchTheme, 
    theme, } = useContext(AppContext);
  const [{
      sidebarOpen,
      avatarMenuOpen,
      loginFormOpen,
    }, dispatch] = useReducer(headerReducer, initialState);

  const setHomeVideosViewAndSearch = (query) => {
    search(query);
    push({pathname: "/home"});
  };

  return (
    <StyledHeader role="toolbar" data-testid="header" theme={theme}>
      
      <Overlay show={sidebarOpen}>
        <Sidebar 
          title="Welcome" 
          onClose={() => dispatch({ type: SET_SIDEBAR_OPEN , payload: false })}
        >
        <Button 
          width="calc( 100% - 8px )" 
          height="30px"
          border="0px"
          margin="4px"
          data-testid="sidebar-home"
          onClick={() => {
            push({pathname: "/home"});
            dispatch({ type: SET_SIDEBAR_OPEN , payload: false });
          }}
        >
          Home
        </Button>
        {
          userSession && 
          <Button 
            width="calc( 100% - 8px )" 
            height="30px"
            border="0px"
            margin="4px"
            data-testid="sidebar-favorites"
          >
            Favorites
          </Button>
        }
        </Sidebar>
      </Overlay>

      {
        ReactDom.createPortal(<Overlay show={loginFormOpen}>
          <Login onCancel={() => dispatch({ type: SET_LOGIN_FORM_OPEN, payload: false })}/>
        </Overlay>, document.getElementById("login-portal"))
      }

      <StyledSection>
        <IconWrapper 
          role="button" 
          src={hamburger} 
          alt="hamburguer"
          onClick={() => dispatch({ type: SET_SIDEBAR_OPEN, payload: true })}
        />
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
          show={avatarMenuOpen}
          right="4px"
          onClose={() => dispatch({ type: SET_AVATAR_MENU_OPEN, payload: false })}
          menuButton={<Avatar 
            role="button" 
            alt="profile" 
            src={ userSession?.avatarUrl || defaultUser }
            data-testid="user-avatar"
            onClick={() => dispatch({ type: SET_AVATAR_MENU_OPEN, payload: true })}
          />}
        >
          {
            userSession ? 
            <Button 
              data-testid="menu-logout-button" 
              width="100%" 
              height="30px"
              onClick={() => {
                setUserSession(null);
                push({ pathname: "/" });
              }}
            >
                Logout
            </Button>:
            <Button 
              data-testid="menu-login-button" 
              width="100%" 
              height="30px"
              onClick={() => dispatch({ type: SET_LOGIN_FORM_OPEN, payload: true })}
            >
                Login
            </Button>
          }
        </Menu>
      </StyledSection>

    </StyledHeader>
  );
};

export default Header;
