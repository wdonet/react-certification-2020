import React, { useState, useEffect } from 'react';
import { Toolbar, IconButton, FormControlLabel, MenuItem } from '@material-ui/core';
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  AccountCircle as AccountCircleIcon,
} from '@material-ui/icons';

import {
  StyledGrowDiv,
  StyledAppBar,
  StyledIconButton,
  StyledSearchDiv,
  SearchIconDiv,
  StyledForm,
  StyledInputBase,
  StyledInput,
  StyledDarkModeDiv,
  StyledSwitch,
  StyledMenu,
} from './Header.styles';

import { useCustom } from '../../providers/Custom';
import { useYoutubeSearch } from '../../utils/hooks';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('wizeline');
  const [anchorEl, setAnchorEl] = useState(null);
  const { darkMode, switchDarkMode, updateSearchResult } = useCustom();
  const yt = useYoutubeSearch({ type: 'video' });

  const isMenuOpen = Boolean(anchorEl);
  const handleMenuOpen = (e) => setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const handleSearchOnChange = ({ target: { value } }) => setSearchTerm(value);
  const handleSearchOnSubmit = (e) => {
    e.preventDefault();

    yt.search(searchTerm);
  };

  useEffect(() => {
    updateSearchResult(yt.result);
  }, [yt.result, updateSearchResult]);

  return (
    <StyledAppBar position="static">
      <Toolbar>
        <StyledIconButton edge="start" color="inherit" aria-label="open drawer">
          <MenuIcon />
        </StyledIconButton>

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
            <AccountCircleIcon />
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
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
          </StyledMenu>
        </StyledDarkModeDiv>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
