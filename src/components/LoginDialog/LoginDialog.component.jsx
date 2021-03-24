import React, { useState } from 'react';
import {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@material-ui/core';

import { StyledDialog, StyledTextField } from './LoginDialog.styles';

const LoginDialog = ({ open, onClose }) => {
  const [data, setData] = useState({
    username: '',
    password: '',
  });

  const handleOnChange = (key) => ({ target: { value } }) => setData({ [key]: value });

  const handleLogin = (e) => {
    e.preventDefault();

    console.log({ e, data });
    onClose();
  };

  return (
    <StyledDialog
      open={open}
      onClose={onClose}
      aria-labelledby="simple-dialog-title"
      onSubmit={handleLogin}
    >
      <DialogTitle id="simple-dialog-title">Login dialog</DialogTitle>
      <DialogContent>
        <DialogContentText>
          wizeline <br /> Rocks!
        </DialogContentText>
        <StyledTextField
          autoFocus
          id="username"
          label="Username"
          type="text"
          fullWidth
          onChange={handleOnChange('username')}
        />
        <StyledTextField
          id="password"
          label="Password"
          type="password"
          fullWidth
          onChange={handleOnChange('password')}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleLogin} color="primary">
          Login
        </Button>
      </DialogActions>
    </StyledDialog>
  );
};

export default LoginDialog;
