import styled from 'styled-components';
import { Grid } from '@material-ui/core';

export const StyledGrid = styled(Grid)`
  && {
    width: 100%;
  }
`;

export const StyledGridItemDiv = styled.div`
  width: 100%;
  padding: 20px;
  margin: 0px auto;
  flex: 1 1 0%;
  display: flex;
  flex-flow: row wrap;
  -webkit-box-pack: center;
  justify-content: center;
  box-sizing: border-box;

  @media (min-width: 1500px) {
    width: 1500px;
  }

  @media (min-width: 1135px) and (max-width: 1500px) {
    width: 1135px;
  }

  @media (min-width: 770px) and (max-width: 1135px) {
    width: 770px;
    justify-content: flex-start;
  }
`;
