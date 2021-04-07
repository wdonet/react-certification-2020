import React, { useState, useEffect, useCallback } from 'react';

import { AUTH_STORAGE_KEY } from '../../utils/constants';
import { loginUser } from '../../mocks/loginApi';
import { storage } from '../../utils/storage';

const AuthContext = React.createContext(null);

function AuthProvider({ authenticatedJest, children }) {
  const [authenticated, setAuthenticated] = useState(authenticatedJest);

  useEffect(() => {
    const lastAuthState = storage.get(AUTH_STORAGE_KEY);
    const isAuthenticated = Boolean(lastAuthState);

    setAuthenticated(isAuthenticated || authenticatedJest);
  }, []);

  const login = async ({ username, password }) => {
    try {
      const authorized = await loginUser({ username, password });
      if (authorized) {
        setAuthenticated(true);
        storage.set(AUTH_STORAGE_KEY, true);
      }
      return { success: true };
    } catch (error) {
      return { error };
    }
  };

  const logout = useCallback(() => {
    setAuthenticated(false);
    storage.set(AUTH_STORAGE_KEY, false);
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, authenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext };
export default AuthProvider;
