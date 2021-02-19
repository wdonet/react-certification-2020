import React from 'react';
import { IconButton, Typography, Button, Switch } from '@material-ui/core';
import YouTubeIcon from '@material-ui/icons/YouTube';
import SearchIcon from '@material-ui/icons/Search';
import {
  CustomAppBar,
  CustomInputBase,
  CustomToolbar,
  SearchContainer,
  SearchIconContainer,
  ToolbarSection,
} from './Menu.styled';

function Menu() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
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
            <Switch
              checked={state.checkedA}
              onChange={handleChange}
              name="checkedA"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
          </ToolbarSection>
          <ToolbarSection>
            <SearchContainer>
              <SearchIconContainer>
                <SearchIcon />
              </SearchIconContainer>
              <CustomInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </SearchContainer>
            <Button color="inherit">Login</Button>
          </ToolbarSection>
        </CustomToolbar>
      </CustomAppBar>
    </>
  );
}

export default Menu;
