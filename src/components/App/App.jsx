import React, { useReducer } from 'react';
import { appReducer } from '../../reducers/appReducer';
import { lightTheme, darkTheme } from '../../providers/themes';
import youtubeSearchService from '../../services/youtubeSearchService';
import AppContext from '../../providers/AppContext';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import { LayoutWrapper } from '../Layout';
import { 
  SET_IS_FIRST_LOAD, 
  SET_SESSION, 
  SET_VIDEOS_LIST, 
  SWITCH_THEME 
} from '../../reducers/actionTypes';
import Content from './Content';
const initialState = {
  videosList: [],
  currentVideoId: undefined,
  isLightTheme: true,
  isFirstLoad: true,
};

const history = createBrowserHistory();

function App() {
  const [{ 
    videosList, 
    isLightTheme, 
    isFirstLoad }, 
    dispatch] = useReducer(appReducer, initialState);

  const getThemeConfig = () => ({
    theme: isLightTheme ? lightTheme : darkTheme,
    switchTheme: () => dispatch({type: SWITCH_THEME}),
  });

  const search = async (query) => {
    const serviceResponse = await youtubeSearchService.search(query);
    serviceResponse.error 
    ? dispatch({ type: SET_VIDEOS_LIST, payload: [] })
    : dispatch({ type: SET_VIDEOS_LIST, payload: serviceResponse });
  }

  const firstSearch = async () => {
    let counter = 0;
    /* global gapi */
    /* eslint no-undef: "error" */
    while((!gapi || !gapi.client) && counter < 10){
      counter+=1;
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    ((!gapi || !gapi.client) || counter >= 10) 
    ? dispatch({ type: SET_VIDEOS_LIST, payload: [] })
    : search()
  }

  if(isFirstLoad){
    dispatch({ type: SET_IS_FIRST_LOAD, payload: false });
    firstSearch();
  }

  return (
    <AppContext.Provider value={
      { ...getThemeConfig(), 
        search,
        videosList,
        setUserSession: (data) => dispatch({type: SET_SESSION, payload: data}),
      }
    }>
      <Router history={history}>
        {
          <LayoutWrapper>
            <Content />
          </LayoutWrapper>
        }
      </Router>
    </AppContext.Provider>
  );
}

export default App;
