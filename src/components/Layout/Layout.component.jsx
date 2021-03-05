import React, { useState } from 'react';
import {
  IoEnterOutline,
  IoExitOutline,
  IoHomeOutline,
  IoOptions,
  IoStar,
} from 'react-icons/io5';
import { useHistory } from 'react-router';
import { useAuth } from '../../providers/Auth';
import Searchbar from '../Searchbar/Searchbar.component';
import UserImage from '../UserImage';
import {
  Container,
  Header,
  Menu,
  MenuList,
  MenuItem,
  MenuLink,
  HeaderLeft,
  HeaderRight,
  HeaderCenter,
  MainContent,
  MenuIcon,
  MenuHamburger,
  Logo,
} from './Layout.styles';

const Layout = ({ children }) => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const history = useHistory();
  const { authenticated, logout } = useAuth();

  const deAuthenticate = (event) => {
    event.preventDefault();
    logout();
    history.push('/');
  };

  const toggleMenu = () => {
    setIsMenuExpanded(!isMenuExpanded);
  };

  return (
    <Container isMenuExpanded={isMenuExpanded}>
      <Header data-testid="header">
        <HeaderLeft>
          <MenuHamburger
            isMenuExpanded={isMenuExpanded}
            onClick={toggleMenu}
            data-testid="button-menu"
          />
          <Logo to="/">
            <h3>Brand</h3>
          </Logo>
        </HeaderLeft>
        <HeaderCenter>
          <Searchbar />
        </HeaderCenter>
        <HeaderRight>
          <UserImage />
        </HeaderRight>
      </Header>
      <Menu data-testid="menu">
        <MenuList>
          <MenuItem>
            <MenuLink to="/" exact>
              <MenuIcon isMenuExpanded={isMenuExpanded}>
                <IoHomeOutline />
                <span>Home</span>
              </MenuIcon>
            </MenuLink>
          </MenuItem>
          <MenuItem disabled>
            <MenuIcon isMenuExpanded={isMenuExpanded}>
              <IoStar />
              <span>Favorites</span>
            </MenuIcon>
          </MenuItem>
          <MenuItem disabled>
            <MenuIcon isMenuExpanded={isMenuExpanded}>
              <IoOptions />
              <span>Options</span>
            </MenuIcon>
          </MenuItem>
          <MenuItem>
            {authenticated ? (
              <MenuLink
                to="/login"
                exact
                onClick={deAuthenticate}
                data-testid="button-logout"
              >
                <MenuIcon isMenuExpanded={isMenuExpanded}>
                  <IoExitOutline />
                  <span>Logout</span>
                </MenuIcon>
              </MenuLink>
            ) : (
              <MenuLink to="/login" exact>
                <MenuIcon isMenuExpanded={isMenuExpanded}>
                  <IoEnterOutline />
                  <span>Login</span>
                </MenuIcon>
              </MenuLink>
            )}
          </MenuItem>
        </MenuList>
      </Menu>
      <MainContent data-testid="main-content">{children}</MainContent>
    </Container>
  );
};

export default Layout;
