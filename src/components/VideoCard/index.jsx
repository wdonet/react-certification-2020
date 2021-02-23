import React from 'react';

import { CardContainer, Title, Description } from './styled';

const VideoCard = ({ title, description }) => {
  return (
    <CardContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </CardContainer>
  );
};

export default VideoCard;
