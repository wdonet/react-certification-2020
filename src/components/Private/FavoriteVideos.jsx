import React from 'react';
import VideoCardContainer from '../GenericComponents/VideoCardContainer';
import styled from 'styled-components';
import { useHistory } from 'react-router'

const StyledWarn = styled.div`
  padding: 4px;
  border: 1px solid;
  border-color: orange;
  border-radius: 4px;
  height: min-content;
  background-color: gray;
  color: white;
`;

const FAVORITES_KEY = "favorites";
const getFavorites = () => {
    const parsedFavorites = JSON.parse(window.localStorage.getItem(FAVORITES_KEY));
    return parsedFavorites 
        ? Object.keys(parsedFavorites).map( (key) => parsedFavorites[key] )
        : [];
};

const NoVideosNotice = <StyledWarn data-testid="no-favorites-available">You haven't any favorites :/</StyledWarn>; 

const FavoriteVideos = () => {
  const videosList = getFavorites();
  const { push } = useHistory();

  return (<VideoCardContainer 
            videosList={videosList}
            noVideosNotice={NoVideosNotice} 
            onClick={
              (video) => push({
                pathname: `/favoritesPlayer`,
                search: `?id=${video.id.videoId}`,
                state: video,
              })
            }/>);
};

export default FavoriteVideos;
