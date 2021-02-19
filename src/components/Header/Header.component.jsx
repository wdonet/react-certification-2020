import React from 'react';
import Styled from './HeaderStyle';

function Header() {
  return (
    <Styled.StyledHeader>
      <Styled.MenuContent />
      <Styled.StyledMenu />
      <Styled.StyledDivInput>
        <Styled.StyledInput />
      </Styled.StyledDivInput>
      <Styled.StyledDivLogo>
        <Styled.StyledLogo />
        <Styled.StyledDivToggle>
          <Styled.DarkModeStyle>Dark Mode</Styled.DarkModeStyle>
          <Styled.CheckBox id="checkbox" type="checkbox" />
          <Styled.CheckBoxLabel htmlFor="checkbox" />
        </Styled.StyledDivToggle>
      </Styled.StyledDivLogo>
    </Styled.StyledHeader>
  );
}

export default Header;
