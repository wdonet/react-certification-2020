import React, { useContext, useReducer } from 'react';

const YoutTubeContext = React.createContext();

function youtubeReducer(state, action) {
  switch (action.type) {
    case 'search':
      return {
        ...state,
        search: action.payload,
      };
    case 'currentVideo':
      return {
        ...state,
        currentVideo: action.payload,
      };
    case 'closeCurrentVideo':
      return {
        ...state,
        currentVideo: null,
      };
    case 'switchTheme':
      return {
        ...state,
        theme: state.theme === 'dark' ? 'default' : 'dark',
      };
    default: {
      return state;
    }
  }
}

function YouTubeProvider({ children }) {
  const [state, dispatch] = useReducer(youtubeReducer, {});
  return (
    <YoutTubeContext.Provider value={{ state, dispatch }}>
      {children}
    </YoutTubeContext.Provider>
  );
}

function useYouTube() {
  const context = useContext(YoutTubeContext);
  if (context === undefined) {
    throw new Error('useYouTube must be used within YouTubeProvider');
  }
  return context;
}

export { YouTubeProvider, useYouTube };
