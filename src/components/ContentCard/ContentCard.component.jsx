import React from 'react';
import { CardContent, CardActionArea } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import htmlParser from 'html-react-parser';

import { StyledCard, StyledCardMedia, Title, Description } from './ContentCard.styles';

const ContentCard = ({ item }) => {
  const history = useHistory();

  const handleOnClick = () => history.push(`/v/${item.id.videoId}`);

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
