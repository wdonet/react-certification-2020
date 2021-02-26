import React from 'react';
import { Card, Image, Info, Title, Description } from './styled';

const VideoCard = ({ data }) => {
  const {
    snippet: {
      title,
      description,
      thumbnails: {
        high: { url },
      },
    },
  } = data;

  return (
    <Card>
      <Image src={url} alt={title} />
      <Info>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Info>
    </Card>
  );
};

export default VideoCard;
