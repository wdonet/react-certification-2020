import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';
import Layout from '../Layout';
import ThemeBaseProvider from '../../providers/theme';
import VideoDetails from '../../pages/VideoDetails/VideoDetails';

function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <ThemeBaseProvider>
          <Layout>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/video/:id">
                <VideoDetails />
              </Route>
              <Route exact path="/login">
                <LoginPage />
              </Route>
              <Private exact path="/secret">
                <SecretPage />
              </Private>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Layout>
        </ThemeBaseProvider>
      </AuthProvider>
    </HashRouter>
  );
}

export default App;
