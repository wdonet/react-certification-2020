import React from 'react';
import VideoListItemThumbnail from '../VideoListItemThumbnail';
import VideoListIteminfo from '../VideoListItemInfo';
import Styled from './VideoListItem.styled';
import { useSearch } from '../../providers/Search.provider';

function VideoListItem({ videoID, thumbnails, title, description, handler }) {
  const { updateSelectedVideo } = useSearch();
  const updateVideo = () => {
    handler();
    updateSelectedVideo(videoID, title, description);
  };

  return (
    <Styled.Column
      // className="col-3"
      // className="card"
      data-testid="VideoListItem"
    >
      <Styled.Row className="card" onClick={updateVideo}>
        <VideoListItemThumbnail images={thumbnails} title={title} />
        <VideoListIteminfo title={title} description={description} />
      </Styled.Row>
    </Styled.Column>
  );
}

export default VideoListItem;
