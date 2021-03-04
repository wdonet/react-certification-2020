import styled, { css } from 'styled-components';
import { Card, CardMedia, Typography } from '@material-ui/core';

export const StyledCard = styled(Card)`
  width: 345px;
  height: 345px;
  margin: 10px;

  && {
    background-color: ${({ theme }) => theme.card.backgroundColor};
  }
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
}))`
  && {
    color: ${({ theme }) => theme.body.color};
  }
`;

export const Description = styled(Typography).attrs(() => ({
  component: 'p',
  variant: 'body2',
}))`
  && {
    color: ${({ theme }) => theme.cardText.color};
  }
`;
