import React, { useContext, createContext, useReducer, useEffect } from 'react';

import * as types from '../../utils/constants';
import { storage } from '../../utils/storage';
import videosMock from '../../youtube-videos-mock.json';

const initialState = {
  darkMode: false,
  searchTerm: 'wizeline',
  searchResult: { ...videosMock, items: videosMock.items.slice(1) },
  favoriteVideos: [],
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

    case types.SET_FAVORITE_VIDEOS: {
      return { ...state, favoriteVideos: payload };
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

  useEffect(() => {
    const lastState = storage.get(types.USER_FAVORITE_VIDEOS);

    if (lastState) {
      dispatch({ type: types.SET_FAVORITE_VIDEOS, payload: lastState });
    }
  }, []);

  const switchDarkMode = () => dispatch({ type: types.SET_DARK_MODE });

  const updateSearchTerm = (payload) =>
    dispatch({ type: types.SET_SEARCH_TERM, payload });

  const updateSearchResult = (payload) => {
    if (payload?.items?.length) {
      dispatch({ type: types.SET_SEARCH_RESULT, payload });
    }
  };

  const findFavoriteVideo = (videoId) =>
    state.favoriteVideos.find((video) => videoId === video.id.videoId);

  const addFavoriteVideo = (video) => {
    const payload = [...state.favoriteVideos, video];

    dispatch({ type: types.SET_FAVORITE_VIDEOS, payload });
    storage.set(types.USER_FAVORITE_VIDEOS, payload);
  };

  const removeFavoriteVideo = (video) => {
    const payload = state.favoriteVideos.filter(
      ({ id: { videoId } }) => videoId !== video.id.videoId
    );

    dispatch({ type: types.SET_FAVORITE_VIDEOS, payload });
    storage.set(types.USER_FAVORITE_VIDEOS, payload);
  };

  return (
    <CustomContext.Provider
      value={{
        ...state,
        switchDarkMode,
        updateSearchTerm,
        updateSearchResult,
        findFavoriteVideo,
        addFavoriteVideo,
        removeFavoriteVideo,
      }}
    >
      {children}
    </CustomContext.Provider>
  );
};

export default CustomProvider;
