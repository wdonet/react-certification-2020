import React, { useState } from 'react';
import Header from '../../components/Header';
import VideoDetailsView from '../../components/VideoDetailsView';
import VideoList from '../../components/VideoList';
import SearchContext from '../../state/SearchContext';

function HomePage() {
  const [search, setSearch] = useState('');
  const [video, setVideo] = useState({ id: null });

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      <Header />
      {video.id ? (
        <VideoDetailsView id={video.id} />
      ) : (
        <VideoList selectVideo={(videoId) => setVideo({ id: videoId })} />
      )}
    </SearchContext.Provider>
  );
}

export default HomePage;
