import React from 'react';
import { CardContent, CardActionArea, Typography } from '@material-ui/core';

import { StyledCard, StyledCardMedia } from './ContentCard.styles';

const ContentCard = ({ item }) => (
  <StyledCard>
    <CardActionArea>
      <StyledCardMedia
        src={item.snippet.thumbnails.high.url}
        title={item.snippet.title}
      />
      <CardContent>
        <Typography
          gutterBottom
          component="h2"
          variant="subtitle1"
          dangerouslySetInnerHTML={{ __html: item.snippet.title }}
        />
        <Typography color="textSecondary" component="p" variant="body2">
          {item.snippet.description}
        </Typography>
      </CardContent>
    </CardActionArea>
  </StyledCard>
);

export default ContentCard;
