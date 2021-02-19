import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import Layout from '../Layout';
import Theme from './Theme.styled';

function App() {
  function GetSwitch() {
    return (
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    );
  }

  return (
    <BrowserRouter>
      <AuthProvider>
        <Theme>
          <Layout>{GetSwitch()}</Layout>
        </Theme>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
