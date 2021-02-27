import { Grid } from '@material-ui/core';
import React, { useRef } from 'react';
import VideoMosaic from '../../components/VideoMosaic';
import mockData from '../../utils/youtube-videos-mock';

export function getVideosOnly(mockYTData) {
  return mockYTData.items.filter((item) => item.id.kind === 'youtube#video');
}

function getVideoMosaics() {
  return getVideosOnly(mockData).map((item) => {
    return <VideoMosaic key={item.id.videoId} snippet={item.snippet} />;
  });
}

function HomePage() {
  const sectionRef = useRef(null);
  return (
    <section ref={sectionRef}>
      <Grid data-testid="Home" container spacing={1}>
        {getVideoMosaics()}
      </Grid>
    </section>
  );
}

export default HomePage;
