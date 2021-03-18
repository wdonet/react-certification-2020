import React from 'react';
import { useHistory } from 'react-router-dom';
import htmlParser from 'html-react-parser';

import {
  StyledFlexDiv,
  StyledVideoDiv,
  StyledRelatedDiv,
  StyledIFrame,
  StyledSnippetDiv,
  SnippetTitle,
  SnippetDescription,
  StyledBackButton,
} from './ContentDetails.styles';
import RelatedItem from '../RelatedItem';

import { getYoutubeEmbedLink } from '../../utils/fns';

const ContentDetails = ({ item, relatedItems }) => {
  const history = useHistory();

  const handleGoBack = () => history.push('/');

  return (
    <StyledFlexDiv>
      <StyledVideoDiv>
        <StyledIFrame
          title={item.snippet.title}
          src={getYoutubeEmbedLink(item.id.videoId)}
        />
        <StyledSnippetDiv>
          <SnippetTitle>{htmlParser(item.snippet.title)}</SnippetTitle>
          <SnippetDescription>{item.snippet.description}</SnippetDescription>
          <StyledBackButton aria-label="back button" onClick={handleGoBack}>
            Go back
          </StyledBackButton>
        </StyledSnippetDiv>
      </StyledVideoDiv>
      <StyledRelatedDiv>
        {relatedItems.map((relItem, i, arr) => (
          <RelatedItem
            key={relItem.id.videoId}
            item={relItem}
            hideDivider={arr.length === i + 1}
          />
        ))}
      </StyledRelatedDiv>
    </StyledFlexDiv>
  );
};

export default ContentDetails;
