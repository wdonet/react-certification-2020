import React, { useContext, useReducer } from 'react';

const YoutTubeContext = React.createContext();

function youtubeReducer(state, action) {
  switch (action.type) {
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
