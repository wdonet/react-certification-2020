import { AppBar, InputBase, Toolbar } from '@material-ui/core';
import styled from 'styled-components';
import { fade } from '@material-ui/core/styles';

export const CustomAppBar = styled(AppBar)`
  background-color: ${(props) => props.theme.colors.blueGrey} !important;
`;

export const CustomToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

export const ToolbarSection = styled.div`
  display: flex;
`;

export const SearchContainer = styled.div`
  position: relative;
  border-radius: 5px;
  background-color: ${(props) => fade(props.theme.colors.white, 0.15)};
  ${ToolbarSection}:hover & {
    background-color: ${(props) => fade(props.theme.colors.white, 0.25)};
  }
  margin-right: 1em;
  width: 100%;
`;

export const SearchIconContainer = styled.div`
  padding: 0.5em;
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CustomInputBase = styled(InputBase)`
  margin: 0.25em;
  padding-left: 2em;
  width: 100%;
`;
