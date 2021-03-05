import React from 'react';

import VideoItem from '../VideoItem';
import { GridContainer } from './VideoList.styles';

const VideoList = ({ videos }) => {
  const renderedVideos = videos.map((video) => {
    return <VideoItem key={video.id.videoId} video={video} videos={videos} />;
  });

  return <GridContainer data-testid="video-list">{renderedVideos}</GridContainer>;
};

export default VideoList;
