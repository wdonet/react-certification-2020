import { useContext } from 'react';
import { GlobalContext } from './GlobalProvider';

const useGlobal = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(`Can't use "useGlobal" without an GlobalProvider!`);
  }
  return context;
};

export default useGlobal;
