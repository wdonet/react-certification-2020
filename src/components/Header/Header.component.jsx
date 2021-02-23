import './Header.styles.css';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Checkbox, Icon, Input, Menu, Dropdown } from 'semantic-ui-react';

import { useAuth } from '../../providers/Auth';

const Header = ({ onOpenSidebar, onOpenModal, onDarkMode, isDarkMode }) => {
  const history = useHistory();
  const { authenticated, logout } = useAuth();

  const deAuthenticate = () => {
    logout();
    history.push('/');
  };

  return (
    <>
      <Menu data-testid="header-menu">
        <Menu.Item>
          <Icon
            data-testid="header-bars-icon"
            className="clickable"
            name="bars"
            onClick={() => onOpenSidebar(true)}
          />
        </Menu.Item>
        <Menu.Item className="searchInput">
          <Input icon="search" placeholder="Search..." />
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item className="darkMode">
            <Checkbox
              data-testid="header-dark-mode"
              label="Dark Mode"
              slider
              onClick={() => onDarkMode(!isDarkMode)}
            />
          </Menu.Item>
          <Dropdown
            data-testid="header-dropdown"
            icon={isDarkMode ? 'user circle' : 'user circle outline'}
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
