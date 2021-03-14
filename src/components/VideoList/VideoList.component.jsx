import React from 'react';

import VideoItem from '../VideoItem';
import { GridContainer } from './VideoList.styles';

const VideoList = ({ videos, index }) => {
  const renderedVideos = videos.map((video) => {
    return <VideoItem key={index} video={video} videos={videos} />;
  });

  return <GridContainer data-testid="video-list">{renderedVideos}</GridContainer>;
};

export default VideoList;
