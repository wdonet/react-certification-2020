import React from 'react';
import VideoListItemThumbnail from '../VideoListItemThumbnail';
import VideoListIteminfo from '../VideoListItemInfo';

function VideoListItem({ thumbnails, title, description }) {
  return (
    <div className="col">
      <div className="card h-100">
        <VideoListItemThumbnail images={thumbnails} title={title} />
        <VideoListIteminfo title={title} description={description} />
      </div>
    </div>
  );
}

export default VideoListItem;
