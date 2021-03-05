import React from 'react';
import Styled from './VideoDetail.styled';
import { useSearch } from '../../providers/Search.provider';

function VideoDetail({ handle }) {
  const { selectedVideo } = useSearch();
  return (
    <Styled.Container className="col-8" data-testid="VideoDetail">
      <div>
        <button type="button" onClick={handle}>
          Close Detail
        </button>
      </div>
      <Styled.VideoContainer
      //  className="col"
      >
        <Styled.VideoiFrame
          title="videoFrame"
          src={`https://www.youtube.com/embed/${selectedVideo.id}?feature=oembed`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Styled.VideoContainer>
      <div>{selectedVideo.title}</div>
      <div>{selectedVideo.description}</div>
    </Styled.Container>
  );
}

export default VideoDetail;
