import React from 'react';
import { CardContent, CardActionArea } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

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
          <Title dangerouslySetInnerHTML={{ __html: item.snippet.title }} />
          <Description>{item.snippet.description}</Description>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
};

export default ContentCard;
