import React, { useContext, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import useVideoDetails from '../../hooks/useVideoDetails';
import VideoPlayer from '../VideoPlayer';
import RelatedVideos from '../RelatedVideos';
import GlobalContext from '../../state/GlobalContext';

const VideoDetailsView = ({ id }) => {
  const [videoId, setVideoId] = useState(id);
  const video = useVideoDetails(videoId);
  const { theme } = useContext(GlobalContext);

  return (
    <Grid
      container
      style={{
        backgroundColor: theme === 'dark' ? 'black' : 'white',
        color: theme === 'dark' ? 'white' : 'black',
      }}
    >
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
