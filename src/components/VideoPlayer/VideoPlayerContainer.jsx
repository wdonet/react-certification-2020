import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import AppContext from '../../providers/AppContext';
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
    if(typeof window.YTPlayer !== "undefined"){
      window.YTPlayer.loadVideoById(videoId, 0);
    } else if (YT){
      window.YTPlayer = new YT.Player('player', {
        height: '460',
        width: '60%',
        videoId,
      });
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
