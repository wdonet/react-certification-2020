import React from 'react';
import Styled from './VideoDetail.styled';
import { useSearch } from '../../providers/Search.provider';

function VideoDetail() {
  const { selectedVideoId, selectedVideoTitle, selectedVideoDescription } = useSearch();
  return (
    <Styled.VideoContainer data-testid="VideoDetail">
      <iframe
        title="videoFrame"
        src={`https://www.youtube.com/embed/${selectedVideoId}?feature=oembed`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <div>{selectedVideoTitle}</div>
      <div>{selectedVideoDescription}</div>
    </Styled.VideoContainer>
  );
}

export default VideoDetail;
