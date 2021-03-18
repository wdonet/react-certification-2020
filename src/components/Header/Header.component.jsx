import React, { useState, useContext } from 'react';
import Styled from './HeaderStyle';
import { AppContext } from "../App/App.component";

function Header({ getVideoCallBack }) {
  
  const [inputValue, setInputValue] = useState('');
  const { dispatch } = useContext(AppContext);

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  const searchVideosFormAPI = (evt) => {
    if (evt.key === 'Enter') {
      const part = ['id', 'snippet'];
      const maxResults = 29;
      getVideoCallBack(part, maxResults, inputValue);
    }
  };

  return (
    <Styled.StyledHeader>
      <Styled.MenuContent />
      <Styled.StyledMenu />
      <Styled.StyledDivInput>
        <Styled.StyledInput
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={searchVideosFormAPI}
        />
      </Styled.StyledDivInput>
      <Styled.StyledDivLogo>
        <Styled.StyledLogo />
        <Styled.StyledDivToggle>
          <Styled.DarkModeStyle>Dark Mode</Styled.DarkModeStyle>
          <Styled.CheckBox onClick={toggleTheme} id="checkbox" type="checkbox" />
          <Styled.CheckBoxLabel htmlFor="checkbox" />
        </Styled.StyledDivToggle>
      </Styled.StyledDivLogo>
    </Styled.StyledHeader>
  );
}

export default Header;
