import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardContent, CardTitle, CardDescription } from './styled';

const VideoCard = ({ video }) => {
  const { snippet, id } = video;

  return (
    <Link to={{ pathname: `/${id.videoId}`, state: { video } }}>
      <Card data-testid="card">
        <CardImg img={snippet.thumbnails.medium.url} />
        <CardContent>
          <CardTitle>{snippet.title}</CardTitle>
          <CardDescription>{snippet.description}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
};

export default VideoCard;
