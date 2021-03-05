import React from 'react';
import Styled from './VideoDetail.styled';
import { useSearch } from '../../providers/Search.provider';

function VideoDetail() {
  const { selectedVideo } = useSearch();
  return (
    <Styled.VideoContainer className="row" data-testid="VideoDetail">
      <div className="col">
        <iframe
          title="videoFrame"
          src={`https://www.youtube.com/embed/${selectedVideo.id}?feature=oembed`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div>{selectedVideo.title}</div>
      <div>{selectedVideo.description}</div>
    </Styled.VideoContainer>
  );
}

export default VideoDetail;
