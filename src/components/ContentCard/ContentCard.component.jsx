import React from 'react';
import { CardContent, CardActionArea } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';
import htmlParser from 'html-react-parser';

import { StyledCard, StyledCardMedia, Title, Description } from './ContentCard.styles';

const ContentCard = ({ item }) => {
  const history = useHistory();
  const location = useLocation();

  const isFavoritePage = location.pathname.includes('favs');
  const path = isFavoritePage ? '/favs/' : '/v/';

  const handleOnClick = () => history.push(`${path}${item.id.videoId}`);

  return (
    <StyledCard onClick={handleOnClick}>
      <CardActionArea>
        <StyledCardMedia
          src={item.snippet.thumbnails.high.url}
          title={item.snippet.title}
        />
        <CardContent>
          <Title>{htmlParser(item.snippet.title)}</Title>
          <Description>{item.snippet.description}</Description>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
};

export default ContentCard;
