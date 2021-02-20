import { Container, Typography } from '@material-ui/core';
import styled from 'styled-components';

export const NotFoundContainer = styled(Container)`
  height: 100vh;
  align-content: center;
`;

export const NotFoundText = styled(Typography)`
  color: ${(props) => props.theme.colors.white};
`;
