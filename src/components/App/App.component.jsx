import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { useVideos } from 'utils/hooks/useVideos';
import { getVideos, searchVideos } from 'utils/api';
import { toggle } from 'utils/fns';

import Sider from 'components/Sider';
import Header from 'components/Header';
import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import VideoDetail from '../../pages/VideoDetail';

const { Content: AntContent } = Layout;

const FullHeightLayout = styled(Layout)`
  height: 100vh;
`;

const StyledContent = styled(AntContent)`
  padding: 1rem;
  overflow: scroll;
`;

function App() {
  const [videos, setVideos] = useVideos(getVideos);
  const [isSiderHidden, setIsSiderHidden] = useState(true);

  const toggleSider = () => {
    setIsSiderHidden(toggle(isSiderHidden));
  };

  const handleSearch = async (text) => {
    const res = await searchVideos(text);
    setVideos(res.result.items);
  };

  return (
    <AuthProvider>
      <BrowserRouter>
        <FullHeightLayout>
          <Sider isHidden={isSiderHidden} onToggle={toggleSider} />
          <Layout>
            <Header onSearch={handleSearch} onToggle={toggleSider} />
            <StyledContent aria-label="content">
              <Switch>
                <Route exact path="/">
                  <HomePage videos={videos} />
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
