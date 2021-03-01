import React, { useState } from 'react';
import Header from '../../components/Header';
import VideoDetailsView from '../../components/VideoDetailsView';
import StyledVideoList from '../../components/VideoList';

function HomePage() {
  const [search, setSearch] = useState('');
  const [video, setVideo] = useState({ id: null });

  return (
    <>
      <Header searchVideos={setSearch} />
      {video.id ? (
        <VideoDetailsView id={video.id} />
      ) : (
        <StyledVideoList
          search={search}
          selectVideo={(videoId) => setVideo({ id: videoId })}
        />
      )}
    </>
  );
}

export default HomePage;
