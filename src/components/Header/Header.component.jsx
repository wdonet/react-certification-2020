import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import React, { useState } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import styled from 'styled-components';
import InputBase from '@material-ui/core/InputBase';

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

const StyledInputBase = styled(InputBase)`
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 100px;
  color: white;
  margin-left: 50px;
  padding: 4px;
`;

const Header = ({ searchVideos }) => {
  const [search, setSearch] = useState('');

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    searchVideos(search);
    event.preventDefault();
  };

  return (
    <AppBar position="static">
      <StyledToolbar>
        <div>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Hidden xsDown>
            <form style={{ display: 'inline' }} onSubmit={handleSubmit}>
              <StyledInputBase
                placeholder="Search..."
                value={search}
                onChange={handleChange}
              />
            </form>
          </Hidden>
        </div>
        <div>
          <Hidden xsDown>
            <FormControlLabel label="Dark Mode" control={<Switch />} />
          </Hidden>
          <Button color="inherit">Login</Button>
        </div>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
