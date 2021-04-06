import React from 'react';
import { useHistory } from 'react-router-dom';
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
import FavoritesButton from '../../FavoritesButton/FavoritesButton';

const VideoList = () => {
  const history = useHistory();
  const { state } = useYouTube();
  const { search } = state;

  const { videos, isLoading, error } = useVideos({ search });

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
          <VideoCard
            key={item.id.videoId}
            onClick={() => history.push(`/videos/${item.id.videoId}`, { item })}
          >
            <VideoPreview src={item.snippet.thumbnails.medium.url} />
            <VideoContent>
              <VideoTitle>{item.snippet.title}</VideoTitle>
              <VideoDescription>{item.snippet.description}</VideoDescription>
              <FavoritesButton videoId={item.id.videoId} />
            </VideoContent>
          </VideoCard>
        ))}
      </VideosContainer>
    </>
  );
};

export default VideoList;
