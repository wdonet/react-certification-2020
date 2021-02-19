import React from 'react';
import Styled from './VideoListItemThumbnail.styled';

function VideoListItemThumbnail({ images, title }) {
  return (
    <Styled.Container className="card-img-top" data-testid="VideoListItemThumbnail">
      <Styled.Image src={images.high.url} alt={title} className="img-fluid" />
    </Styled.Container>
  );
}

export default VideoListItemThumbnail;
