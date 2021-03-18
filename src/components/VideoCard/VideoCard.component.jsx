import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 345px;
  height: 345px;
  margin: 10px;
  display: inline-block;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 1px 3px 0px rgb(0 0 0 / 12%);
`;

const Button = styled.button`
  width: 100%inherit;
  margin: 0px;
  padding: 0px;
  border: 0px;
  background-color: transparent;

  &:focus {
    outline: 0px;
  }
`;

const Image = styled.div`
  display: block;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 140px;
`;

const TextArea = styled.div`
  display: block;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: 0.0075em;
`;

const Desc = styled.p`
  font-size: 0.875rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  line-height: 1.43;
  letter-spacing: 0.01071em;
`;

const VideoCard = ({ image, title, desc }) => {
  return (
    <Container>
      <Button>
        <Image image={image} />
        <TextArea>
          <Title>{title}</Title>
          <Desc>{desc}&nbsp;</Desc>
        </TextArea>
      </Button>
    </Container>
  );
};

export default VideoCard;
