import React, { useState } from 'react';
import Header from '../../components/Header';
import VideoDetailsView from '../../components/VideoDetailsView';
import VideoList from '../../components/VideoList';

function HomePage() {
  const [search, setSearch] = useState('');
  const [video, setVideo] = useState({ id: null });

  return (
    <>
      <Header searchVideos={setSearch} />
      {video.id ? (
        <VideoDetailsView id={video.id} />
      ) : (
        <VideoList search={search} selectVideo={(videoId) => setVideo({ id: videoId })} />
      )}
    </>
  );
}

export default HomePage;
