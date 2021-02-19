import React from 'react';
import { IconButton, Typography, Button } from '@material-ui/core';
import YouTubeIcon from '@material-ui/icons/YouTube';
import SearchIcon from '@material-ui/icons/Search';
import {
  CustomAppBar,
  CustomInputBase,
  CustomToolbar,
  SearchContainer,
  SearchIconContainer,
  ThemeSwitch,
  ToolbarSection,
} from './Menu.styled';

function Menu() {
  const [checked, setChecked] = React.useState({
    checked: false,
  });

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <>
      <CustomAppBar position="static">
        <CustomToolbar>
          <ToolbarSection>
            <IconButton className="title" edge="start" color="inherit" aria-label="menu">
              <YouTubeIcon />
              <Typography variant="body1" noWrap>
                MyTube
              </Typography>
            </IconButton>
            <SearchContainer>
              <SearchIconContainer>
                <SearchIcon />
              </SearchIconContainer>
              <CustomInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </SearchContainer>
          </ToolbarSection>
          <ToolbarSection>
            <ThemeSwitch checked={checked} onChange={handleChange} color="default" />
            <Button color="inherit">Login</Button>
          </ToolbarSection>
        </CustomToolbar>
      </CustomAppBar>
    </>
  );
}

export default Menu;
