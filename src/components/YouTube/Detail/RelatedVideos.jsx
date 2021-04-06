import React from 'react';

import { useHistory } from 'react-router';
import {
  RelatedVideosContainer,
  VideoItem,
  VideoPreview,
  VideoTitle,
  VideoDescription,
  VideoTitleDescWrap,
} from './VideoDetail.styled';

import useVideos from '../useVideos';
import useFavorites from '../../FavoritesButton/useFavorites';

const RelatedVideos = ({ relatedTo }) => {
  const history = useHistory();
  const { favorites } = useFavorites();

  const { isLoading, error, videos } = useVideos({
    relatedToVideoId: relatedTo?.id?.videoId,
    favoriteIds: history.location.pathname.startsWith('/favorites')
      ? favorites
      : undefined,
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <RelatedVideosContainer>
      {error && <div>Error. Displaying mock data...</div>}
      {videos.map((video) => (
        <VideoItem
          key={video.id.videoId}
          onClick={() => {
            history.push(
              history.location.pathname.startsWith('/favorites')
                ? `/favorites/${video.id.videoId}`
                : `/${video.id.videoId}`
            );
          }}
        >
          <VideoPreview src={video.snippet.thumbnails.default.url} />
          <VideoTitleDescWrap>
            <VideoTitle>{video.snippet.title}</VideoTitle>
            <VideoDescription>{video.snippet.description}</VideoDescription>
          </VideoTitleDescWrap>
        </VideoItem>
      ))}
    </RelatedVideosContainer>
  );
};

export default RelatedVideos;
