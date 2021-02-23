import React from 'react';

import { StyledLink } from './styled';

const HeaderButton = ({ onClick, children }) => {
  return <StyledLink onClick={onClick}>{children}</StyledLink>;
};

export default HeaderButton;
