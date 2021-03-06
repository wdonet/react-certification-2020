import React from 'react';
import { Container, Title } from './VideoCard.styles';

const VideoCard = ({ video, handleVideoSelected }) => {
  return (
    <Container>
      <div role="button">
        <img alt={video.snippet.description} src={video.snippet.thumbnails.default.url} />
        <div>
          <Title>{video.snippet.title}</Title>
        </div>
      </div>
      <button type="button" onClick={() => handleVideoSelected(video)}>
        View details
      </button>
    </Container>
  );
};

export default VideoCard;
