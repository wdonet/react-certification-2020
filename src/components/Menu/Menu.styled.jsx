import { AppBar, InputBase, Switch, Toolbar } from '@material-ui/core';
import styled from 'styled-components';
import { fade } from '@material-ui/core/styles';

export const CustomAppBar = styled(AppBar)`
  background-color: ${(props) => props.theme.colors.blueGrey.normal} !important;
`;

export const CustomToolbar = styled(Toolbar)`
  justify-content: space-between;
`;

export const ToolbarSection = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchContainer = styled.div`
  position: relative;
  border-radius: 5px;
  background-color: ${(props) => fade(props.theme.colors.white, 0.15)};
  ${ToolbarSection}:hover & {
    background-color: ${(props) => fade(props.theme.colors.white, 0.25)};
  }
  margin-left: 1em;
`;

export const SearchIconContainer = styled.div`
  padding: 0.5em;
  position: absolute;
  pointer-events: none;
`;

export const CustomInputBase = styled(InputBase)`
  margin: 0.25em;
  padding-left: 2em;
`;

export const ThemeSwitch = styled(Switch)``;
