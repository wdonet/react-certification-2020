import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from "../../contexts/ThemeStore";

const SwitchVerticalCentered = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 40em) {
    display: none;
  }
`;
const SwitchButtonWrapper = styled.div`
  position: relative;
`;

const SwitchButtonLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

const Switch = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${SwitchButtonLabel} {
    background: #4fbe79;
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

function SwitchButton({ label }) {
  const { theme, switchTheme } = useContext(ThemeContext);
  const switchT = () => {
    if (theme === "dark") {
      switchTheme("light");
    } else {
      switchTheme("dark");
    }
    // console.log(`switch: ${theme}`);
  }
  return (
    <SwitchVerticalCentered>
      <SwitchButtonWrapper>
        <Switch id="checkbox" type="checkbox" onClick={()=>switchT() } />
        <SwitchButtonLabel htmlFor="checkbox" />
      </SwitchButtonWrapper>
      {label}
    </SwitchVerticalCentered>
  );
}

export default SwitchButton;
