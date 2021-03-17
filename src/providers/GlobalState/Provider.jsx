import React, { createContext, useContext, useReducer } from 'react';

import reducer from './Reducer';

const initState = {
  isThemeLight: true,
};

const GlobalStateContext = createContext({
  isThemeLight: true,
});

function useGlobalState() {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error(`Can't use "useTodos" without an TodoProvider!`);
  }
  return context;
}

function GloablStateProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
}

export { useGlobalState };

export default GloablStateProvider;
