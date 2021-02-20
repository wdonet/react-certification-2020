import { Grid } from '@material-ui/core';
import React, { useRef } from 'react';
import VideoMosaic from '../../components/VideoMosaic';
import mockData from '../../utils/youtube-videos-mock';

export function getVideosOnly() {
  return mockData.items.filter((item) => item.id.kind === 'youtube#video');
}

function HomePage() {
  const sectionRef = useRef(null);

  function getVideos() {
    return getVideosOnly().map((item) => {
      return <VideoMosaic key={item.id.videoId} snippet={item.snippet} />;
    });
  }

  return (
    <section ref={sectionRef}>
      <Grid container spacing={2}>
        {getVideos()}
      </Grid>
    </section>
  );
}

export default HomePage;
