import React, { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import AppContext from '../../providers/AppContext';
import RelatedVideoList from './RelatedVideoList';

const StyledVideoPlayerContainer = styled.div`
  display: flex;
`;

const VideoPlayerContainer = ({ videoId }) => {
  const { videos } = useContext(AppContext);
  const playerRef = useRef();

  useEffect(() => {
    /* global YT */
    /* eslint no-undef: "error" */
    playerRef.current = new YT.Player('player', {
      height: '460',
      width: '60%',
      videoId,
    });
    return () => { playerRef.current = undefined; }
  });

  return (
    <StyledVideoPlayerContainer id="video-player-container">
      <div id="player" />
      <RelatedVideoList
        videos={videos}
        playVideoByID={(videoID) => playerRef.current.loadVideoById(videoID, 0)}
      />
    </StyledVideoPlayerContainer>
  );
};

export default VideoPlayerContainer;
