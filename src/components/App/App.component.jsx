import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { LayoutWrapper } from '../Layout';
import HomeVideos from '../HomeVideos/HomeVideos';
import { lightTheme, darkTheme } from '../../providers/themes';

const StyledWelcome = styled.div`
  text-align: center;
`;

function App() {
  const [isLightTheme, setIsLightTheme] = useState(true);

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
        <StyledWelcome>
          <h1>Welcome to the challenge!</h1>
        </StyledWelcome>
        <HomeVideos />
      </LayoutWrapper>
    </ThemeProvider>
  );
}

export default App;
