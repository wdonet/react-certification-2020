import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { TextField, IconWrapper, Avatar, Switch } from '../ui/index';
import hamburger from '../../assets/icons/hamburguer.png';
import defaultUser from '../../assets/icons/default_user.jpg';

const StyledHeader = styled.div`
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

const Header = () => {
  const { switchTheme } = useContext(ThemeContext);

  return (
    <StyledHeader role="toolbar" data-testid="header">
      <StyledSection>
        <div>
          <IconWrapper role="button" src={hamburger} alt="hamburguer" />
        </div>
        <div data-testid="search-input">
          <TextField role="search" />
        </div>
      </StyledSection>
      <StyledSection>
        <div data-testid="theme-mode-switch">
          <Switch onClick={switchTheme} />
        </div>
        <div data-testid="user-avatar">
          <Avatar role="button" alt="profile" src={defaultUser} />
        </div>
      </StyledSection>
    </StyledHeader>
  );
};

export default Header;
