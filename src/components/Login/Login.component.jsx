import React, { useState } from 'react';
import { Modal } from 'semantic-ui-react';

import { useAuth } from '../../providers/Auth';
import {
  FormGroup,
  InputLabel,
  LoginForm,
  LoginInput,
  ModalTitle,
  SubmitButton,
} from './Login.styles';

const Login = ({ open, setOpen }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleClose = () => {
    setUsername('');
    setPassword('');
    setOpen(false);
  };

  const authenticate = (e) => {
    e.preventDefault();
    login();
    handleClose();
  };

  return (
    <Modal
      data-testid="login-modal"
      closeIcon
      dimmer="blurring"
      size="mini"
      onClose={handleClose}
      open={open}
    >
      <Modal.Header>
        <ModalTitle>welcome back!</ModalTitle>
      </Modal.Header>
      <Modal.Content>
        <LoginForm onSubmit={authenticate}>
          <FormGroup>
            <InputLabel>username: </InputLabel>
            <LoginInput
              required
              type="text"
              data-testid="login-username-input"
              id="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <InputLabel>password: </InputLabel>
            <LoginInput
              required
              type="password"
              data-testid="login-password-input"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </FormGroup>
          <SubmitButton data-testid="login-button" type="submit">
            Login
          </SubmitButton>
        </LoginForm>
      </Modal.Content>
    </Modal>
  );
};

export default Login;
