import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Menu, Sidebar } from 'semantic-ui-react';

import { useAuth } from '../../providers/Auth';
import { useGlobalState } from '../../providers/GlobalState/Provider';
import { HOME_ROUTE, FAVORITES_ROUTE } from '../../utils/constants';
import Header from '../Header';
import Login from '../Login';
import { MainContainer, SessionContainer, ThemeModeContainer } from './Layout.styles';

const Layout = ({ children }) => {
  const history = useHistory();
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const { authenticated, logout } = useAuth();
  const { state, dispatch } = useGlobalState();
  const { isThemeLight } = state;

  const deAuthenticate = () => {
    logout();
    setVisible(false);
    history.push('/');
  };

  const onLoginHandler = () => {
    setOpen(true);
    setVisible(false);
  };

  const onChangeThemeHandler = () => {
    dispatch({
      type: 'CHANGE_THEME',
      payload: !isThemeLight,
    });
    setVisible(false);
  };

  const goPage = (route) => {
    history.push(`${route}`);
    setVisible(false);
  };

  return (
    <>
      <Sidebar.Pushable data-testid="layout-sidebar">
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          onHide={() => setVisible(false)}
          vertical
          visible={visible}
          width="thin"
          style={{ backgroundColor: isThemeLight ? 'white' : 'lightgray' }}
        >
          {!authenticated ? (
            <SessionContainer>
              <Menu.Item data-testid="layout-login" onClick={onLoginHandler} as="a">
                Login
              </Menu.Item>
            </SessionContainer>
          ) : (
            <SessionContainer>
              <Menu.Item data-testid="layout-logout" onClick={deAuthenticate} as="a">
                Logout
              </Menu.Item>
            </SessionContainer>
          )}
          {isThemeLight ? (
            <ThemeModeContainer>
              <Menu.Item
                data-testid="layout-dark-mode"
                onClick={onChangeThemeHandler}
                as="a"
              >
                Dark Mode
              </Menu.Item>
            </ThemeModeContainer>
          ) : (
            <ThemeModeContainer>
              <Menu.Item
                data-testid="layout-light-mode"
                onClick={onChangeThemeHandler}
                as="a"
              >
                Light Mode
              </Menu.Item>
            </ThemeModeContainer>
          )}
          <Menu.Item
            data-testid="layout-go-home"
            onClick={() => goPage(HOME_ROUTE)}
            as="a"
          >
            Home
          </Menu.Item>
          {authenticated && (
            <Menu.Item
              data-testid="layout-go-favorites"
              onClick={() => goPage(FAVORITES_ROUTE)}
              as="a"
            >
              Favorites
            </Menu.Item>
          )}
        </Sidebar>
        <Sidebar.Pusher
          dimmed={visible}
          style={{
            height: visible ? '100vh' : '100%',
            backgroundColor: isThemeLight ? 'snow' : 'darkgray',
          }}
        >
          <Header onOpenSidebar={setVisible} onOpenModal={setOpen} />
          <Login open={open} setOpen={setOpen} />
          <MainContainer isThemeLight>{children}</MainContainer>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </>
  );
};

export default Layout;
