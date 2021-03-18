import React, { useContext, createContext, useReducer } from 'react';
import * as types from '../../utils/constants';

const initialState = {
  search: '',
  darkMode: false,
  items : [],
  relatedVideos : [],
  selectedVideo : {
      id : { 
        videoId : "" 
      },
      snippet : { 
        title : "",
        description : "",
      }
    }
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case types.SET_SEARCH: {
      return { ...state, search: payload };
    }

    case types.SET_DARK_MODE: {
      return { ...state, darkMode: !state.darkMode };
    }

    case types.SET_ITEMS: {
      return { ...state, items: payload };
    }
    
    case types.SET_SELECTED_VIDEO: {
      return { ...state, selectedVideo: payload };
    }

    case types.SET_RELATED_VIDEOS: {
      return { ...state, relatedVideos: payload };
    }

    default: {
      return state;
    }
  }
};

export const VideoSearchContext = createContext(null);

export const useVideoSearch = () => {
  const context = useContext(VideoSearchContext);

  

  return context;
};

const VideoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setSearch = (payload) =>
    dispatch({ type: types.SET_SEARCH, payload });
  
  const setDarkMode = (payload) => 
    dispatch({ type: types.SET_DARK_MODE, payload });
  
  const setItems = (payload) => 
    dispatch({ type: types.SET_ITEMS, payload });

  const setSelectedVideo = (payload) => 
    dispatch({ type: types.SET_SELECTED_VIDEO, payload });

  const setRelatedVideos = (payload) => 
    dispatch({ type: types.SET_RELATED_VIDEOS, payload });

  return (
    <VideoSearchContext.Provider
      value={{ ...state, setSearch, setDarkMode, setItems, setSelectedVideo, setRelatedVideos }}
    >
      {children}
    </VideoSearchContext.Provider>
  );
};

export default VideoProvider;