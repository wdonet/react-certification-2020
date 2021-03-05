import React from 'react';
import styled from 'styled-components';

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
  return (<StyledCardImage src={src} alt={alt} />);
};

export default CardImage;
