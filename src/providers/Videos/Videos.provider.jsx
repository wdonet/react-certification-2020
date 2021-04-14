import React, { createContext, useContext, useEffect, useReducer } from 'react';
import VideosReducer, { initialState } from './VideosReducer';
import actions from './VideosActions';

const VideosContext = createContext({
  state: {
    videos: [],
  },
  dispatch: () => {},
});

const useVideos = () => {
  const context = useContext(VideosContext);
  if (!context) {
    throw new Error(`Can't use "useVideos" without an VideosProvider!`);
  }
  return context;
};

const VideosProvider = ({ children }) => {
  const [state, dispatch] = useReducer(VideosReducer, {
    ...initialState,
  });

  const value = {
    ...state,
    dispatch,
    actions,
  };

  useEffect(() => {
    const load = () => actions.load()(dispatch);
    load();
  }, [dispatch]);

  return <VideosContext.Provider value={value}>{children}</VideosContext.Provider>;
};
export { useVideos };
export default VideosProvider;
