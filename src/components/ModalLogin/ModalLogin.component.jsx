import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Styled from './ModalLoginStyled';
import loginData from './login.api';
// eslint-disable-next-line import/no-cycle
import { AppContext } from '../App/App.component';

function ModalLogin({ isLogin }) {
  const history = useHistory();
  const [user, setUser] = useState();
  const [pwd, setPwd] = useState();
  const { dispatch } = useContext(AppContext);
  const [wrongLogin, setWrongLogin] = useState();

  const goBack = (event) => {
    event.stopPropagation();
    history.goBack();
  };

  const btnLogout = (event) => {
    event.preventDefault();
    window.close();
    history.push('/');
    window.location.reload();
  };

  const btnLogin = async () => {
    try {
      const response = await loginData(user, pwd);
      if (response) history.goBack();
      dispatch({ type: 'LOGIN', payload: { username: user, password: pwd } });
    } catch (error) {
      setWrongLogin(1);
    }
  };

  return (
    <>
      <Styled.ModalBackground>
        <Styled.ModalContent>
          <Styled.LoginForm>
            {wrongLogin ? (
              <Styled.FormLabelWrongLabel htmlFor="uname">
                <b>Username or password invalid</b>
              </Styled.FormLabelWrongLabel>
            ) : null}

            {isLogin ? (
              <Styled.LoginButton type="button" onClick={btnLogout}>
                Logout
              </Styled.LoginButton>
            ) : (
              <>
                <Styled.CloseButton onClick={goBack}>&times;</Styled.CloseButton>
                <Styled.FormLabel htmlFor="uname">
                  <b>Username</b>
                </Styled.FormLabel>
                <Styled.Input
                  type="text"
                  placeholder="Enter Username"
                  name="uname"
                  required
                  onChange={(e) => setUser(e.target.value)}
                />

                <Styled.FormLabel htmlFor="psw">
                  <b>Password</b>
                </Styled.FormLabel>
                <Styled.Input
                  type="password"
                  placeholder="Enter Password"
                  name="psw"
                  required
                  onChange={(e) => setPwd(e.target.value)}
                />
                <Styled.LoginButton type="button" onClick={() => btnLogin(user, pwd)}>
                  Login
                </Styled.LoginButton>
              </>
            )}
          </Styled.LoginForm>
        </Styled.ModalContent>
      </Styled.ModalBackground>
    </>
  );
}

export default ModalLogin;
