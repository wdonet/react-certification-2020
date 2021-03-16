import React from 'react';
import styled from 'styled-components';

const StyledCardContent = styled.div`
  text-align: justify;
  padding: 4px;
  margin: 4px;
`;

const CardContent = (props) => {
  return <StyledCardContent>{props.children}</StyledCardContent>;
};

export default CardContent;
