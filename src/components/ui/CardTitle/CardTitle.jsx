import React from 'react';
import styled from 'styled-components';

const StyledCardTitle = styled.h2`
  font-weight: normal;
  font-size: 1.25rem;
`;

const CardTitle = (props) => {
  const { children } = props;
  return <StyledCardTitle>{children}</StyledCardTitle>;
};

export default CardTitle;
