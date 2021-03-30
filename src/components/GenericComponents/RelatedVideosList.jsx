import React, { useContext } from 'react';
import styled from 'styled-components';
import PlayerContext from '../../providers/PlayerContext';
import SmallVideoCard from './SmallVideoCard';

const StyledVideoList = styled.div`
  overflow: scroll;
  height: calc(100vh - 64px);
  width: 40%;
`;

const RelatedVideosList = ({ videosList, onCaptionClick }) => {
  const { hideFavoriteButtons } = useContext(PlayerContext);
  return (
    <StyledVideoList id="related-videos-list">
      {videosList.map((video) => {
        const key = JSON.stringify(video.id);
        return (
          <div data-testid={`small-caption-${key}`} key={key}>
            <SmallVideoCard
              video={video}
              hideFavoriteButtons={hideFavoriteButtons}
              onClick={() => onCaptionClick && onCaptionClick(video)}
            />
          </div>
        );
      })}
    </StyledVideoList>
  );
};

export default RelatedVideosList;
