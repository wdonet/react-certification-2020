import React, { useEffect } from 'react';
import styled from 'styled-components';
import RelatedVideoList from './RelatedVideoList';

const StyledVideoPlayerContainer = styled.div`
  display: flex;
`;

const VideoPlayerContainer = ({ videoId }) => {

  useEffect(() => {
    /* global YT */
    /* eslint no-undef: "error" */
    window.YTPlayer = new YT.Player('player', {
      height: '460',
      width: '60%',
      videoId,
    });
    return () => { window.YTPlayer = undefined; }
  });

  return (
    <StyledVideoPlayerContainer id="video-player-container">
      <div id="player" />
      <RelatedVideoList playVideoById={(id) => window.YTPlayer.loadVideoById(id, 0)}/>
    </StyledVideoPlayerContainer>
  );
};

export default VideoPlayerContainer;
