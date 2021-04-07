import { useContext } from 'react';
import { AuthContext } from './AuthProvider';

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
};

export default useAuth;
