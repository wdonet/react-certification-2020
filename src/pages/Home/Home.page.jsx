import React from 'react';
import './Home.styles.css';
import videosMockedData from '../../mocks/youtube-videos-mock.json';
import VideoItem from '../../components/VideoItem';

function HomePage() {
  return (
    <section className="homepage" data-testid="home-page">
      {videosMockedData.items.map((item) => (
        <VideoItem item={item} key={item.etag} />
      ))}
    </section>
  );
}

export default HomePage;
