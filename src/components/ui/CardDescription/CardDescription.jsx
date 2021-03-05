import React from 'react';
import styled from 'styled-components';

const StyledCardDescription = styled.p`
  font-weight: lighter;
  color: gray;
`;

const CardDescription = (props) => {
  return <StyledCardDescription>{props.children}</StyledCardDescription>;
};

export default CardDescription;
