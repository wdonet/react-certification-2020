import React, { useState, useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { toggle } from 'utils/fns';

import Sider from 'components/Sider';
import Header from 'components/Header';
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

  const toggleSider = () => {
    setIsSiderHidden(toggle(isSiderHidden));
  };

  return (
    <AuthProvider>
      <BrowserRouter>
        <FullHeightLayout>
          <Sider isHidden={isSiderHidden} onToggle={toggleSider} />
          <Layout>
            <Header onToggle={toggleSider} />
            <StyledContent aria-label="content">
              <Switch>
                <Route exact path="/">
                  <HomePage videos={state.videos} />
                </Route>
                <Route exact path="/login">
                  <LoginPage />
                </Route>
                <Route path="/watch" component={VideoDetail} />
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </StyledContent>
          </Layout>
        </FullHeightLayout>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
