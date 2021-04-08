import React, { useState } from 'react';
import Header from '../../components/Header';
import VideoDetailsView from '../../components/VideoDetailsView';
import VideoList from '../../components/VideoList';

function HomePage() {
  const [video, setVideo] = useState({ id: null });

  return (
    <>
      <Header />
      {video.id ? (
        <VideoDetailsView id={video.id} />
      ) : (
        <VideoList selectVideo={(videoId) => setVideo({ id: videoId })} />
      )}
    </>
  );
}

export default HomePage;
