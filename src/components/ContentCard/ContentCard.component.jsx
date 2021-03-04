import React from 'react';
import { CardContent, CardActionArea } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { StyledCard, StyledCardMedia, Title, Description } from './ContentCard.styles';

const ContentCard = ({ item }) => (
  <Link to={`/${item.id.videoId}`}>
    <StyledCard>
      <CardActionArea>
        <StyledCardMedia
          src={item.snippet.thumbnails.high.url}
          title={item.snippet.title}
        />
        <CardContent>
          <Title dangerouslySetInnerHTML={{ __html: item.snippet.title }} />
          <Description>{item.snippet.description}</Description>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  </Link>
);

export default ContentCard;
