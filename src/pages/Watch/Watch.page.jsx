import React from 'react';
import { useLocation } from 'react-router-dom';

import { Container } from './Watch.styles';
import VideoDetails from '../../components/VideoDetails';
import useQueryParams from '../../hooks/useQueryParams';

const WatchPage = () => {
  const queryParams = useQueryParams();
  const location = useLocation();

  const relatedVideos =
    location.state && location.state.videos ? location.state.videos : [];
  const descriptionVideo =
    location.state && location.state.description ? location.state.description : '';
  const titleVideo = location.state && location.state.title ? location.state.title : '';

  return (
    <Container>
      <VideoDetails
        videoId={queryParams.videoId}
        title={titleVideo}
        description={descriptionVideo}
        videos={relatedVideos}
      />
    </Container>
  );
};

export default WatchPage;
