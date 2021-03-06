import React from 'react';
import VideosCatalog from '../../components/VideosCatalog';

function HomePage({search}) {

  return (
    <VideosCatalog search={search}/>
  );
}

export default HomePage;
