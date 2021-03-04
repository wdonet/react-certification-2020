import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { LayoutWrapper } from '../Layout';
import HomeVideos from '../HomeVideos/HomeVideos';
import { lightTheme, darkTheme } from '../../providers/theme/themes';

const StyledWelcome = styled.div`
  text-align: center;
`;

function App() {
  const [isLightTheme, setIsLightTheme] = useState(true);

  const switchTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  const getTheme = () => ({
    theme: isLightTheme ? lightTheme : darkTheme,
    switchTheme,
  });

  return (
    <ThemeProvider theme={getTheme()}>
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
