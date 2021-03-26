import React from 'react';
import { Route, Redirect } from 'react-router';
import { useAuth } from '../../providers/Auth';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { authenticated } = useAuth();
  return (
    <Route
      {...rest}
      render={() => {
        return authenticated ? <Component {...rest} /> : <Redirect to="/" />;
      }}
    />
  );
};

export default PrivateRoute;
