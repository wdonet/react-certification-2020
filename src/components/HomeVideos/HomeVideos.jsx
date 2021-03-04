import React from 'react';
import styled from 'styled-components';
import Card from '../Base/Card/Card';
import { data } from './mockData';

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
        const { title, description, thumbnails } = video.snippet;
        return (
          <div key={key} data-testid={`video-card-${key}`}>
            <Card image={thumbnails.high.url} title={title} description={description} />
          </div>
        );
      })}
    </StyledDiv>
  );
};

export default HomeVideos;
