import React from 'react';

function VideoListIteminfo({ title, description }) {
  return (
    <div className="card-body">
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{description}</p>
    </div>
  );
}

export default VideoListIteminfo;
