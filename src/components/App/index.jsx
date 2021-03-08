import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../theme';
import GlobalStyle from '../../theme/globalStyle';

import AuthProvider from '../../providers/Auth';
import YoutubeDataProvider from '../../providers/YoutubeData';

import Header from '../Header';
import HomePage from '../../pages/Home';
import VideoPage from '../../pages/Video';

function App() {
  const [theme, setTheme] = useState('light');
  const [iframeAPIReady, setIframeAPIReady] = useState(false);
  const handleThemeSwitch = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  useEffect(() => {
    const iframeScript = document.createElement('script');
    iframeScript.src = 'https://www.youtube.com/iframe_api';
    iframeScript.async = true;
    iframeScript.addEventListener('load', () => {
      window.onYouTubeIframeAPIReady = () => {
        setIframeAPIReady(true);
      };
    });
    document.body.appendChild(iframeScript);
  }, []);

  return (
    <>
      <GlobalStyle theme={theme === 'light' ? lightTheme : darkTheme} />
      <BrowserRouter>
        <AuthProvider>
          <YoutubeDataProvider iframeAPIReady={iframeAPIReady}>
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
              <Header handleThemeSwitch={handleThemeSwitch} />
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route exact path="/:videoId">
                  <VideoPage />
                </Route>
              </Switch>
            </ThemeProvider>
          </YoutubeDataProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
