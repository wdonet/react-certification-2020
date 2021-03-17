import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import FavoritesPage from '../../pages/Favorites';
import HomePage from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import ResultsPage from '../../pages/Results';
import Layout from '../Layout';
import Private from '../Private';
import GlobalStyles from '../../global.style';
import GloablStateProvider from '../../providers/GlobalState/Provider';
import WatchPage from '../../pages/Watch/Watch.page';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <GloablStateProvider>
          <GlobalStyles />
          <Layout>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Private exact path="/favorites">
                <FavoritesPage />
              </Private>
              <Route exact path="/results">
                <ResultsPage />
              </Route>
              <Route exact path="/watch">
                <WatchPage />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Layout>
        </GloablStateProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
