import React from 'react';
import styled from 'styled-components';

const StyledIconWrapper = styled.img`
  display: flex;
  height: 16px;
  width: 16px;
  margin: 8px;
  padding: 8px;
`;

const IconWrapper = (props) => {
  return (<StyledIconWrapper {...props} />);
};

export default IconWrapper;
