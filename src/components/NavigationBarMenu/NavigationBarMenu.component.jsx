import React from 'react';
import NavigationBarThemeSwitch from '../NavigationBarThemeSwitch';
import NavigationBarUser from '../NavigationBarUser';
import Styled from './NavigationBarMenu.styled';

function NavigationBarMenu() {
  return (
    <Styled.Container
      className="collapse navbar-collapse flex-shrink-1 justify-content-end"
      id="navbarMenu"
      data-testid="NavigationBarMenu"
    >
      <Styled.Content className="navbar-nav ">
        <NavigationBarThemeSwitch />
        <NavigationBarUser />
      </Styled.Content>
    </Styled.Container>
  );
}

export default NavigationBarMenu;
