import React from 'react';
import Styled from './VideoListItemInfo.styled';
import { htmlentities } from '../../utils/htmlEntities';

function VideoListIteminfo({ title, description }) {
  return (
    <Styled.Body className="card-body" data-testid="VideoListItemInfo">
      <Styled.Title className="card-title">{htmlentities.decode(title)}</Styled.Title>
      <Styled.Text className="card-text">{description}</Styled.Text>
    </Styled.Body>
  );
}

export default VideoListIteminfo;
