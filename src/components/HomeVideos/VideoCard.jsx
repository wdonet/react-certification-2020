import React from 'react';
import { Card, CardImage, CardTitle, CardContent, CardDescription } from '../ui/index';

const VideoCard = ({ video, onClick = null }) => {
  const image = video.snippet.thumbnails.high.url;
  const { title, description } = video.snippet;

  return (
    <Card onClick={() => onClick && onClick()}>
      <CardImage src={image} alt={title} figcaption={description} />
      <CardContent>
        <CardTitle title="video-title">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
