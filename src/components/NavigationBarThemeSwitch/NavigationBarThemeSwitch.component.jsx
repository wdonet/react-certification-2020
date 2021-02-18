import React from 'react';
// import Styled from '../NavigationBar/NavigationBar.styled';

function NavigationBarThemeSwitch() {
  return (
    <div className="nav-item">
      <div className="form-check form-switch">
        <label className="form-check-label" htmlFor="themeSwitchOptions">
          <input className="form-check-input" type="checkbox" id="themeSwitchOptions" />
          Dark Theme
        </label>
      </div>
    </div>
  );
}

export default NavigationBarThemeSwitch;
