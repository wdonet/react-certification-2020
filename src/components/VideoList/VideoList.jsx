import React from 'react';
import styled from 'styled-components';
import mockData from '../../youtube-videos-mock.json';

const { items } = mockData;

const VideoCardContainer = styled.div`
  border: 1px solid #cccccc;
  border-radius: 5px;
  padding: 20px;
  background-color: #e7e7fc;
`;

const VideoCard = ({ info }) => (
  <VideoCardContainer>
    <img alt="" src={info.thumbnails.medium.url} />
    <div>
      <h2>{info.title}</h2>
    </div>
    <div>
      <h3>{info.description}</h3>
    </div>
  </VideoCardContainer>
);

export default function VideoList() {
  return (
    <div>
      {items.slice(1).map(({ snippet }) => (
        <VideoCard key={Math.random()} info={snippet} />
      ))}
    </div>
  );
}
