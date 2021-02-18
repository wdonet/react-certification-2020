import React from 'react';

function VideoListItemThumbnail({ images, title }) {
  return (
    <div>
      <img src={images.high.url} alt={title} />
    </div>
  );
}

export default VideoListItemThumbnail;
