import React from 'react';
import styled from 'styled-components';

const StyledVideoContainer = styled.div`

overflow: hidden;
position: relative;
width:100%;


&:after {
    padding-top: 56.25%;
    display: block;
    content: '';
}

iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 700px;
}
`
const StyledVideo = styled.div`
display:flex;
flex-direction: column;
`
const VideoEmbed = ({detailVideoId, detailTitle, detailDescription}) => {
    return (
        <StyledVideo>
            <h1>{detailTitle}</h1>
            <h4>{  detailDescription }</h4><br/>
            <StyledVideoContainer>
                <iframe title="video" src={`https://www.youtube.com/embed/${detailVideoId}?autoplay=0`}></iframe>
            </StyledVideoContainer>   
        </StyledVideo>
    )
}

export default VideoEmbed;