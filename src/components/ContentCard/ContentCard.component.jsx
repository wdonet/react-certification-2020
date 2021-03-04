import React from 'react';
import { CardContent, CardActionArea } from '@material-ui/core';

import { StyledCard, StyledCardMedia, Title, Description } from './ContentCard.styles';

const ContentCard = ({ item }) => (
  <StyledCard>
    <CardActionArea>
      <StyledCardMedia
        src={item.snippet.thumbnails.high.url}
        title={item.snippet.title}
      />
      <CardContent>
        <Title gutterBottom dangerouslySetInnerHTML={{ __html: item.snippet.title }} />
        <Description color="textSecondary">{item.snippet.description}</Description>
      </CardContent>
    </CardActionArea>
  </StyledCard>
);

export default ContentCard;
