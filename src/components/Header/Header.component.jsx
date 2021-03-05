import React, { useState } from 'react';
import Styled from './HeaderStyle';


function Header({  getVideoCallBack }) { 
  const [inputValue, setInputValue] = useState('');

  const searchVideosFormAPI = evt => {
    if(evt.key === "Enter"){
      const part = ['id', 'snippet'];
      const maxResults = 25;
      getVideoCallBack(part, maxResults, inputValue);
    }
  }

  
  return (
    <Styled.StyledHeader>
      <Styled.MenuContent />
      <Styled.StyledMenu />
      <Styled.StyledDivInput>
        <Styled.StyledInput 
          //value={searchItem}
         // onChange = {e => setSearchItem(e.target.value)}
          value={inputValue}
          onChange = {e => setInputValue(e.target.value)}
          onKeyPress={searchVideosFormAPI}
        />
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
