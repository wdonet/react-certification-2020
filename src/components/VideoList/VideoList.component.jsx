import React from 'react';
import VideoListItem from '../VideoListItem';

function VideoList({ items }) {
  return (
    <div>
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
