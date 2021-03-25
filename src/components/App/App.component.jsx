import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import CustomProvider from '../../providers/Custom';

import PrivateRoute from '../Private';
import Layout from '../Layout';
import HomePage from '../../pages/Home';
import VideoPage from '../../pages/Video';
import NotFound from '../../pages/NotFound';
import FavoritePage from '../../pages/Favorite';
import FavoriteVideoPage from '../../pages/FavoriteVideo';

function App() {
  return (
    <Router>
      <AuthProvider>
        <CustomProvider>
          <Layout>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Redirect from="/home" to="/" />
              <Route path="/v/:videoId">
                <VideoPage />
              </Route>
              <PrivateRoute exact path="/favs" component={FavoritePage} />
              <PrivateRoute path="/favs/:videoId" component={FavoriteVideoPage} />
              <Route component={NotFound} />
            </Switch>
          </Layout>
        </CustomProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
