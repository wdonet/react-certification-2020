import React from 'react';
import useVideos from '../useVideos';

import {
  VideosContainer,
  VideoCard,
  VideoPreview,
  VideoDescription,
  VideoTitle,
  VideoContent,
} from './VideoList.styled';
import { useYouTube } from '../YouTubeProvider';

const VideoList = () => {
  const { state, dispatch } = useYouTube();
  const { search } = state;

  const { videos, isLoading, error } = useVideos({ search });

  const onVideoCardClick = (item) => {
    dispatch({ type: 'currentVideo', payload: item });
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      {error && (
        <p style={{ textAlign: 'center' }}>
          Error from YouTube API, displaying mock data...
        </p>
      )}
      <VideosContainer>
        {videos.map((item) => (
          <VideoCard key={item.id.videoId} onClick={() => onVideoCardClick(item)}>
            <VideoPreview src={item.snippet.thumbnails.medium.url} />
            <VideoContent>
              <VideoTitle>{item.snippet.title}</VideoTitle>
              <VideoDescription>{item.snippet.description}</VideoDescription>
            </VideoContent>
          </VideoCard>
        ))}
      </VideosContainer>
    </>
  );
};

export default VideoList;
