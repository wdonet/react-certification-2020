import React from 'react';

function VideoListItemThumbnail({ images, title }) {
  return (
    <div className="card-img-top">
      <img src={images.high.url} alt={title} className="img-fluid" />
    </div>
  );
}

export default VideoListItemThumbnail;
