import React from 'react';
import { FcManager } from 'react-icons/fc';
import InputSearch from '../InputSearch';
import { NavBarStyled } from './NavBar.styles';

function NavBar({ search }) {
  return (
    <NavBarStyled>
      <InputSearch search={search} />
      <div>
        <FcManager size="60" />
      </div>
    </NavBarStyled>
  );
}

export default NavBar;
