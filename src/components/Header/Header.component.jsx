import React from 'react';
import styled from 'styled-components';
import ToggleButton from '../ToggleButton';

const Header = styled.header`
  color: #fff;
  background-color: #1c5476;
  position: static;
  width: 100%;
  display: flex;
  z-index: 1100;
  box-sizing: border-box;
  flex-direction: row;

  //pointer-events: none;
  //opacity: 0.5;
`;

const NavBar = styled.div`
  min-height: 64px;
  color: white;
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
`;

const SvgIcon = styled.svg`
  font-size: 1.5rem;
  width: 1em;
  height: 1em;
  display: inline-block;
  fill: currentColor;
  user-select: none;
`;

const Button = styled.button`
  padding: 12px;
  font-size: 1.5rem;
  color: inherit;
  background-color: transparent;
  border: 0;
  user-select: none;
  margin-right: 16px;
`;

const SearchBox = styled.div`
  width: auto;
  margin-left: 24px;
  position: relative;
  margin-right: 16px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.15);
  border: 10;
`;

const SearchIconDiv = styled.div`
  padding: 10px 16px;
  position: absolute;
  align-items: center;
  pointer-events: none;
  justify-content: center;
`;

const SearchInputDiv = styled.div`
  cursor: text;
  display: inline-flex;
  position: relative;
  font-size: 1rem;
  box-sizing: border-box;
  align-items: center;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  line-height: 1.1876em;
  letter-spacing: 0.00938em;
`;

const SearchInput = styled.input`
  width: 20ch;
  font-size: inherit;
  padding: 8px 8px 8px 0px;
  transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  padding-left: calc(1em + 32px);
  color: currentColor;
  height: 1.1876em;
  margin: 0;
  display: block;
  min-width: 0;
  background: none;
  box-sizing: content-box;
  letter-spacing: inherit;
  animation-duration: 10ms;
  -webkit-tap-highlight-color: transparent;
  border: 0;

  &:focus {
    outline: 0;
  }

  &::placeholder {
    color: currentColor;
    opacity: 0.5;
  }
`;

function HeaderComponent() {
  return (
    <Header>
      <NavBar>
        <Button>
          <span>
            <SvgIcon viewBox="0 0 24 24">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </SvgIcon>
          </span>
        </Button>
        <SearchBox>
          <SearchIconDiv>
            <SvgIcon>
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </SvgIcon>
          </SearchIconDiv>
          <SearchInputDiv>
            <SearchInput type="text" placeholder="Search..." />
          </SearchInputDiv>
        </SearchBox>
        <div style={{ flexGrow: 1 }} />
        <ToggleButton text="Dark mode" />
      </NavBar>
    </Header>
  );
}

export default HeaderComponent;
