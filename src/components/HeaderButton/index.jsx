import React from 'react';

import { StyledLink } from './styled';

const HeaderButton = ({ onClick, children, fillColor }) => {
  return (
    <StyledLink onClick={onClick} fillColor={fillColor}>
      {children}
    </StyledLink>
  );
};

export default HeaderButton;
