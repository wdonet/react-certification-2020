import React from 'react';
import styled from 'styled-components';
import { data } from './mockData';
import VideoCard from './VideoCard';

const StyledDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const HomeVideos = () => {
  return (
    <StyledDiv>
      {data.items.map((video) => {
        const key = JSON.stringify(video.id);
        return (
          <div key={key} data-testid={`video-card-${key}`}>
            <VideoCard video={video}/>
          </div>
        );
      })}
    </StyledDiv>
  );
};

export default HomeVideos;
