import styled, { css } from 'styled-components';
import { Card, CardMedia } from '@material-ui/core';

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
