import React from 'react';
import { useHistory } from 'react-router';
import { useAuth } from '../../providers/Auth';
import { FormGroup, Container, Form, Title, FormLabel, FormInput } from './Login.styles';

function LoginPage() {
  const { login } = useAuth();
  const history = useHistory();

  function authenticate(event) {
    event.preventDefault();
    login();
    history.push('/secret');
  }

  return (
    <Container>
      <Form onSubmit={authenticate}>
        <Title>Welcome back!</Title>
        <FormGroup>
          <FormLabel htmlFor="username">Username </FormLabel>
          <FormInput required type="text" id="username" />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="password">Password </FormLabel>
          <FormInput required type="password" id="password" />
        </FormGroup>
        <button type="submit" data-testid="btn-login">
          Login
        </button>
      </Form>
    </Container>
  );
}

export default LoginPage;
