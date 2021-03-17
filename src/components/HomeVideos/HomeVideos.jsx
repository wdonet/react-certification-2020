import React, { useContext } from 'react';
import styled from 'styled-components';
import VideoCard from './VideoCard';
import AppContext from '../../providers/AppContext';

const StyledWarn = styled.div`
  padding: 4px;
  border: 1px solid;
  border-color: orange;
  border-radius: 4px;
  height: min-content;
  background-color: gray;
  color: white;
`;

const StyledDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const HomeVideos = () => {
  const { videos, playVideo } = useContext(AppContext);

  return (
    <StyledDiv>
      {videos && videos.length > 0 ? (
        videos.map((video) => {
          const key = JSON.stringify(video.id);
          return (
            <div key={key} data-testid={`video-card-${key}`}>
              <VideoCard video={video} onClick={() => playVideo(video.id.videoId)} />
            </div>
          );
        })
      ) : (
        <StyledWarn>No hay videos :/</StyledWarn>
      )}
    </StyledDiv>
  );
};

export default HomeVideos;
