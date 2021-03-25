import React, { useState, useEffect }from 'react';
import styled from 'styled-components';
import VideoEmbed from '../VideoEmbed';
import RecommendedVideos from '../RecommendedVideos';
import RecommendedVideoCard from '../RecommendedVideoCard';
import { items } from '../../assets/mockdata/mockdata.json';
import { StoreContext } from '../../contexts/Store';
import { useFetch } from '../../hooks/useFetch';

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
    /* overflow-y:scroll; */
    background-color: ${(props) => props.theme.background};
`


const Detail = ({ gotodetail, detailVideoId, detailTitle, detailDescription }) => {
    const [related, setRelated] = useState([]);
    const {
        ["sdetailId"]: [sdetailId, setSdetailId],

    } = React.useContext(StoreContext)
    // console.log(`sdetailId: ${sdetailId}`);

    const url = sdetailId && `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YOUTUBE_API_KEY2}&part=snippet&maxResults=10&order=date&type=video&relatedToVideoId=${sdetailId}`;

    const { status, data, error } = useFetch(url);
    const recommendedVideoList = data.items ? data.items.map((rV) => {
        // console.log(rV);
        if (rV.snippet) {
            return (
                <RecommendedVideoCard key={rV.id.videoId} videoId={rV.id.videoId} title={rV.snippet.title} image={rV.snippet.thumbnails.high.url} description={ rV.snippet.description } gotodetail={gotodetail} />
            )
        } else {
            return null;
        }
    }):null

    return (
        <StyledContent>
            <div>
                <Back gotodetail={() => { gotodetail(false, "")} }/>
            </div>
            <StyledVideoView>
                <VideoEmbed detailVideoId={detailVideoId} detailTitle={detailTitle} detailDescription={ detailDescription }/>
                <StyledRecommendedVideoContainer>
                    <RecommendedVideos>
                        { recommendedVideoList }
                    </RecommendedVideos>
                </StyledRecommendedVideoContainer>
            </StyledVideoView>
        </StyledContent>
    )
}

const Back = ({ gotodetail }) => {
    const goBack = () => {
        gotodetail(false);
    };

    return (
        <BackButtonStyle onClick={ goBack }>Go back</BackButtonStyle>
    )
}

export default Detail;