import React, { useState } from 'react';
import { Toolbar, IconButton, FormControlLabel, Menu, MenuItem } from '@material-ui/core';
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
  StyledInputBase,
  StyledInput,
  StyledDarkModeDiv,
  StyledSwitch,
} from './styled';

const Header = () => {
  const [checked, setChecked] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (e) => setAnchorEl(e.currentTarget);

  const handleMenuClose = () => setAnchorEl(null);

  return (
    <StyledGrowDiv setHeight>
      <StyledAppBar position="static">
        <Toolbar>
          <StyledIconButton edge="start" color="inherit" aria-label="open drawer">
            <MenuIcon />
          </StyledIconButton>

          <StyledSearchDiv>
            <SearchIconDiv>
              <SearchIcon />
            </SearchIconDiv>

            <StyledInputBase
              placeholder="Search…"
              inputComponent={StyledInput}
              inputProps={{ 'aria-label': 'search' }}
            />
          </StyledSearchDiv>

          <StyledGrowDiv />

          <StyledDarkModeDiv>
            <FormControlLabel
              label="Dark mode"
              control={
                <StyledSwitch
                  checked={checked}
                  onChange={(e) => setChecked(e.target.checked)}
                  aria-label="dark mode switch"
                />
              }
            />
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls="menuId"
              aria-haspopup="true"
              onClick={handleMenuOpen}
              color="inherit"
            >
              <AccountCircleIcon />
            </IconButton>
            <Menu
              id="menuId"
              anchorEl={anchorEl}
              open={isMenuOpen}
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              keepMounted
            >
              <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
              <MenuItem onClick={handleMenuClose}>My account</MenuItem>
            </Menu>
          </StyledDarkModeDiv>
        </Toolbar>
      </StyledAppBar>
    </StyledGrowDiv>
  );
};

export default Header;
