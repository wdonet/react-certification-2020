import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';
import Layout from '../Layout';
import { theme } from '../../config/theme';
import GlobalStyles from '../../Global.styles';
import VideoPage from '../../pages/Video';
import SearchProvider from '../../providers/Search/Search.provider';

function App() {
  const isSystemDarkMode =
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider theme={isSystemDarkMode ? theme.dark : theme.light}>
          <SearchProvider>
            <GlobalStyles />
            <Layout>
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route exact path="/login">
                  <LoginPage />
                </Route>
                <Route exact path="/video/:id">
                  <VideoPage />
                </Route>
                <Private exact path="/secret">
                  <SecretPage />
                </Private>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </Layout>
          </SearchProvider>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
