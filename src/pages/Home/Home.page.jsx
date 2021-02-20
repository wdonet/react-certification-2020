import React from 'react';
import VideoGrid from '../../components/VideoGrid';
import mockedData from '../../mockData/mockData.json';
import Styled from './styled';

const { items } = mockedData;

function HomePage() {
  return (
    <section>
      <div>
        <Styled.Welcome>Welcome</Styled.Welcome>
        <VideoGrid videos={items} />
      </div>
    </section>
  );
}

export default HomePage;
