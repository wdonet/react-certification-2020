import React from 'react';
import wizelogo from '../../../img/wize-logo.png';

const Login = () => {
  const authenticated = true;

  return (
    <a className="login-link" href="_blank">
      <img src={wizelogo} alt="wizelogo" height={60} />
      {authenticated ? <div className="login-user">Mario</div> : <div>Sign in</div>}
    </a>
  );
};

export default Login;
