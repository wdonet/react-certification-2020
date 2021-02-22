import React from 'react';
import Styled from './VideoCard.styles';

const VideoCard = ({ thumbnail, title, body }) => (
  <Styled.Container>
    <Styled.Preview src={thumbnail} />
    <Styled.Title>{title}</Styled.Title>
    <Styled.Body>{body}</Styled.Body>
  </Styled.Container>
);

export default VideoCard;
