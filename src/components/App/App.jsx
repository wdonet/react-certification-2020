import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { LayoutWrapper } from '../Layout';
import { lightTheme, darkTheme } from '../../providers/themes';
import VideoPlayerContainer from '../VideoPlayer/VideoPlayerContainer';
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

  return (
    <ThemeProvider theme={getThemeConfig()}>
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
    </ThemeProvider>
  );
}

export default App;
