import React from 'react';

import {
  StyledFlexDiv,
  StyledVideoDiv,
  StyledRelatedDiv,
  StyledIFrame,
  StyledSnippetDiv,
  SnippetTitle,
  SnippetDescription,
} from './ContentDetails.styles';
import RelatedItem from '../RelatedItem';

import { getYoutubeEmbedLink } from '../../utils/fns';

const ContentDetails = ({ item, relatedItems }) => (
  <StyledFlexDiv>
    <StyledVideoDiv>
      <StyledIFrame
        title={item.snippet.title}
        src={getYoutubeEmbedLink(item.id.videoId)}
      />
      <StyledSnippetDiv>
        <SnippetTitle dangerouslySetInnerHTML={{ __html: item.snippet.title }} />
        <SnippetDescription>{item.snippet.description}</SnippetDescription>
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

export default ContentDetails;
