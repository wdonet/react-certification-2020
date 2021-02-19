import React from 'react';
import styled from 'styled-components';

const StyledNavbar = styled.div`
  width: 100%;
  height: 64px;
  background-color: #849492;
  overflow: hidden;
  position: fixed;
  top: 0;
`;

const Navbar = () => {
  return (<StyledNavbar data-testid="navbar">
    <div data-testid="hamburguer-icon"></div>
    <div data-testid="search-input"></div>
    <div data-testid="theme-mode-switch"></div>
    <div data-testid="user-avatar"></div>
  </StyledNavbar>);
};

export default Navbar;
