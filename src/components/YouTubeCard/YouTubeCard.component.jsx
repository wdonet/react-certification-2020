import React from 'react';

import styled from 'styled-components';

const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    background-color: white;
    float: left;
    width: calc(25% - 20px);
    padding: 10px;
    margin: 10px;

    @media screen and (max-width: 600px) {
        width: 100%;
    }
`;

const Container = styled.div`
    padding: 2px 16px;
`;

const MyImage = styled.img`
    width: 100%;
`;

const Description = styled.p`
    text-overflow: ellipsis;
    overflow: hidden; 
    width: 300px; 
    height: 1.2em; 
    white-space: nowrap;
`;

const Title = styled.h4`
    text-overflow: ellipsis;
    overflow: hidden; 
    width: 300px; 
    height: 1.2em; 
    white-space: nowrap;
`;


function YouTubeCard(props){
    return(
            <Card>
            <MyImage src={props.image} alt="Avatar"></MyImage>
                <Container>
                    <Title><b>{props.title}</b></Title>
                    <Description>{props.description}</Description>
                </Container>
            </Card>
    )
}

export default YouTubeCard;