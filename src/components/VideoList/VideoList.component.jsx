import React from 'react';
import VideoListItem from '../VideoListItem';

function VideoList({ items }) {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 ">
      {items.map(({ snippet, etag }) => (
        <VideoListItem
          title={snippet.title}
          description={snippet.description}
          thumbnails={snippet.thumbnails}
          key={etag}
        />
      ))}
    </div>
  );
}

export default VideoList;
