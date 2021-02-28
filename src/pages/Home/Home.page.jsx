import { Grid } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';
import VideoMosaic from '../../components/VideoMosaic';

function getVideoMosaics(mockData) {
  return mockData.items.map((item) => {
    return <VideoMosaic key={item.id} snippet={item.snippet} />;
  });
}

function HomePage() {
  const sectionRef = useRef(null);
  const [mockData, setMockData] = useState(null);

  useEffect(() => {
    fetch(
      'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&key=API_KEY'
    )
      .then((response) => response.json())
      .then((data) => setMockData(data));
  }, []);

  return (
    <section ref={sectionRef}>
      <Grid data-testid="Home" container spacing={1}>
        {mockData && getVideoMosaics(mockData)}
      </Grid>
    </section>
  );
}

export default HomePage;
