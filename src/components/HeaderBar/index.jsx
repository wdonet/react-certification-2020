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
  background-color: ${(props) => props.theme.background};
  color: white;
`;
const index = () => {
  return (
    <Nav>
      <MenuButton />
      <SearchInput placeholder="wizeline" />
      <SwitchButton label="Dark Mode" />
      <Avatar />
    </Nav>
  );
};

export default index;
