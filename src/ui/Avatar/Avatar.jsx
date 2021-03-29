import React from 'react';
import styled from 'styled-components';

const StyledAvatar = styled.img`
  height: 40px;
  width: 40px;
  margin: 8px;
  border-radius: 50%;
`;

const Avatar = (props) => {
  return <StyledAvatar {...props}/>;
};

export default Avatar;
