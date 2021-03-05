import React from 'react';
import VideoListItem from '../VideoListItem';
import Styled from './VideoList.styled';

function VideoList({ items, handle }) {
  return (
    <Styled.Container
      // className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 "
      className="col-4"
      data-testid="VideoList"
    >
      {items.map(({ id, snippet, etag }) => (
        <VideoListItem
          videoID={id.videoId}
          title={snippet.title}
          description={snippet.description}
          thumbnails={snippet.thumbnails}
          key={etag}
          handler={handle}
        />
      ))}
    </Styled.Container>
  );
}

export default VideoList;
