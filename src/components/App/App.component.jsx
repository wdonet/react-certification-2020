import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';

import Sider from 'components/Sider';
import Header from 'components/Header';
import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';
import Fortune from '../Fortune';

const { Content: AntContent } = Layout;

const FullHeightLayout = styled(Layout)`
  height: 100vh;
`;

const StyledContent = styled(AntContent)`
  padding: 1rem;
  overflow: scroll;
`;

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <FullHeightLayout>
          <Sider />
          <Layout>
            <Header />
            <StyledContent>
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route exact path="/login">
                  <LoginPage />
                </Route>
                <Private exact path="/secret">
                  <SecretPage />
                </Private>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
              <Fortune />
            </StyledContent>
          </Layout>
        </FullHeightLayout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
