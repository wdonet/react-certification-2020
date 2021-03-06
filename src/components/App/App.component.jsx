import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import NavBar from '../NavBar';
import Layout from '../Layout';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import VideoDetailPage from '../../pages/VideoDetail';
import NotFound from '../../pages/NotFound';
import { fetchVideos } from '../../lib/youTubeApi';

export default function App() {
  const [word, setWord] = React.useState('wizeline');
  const [videos, setVideos] = React.useState([]);

  React.useEffect(() => {
    fetchVideos(word).then((videosData) => {
      setVideos(videosData.items);
    });
  }, [word]);

  return (
    <BrowserRouter>
      <AuthProvider>
        <NavBar word={word} setWord={setWord} />
        <Layout>
          <Switch>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/">
              <HomePage videos={videos} />
            </Route>
            <Route exact path="/:id">
              <VideoDetailPage videos={videos} />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}
