import React from 'react';
import Styled from './NavigationBarThemeSwitch.styled';

function NavigationBarThemeSwitch() {
  return (
    <Styled.Container className="nav-item" data-testid="NavigationBarThemeSwitch">
      <Styled.Content className="form-check form-switch">
        <Styled.Label className="form-check-label" htmlFor="themeSwitchOptions">
          <Styled.Input
            className="form-check-input"
            type="checkbox"
            id="themeSwitchOptions"
          />
          Dark Theme
        </Styled.Label>
      </Styled.Content>
    </Styled.Container>
  );
}

export default NavigationBarThemeSwitch;
