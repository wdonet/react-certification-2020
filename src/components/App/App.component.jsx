import React, { useLayoutEffect, useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import VideoDetailViewPage from '../../../src/pages/VideoDetailView/VideoDetailView.page';
import Private from '../Private';
import Fortune from '../Fortune';
import Header from '../Header';
import Layout from '../Layout';
import { random } from '../../utils/fns';
import useCallAPI from '../../utils/hooks/useCallApi';


const GlobalStyles = createGlobalStyle`
  body {
    font-family: Arial;
    text-align: center;
    margin: 0 0 15px 0;
  }
`;

function App() {
  
  const [videos, setVideos] = useState([]);
  const gapi = useCallAPI();
 
  const getVideos = useCallback( async (part, maxResults, searchItem  ) => {
    const responseApi = await gapi.client.youtube.search.list({
      maxResults,
      part,
      q: searchItem,
    });
    setVideos(responseApi.result.items);
  },[gapi])

  
  useEffect(() => {
    const part = ['id', 'snippet'];
    const maxResults = 25;
    const searchItem = 'wizeline';
   
     if(gapi) getVideos(part, maxResults, searchItem);
     
  },[gapi, getVideos]);


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
        <Layout>
          <Switch>
            <Route exact path="/">
              <Header getVideoCallBack={getVideos} />
              <GlobalStyles />
              <HomePage homeVideos={videos} />
            </Route>
            <Route exact path="/video/:getVideoId/:title">
              <Header getVideoCallBack={getVideos} />
              <GlobalStyles />
              <VideoDetailViewPage detailVideo={videos} />
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
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
