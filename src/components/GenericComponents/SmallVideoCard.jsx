import React, { useContext } from 'react';
import styled from 'styled-components';
import AppContext from '../../providers/AppContext';
import RelatedVideosContext from '../../providers/RelatedVideosContext';
import { Button } from '../../ui'

const StyledSmallVideoCard = styled.div`
  display: flex;
  padding: 4px;
  margin: 4px;
  border-radius: 4px;
  border-bottom: 1px solid ${({theme}) => theme.color.secondary };
  color: ${({theme}) => theme.color.fontSecondary };
  background: ${({theme}) => theme.color.surface };
  cursor: pointer;
`;

const StyledSmallVideoCardDescription = styled.div`
  height: 100%;
  -webkit-box-flex: 1;
  flex-grow: 1;
  box-sizing: border-box;
`;

const StyledCaption = styled.div`
  display: block;
  height: fit-content;
  padding: 4px;
`;

const SmallVideoCard = ({ video, onClick, hideFavoriteButtons }) => {

  const { favoritesList, addRemoveFavorite } = useContext(RelatedVideosContext);

  const { theme } = useContext(AppContext);
  const { thumbnails, title, description } = video.snippet;

  return (
    <StyledSmallVideoCard 
      theme={theme} 
      onClick={ ({target}) => !target.matches("button") && onClick && onClick() }
    >
      <img src={thumbnails.default.url} alt={title} />
      <StyledCaption>
        <StyledSmallVideoCardDescription>{description}</StyledSmallVideoCardDescription>
        {
          hideFavoriteButtons?
          <></>:
          <Button 
            data-testid="caption-add-favorite" 
            onClick={ () =>  addRemoveFavorite(video) }
          >
          { 
            favoritesList && favoritesList.includes(video.id.videoId) 
            ? 'Remove favorite'
            : 'Add favorite'
          }
        </Button>}
      </StyledCaption>
    </StyledSmallVideoCard>
  );
};

export default SmallVideoCard;
