import React from 'react';
import { VideoCardContainer, Details } from './VideoCard.Styled';

function VideoCard({ image, title, description }) {
  return (
    <VideoCardContainer>
      <img src={image} alt="" />
      <Details>
        <h2>{title}</h2>
        <p>{description}</p>
      </Details>
    </VideoCardContainer>
  );
}

export default VideoCard;
