import React from 'react';
import VideoListItemThumbnail from '../VideoListItemThumbnail';
import VideoListIteminfo from '../VideoListItemInfo';
import Styled from './VideoListItem.styled';

function VideoListItem({ thumbnails, title, description }) {
  return (
    <Styled.Column className="col" data-testid="VideoListItem">
      <Styled.Row className="card">
        <VideoListItemThumbnail images={thumbnails} title={title} />
        <VideoListIteminfo title={title} description={description} />
      </Styled.Row>
    </Styled.Column>
  );
}

export default VideoListItem;
