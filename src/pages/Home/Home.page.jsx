import React, { useRef } from 'react';
import VideoList from '../../components/VideoList';
import MokedResponse from '../../utils/mocks/youTubeResponse.json';
import { filterItemsByKind } from '../../utils/contenFilter';

const { items } = MokedResponse;
const videoItems = filterItemsByKind(items, 'video');
function HomePage() {
  const sectionRef = useRef(null);

  return (
    <section className="container" ref={sectionRef} data-testid="Home">
      <h1>Hello stranger!</h1>
      <VideoList items={videoItems} />
    </section>
  );
}

export default HomePage;
