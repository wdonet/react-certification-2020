import React, { useState } from 'react';

import { useAuth } from '../../providers/Auth';
import { Container, ErrorLabel } from './Login.page.styled';

function LoginPage() {
  const { login } = useAuth();
  const [values, setValues] = useState({});
  const [error, setError] = useState();

  const authenticate = async (event) => {
    event.preventDefault();
    try {
      setError(undefined);
      await login(values);
    } catch (err) {
      setError(err);
    }
  };

  const handleInputChange = (event) => {
    const newValues = { ...values };
    newValues[event.target.id] = event.target.value;
    setValues(newValues);
  };

  return (
    <Container>
      <h1>Welcome back!</h1>
      <form onSubmit={authenticate} className="login-form">
        <div className="form-group">
          <label htmlFor="username">
            <strong>username </strong>
            <input
              required
              type="text"
              id="username"
              value={values.username || ''}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <strong>password </strong>
            <input
              required
              type="password"
              id="password"
              value={values.password || ''}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <button type="submit">login</button>
      </form>
      {error && <ErrorLabel>Username or password incorrect!</ErrorLabel>}
    </Container>
  );
}

export default LoginPage;
