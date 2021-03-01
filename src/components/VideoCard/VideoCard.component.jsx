import React from 'react';
import { Container, Preview, Title, Body } from './VideoCard.styles';

const VideoCard = ({ thumbnail, title, body }) => (
  <Container>
    <Preview src={thumbnail} />
    <Title>{title}</Title>
    <Body>{body}</Body>
  </Container>
);

export default VideoCard;
