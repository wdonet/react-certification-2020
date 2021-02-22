import React from 'react';
import mockedData from '../../utils/mocked-youtube.json';
import VideoList from '../../components/VideoList';

function HomePage() {
  const { items } = mockedData;

  return (
    <VideoList
      title="Welcome to Orlando's YouTube Client"
      items={items}
      filter="videos"
    />
  );
}

export default HomePage;
