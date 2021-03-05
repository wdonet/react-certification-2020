import styled, { css } from 'styled-components';
import { Card, CardMedia, Typography } from '@material-ui/core';

export const StyledCard = styled(Card)`
  width: 345px;
  height: 345px;
  margin: 10px;
`;

export const StyledCardMedia = styled(CardMedia)`
  width: 100%;
  height: 140px;
  ${(props) =>
    props.src &&
    css`
      && {
        background-image: url(${props.src});
      }
    `};
`;

export const Title = styled(Typography).attrs(() => ({
  component: 'h2',
  variant: 'subtitle1',
  gutterBottom: true,
}))``;

export const Description = styled(Typography).attrs(() => ({
  component: 'p',
  variant: 'body2',
  color: 'textSecondary',
}))``;
