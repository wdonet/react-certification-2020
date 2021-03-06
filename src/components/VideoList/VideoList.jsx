import React from 'react';
import useVideos from './useVideos';

import {
  VideosContainer,
  VideoCard,
  VideoPreview,
  VideoDescription,
  VideoTitle,
  VideoContent,
} from './VideoList.styled';

const VideoList = () => {
  const { videos, isLoading, error } = useVideos();

  console.log(videos);

  if (error) return <p>{error}</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <VideosContainer>
      {videos
        .filter((item) => item.id.kind === 'youtube#video')
        .map((item) => (
          <VideoCard key={item.id.videoId}>
            <VideoPreview src={item.snippet.thumbnails.medium.url} />
            <VideoContent>
              <VideoTitle>{item.snippet.title}</VideoTitle>
              <VideoDescription>{item.snippet.description}</VideoDescription>
            </VideoContent>
          </VideoCard>
        ))}
    </VideosContainer>
  );
};

export default VideoList;
