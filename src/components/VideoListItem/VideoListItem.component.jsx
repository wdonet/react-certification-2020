import React from 'react';
import VideoListItemThumbnail from '../VideoListItemThumbnail';
import VideoListIteminfo from '../VideoListItemInfo';

function VideoListItem({ thumbnails, title, description }) {
  return (
    <div>
      <VideoListItemThumbnail images={thumbnails} title={title} />
      <VideoListIteminfo title={title} description={description} />
    </div>
  );
}

export default VideoListItem;
