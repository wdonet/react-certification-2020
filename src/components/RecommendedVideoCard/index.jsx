import React from 'react'
import styled from 'styled-components'
import { decode } from 'html-entities';


const Container = styled.div`
    background: #fff;
    border-radius: 14px;
    margin: 18px;
    margin-top: 20px;
    width: 200px;
    height: 200px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

const Cover = styled.div`
  width: 100%;
  height: 100px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
`;

const Title = styled.div`
  color: #3c4560;
  font-size: 20px;
  font-weight: 300;
`;

const Content = styled.div`
  margin: 10px;
  padding-top: 10px;
  flex-direction: column;
  align-items: center;
  height: 60px;
  background-image: url(${(props) => props.img});
`;


const RecommendedVideoCard = ({ videoId, image, title,description,  gotodetail }) => {
    return (
        <Container onClick={() => {  gotodetail(true, videoId, title, description) }}>
            <Cover img={image} />
            <Content>
                <Title>{decode(title)}</Title>
             </Content>
        </Container>
    )
}

export default RecommendedVideoCard;