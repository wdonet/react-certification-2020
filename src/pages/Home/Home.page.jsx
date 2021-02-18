import React, { useRef } from 'react';
import VideoList from '../../components/VideoList';
import MokedResponse from '../../utils/mocks/youTubeResponse.json';

const { items } = MokedResponse;

function HomePage() {
  const sectionRef = useRef(null);

  return (
    <section className="homepage" ref={sectionRef}>
      <h1>Hello stranger!</h1>
      <VideoList items={items} />
    </section>
  );
}

export default HomePage;
