import React, { useState, useEffect }from 'react';
import styled from 'styled-components';
import VideoEmbed from '../VideoEmbed';
import RecommendedVideos from '../RecommendedVideos';
import RecommendedVideoCard from '../RecommendedVideoCard';
import { StoreContext } from '../../contexts/Store';
import { useFetch } from '../../hooks/useFetch';

import {
  Switch,
    Link,
    useHistory
} from "react-router-dom";

const BackButtonStyle = styled.button`
    height: 50px;
    margin: 5px;
    padding:5px;
`;

const StyledVideoView = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: center;
    margin: 10px;
`
const StyledContent = styled.div`
    background-color: ${(props) => props.theme.background};
`
const StyledRecommendedVideoContainer = styled.div`
    background-color: ${(props) => props.theme.background};
`

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
  }
  margin-top: 16px;
`


const Detail = ({ detailVideoId , isFavorite}) => {
    
    const url_video = detailVideoId && `https://www.googleapis.com/youtube/v3/videos?id=${detailVideoId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY2}&part=snippet`;
    const videoHook = useFetch(url_video);
    const {
      ["loggedIn"]: [loggedIn, setLoggedIn]
    } = React.useContext(StoreContext)

    var videodata = videoHook.data;
    var videotitle = "";
    var videodescription = "";


    if (videodata && videodata.items && videodata.items.length > 0) {
        videotitle = videodata.items[0].snippet.title;
        videodescription = videodata.items[0].snippet.description;
    }

    const url_recommended = detailVideoId && `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YOUTUBE_API_KEY2}&part=snippet&maxResults=10&order=date&type=video&relatedToVideoId=${detailVideoId}`;
    console.log(`isFavorite: ${isFavorite}`);
    var fetchType = isFavorite ? "favorites" : "";
    const recomHook = useFetch(url_recommended, fetchType);
    var recomdata = recomHook.data;
    
    const recommendedVideoList = (recomdata && recomdata.items) ? recomdata.items.map((rV) => {
        if (rV.snippet) {
            return (
                <StyledLink key={rV.id.videoId} to={`/video/${rV.id.videoId}`}>
                    <RecommendedVideoCard key={rV.id.videoId} videoId={rV.id.videoId} title={rV.snippet.title} image={rV.snippet.thumbnails.high.url} description={rV.snippet.description} isFavorite={ isFavorite} />
                </StyledLink>
            )
        } else {
            return null;
        }
    }) : null
    
    var detailTitle = "";
    var detailDescription = "";
    return (
            videodata?<StyledContent>
                <div>
                    <Back />
                </div>
                <StyledVideoView>
                <VideoEmbed detailVideoId={detailVideoId} detailTitle={videotitle} detailDescription={videodescription} />
                { loggedIn?"Add to favorites":null}
                    <StyledRecommendedVideoContainer>
                        <RecommendedVideos>
                            { recommendedVideoList }
                        </RecommendedVideos>
                    </StyledRecommendedVideoContainer>
                </StyledVideoView>
            </StyledContent >:null
        
    )
}

const Back = () => {
    let history = useHistory();
    return (
        <BackButtonStyle onClick={ () => history.goBack()}>Go back</BackButtonStyle>
    )
}

export default Detail;