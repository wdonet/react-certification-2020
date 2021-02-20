import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { StyledLink } from './Header.styles';

const HeaderButton = ({ icon, onClick }) => {
  return (
    <StyledLink onClick={onClick}>
      <FontAwesomeIcon icon={icon} size="2x" />
    </StyledLink>
  );
};

export default HeaderButton;
