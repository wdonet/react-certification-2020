import React, { useContext } from 'react';
import styled from 'styled-components';
import VideoCard from './VideoCard';
import { useHistory } from "react-router"
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
  const { videosList } = useContext(AppContext);
  const { push } = useHistory();

  return (
    <StyledDiv>
      {videosList && videosList.length > 0 ? (
        videosList.map((video) => {
          const key = JSON.stringify(video.id);
          return (
            <div key={key} data-testid={`video-card-${key}`}>
              <VideoCard video={video} onClick={() => push({
                pathname: `/player`,
                search: `?id=${video.id.videoId}`,
                state: video,
              }) } />
            </div>
          );
        })
      ) : (
        <StyledWarn data-testid="no-videos-available">No hay videos :/</StyledWarn>
      )}
    </StyledDiv>
  );
};

export default HomeVideos;
