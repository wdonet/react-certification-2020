import React from 'react';
import {
  Container,
  ImageFit,
  GradientContainer,
  Title,
  Description,
  TagChannel,
} from './Card.styled';

const Card = ({ title, description, imgUrl, channelTitle }) => {
  return (
    <Container>
      <ImageFit src={imgUrl} alt={title} />
      <GradientContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </GradientContainer>
      <TagChannel>{channelTitle}</TagChannel>
    </Container>
  );
};

export default Card;
