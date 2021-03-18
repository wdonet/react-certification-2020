import React, { useContext, createContext, useReducer } from 'react';

import * as types from '../../utils/constants';
import videosMock from '../../youtube-videos-mock.json';

const initialState = {
  darkMode: false,
  searchTerm: 'wizeline',
  searchResult: { ...videosMock, items: videosMock.items.slice(1) },
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_DARK_MODE: {
      return { ...state, darkMode: !state.darkMode };
    }

    case types.SET_SEARCH_TERM: {
      return { ...state, searchTerm: payload };
    }

    case types.SET_SEARCH_RESULT: {
      return { ...state, searchResult: payload };
    }

    default: {
      return state;
    }
  }
};

export const CustomContext = createContext(null);

export const useCustom = () => {
  const context = useContext(CustomContext);

  if (!context) {
    throw new Error(`Can't use "useCustom" without a CustomProvider!`);
  }

  return context;
};

const CustomProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const switchDarkMode = () => dispatch({ type: types.SET_DARK_MODE });

  const updateSearchTerm = (payload) =>
    dispatch({ type: types.SET_SEARCH_TERM, payload });

  const updateSearchResult = (payload) => {
    if (payload?.items?.length) {
      dispatch({ type: types.SET_SEARCH_RESULT, payload });
    }
  };

  return (
    <CustomContext.Provider
      value={{ ...state, switchDarkMode, updateSearchTerm, updateSearchResult }}
    >
      {children}
    </CustomContext.Provider>
  );
};

export default CustomProvider;
