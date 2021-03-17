import React, { createContext, useReducer, useEffect } from 'react';
import { getVideos } from '../utils/api';

export const Context = createContext({});

const initialState = { searchTerm: '', videos: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_VIDEOS':
      return { ...state, videos: action.payload };
    default:
      return state;
  }
};

const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getVideos().then((res) =>
      dispatch({ type: 'SEARCH_VIDEOS', payload: res.result.items })
    );
  }, []);

  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};

export default AppContext;
