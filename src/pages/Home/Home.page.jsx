import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';
import InputBase from '@material-ui/core/InputBase';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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

function HomePage() {
  return (
    <AppBar position="static">
      <StyledToolbar>
        <div>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <StyledInputBase placeholder="Search..." />
        </div>
        <div>
          <FormControlLabel label="Dark Mode" control={<Switch />} />
          <Button color="inherit">Login</Button>
        </div>
      </StyledToolbar>
    </AppBar>
  );
}

export default HomePage;
