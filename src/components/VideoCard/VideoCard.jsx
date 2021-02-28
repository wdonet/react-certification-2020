import React from 'react';
import { Container } from './VideoCard.styles';

const VideoCard = ({ info }) => {
  return (
    <Container>
      <div>
        <img alt="" src={info.thumbnails.medium.url} />
        <div>
          <h2>{info.title}</h2>
        </div>
        <div>
          <h3>{info.description}</h3>
        </div>
      </div>
    </Container>
  );
};

export default VideoCard;
