import React from 'react';
import NavigationBarThemeSwitch from '../NavigationBarThemeSwitch';
import NavigationBarUser from '../NavigationBarUser';
// import Styled from '../NavigationBar/NavigationBar.styled';

function NavigationBarMenu() {
  return (
    <div
      className="collapse navbar-collapse flex-shrink-1 justify-content-end"
      id="navbarMenu"
    >
      <div className="navbar-nav ">
        <NavigationBarThemeSwitch />
        <NavigationBarUser />
      </div>
    </div>
  );
}

export default NavigationBarMenu;
