import React from 'react';
import { IconButton, Typography, Button } from '@material-ui/core';
import YouTubeIcon from '@material-ui/icons/YouTube';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router-dom';
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
  const history = useHistory();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  function MenuButton() {
    return (
      <IconButton
        onClick={() => history.push('/')}
        className="title"
        edge="start"
        color="inherit"
        data-testid="MenuButton"
      >
        <YouTubeIcon />
        <Typography variant="body1" noWrap>
          MyTube
        </Typography>
      </IconButton>
    );
  }

  function SearchBar() {
    return (
      <SearchContainer>
        <SearchIconContainer>
          <SearchIcon />
        </SearchIconContainer>
        <CustomInputBase placeholder="Search…" />
      </SearchContainer>
    );
  }

  return (
    <>
      <CustomAppBar position="fixed" data-testid="CustomAppBar">
        <CustomToolbar>
          <ToolbarSection>
            {MenuButton()}
            {SearchBar()}
          </ToolbarSection>
          <ToolbarSection>
            <ThemeSwitch
              data-testid="ThemeSwitch"
              checked={checked}
              onChange={handleChange}
              color="default"
            />
            <Button color="inherit">Login</Button>
          </ToolbarSection>
        </CustomToolbar>
      </CustomAppBar>
    </>
  );
}

export default Menu;
