import React from 'react';
import VideoListItemThumbnail from '../VideoListItemThumbnail';
import VideoListIteminfo from '../VideoListItemInfo';
import Styled from './VideoListItem.styled';
import { useSearch } from '../../providers/Search.provider';

function VideoListItem({ videoID, thumbnails, title, description }) {
  const { updateSelectedVideo } = useSearch();
  return (
    <Styled.Column className="col" data-testid="VideoListItem">
      <Styled.Row
        className="card"
        onClick={updateSelectedVideo}
        data-id={videoID}
        data-title={title}
        data-description={description}
      >
        <VideoListItemThumbnail images={thumbnails} title={title} />
        <VideoListIteminfo title={title} description={description} />
      </Styled.Row>
    </Styled.Column>
  );
}

export default VideoListItem;
