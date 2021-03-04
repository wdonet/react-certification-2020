import styled, { css } from 'styled-components';
import { AppBar, IconButton, InputBase, Switch, Menu } from '@material-ui/core';

export const StyledGrowDiv = styled.div`
  flex-grow: 1;
`;

export const StyledAppBar = styled(AppBar)`
  && {
    background-color: ${({ theme }) => theme.appBar.backgroundColor};
  }
`;

export const StyledIconButton = styled(IconButton)`
  margin-right: 16px;
`;

export const StyledSearchDiv = styled.div`
  width: 100%;
  position: relative;
  border-radius: 4px;
  margin-right: 16px;
  margin-left: 0;
  background-color: #ffffff15;

  &:hover {
    background-color: #ffffff25;
  }

  @media (min-width: 600px) {
    margin-left: 24px;
    width: auto;
  }
`;

export const SearchIconDiv = styled.div`
  position: absolute;
  height: 100%;
  padding: 0px 16px;
  pointer-events: none;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledForm = styled.form`
  width: 100%;
`;

export const StyledInputBase = styled(InputBase)`
  color: inherit;
`;

export const StyledInput = styled.input`
  && {
    width: 100%;
    padding: 8px 8px 8px 0px;
    padding-left: calc(1em + 32px);
    color: #ffff;

    @media (min-width: 960px) {
      width: 20ch;
    }
  }
`;

export const StyledDarkModeDiv = styled.div`
  display: none;

  @media (min-width: 960px) {
    display: flex;
  }
`;

export const StyledSwitch = styled(Switch)`
  ${(props) =>
    props.checked &&
    css`
      && {
        .Mui-checked {
          color: #19857b;
        }
        .Mui-checked + .MuiSwitch-track {
          background-color: #19857b;
        }
      }
    `};
`;

export const StyledMenu = styled(Menu)`
  .MuiPaper-root {
    color: ${({ theme }) => theme.body.color};
    background-color: ${({ theme }) => theme.body.backgroundColor};
  }
`;
