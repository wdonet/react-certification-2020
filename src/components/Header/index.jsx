import React from 'react';
import Button from '../Button';
import Toolbar from '../Toolbar';
import IconButton from '../IconButton';
import { Menu } from '../Icons';

import { StyledHeader } from './styled';

const Header = () => {
  return (
    <StyledHeader>
      <Toolbar>
        <Button>
          <IconButton>
            <Menu width="24px" color="white" />
          </IconButton>
        </Button>
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
