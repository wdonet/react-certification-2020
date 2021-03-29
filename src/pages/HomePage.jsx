import React from 'react';
import styled from 'styled-components';
import {
  Link
} from "react-router-dom";
import { StoreContext } from '../contexts/Store'
import { useFetch } from '../hooks/useFetch';
import Content from '../components/Content';
import VideoCard from '../components/VideoCard';

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
  }
  margin-top: 16px;
`
const HomePage = ({ source}) => {
    
    const {
      "squery": [squery]
    } = React.useContext(StoreContext)

    const url = squery && `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YOUTUBE_API_KEY2}&q=${squery}&part=snippet&maxResults=50&order=date&type=video`;
    const {  data } = useFetch(url, source);


  
  
  return (
    <Content title="Welcome to the Challenge!">{data.items ?
      data.items.map((video) => {
        return (
          <StyledLink key={video.etag} to={`/video/${video.id.videoId}`}>
            <VideoCard
              videoId={video.id.videoId}
              title={video.snippet.title}
              description={video.snippet.description}
              image={video.snippet.thumbnails.high.url}
              />
          </StyledLink>
        )
      })
    :null}
    </Content>
  )
}

export default HomePage;