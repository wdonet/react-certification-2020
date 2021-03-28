import React from 'react';
import styled from 'styled-components';
import Avatar from './Avatar';
import MenuButton from './MenuButton';
import SwitchButton from '../SwitchButton';
import SearchInput from './SearchInput';
import { StoreContext } from '../../contexts/Store'
import { Link } from "react-router-dom";


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
  z-index: 1;
`;


const StyledLink = styled(Link)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
  text-decoration: none;
  }
  margin-top: 16px;
`

const Index = ({ updateQuery }) => {
  const {
    "loggedIn": [loggedIn]
  } = React.useContext(StoreContext);

  return (
    <Nav>
      <MenuButton />
      <SearchInput placeholder="wizeline" updateQuery={updateQuery} />
      <SwitchButton label="Dark Mode" />
      { loggedIn ?
        <Avatar /> :
         <StyledLink to="/login">LOGIN</StyledLink>
      }
    </Nav>
  );
};

export default Index;
