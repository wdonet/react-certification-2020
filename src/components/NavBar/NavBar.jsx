import React from 'react';
import { FcManager } from 'react-icons/fc';
import styled from 'styled-components';
import InputSearch from '../InputSearch';

const NavBarStyled = styled.div`
  background-color: ${(props) => props.theme.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

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
