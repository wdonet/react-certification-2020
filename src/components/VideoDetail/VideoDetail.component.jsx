import React from 'react';
import Styled from './VideoDetail.styled';
import { useSearch } from '../../providers/Search.provider';

function VideoDetail({ handle, isVideoDetailVisible }) {
  const { selectedVideo } = useSearch();
  return (
    <Styled.Container videoDetail={isVideoDetailVisible} data-testid="VideoDetail">
      <div>
        <button type="button" onClick={handle}>
          Close Detail
        </button>
      </div>
      <Styled.VideoContainer>
        <Styled.VideoiFrame
          title="videoFrame"
          src={`https://www.youtube.com/embed/${selectedVideo.id}?feature=oembed`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Styled.VideoContainer>
      <Styled.VideoTitle>{selectedVideo.title}</Styled.VideoTitle>
      <Styled.VideoDescription>{selectedVideo.description}</Styled.VideoDescription>
    </Styled.Container>
  );
}

export default VideoDetail;
