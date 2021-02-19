import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import Layout from '../Layout';
import Private from '../Private';
import GlobalStyles from '../../global.style';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <GlobalStyles />
        <Layout>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Private exact path="/favorites">
              <HomePage />
            </Private>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
