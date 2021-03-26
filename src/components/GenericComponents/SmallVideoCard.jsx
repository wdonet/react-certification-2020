import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import AppContext from '../../providers/AppContext';
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

const FAVORITES_KEY = "favorites";
const getParsedFavorites = () => JSON.parse(window.localStorage.getItem(FAVORITES_KEY));

const SmallVideoCard = ({ video, onClick, onFavorite }) => {

  const getLabel = (videoId) => 
    getParsedFavorites() && getParsedFavorites()[videoId] 
    ? "Remove favorite"
    : "Add favorite";

  const { theme } = useContext(AppContext);
  const { thumbnails, title, description } = video.snippet;
  const [buttonLabel, setButtonLabel] = useState(getLabel(video.id.videoId));

  const updateLabel = () => { setButtonLabel(getLabel(video.id.videoId)); }

  return (
    <StyledSmallVideoCard 
      theme={theme} 
      onClick={ ({target}) => !target.matches("button") && onClick && onClick() }
    >
      <img src={thumbnails.default.url} alt={title} />
      <StyledCaption>
        <StyledSmallVideoCardDescription>{description}</StyledSmallVideoCardDescription>
        <Button 
          data-testid="caption-add-favorite" 
          onClick={() => { onFavorite && onFavorite(video, updateLabel) }}
        >
          {buttonLabel}
        </Button>
      </StyledCaption>
    </StyledSmallVideoCard>
  );
};

export default SmallVideoCard;
