import React from 'react';
import VideoListItem from '../VideoListItem';
import Styled from './VideoList.styled';

function VideoList({ items }) {
  return (
    <Styled.Container
      className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 "
      data-testid="VideoList"
    >
      {items.map(({ snippet, etag }) => (
        <VideoListItem
          title={snippet.title}
          description={snippet.description}
          thumbnails={snippet.thumbnails}
          key={etag}
        />
      ))}
    </Styled.Container>
  );
}

export default VideoList;
