import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import Layout from '../Layout';
import Header from '../Header';
import Video from '../../pages/Video';

function App() {
  return (
    <>
      <Header />
      <Layout>
        <Switch>
          <Route exact path={['/', '/search']}>
            <HomePage />
          </Route>
          <Route path="/search/:searchQuery">
            <HomePage />
          </Route>
          <Route path="/video/:videoId">
            <Video />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
