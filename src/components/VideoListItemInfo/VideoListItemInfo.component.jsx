import React from 'react';
import Styled from './VideoListItemInfo.styled';

function VideoListIteminfo({ title, description }) {
  return (
    <Styled.Body className="card-body" data-testid="VideoListItemInfo">
      <Styled.Title className="card-title">{title}</Styled.Title>
      <Styled.Text className="card-text">{description}</Styled.Text>
    </Styled.Body>
  );
}

export default VideoListIteminfo;
