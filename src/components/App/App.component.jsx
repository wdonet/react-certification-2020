import React, { useLayoutEffect } from 'react';
import { BrowserRouter, Switch, Route, useRouteMatch } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import AuthProvider, { useAuth } from '../../providers/Auth';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import Layout from '../Layout';
import { random } from '../../utils/fns';
import { YouTubeProvider } from '../YouTube/YouTubeProvider';
import MyThemeProvider from './MyThemeProvider';
import VideoList from '../YouTube/List/VideoList';
import VideoDetail from '../YouTube/Detail/VideoDetail';

const ProtectedRoute = (props) => {
  const { authenticated } = useAuth();
  return authenticated ? <Route {...props} /> : <LoginPage />;
};

function App() {
  useLayoutEffect(() => {
    const { body } = document;

    function rotateBackground() {
      const xPercent = random(100);
      const yPercent = random(100);
      body.style.setProperty('--bg-position', `${xPercent}% ${yPercent}%`);
    }

    const intervalId = setInterval(rotateBackground, 3000);
    body.addEventListener('click', rotateBackground);

    return () => {
      clearInterval(intervalId);
      body.removeEventListener('click', rotateBackground);
    };
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        <YouTubeProvider>
          <MyThemeProvider>
            <Layout>
              <Switch>
                <ProtectedRoute path="/favorites">
                  <VideosRoute />
                </ProtectedRoute>
                <Route exact path="/login">
                  <LoginPage />
                </Route>
                <Route path="/">
                  <VideosRoute />
                </Route>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </Layout>
          </MyThemeProvider>
        </YouTubeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export const queryClient = new QueryClient();
function VideosRoute() {
  const { path } = useRouteMatch();

  return (
    <QueryClientProvider client={queryClient}>
      <Switch>
        <Route exact path={path}>
          <VideoList />
        </Route>
        <Route path={`${path}/:id`}>
          <VideoDetail />
        </Route>
      </Switch>
    </QueryClientProvider>
  );
}

export default App;
