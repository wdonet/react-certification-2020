import React, { useEffect, useRef, useState } from 'react';

import {
  LoginBackground,
  LoginBox,
  CloseLoginButton,
  ErrorText,
  InputText,
  FormStyled,
} from './styled';

import { useAuth } from '../../providers/Auth';

const Login = ({ open, closeModal }) => {
  const [loginError, setLoginError] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const loginBoxRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (loginBoxRef.current && !loginBoxRef.current.contains(e.target)) {
        closeModal();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [loginBoxRef]);

  const loginUser = async () => {
    const { success } = await login({ username, password });
    if (!success) {
      setLoginError('Invalid username or password');
    } else {
      setLoginError(null);
      closeModal();
    }
  };

  const handleUsernameChange = (e) => {
    const {
      target: { value },
    } = e;
    setUsername(value);
  };

  const hanglePasswordChange = (e) => {
    const {
      target: { value },
    } = e;
    setPassword(value);
  };

  return (
    <LoginBackground open={open}>
      <LoginBox ref={loginBoxRef}>
        <CloseLoginButton onClick={closeModal}>&times;</CloseLoginButton>
        <FormStyled>
          <InputText
            name="username"
            value={username}
            placeholder="Username"
            onChange={handleUsernameChange}
          />
          <InputText
            name="password"
            placeholder="Password"
            type="password"
            value={password}
            onChange={hanglePasswordChange}
          />
          {loginError && (
            <ErrorText
              css={`
                color: ${({ theme }) => theme.palette.alert.main};
                padding: 2px;
                position: absolute;
                top: calc(100% - 25px);
                font-size: 16px;
              `}
            >
              {loginError}
            </ErrorText>
          )}
          <button
            type="button"
            onClick={() => {
              loginUser({ username: 'fulano', password: '1234567' });
              return false;
            }}
          >
            Login
          </button>
        </FormStyled>
      </LoginBox>
    </LoginBackground>
  );
};

export default Login;
