import React, { useState } from 'react';
import styled from 'styled-components';
import { LayoutWrapper } from '../Layout';
import { lightTheme, darkTheme } from '../../providers/themes';
import VideoPlayerContainer from '../VideoPlayer/VideoPlayerContainer';
import AppContext from '../../providers/AppContext';
import HomeVideos from '../HomeVideos/HomeVideos';

const StyledWelcome = styled.div`
  text-align: center;
`;

function App() {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const [videoID, setVideoID] = useState(null);

  const switchTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  const getThemeConfig = () => ({
    theme: isLightTheme ? lightTheme : darkTheme,
    switchTheme,
  });

  const setHomeVideosView = () => {
    setVideoID(null);
  };

  return (
    <AppContext.Provider value={{ setHomeVideosView, ...getThemeConfig() }}>
      <LayoutWrapper>
        {videoID ? (
          <div data-testid="video-player-container">
            <VideoPlayerContainer videoId={videoID} />
          </div>
        ) : (
          <div>
            <StyledWelcome>
              <h1>Welcome to the challenge!</h1>
            </StyledWelcome>
            <HomeVideos playVideoNow={setVideoID} />
          </div>
        )}
      </LayoutWrapper>
    </AppContext.Provider>
  );
}

export default App;
