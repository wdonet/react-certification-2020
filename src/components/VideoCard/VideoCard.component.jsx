import React from 'react';
import { VideoCardContainer, Details, ImageContainer } from './VideoCard.styled';

function VideoCard({ image, title, description }) {
  return (
    <VideoCardContainer>
      <ImageContainer img={image} />
      <Details>
        <h2>{title}</h2>
        <p>{description}</p>
      </Details>
    </VideoCardContainer>
  );
}

export default VideoCard;
