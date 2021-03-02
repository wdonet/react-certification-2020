import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import useVideoDetails from '../../hooks/useVideoDetails';
import VideoPlayer from '../VideoPlayer';
import RelatedVideos from '../RelatedVideos';

const VideoDetailsView = ({ id }) => {
  const [videoId, setVideoId] = useState(id);
  const video = useVideoDetails(videoId);

  return (
    <Grid container>
      <Grid item md={9}>
        <VideoPlayer video={video} />
      </Grid>
      <Grid item md={3}>
        <RelatedVideos videoId={video.id.videoId} selectVideoId={setVideoId} />
      </Grid>
    </Grid>
  );
};

export default VideoDetailsView;
