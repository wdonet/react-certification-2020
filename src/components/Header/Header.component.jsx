import './Header.styles.css';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Checkbox, Icon, Input, Menu, Dropdown } from 'semantic-ui-react';

import { useAuth } from '../../providers/Auth';
import { useGlobalState } from '../../providers/GlobalState/Provider';
import useQueryParams from '../../hooks/useQueryParams';

const Header = ({ onOpenSidebar, onOpenModal }) => {
  const history = useHistory();
  const [searchedText, setSearchedText] = useState('');
  const { authenticated, logout } = useAuth();
  const { state, dispatch } = useGlobalState();
  const { isThemeLight } = state;
  const queryParam = useQueryParams().searchedText;

  useEffect(() => {
    setSearchedText(queryParam || '');
  }, [queryParam]);

  const deAuthenticate = () => {
    logout();
    history.push('/');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      history.push({ pathname: '/results', search: `?searchedText=${searchedText}` });
    }
  };

  const onChangeThemeHandler = () => {
    dispatch({
      type: 'CHANGE_THEME',
      payload: !isThemeLight,
    });
  };

  return (
    <>
      <Menu
        data-testid="header-menu"
        style={{ backgroundColor: isThemeLight ? 'skyblue' : 'cadetblue' }}
      >
        <Menu.Item>
          <Icon
            data-testid="header-bars-icon"
            className="clickable"
            name="bars"
            onClick={() => onOpenSidebar(true)}
          />
        </Menu.Item>
        <Menu.Item className="searchInput">
          <Input
            data-testid="header-search"
            icon="search"
            placeholder="Search..."
            value={searchedText}
            onKeyDown={handleKeyDown}
            onChange={(event) => setSearchedText(event.target.value)}
          />
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item className="darkMode">
            <Checkbox
              data-testid="header-dark-mode"
              label="Dark Mode"
              slider
              onClick={onChangeThemeHandler}
            />
          </Menu.Item>
          <Dropdown
            data-testid="header-dropdown"
            icon={!isThemeLight ? 'user circle' : 'user circle outline'}
            className="link icon item userIcon"
          >
            <Dropdown.Menu>
              {!authenticated ? (
                <Dropdown.Item
                  data-testid="header-dropdown-login"
                  onClick={() => onOpenModal(true)}
                >
                  Login
                </Dropdown.Item>
              ) : (
                <Dropdown.Item
                  data-testid="header-dropdown-logout"
                  onClick={deAuthenticate}
                >
                  Logout
                </Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    </>
  );
};

export default Header;
