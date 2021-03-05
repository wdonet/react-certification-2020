import React from 'react';
import { createContext, useContext, useReducer, useState } from 'react';
import reducer from './VideoReducer';
import { items } from '../youtube-videos-mock.json';

//const { items } = mockedData;

const initialState = {
  search: 'wizeline',
  history: [],
  list: items,
};

const VideoContext = createContext(initialState);

function useVideo() {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error(`Can't use "useVideo" without an VideoProvider!`);
  }
  return context;
}

function VideoProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <VideoContext.Provider value={{ state, dispatch }}>{children}</VideoContext.Provider>
  );
}

export { useVideo };
export default VideoProvider;
