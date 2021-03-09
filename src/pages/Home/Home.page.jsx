import React from 'react';
import { useParams } from 'react-router';
import VideoGrid from '../../components/VideoGrid';

function HomePage() {
  const { searchQuery } = useParams();

  return <VideoGrid searchQuery={searchQuery || 'wizeline'} />;
}

export default HomePage;
