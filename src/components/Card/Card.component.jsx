import React from 'react';
import Styled from './Card.styles';

const Card = ({ title, thumbnail, description }) => (
  <Styled.Container>
    <Styled.TitleBar>
      <Styled.Title>{title}</Styled.Title>
    </Styled.TitleBar>
    <Styled.Content>
      <Styled.Thumbnail src={thumbnail} />
      <Styled.Description>{description}</Styled.Description>
    </Styled.Content>
  </Styled.Container>
);

export default Card;
