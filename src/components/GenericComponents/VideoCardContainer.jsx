import React from 'react';
import styled from 'styled-components';
import VideoCard from './VideoCard';

const StyledVideoCardContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const VideoCardContainer = ({videosList, noVideosNotice, onClick}) => {
    return (<StyledVideoCardContainer>
      {
        videosList && videosList.length > 0 
        ? videosList.map((video) => {
          const key = JSON.stringify(video.id);
          return (
            <div key={key} data-testid={`video-card-${key}`}>
              <VideoCard video={video} onClick={() => onClick && onClick(video)} />
            </div>
          );
        })
        : noVideosNotice || "No videos available"
    }
    </StyledVideoCardContainer>);
} 

export default VideoCardContainer;