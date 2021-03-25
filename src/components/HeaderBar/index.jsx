import React from 'react';
import styled from 'styled-components';
import Avatar from './Avatar';
import MenuButton from './MenuButton';
import SwitchButton from '../SwitchButton';
import SearchInput from './SearchInput';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background-color: #8989c2;
  color: white;
`;
const index = ({ updateQuery }) => {
  return (
    <Nav>
      <MenuButton />
      <SearchInput placeholder="wizeline" updateQuery={ updateQuery }/>
      <SwitchButton label="Dark Mode" />
      <Avatar />
    </Nav>
  );
};

export default index;
