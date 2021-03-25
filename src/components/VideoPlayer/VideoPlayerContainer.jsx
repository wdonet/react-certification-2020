import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import RelatedVideosList from './RelatedVideosList';

const StyledVideoPlayerContainer = styled.div`
  display: flex;
`;

const VideoPlayerContainer = () => {
  const location = useLocation();
  
  useEffect(() => {
    const videoId = new URLSearchParams(location.search).get("id");
    /* global YT */
    /* eslint no-undef: "error" */
    YT.ready(() => {
      new YT.Player('player', {
        height: '460',
        width: '60%',
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
  }, [location]);

  return (
    <StyledVideoPlayerContainer id="video-player-container">
      <div id="player" />
      <RelatedVideosList />
    </StyledVideoPlayerContainer>
  );
};

export default VideoPlayerContainer;
