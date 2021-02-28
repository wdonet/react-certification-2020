import React from 'react';
import styled from 'styled-components';
import VideoCard from '../VideoCard';
import mockData from '../../youtube-videos-mock.json';

const VideoListContainer = styled.div`
  background-color: #2c2c1f;
  text-align: center;
  display: inline-block;
`;
const { items } = mockData;

export default function VideoList() {
  return (
    <VideoListContainer>
      {items.slice(1).map(({ snippet }) => (
        <VideoCard key={Math.random()} info={snippet} />
      ))}
    </VideoListContainer>
  );
}
