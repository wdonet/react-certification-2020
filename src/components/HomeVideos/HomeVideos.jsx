import React, { useContext } from 'react';
import styled from 'styled-components';
import VideoCard from './VideoCard';
import SearchContext from '../../providers/SearchContext';

const StyledDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const HomeVideos = () => {
  const { videos } = useContext(SearchContext);

  return (
    <StyledDiv>
      {videos ? (
        videos.map((video) => {
          const key = JSON.stringify(video.id);
          return (
            <div key={key} data-testid={`video-card-${key}`}>
              <VideoCard video={video} />
            </div>
          );
        })
      ) : (
        <div>No hay videos :/</div>
      )}
    </StyledDiv>
  );
};

export default HomeVideos;
