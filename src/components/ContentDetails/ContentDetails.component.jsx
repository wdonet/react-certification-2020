import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import htmlParser from 'html-react-parser';
import {
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
} from '@material-ui/icons';

import {
  StyledFlexDiv,
  StyledVideoDiv,
  StyledRelatedDiv,
  StyledIFrame,
  StyledSnippetDiv,
  StyledSnippetTitleDiv,
  SnippetTitle,
  SnippetDescription,
  StyledBackButton,
  StyledButton,
} from './ContentDetails.styles';
import RelatedItem from '../RelatedItem';

import { useAuth } from '../../providers/Auth';
import { useCustom } from '../../providers/Custom';

import { getYoutubeEmbedLink } from '../../utils/fns';

const ContentDetails = ({ item, relatedItems }) => {
  const history = useHistory();
  const location = useLocation();
  const { authenticated } = useAuth();
  const { findFavoriteVideo, addFavoriteVideo, removeFavoriteVideo } = useCustom();

  const isVideoInList = Boolean(findFavoriteVideo(item.id.videoId));
  const isFavoritePage = location.pathname.includes('favs');

  const path = isFavoritePage ? '/favs/' : '/v/';
  const handleGoBack = () => history.push(path);
  const handleFavButton = isVideoInList
    ? () => removeFavoriteVideo(item)
    : () => addFavoriteVideo(item);

  return (
    <StyledFlexDiv>
      <StyledVideoDiv>
        <StyledIFrame
          title={item.snippet.title}
          src={getYoutubeEmbedLink(item.id.videoId)}
        />
        <StyledSnippetDiv>
          <StyledSnippetTitleDiv>
            <SnippetTitle>{htmlParser(item.snippet.title)}</SnippetTitle>
            {authenticated && (
              <StyledButton
                aria-label="fav button"
                onClick={handleFavButton}
                startIcon={isVideoInList ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              >
                {isVideoInList ? 'Remove from favorites' : 'Add to favorites'}
              </StyledButton>
            )}
          </StyledSnippetTitleDiv>
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
