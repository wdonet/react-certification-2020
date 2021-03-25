import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Toolbar,
  IconButton,
  FormControlLabel,
  MenuItem,
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
} from '@material-ui/core';
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  AccountCircle as AccountCircleIcon,
  Home as HomeIcon,
  Favorite as FavoriteIcon,
} from '@material-ui/icons';

import {
  StyledGrowDiv,
  StyledAppBar,
  StyledIconButton,
  StyledList,
  StyledSearchDiv,
  SearchIconDiv,
  StyledForm,
  StyledInputBase,
  StyledInput,
  StyledDarkModeDiv,
  StyledSwitch,
  StyledMenu,
} from './Header.styles';
import LoginDialog from '../LoginDialog';

import { useAuth } from '../../providers/Auth';
import { useCustom } from '../../providers/Custom';
import { useYoutubeSearch } from '../../utils/hooks';

const Header = () => {
  const history = useHistory();
  const [openLoginDialog, setOpenLoginDialog] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const { authenticated, currentUser, logout } = useAuth();
  const {
    darkMode,
    searchTerm,
    switchDarkMode,
    updateSearchTerm,
    updateSearchResult,
  } = useCustom();
  const yt = useYoutubeSearch({ type: 'video' });

  const isMenuOpen = Boolean(anchorEl);

  const handleGoTo = (path = '/') => () => history.push(path);
  const handleMenuOpen = (e) => setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const toggleDrawer = (open) => (e) => {
    if (e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) {
      return;
    }

    setOpenDrawer(open);
  };
  const handleSearchOnChange = ({ target: { value } }) => updateSearchTerm(value);
  const handleSearchOnSubmit = (e) => {
    e.preventDefault();

    yt.search(searchTerm).then(updateSearchResult);
  };
  const handleDialogOpen = () => {
    handleMenuClose();
    setOpenLoginDialog(true);
  };
  const handleDialogClose = () => setOpenLoginDialog(false);
  const handleLogout = () => {
    handleMenuClose();
    logout();
  };

  return (
    <>
      <LoginDialog open={openLoginDialog} onClose={handleDialogClose} />
      <StyledAppBar position="static">
        <Toolbar>
          <StyledIconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </StyledIconButton>
          <Drawer
            anchor="left"
            className="headerDrawer"
            open={openDrawer}
            onClose={toggleDrawer(false)}
          >
            <StyledList
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            >
              <ListItem button onClick={handleGoTo('/')}>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
              {authenticated && (
                <ListItem button onClick={handleGoTo('/favs')}>
                  <ListItemIcon>
                    <FavoriteIcon />
                  </ListItemIcon>
                  <ListItemText primary="Favorites" />
                </ListItem>
              )}
            </StyledList>
          </Drawer>

          <StyledSearchDiv>
            <SearchIconDiv>
              <SearchIcon />
            </SearchIconDiv>

            <StyledForm aria-label="search form" onSubmit={handleSearchOnSubmit}>
              <StyledInputBase
                placeholder="Search…"
                inputComponent={StyledInput}
                inputProps={{ 'aria-label': 'search' }}
                value={searchTerm}
                onChange={handleSearchOnChange}
              />
            </StyledForm>
          </StyledSearchDiv>

          <StyledGrowDiv />

          <StyledDarkModeDiv>
            <FormControlLabel
              label="Dark mode"
              control={
                <StyledSwitch
                  checked={darkMode}
                  onChange={switchDarkMode}
                  aria-label="dark mode switch"
                />
              }
            />
            <IconButton
              edge="end"
              data-testid="iconbutton-testid"
              aria-label="account of current user"
              aria-controls="menuId"
              aria-haspopup="true"
              onClick={handleMenuOpen}
              color="inherit"
            >
              {authenticated ? (
                <Avatar alt={currentUser.name} src={currentUser.avatarUrl} />
              ) : (
                <AccountCircleIcon />
              )}
            </IconButton>
            <StyledMenu
              id="menuId"
              data-testid="menu-testid"
              anchorEl={anchorEl}
              open={isMenuOpen}
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              keepMounted
            >
              {authenticated ? (
                <MenuItem onClick={handleLogout}>Log Out</MenuItem>
              ) : (
                <MenuItem onClick={handleDialogOpen}>Log In</MenuItem>
              )}
            </StyledMenu>
          </StyledDarkModeDiv>
        </Toolbar>
      </StyledAppBar>
    </>
  );
};

export default Header;
