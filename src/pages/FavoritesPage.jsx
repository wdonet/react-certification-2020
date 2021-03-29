import React from 'react';
import { StoreContext } from '../contexts/Store'
import Content from '../components/Content';
import VideoCard from '../components/VideoCard';
import styled from 'styled-components';
import {
  Link
} from "react-router-dom";


const StyledRemoveFavorite =styled.button`
    height: 10px;
    height: 50px;
    margin: 5px;
    padding:5px;
`



const StyledLink = styled(Link)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
  }
  margin-top: 16px;
`


const FavoritesPage = () => {

  const data = {items:[]}
  const {
    "favorites": [favorites, setFavorites],
  } = React.useContext(StoreContext)

  for (const [key, value] of Object.entries(favorites)) {
      console.log(key)
      data.items.push(value);
  }


  const removeFav = (videoid) => {
    const clone = JSON.parse(JSON.stringify(favorites));
    delete clone[videoid];
    setFavorites(clone);
  }
  return (
    <Content title="Favorites"  is>{(data.items && data.items.length>0) ?
      data.items.map((video) => {
        return (
          <>
            <StyledLink key={video.id.videoId} to={`/video/${video.id.videoId}?fav=true`}>
              <VideoCard
                key={video.id.videoId} 
                videoId={video.id.videoId}
                title={video.snippet.title}
                description={video.snippet.description}
                image={video.snippet.thumbnails.high.url}
              />
            </StyledLink>
            <StyledRemoveFavorite onClick={ ()=>removeFav(video.id.videoId) }>Remove</StyledRemoveFavorite>
          </>
        )
      })
    :"No favorites, go Home and start adding some!"}
    </Content>
  )
}

export default FavoritesPage;
