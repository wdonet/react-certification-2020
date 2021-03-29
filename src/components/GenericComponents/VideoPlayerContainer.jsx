import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import RelatedVideosContext from '../../providers/RelatedVideosContext';
import PlayerContext from '../../providers/PlayerContext';
import { Button } from '../../ui';
import RelatedVideosList from './RelatedVideosList';

const FAVORITES_KEY = "favorites";
const getParsedFavorites = () => JSON.parse(window.localStorage.getItem(FAVORITES_KEY));

const StyledVideoPlayerContainer = styled.div`
  display: flex;
`;

const ControlsContainer = styled.div`
  justify-content: flex-end;
  display: flex;
`;

const StyledPlayerSection = styled.div`
  width: 100%;
  align-content: flex-start;
  display: grid;
`;

const VideoPlayerContainer = ({ videosList, onCaptionClick }) => {

  const getFavoritesList = () => {
    let parsedFavorites = getParsedFavorites();
    return parsedFavorites ? Object.keys(parsedFavorites) : [];
  };

  const getLabel = (videoId) => 
    getParsedFavorites() && getParsedFavorites()[videoId] 
    ? "Remove favorite"
    : "Add favorite";

  const updateButtonLabel = () => { setFavoriteButtonLabel(() => getLabel(videoId)); }

  const [favoriteButtonLabel, setFavoriteButtonLabel] = useState(getLabel());
  const [favoritesList, setFavoritesList] = useState(getFavoritesList);
  const { hideFavoriteButtons } = useContext(PlayerContext);
  const location = useLocation();
  
  const { state, search } = location;
  const videoId = new URLSearchParams(search).get("id");


  useEffect(() => updateButtonLabel());

  useLayoutEffect(() => {
    /* global YT */
    /* eslint no-undef: "error" */
    YT.ready(() => {
      new YT.Player('player', {
        height: '460',
        width: '100%',
        videoId,
        events: {
          'onReady': (event) => event.target.playVideo(),
        }
      });
    });
    return () => {
      let player = document.querySelector("#player");
      let newPlayer = document.createElement("div");
      newPlayer.id = "player";
      player.parentNode.replaceChild(newPlayer, player);
      window.YTPlayer = undefined;
    }
  }, [videoId]);

  const addRemoveFavorite = (video, videoId) => {
    let favorites = getParsedFavorites();
    if(!favorites){
      favorites = {[videoId]: video};
    } else if(!favorites[videoId]) {
      favorites[videoId] = video;
    } else {
      delete favorites[videoId];
    }
    favorites = JSON.stringify(favorites);
    window.localStorage.setItem(FAVORITES_KEY, favorites);
  }

  return (
    <StyledVideoPlayerContainer id="video-player-container">
      <StyledPlayerSection>
        <div id="player" />
        <ControlsContainer>
          {
            hideFavoriteButtons?
            <></>:
            <Button 
                data-testid="add-favorite"
                margin="4px"
                height="30px"
                width="150px"
                onClick={
                  () => { 
                    addRemoveFavorite(state, videoId); 
                    updateButtonLabel();
                    setFavoritesList(getFavoritesList());
                  }
                }
            >
              { favoriteButtonLabel }
            </Button>
          }
        </ControlsContainer>
      </StyledPlayerSection>
      <RelatedVideosContext.Provider value={
        { 
          favoritesList, 
          addRemoveFavorite: (video) => {
              addRemoveFavorite(video, video.id.videoId);
              setFavoritesList(getFavoritesList()); 
              if(video.id.videoId === videoId) { updateButtonLabel(); }
            } 
        }
      }>
        <RelatedVideosList 
          videosList={videosList} 
          onCaptionClick={onCaptionClick}
        />
      </RelatedVideosContext.Provider>
    </StyledVideoPlayerContainer>
  );
};

export default VideoPlayerContainer;
