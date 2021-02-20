import React from 'react';
import {
  Container,
  Logo,
  LogoContainer,
  LogoName,
  SearchContainer,
  AvatarContainer,
} from './Header.styled';

import Input from '../Input';
import Avatar from '../Avatar';
import SeachIcon from '../../ui/icons/Search';

import logo from '../../assets/img/wizeline-logo.png';

const Header = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo src={logo} alt="logo" />
        <LogoName>Wizevideo</LogoName>
      </LogoContainer>

      <SearchContainer>
        <Input placeholder="Buscar" icon={<SeachIcon />} />
      </SearchContainer>

      <AvatarContainer>
        <Avatar clickable />
      </AvatarContainer>
    </Container>
  );
};

export default Header;
