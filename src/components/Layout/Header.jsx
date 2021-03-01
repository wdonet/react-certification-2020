import React from 'react';
import styled from 'styled-components';
import { TextField, IconWrapper, Avatar, Switch } from '../Base/index';
import hamburger from '../../assets/icons/hamburguer.png';
import defaultUser from '../../assets/icons/default_user.jpg';

const StyledNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 64px;
  background-color: #00695c;
  overflow: hidden;
  position: fixed;
  top: 0;
`;

const StyledSection = styled.div`
  display: flex;
  align-items: center;
`;

const Navbar = () => {
  return (
    <StyledNavbar role="toolbar" data-testid="navbar">
      <StyledSection>
        <div>
          <IconWrapper role="button" src={hamburger} alt="hamburguer" />
        </div>
        <div data-testid="search-input">
          <TextField role="search"/>
        </div>
      </StyledSection>
      <StyledSection>
        <div data-testid="theme-mode-switch">
          <Switch />
        </div>
        <div data-testid="user-avatar">
          <Avatar role="button" alt="profile" src={defaultUser} />
        </div>
      </StyledSection>
    </StyledNavbar>
  );
};

export default Navbar;
