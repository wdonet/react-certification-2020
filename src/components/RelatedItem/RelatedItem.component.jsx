import React from 'react';
import { Divider } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import {
  StyledRelatedItemDiv,
  StyledImg,
  StyledDescriptionDiv,
  SnippetTitle,
} from './RelatedItem.styles';

const RelatedItem = ({ item, hideDivider }) => {
  const history = useHistory();

  const {
    id: { videoId },
    snippet: {
      title,
      thumbnails: {
        default: { url, width, height },
      },
    },
  } = item;

  const handleClick = () => history.push(`/${videoId}`);

  return (
    <>
      <StyledRelatedItemDiv onClick={handleClick}>
        <StyledImg src={url} width={width} height={height} />
        <StyledDescriptionDiv>
          <SnippetTitle dangerouslySetInnerHTML={{ __html: title }} />
        </StyledDescriptionDiv>
      </StyledRelatedItemDiv>
      {!hideDivider && <Divider />}
    </>
  );
};

export default RelatedItem;
