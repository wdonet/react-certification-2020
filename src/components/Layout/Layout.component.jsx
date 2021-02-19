import React from 'react';
import {
  IoEnterOutline,
  IoHomeOutline,
  IoOptions,
  IoPersonCircle,
  IoSearchOutline,
  IoStar,
} from 'react-icons/io5';
import {
  Container,
  Header,
  Menu,
  MenuList,
  MenuItem,
  HeaderLeft,
  HeaderRight,
  HeaderCenter,
  MainContent,
  MenuIcon,
  Search,
  SearchInput,
  User,
} from './Layout.styles';

function Layout({ children }) {
  return (
    <Container>
      <Header>
        <HeaderLeft>
          <h3>Brand</h3>
        </HeaderLeft>
        <HeaderCenter>
          <Search>
            <IoSearchOutline />
            <SearchInput type="text" placeholder="Search" />
          </Search>
        </HeaderCenter>
        <HeaderRight>
          <User>
            <IoPersonCircle />
          </User>
        </HeaderRight>
      </Header>
      <Menu>
        <MenuList>
          <MenuItem active>
            <MenuIcon>
              <IoHomeOutline />
              <small>Home</small>
            </MenuIcon>
          </MenuItem>
          <MenuItem>
            <MenuIcon>
              <IoStar />
              <small>Favorites</small>
            </MenuIcon>
          </MenuItem>
          <MenuItem>
            <MenuIcon>
              <IoOptions />
              <small>Options</small>
            </MenuIcon>
          </MenuItem>
          <MenuItem>
            <MenuIcon>
              <IoEnterOutline />
              <small>Login</small>
            </MenuIcon>
          </MenuItem>
        </MenuList>
      </Menu>
      <MainContent>{children}</MainContent>
    </Container>
  );
}

export default Layout;
