import React, { useReducer } from 'react';
import styled from 'styled-components';
import { LayoutWrapper } from '../Layout';
import { appReducer } from '../../reducers/appReducer';
import { lightTheme, darkTheme } from '../../providers/themes';
import VideoPlayerContainer from '../VideoPlayer/VideoPlayerContainer';
import AppContext from '../../providers/AppContext';
import HomeVideos from '../HomeVideos/HomeVideos';
import { 
  SET_CURRENT_VIDEO_PLAYBACK, 
  SET_IS_FIRST_LOAD, 
  SET_VIDEOS_LIST, 
  SWITCH_THEME 
} from '../../reducers/actionTypes'

const StyledWelcome = styled.div`
  text-align: center;
`;

const initialState = {
  videosList: [],
  currentVideoId: undefined,
  isLightTheme: true,
  isFirstLoad: true,
};

function App() {

  const [{ 
    videosList, 
    currentVideoId, 
    isLightTheme, 
    isFirstLoad }, 
    dispatch] = useReducer(appReducer, initialState);

  const getThemeConfig = () => ({
    theme: isLightTheme ? lightTheme : darkTheme,
    switchTheme: () => dispatch({type: SWITCH_THEME}),
  });

  const setHomeVideosView = () => {
    dispatch({ type: SET_CURRENT_VIDEO_PLAYBACK, payload: null });
  };

  const search = async (query = "paisajes") => {
    try {
      /* global gapi */
      /* eslint no-undef: "error" */
      const { result } = await gapi.client.request({
        path: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&maxResults=12&regionCode=MX&key=${process.env.REACT_APP_YOUTUBE_KEY}`,
      });
      dispatch({ type: SET_VIDEOS_LIST, payload: result.items });
    } catch (reason) {
      dispatch({ type: SET_VIDEOS_LIST, payload: [] });
    }
  }

  const firstSearch = async () => {
    while(!gapi.client)
      await new Promise(resolve => setTimeout(resolve, 500));
    if(gapi.client && isFirstLoad){ search() }
  }

  if(isFirstLoad){
    dispatch({ type: SET_IS_FIRST_LOAD, payload: false });
    firstSearch();
  }

  return (
    <AppContext.Provider value={{ setHomeVideosView, ...getThemeConfig(), search, videos: videosList, playVideo: (id) => dispatch({type: SET_CURRENT_VIDEO_PLAYBACK, payload: id}) }}>
      <LayoutWrapper>
        {currentVideoId ? (
          <div data-testid="video-player-container">
            <VideoPlayerContainer videoId={currentVideoId} />
          </div>
        ) : (
          <div>
            <StyledWelcome>
              <h1>Welcome to the challenge!</h1>
            </StyledWelcome>
            <HomeVideos />
          </div>
        )}
      </LayoutWrapper>
    </AppContext.Provider>
  );
}

export default App;
