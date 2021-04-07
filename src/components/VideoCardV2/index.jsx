import React from 'react';

import { VideoContainer, VideoImage, Title, VideoDetails, Details } from './styled';

const VideosList = ({ image, title, details }) => {
  return (
    <VideoContainer>
      <VideoImage src={image} />
      <VideoDetails>
        <Title>{title}</Title>
        <Details>{details}</Details>
      </VideoDetails>
    </VideoContainer>
  );
};

export default VideosList;
