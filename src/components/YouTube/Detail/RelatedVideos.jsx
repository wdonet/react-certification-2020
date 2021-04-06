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

import useRelatedVideos from '../useRelatedVideos';

const RelatedVideos = ({ relatedTo }) => {
  const history = useHistory();
  const { isLoading, error, videos } = useRelatedVideos({
    relatedToVideoId: relatedTo?.id?.videoId,
  });
  if (isLoading) return <div>Loading...</div>;

  return (
    <RelatedVideosContainer>
      {error && <div>Error. Displaying mock data...</div>}
      {videos.map((video) => (
        <VideoItem
          key={video.id.videoId}
          onClick={() => {
            history.push(`/videos/${video.id.videoId}`);
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
