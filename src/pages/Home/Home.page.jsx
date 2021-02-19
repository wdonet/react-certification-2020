import React from 'react';
import './Home.styles.css';
import data from '../../mockData/youtube-videos-mock.json';

import VideoGrid from '../../components/VideoGrid';

const videosData = data.items.filter((item) => item.id.kind.includes('video'));

function HomePage() {
  return (
    <section className="homepage">
      <h1>Welcome to Paola`&apos;`s Challenge!</h1>
      <VideoGrid videosData={videosData} />
    </section>
  );
}

export default HomePage;
