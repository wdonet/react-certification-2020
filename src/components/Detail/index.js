import React, { useState, useEffect }from 'react';
import styled from 'styled-components';
import VideoEmbed from '../VideoEmbed';
import RecommendedVideos from '../RecommendedVideos';
import RecommendedVideoCard from '../RecommendedVideoCard';
import { items } from '../../assets/mockdata/mockdata.json';

const BackButtonStyle = styled.button`
    height: 50px;
    margin: 5px;
    padding:5px;
`;

const StyledVideoView = styled.div`
    display: flex;
    flex-direction:row;
`

const Detail = ({ gotodetail, detailVideoId, detailTitle, detailDescription }) => {
    const [related, setRelated] = useState([]);

    useEffect(() => {
        console.log("detail loaded")
        var relatedUrl = `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YOUTUBE_API_KEY2}&part=snippet&maxResults=10&order=date&type=video&relatedToVideoId=${detailVideoId}`;
        console.log(`relatedUrl: ${relatedUrl}`);
        fetch(relatedUrl).then((res) => res.json())
            .then((res) => {
                if (res.items) {
                    setRelated(res.items);
                } else {
                    setRelated(items);
                }
            })
        
    }, []);

    const recommendedVideoList = related.map((rV) => {
        return (
            <RecommendedVideoCard videoId={rV.id.videoId} title={rV.snippet.title} image={rV.snippet.thumbnails.high.url} gotodetail={ gotodetail }/>
        )
    })

    return (
        <div>
            <div>
                <Back gotodetail={() => { gotodetail(false, "")} }/>
            </div>
            <StyledVideoView>
                <VideoEmbed detailVideoId={detailVideoId} detailTitle={detailTitle} detailDescription={ detailDescription }/>
                <div>
                    <RecommendedVideos>
                        { recommendedVideoList }
                    </RecommendedVideos>
                </div>
            </StyledVideoView>
        </div>
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