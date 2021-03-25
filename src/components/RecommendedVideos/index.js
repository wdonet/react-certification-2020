import React from 'react';

import styled from 'styled-components';

const OverflowRecommendedVideoContainer = styled.div`
    overflow-y:scroll;
    background-color: ${(props) => props.theme.background};
    height: 1000px;
`
const RecommendedVideos = ({ children }) => {
    return (
        <OverflowRecommendedVideoContainer>
            {children}
        </OverflowRecommendedVideoContainer>
    )
}

export default RecommendedVideos;