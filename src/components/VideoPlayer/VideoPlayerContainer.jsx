import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import SearchContext from '../../providers/SearchContext';
import RelatedVideoList from './RelatedVideoList';

const StyledVideoPlayerContainer = styled.div`
  display: flex;
`;

const VideoPlayerContainer = ({ videoId }) => {
  const { videos } = useContext(SearchContext);

  useEffect(() => {
    /* global YT */
    /* eslint no-undef: "error" */
      window.player = new YT.Player('player', {
        height: '50%', 
        width: '60%',
        videoId,
      });
  });

  return (
    <StyledVideoPlayerContainer id="video-player-container">
      <div id="player" />
      <RelatedVideoList
        videos={videos}
        playVideoByID={(videoID) => window.player.loadVideoById(videoID, 0)}
      />
    </StyledVideoPlayerContainer>
  );
};

export default VideoPlayerContainer;
