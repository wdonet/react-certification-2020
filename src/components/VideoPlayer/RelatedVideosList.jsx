import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import AppContext from '../../providers/AppContext';
import SmallVideoCard from './SmallVideoCard';

const StyledVideoList = styled.div`
  overflow: scroll;
  height: calc(100vh - 64px);
  width: 40%;
`;

const RelatedVideosList = () => {
  const { push } = useHistory();
  const { videosList } = useContext(AppContext);
  return (
    <StyledVideoList id="related-videos-list">
      {videosList.map((video) => {
        const key = JSON.stringify(video.id);
        return (
          <div data-testid={`small-caption-${key}`} key={key}>
            <SmallVideoCard
              video={video}
              onClick={() => push({
                pathname: `/player`,
                search: `?id=${video.id.videoId}`,
                state: video
              }) }
            />
          </div>
        );
      })}
    </StyledVideoList>
  );
};

export default RelatedVideosList;
