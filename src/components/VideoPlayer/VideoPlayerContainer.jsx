import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
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

const VideoPlayerContainer = () => {
  const location = useLocation();
  const { state, search } = location;
  const videoId = new URLSearchParams(search).get("id");

  const getLabel = (videoId) => 
    getParsedFavorites() && getParsedFavorites()[videoId] 
    ? "Remove favorite"
    : "Add favorite";

  const [favoriteButtonLabel, setFavoriteButtonLabel] = useState(getLabel());

  const updateButtonLabel = () => { setFavoriteButtonLabel(() => getLabel(videoId)); }

  useEffect(() => updateButtonLabel());

  useEffect(() => {
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


  const addRemoveFavorite = () => {
    let favorites = getParsedFavorites();
    if(!favorites){
      favorites = {[videoId]: state};
    } else if(!favorites[videoId]) {
      favorites[videoId] = state;
    } else {
      delete favorites[videoId];
    }
    favorites = JSON.stringify(favorites);
    window.localStorage.setItem(FAVORITES_KEY, favorites);
    updateButtonLabel();
  }

  return (
    <StyledVideoPlayerContainer id="video-player-container">
      <StyledPlayerSection>
        <div id="player" />
        <ControlsContainer>
          <Button 
              data-testid="add-favorite"
              margin="4px"
              height="30px"
              width="150px"
              onClick={() => addRemoveFavorite()}
          >
            { favoriteButtonLabel }
          </Button>
        </ControlsContainer>
      </StyledPlayerSection>
      <RelatedVideosList />
    </StyledVideoPlayerContainer>
  );
};

export default VideoPlayerContainer;
