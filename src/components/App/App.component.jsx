import React, { useState, useContext } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { toggle } from 'utils/fns';

import Sider from 'components/Sider';
import Header from 'components/Header';
import PrivateRoute from 'components/PrivateRoute';
import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import VideoDetail from '../../pages/VideoDetail';
import { Context } from '../../context/AppContext';

const { Content: AntContent } = Layout;

const FullHeightLayout = styled(Layout)`
  height: 100vh;
`;

const StyledContent = styled(AntContent)`
  padding: 1rem;
  overflow: scroll;
`;

function App() {
  const { state } = useContext(Context);
  const [isSiderHidden, setIsSiderHidden] = useState(true);
  const location = useLocation();
  const login = location.state && location.state.login;

  const toggleSider = () => {
    setIsSiderHidden(toggle(isSiderHidden));
  };

  return (
    <AuthProvider>
      <FullHeightLayout>
        <Sider isHidden={isSiderHidden} onToggle={toggleSider} />
        <Layout>
          <Header onToggle={toggleSider} />
          <StyledContent aria-label="content">
            <Switch location={login || location}>
              <Route exact path="/">
                <HomePage videos={state.videos} />
              </Route>
              <Route exact path="/watch" component={VideoDetail} />
              <PrivateRoute
                exact
                path="/favorites"
                component={HomePage}
                videos={state.favoriteVideos}
              />
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
            {login && (
              <Route path="/login">
                <LoginPage />
              </Route>
            )}
          </StyledContent>
        </Layout>
      </FullHeightLayout>
    </AuthProvider>
  );
}

export default App;
