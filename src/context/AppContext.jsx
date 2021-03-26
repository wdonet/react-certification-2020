import React, { createContext, useReducer, useEffect } from 'react';
import { getVideos } from '../utils/api';

export const Context = createContext({});

const getFavoriteVideos = () => {
  return JSON.parse(localStorage.getItem('favoriteVideos')) || [];
};

const addToFavorites = (video) => {
  const favoriteVideos = getFavoriteVideos();
  favoriteVideos.push(video);
  localStorage.setItem('favoriteVideos', JSON.stringify(favoriteVideos));
  return favoriteVideos;
};

const removeFromFavorites = (video) => {
  let favoriteVideos = getFavoriteVideos();
  favoriteVideos = favoriteVideos.filter(
    (favoriteVideo) => favoriteVideo.id !== video.id
  );
  localStorage.setItem('favoriteVideos', JSON.stringify(favoriteVideos));
  return favoriteVideos;
};

const initialState = { searchTerm: '', videos: [], favoriteVideos: getFavoriteVideos() };

const reducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_VIDEOS':
      return { ...state, videos: action.payload };
    case 'ADD_FAVORITE_VIDEO':
      return { ...state, favoriteVideos: addToFavorites(action.payload) };
    case 'REMOVE_FAVORITE_VIDEO':
      return { ...state, favoriteVideos: removeFromFavorites(action.payload) };
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
