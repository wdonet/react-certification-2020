import React from 'react';
import VideoCard from '../VideoCard';
import { VideoGridContainer } from './VideoGrid.styled';

function VideoGrid({ videos }) {
  return (
    <VideoGridContainer>
      {videos.map(({ id, snippet }) => (
        <VideoCard
          key={id.videoId}
          image={snippet.thumbnails.medium.url}
          title={snippet.title}
          description={snippet.description}
        />
      ))}
    </VideoGridContainer>
  );
}

export default VideoGrid;
