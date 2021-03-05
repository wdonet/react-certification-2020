import React from 'react';
import styled from 'styled-components';

const StyledCardTitle = styled.h2`
  font-weight: normal;
  font-size: 1.25rem;
`;

const CardTitle = (props) => {
  const { children, title } = props;
  return <StyledCardTitle title={title}>{children}</StyledCardTitle>;
};

export default CardTitle;
