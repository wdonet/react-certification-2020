import React from 'react';
import Styled from './NavigationBar.styled';
import NavigationBarBrand from '../NavigationBarBrand';
import NavigationBarToggler from '../NavigatioBarToggler';
import NavigationBarSearch from '../NavigationBarSearch';
import NavigationBarMenu from '../NavigationBarMenu';

function NavigationBar() {
  return (
    <Styled.Container
      className="navbar fixed-top navbar-expand-md"
      data-testid="navigationBar"
    >
      <Styled.Content className="container-fluid">
        <NavigationBarBrand />
        <NavigationBarSearch />
        <NavigationBarToggler />
        <NavigationBarMenu />
      </Styled.Content>
    </Styled.Container>
  );
}

export default NavigationBar;
