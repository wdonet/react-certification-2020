import { Grid } from '@material-ui/core';
import React, { useRef } from 'react';
import VideoMosaic from '../../components/VideoMosaic';
import mockData from '../../utils/youtube-videos-mock';

function HomePage() {
  const sectionRef = useRef(null);

  return (
    <section className="homepage" ref={sectionRef}>
      <Grid container spacing={2}>
        {mockData.items.map((item) => {
          return <VideoMosaic snippet={item.snippet} />;
        })}
      </Grid>
    </section>
  );
}

export default HomePage;
