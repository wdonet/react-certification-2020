import React, { useReducer } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import NavBar from '../NavBar';
import Layout from '../Layout';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import VideoDetailPage from '../../pages/VideoDetail';
import NotFound from '../../pages/NotFound';
import SearchWordContext from '../../state/SearchWordContext';
import SearchWordReducer from '../../state/SearchWordReducer';
import ThemeContext from '../../state/ThemeContext';
import ThemeReducer from '../../state/ThemeReducer';

export default function App() {
  const [videos, setVideos] = React.useState([]);
  const [state, dispatch] = useReducer(SearchWordReducer, {
    word: 'Wizeline',
  });
  const [stateTheme, dispatchTheme] = useReducer(ThemeReducer, {
    theme: {
      navBar: '#3fc7cb',
      content: 'white',
      text: 'black',
    },
  });

  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeContext.Provider value={{ stateTheme, dispatchTheme }}>
          <SearchWordContext.Provider value={{ state, dispatch }}>
            <NavBar setVideos={setVideos} />
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
          </SearchWordContext.Provider>
        </ThemeContext.Provider>
      </AuthProvider>
    </BrowserRouter>
  );
}
