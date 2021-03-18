import React from "react";
import { Switch, FormControlLabel } from '@material-ui/core';
import Styled from "./styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'
import {useVideoSearch} from './../../providers/VideoSearch'
import {API_KEY} from '../../utils/constants';
import YTSerach from 'youtube-api-search';
//import mockedData from "../../youtube-videos-mock.json";

const Navigation = () => {
  const {
    search,
    darkMode,
    selectedVideo,
    setDarkMode,
    setSearch,
    setItems,
    setSelectedVideo,
    setRelatedVideos,
  } = useVideoSearch();

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if(search!=''){
      YTSerach({key: API_KEY, term: search, maxResults: 5 },function(videos){
        setItems(videos);
        setSelectedVideo(videos[0]);
      } );
      YTSerach({key: API_KEY, relatedToVideoId: selectedVideo.id.videoId, maxResults: 4 },function(rVideos){
        setRelatedVideos(rVideos);
    } );

    }
    
  };

  return (
          <Styled.Navigation>
            <Styled.NavigationContainer>
              <Styled.MainMenu><FontAwesomeIcon icon={faBars}/></Styled.MainMenu>
              <Styled.SearchBar>
                <form style={{ display: 'inline' }} onSubmit={handleSubmit}>
                    <Styled.SearchInput 
                      placeholder="Search..." 
                      type="text" 
                      value={search}
                      onChange={handleChange}
                    />
                  </form>
              </Styled.SearchBar>
              <Styled.EmptyBar />
              <Styled.SetupBar>
                  <FormControlLabel
                    control={<Switch checked={darkMode} onChange={setDarkMode} />}
                    label="Dark Mode"
                  />
                  <Styled.SessionMenu><FontAwesomeIcon icon={faUser}/></Styled.SessionMenu>
              </Styled.SetupBar>
            </Styled.NavigationContainer>
          </Styled.Navigation>
        );
}
  

export default Navigation;