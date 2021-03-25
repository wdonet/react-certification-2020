import React, { useState, useEffect, useContext, useCallback } from 'react';

import * as types from '../../utils/constants';
import { storage } from '../../utils/storage';
import loginApi from '../../utils/login.api';

const AuthContext = React.createContext(null);

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const lastState = storage.get(types.AUTH_USER);
    const userFound = Boolean(lastState);

    if (userFound) {
      setCurrentUser(lastState);
      setAuthenticated(userFound);
    }
  }, []);

  const login = useCallback(
    (username, password) =>
      loginApi(username, password).then((user) => {
        storage.set(types.AUTH_USER, user);
        setCurrentUser(user);
        setAuthenticated(true);

        return user;
      }),
    []
  );

  const logout = useCallback(() => {
    window.localStorage.getItem(types.AUTH_USER);
    setCurrentUser(undefined);
    setAuthenticated(false);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, authenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth, AuthContext };
export default AuthProvider;
