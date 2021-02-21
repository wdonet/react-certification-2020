import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import Layout from '../Layout';
import Theme from './App.styled';

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
      <Theme>
        <Layout>{GetSwitch()}</Layout>
      </Theme>
    </BrowserRouter>
  );
}

export default App;
