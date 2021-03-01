import React, { useState } from 'react';
import StyledVideoList from '../../components/VideoList';
import Header from '../../components/Header';

function HomePage() {
  const [search, setSearch] = useState('');

  return (
    <>
      <Header searchVideos={setSearch} />
      <StyledVideoList search={search} />
    </>
  );
}

export default HomePage;
