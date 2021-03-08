import React from 'react';

import { VideoImage, Title, VideoDetails, Details } from './styled';

const VideosList = ({ image, title, details }) => {
  return (
    <>
      <VideoImage src={image} />
      <VideoDetails>
        <Title>{title}</Title>
        <Details>{details}</Details>
      </VideoDetails>
    </>
  );
};

export default VideosList;
