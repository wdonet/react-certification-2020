import React from 'react';
import styled from 'styled-components';
import VideoCard from '../VideoCard';

const VideoListContainer = styled.div`
  text-align: center;
`;

export default function VideoList({ videos, handleVideoSelected }) {
  if (!videos) {
    return <div />;
  }
  const renderedVideos = videos.map((video) => {
    return (
      <VideoCard
        key={Math.random()}
        video={video}
        handleVideoSelected={handleVideoSelected}
      />
    );
  });
  return <VideoListContainer>{renderedVideos}</VideoListContainer>;
}
