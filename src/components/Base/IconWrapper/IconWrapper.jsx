import React from 'react';
import styled from 'styled-components';

const StyledIconWrapper = styled.img`
  display: flex;
  height: 16px;
  width: 16px;
  margin: 8px;
  padding: 8px;
`;

const IconWrapper = ({ src, alt }) => {
  return <StyledIconWrapper src={src} alt={alt} />;
};

export default IconWrapper;
