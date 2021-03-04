import styled from 'styled-components';
import { Typography } from '@material-ui/core';

export const StyledRelatedItemDiv = styled.div`
  position: relative;
  display: flex;
  cursor: pointer;
`;

export const StyledImg = styled.img`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
`;

export const StyledDescriptionDiv = styled.div`
  height: 100%;
  flex-grow: 1;
  padding: 5px;
  box-sizing: border-box;
`;

export const SnippetTitle = styled(Typography).attrs(() => ({
  component: 'p',
  variant: 'body1',
}))`
  && {
    font-size: 14px;
    text-align: initial;
  }
`;
