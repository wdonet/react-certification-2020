import React from 'react';

import VideoItem from '../VideoItem';
import { GridContainer } from './VideoList.styles';

const VideoList = ({ videos }) => {
  const renderedVideos = videos.map(({ etag, snippet }) => {
    return <VideoItem key={etag} video={snippet} />;
  });

  return <GridContainer>{renderedVideos}</GridContainer>;
};

export default VideoList;
