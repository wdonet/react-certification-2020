import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../theme';
import GlobalStyle from '../../theme/globalStyle';

import AuthProvider from '../../providers/Auth';
import YoutubeDataProvider from '../../providers/YoutubeData';
import GlobalProvider from '../../providers/Global';

import Header from '../Header';
import ProtectedRoute from '../ProtectedRoute';
import HomePage from '../../pages/Home';
import VideoPage from '../../pages/Video';
import FavoritesPage from '../../pages/Favorites';

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
            <GlobalProvider>
              <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <Header handleThemeSwitch={handleThemeSwitch} />
                <Switch>
                  <Route exact path="/">
                    <HomePage />
                  </Route>
                  <Route exact path="/video/:videoId">
                    <VideoPage />
                  </Route>
                  <ProtectedRoute exact path="/favorites">
                    <FavoritesPage />
                  </ProtectedRoute>
                </Switch>
              </ThemeProvider>
            </GlobalProvider>
          </YoutubeDataProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
