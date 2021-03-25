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

  useEffect(() => {
    const lastAuthState = storage.get(types.AUTH_USER);

    if (lastAuthState) {
      setCurrentUser(lastAuthState);
    }
  }, []);

  const login = useCallback(
    (username, password) =>
      loginApi(username, password).then((user) => {
        storage.set(types.AUTH_USER, user);
        setCurrentUser(user);

        return user;
      }),
    []
  );

  const logout = useCallback(() => {
    storage.set(types.AUTH_USER, undefined);
    setCurrentUser(undefined);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth, AuthContext };
export default AuthProvider;
