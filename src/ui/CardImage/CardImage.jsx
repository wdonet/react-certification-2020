import React from 'react';
import styled from 'styled-components';

const StyledFigure = styled.figure`
  display: contents;
`;

const StyledCardImage = styled.img`
  height: 140px;
  width: 100%;
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;
`;

const CardImage = (props) => {
  const { src, alt } = props;
  return (
    <StyledFigure>
      <StyledCardImage src={src} alt={alt} />
      <figcaption hidden>{props.figcaption}</figcaption>
    </StyledFigure>
  );
};

export default CardImage;
