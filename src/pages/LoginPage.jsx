import React, { useState } from 'react';
import {
    Link,
    useHistory
} from "react-router-dom";

import { StoreContext } from '../contexts/Store'
import { CardWrapper, CardHeader, CardHeading, CardBody, CardIcon, CardFieldset, CardInput, CardButton,ErrorMessage
} from "../components/Cards";
import loginApi from '../login.api';

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("")
  const [error, setError] = useState()
  let history = useHistory();
  const {
    "sessionData": [ sessionData, setSessionData],
    "loggedIn": [ loggedIn, setLoggedIn],
    
  } = React.useContext(StoreContext)
  

  const handleSubmit = (event) => {
    console.log("submit login");
    event.preventDefault();
    enterClick();
  }

  const enterClick = () => {
      loginApi(username, password).then((user) => {
      setSessionData(user);
      setLoggedIn(true);
      history.push("/");
      
      }).catch((error) => {
        console.log(error);
        setError("Login error");
    });
  }

  return (
    <>
      <CardWrapper>
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardHeading>Log in</CardHeading>
          </CardHeader>
          <CardBody>
            <CardFieldset>
            <CardInput placeholder="Username" data-testid="username-input"  type="text" value={username} onChange={ (ev)=>setUsername(ev.target.value) } required />
            </CardFieldset>
            <CardFieldset>
            <CardInput placeholder="Password" data-testid="password-input" type="password" value={ password} onChange={ (ev)=>setPassword(ev.target.value) } required />
              <CardIcon className="fa fa-eye" eye small />
          </CardFieldset>
          { error? <ErrorMessage data-testid="error-message">{ error}</ErrorMessage>:null}
          <CardFieldset>
            <CardButton type="submit" onClick={() => { enterClick() } }>Enter</CardButton>
          </CardFieldset>
          <CardFieldset>
              <Link to="/">Don't want to login</Link>
            </CardFieldset>
          </CardBody>
        </form>
      </CardWrapper>
    </>
  )
}

export default LoginPage;