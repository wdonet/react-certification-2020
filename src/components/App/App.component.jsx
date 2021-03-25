import React, {
  useLayoutEffect,
  useState,
  useEffect,
  useCallback,
  createContext,
  useReducer,
} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
// import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import VideoDetailViewPage from '../../pages/VideoDetailView/VideoDetailView.page';
import FavoriteVideo from '../../pages/FavoriteVideos/FavoriteVideo.page';
import FavoriteVideoDetail from '../../pages/FavoriteVideos/FavoriteVideoDetail.page';
import Private from '../Private';
import Fortune from '../Fortune';
import Header from '../Header';
import Layout from '../Layout';
import { random } from '../../utils/fns';
import useCallAPI from '../../utils/hooks/useCallApi';
import { initialState, reducer } from '../../reducers/reducerDarkLight';
// eslint-disable-next-line import/no-cycle
import Login from '../ModalLogin/ModalLogin.component.jsx';
import ModalFavorite from '../ModalFavorite/ModalFavorite.component';

export const AppContext = createContext();

const GlobalStyles = createGlobalStyle`
  html,body {
    font-family: Arial;
    text-align: center;
    margin: 0 0 15px 0;
    background: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor};
  }
`;

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { currentTheme } = state;

  const [videos, setVideos] = useState([]);
  const gapi = useCallAPI();

  const getVideos = useCallback(
    async (part, maxResults, searchItem) => {
      const responseApi = await gapi.client.youtube.search.list({
        maxResults,
        part,
        q: searchItem,
      });
      setVideos(responseApi.result.items);
    },
    [gapi]
  );

  useEffect(() => {
    const part = ['id', 'snippet'];
    const maxResults = 29;
    const searchItem = 'wizeline';

    if (gapi) getVideos(part, maxResults, searchItem);
  }, [gapi, getVideos]);

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
              <ThemeProvider theme={currentTheme}>
                <AppContext.Provider value={{ ...state, dispatch }}>
                  <Header getVideoCallBack={getVideos} />
                  <GlobalStyles />
                  <HomePage homeVideos={videos} />
                </AppContext.Provider>
              </ThemeProvider>
            </Route>
            <Route exact path="/video/:getVideoId/:title">
              <ThemeProvider theme={currentTheme}>
                <AppContext.Provider value={{ ...state, dispatch }}>
                  <Header getVideoCallBack={getVideos} />
                  <GlobalStyles />
                  <VideoDetailViewPage
                    detailVideo={videos}
                    isLogin={state.currentSession}
                  />
                </AppContext.Provider>
              </ThemeProvider>
            </Route>
            <Route exact path="/loginPage">
              <AppContext.Provider value={{ ...state, dispatch }}>
                <Login isLogin={state.currentSession} />
                {/* <LoginPage /> */}
              </AppContext.Provider>
            </Route>
            <Route exact path="/favoriteVideo">
              <ThemeProvider theme={currentTheme}>
                <AppContext.Provider value={{ ...state, dispatch }}>
                  <Header getVideoCallBack={getVideos} />
                  <FavoriteVideo />
                  <GlobalStyles />
                </AppContext.Provider>
              </ThemeProvider>
            </Route>
            <Route
              exact
              path="/favoriteVideoDetail/:linkFavoriteVideoId/:linkFavoiteVideoTitle"
            >
              <ThemeProvider theme={currentTheme}>
                <AppContext.Provider value={{ ...state, dispatch }}>
                  <Header getVideoCallBack={getVideos} />
                  <FavoriteVideoDetail />
                  <GlobalStyles />
                </AppContext.Provider>
              </ThemeProvider>
            </Route>
            <Route exact path="/favoriteModal">
              <ThemeProvider theme={currentTheme}>
                <AppContext.Provider value={{ ...state, dispatch }}>
                  <ModalFavorite isLogin={state.currentSession} />
                  <Header getVideoCallBack={getVideos} />
                  <GlobalStyles />
                </AppContext.Provider>
              </ThemeProvider>
            </Route>
            {/* <Route exact path="/login">
              <LoginPage />
            </Route> */}
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
