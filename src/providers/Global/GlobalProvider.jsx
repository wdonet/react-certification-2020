import React, { useReducer } from 'react';
import reducer from './reducer';
import { saveFavorite, deleteFavorite, setTheme } from './actions';

const GlobalContext = React.createContext(null);

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    favorites: {},
    theme: 'light',
  });

  const { favorites, theme } = state;

  return (
    <GlobalContext.Provider
      value={{
        favorites,
        saveFavorite: (videoId, videoDetails) =>
          saveFavorite(dispatch, videoId, videoDetails),
        deleteFavorite: (videoId) => deleteFavorite(dispatch, videoId),
        theme,
        setTheme: (newTheme) => setTheme(dispatch, newTheme),
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {};

export { GlobalContext };
export default GlobalProvider;
