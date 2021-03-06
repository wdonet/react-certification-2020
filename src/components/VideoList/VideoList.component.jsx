import React from 'react';
import VideoListItem from '../VideoListItem';
import Styled from './VideoList.styled';

function VideoList({ items, handle, isVideoDetailVisible }) {
  return (
    <Styled.Container data-testid="VideoList" videoDetail={isVideoDetailVisible}>
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
