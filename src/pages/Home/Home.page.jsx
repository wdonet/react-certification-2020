import React from 'react';
import VideoGrid from '../../components/VideoGrid';
import { Welcome } from './styled';

function HomePage({ videos }) {
  return (
    <section>
      <Welcome>Welcome</Welcome>
      <VideoGrid videos={videos} />
    </section>
  );
}

export default HomePage;
