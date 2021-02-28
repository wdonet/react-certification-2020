import React from 'react';
import styled from 'styled-components';
import VideoList from '../../components/VideoList';

const HomeBody = styled.div`
  background-color: #202053;
  border: 1px solid #4f4f7c;
  text-align: center;
`;

function HomePage() {
  return (
    <HomeBody>
      <div>
        <h1>Welcome!</h1>
        <VideoList />
      </div>
    </HomeBody>
  );
}

export default HomePage;
