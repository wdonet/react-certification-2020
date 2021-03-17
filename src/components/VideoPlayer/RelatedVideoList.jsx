import React, { useContext } from 'react';
import styled from 'styled-components';
import AppContext from '../../providers/AppContext';
import SmallVideoCard from './SmallVideoCard';

const StyledVideoList = styled.div`
  overflow: scroll;
  height: calc(100vh - 64px);
  width: 40%;
`;

const RelatedVideoList = () => {
  const { videosList, playVideoByID } = useContext(AppContext);
  return (
    <StyledVideoList id="related-videos-list">
      {videosList.map((video) => {
        const key = JSON.stringify(video.id);
        return (
          <div data-testid={`small-caption-${key}`} key={key}>
            <SmallVideoCard
              video={video}
              onClick={() => playVideoByID(video.id.videoId)}
            />
          </div>
        );
      })}
    </StyledVideoList>
  );
};

export default RelatedVideoList;
