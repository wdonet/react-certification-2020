import React from 'react';
import styled from 'styled-components';
import SmallVideoCard from './SmallVideoCard';

const StyledVideoList = styled.div`
  overflow: scroll;
  height: calc(100vh - 64px);
  width: 40%;
`;

const RelatedVideoList = ({ videos, playVideoByID }) => {
  return (
    <StyledVideoList id="related-videos-list">
      {videos.map((video) => {
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
