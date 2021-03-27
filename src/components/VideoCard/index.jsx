import React from 'react';
import styled from 'styled-components';
import { decode } from 'html-entities';

const Container = styled.div`
  background: #fff;
  height: 345px;
  width: 345px;
  border-radius: 14px;
  margin: 18px;
  margin-top: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

const Cover = styled.div`
  width: 100%;
  height: 160px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
`;

const Content = styled.div`
  margin: 10px;
  padding-top: 10px;
  flex-direction: column;
  align-items: center;
  height: 60px;
  background-image: url(${(props) => props.img});
`;

const Title = styled.div`
  color: #3c4560;
  font-size: 20px;
  font-weight: 300;
`;

const Description = styled.p`
  color: #b8b3c3;
  font-size: 15px;
  font-weight: 200;
  margin-top: 4px;
`;

const VideoCard = ({ videoId, image, title, description, gotodetail, isFavorite }) => {
  
  return (
    <Container>
      <Cover img={image} />
      <Content>
        <Title>{decode(title)}</Title>
        <Description>{decode(description)}</Description>
        {isFavorite ?<button>Remove from favs</button>
      : null}
      </Content>
    </Container>
  );
};

export default VideoCard;
