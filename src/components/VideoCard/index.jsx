import React from 'react';
import Styled from './styled';

const VideoCard = ({ snippet }) => (
  <Styled.Card data-testid="card">
    <Styled.CardImg img={snippet.thumbnails.medium.url} />
    <Styled.CardContent>
      <Styled.CardTitle>{snippet.title}</Styled.CardTitle>
      <Styled.CardDescription>{snippet.description}</Styled.CardDescription>
    </Styled.CardContent>
  </Styled.Card>
);

export default VideoCard;
