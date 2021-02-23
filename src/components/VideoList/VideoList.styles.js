import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;

  @media screen and (max-width: 650px) {
    grid-template-columns: auto auto;
  }

  @media screen and (max-width: 425px) {
    grid-template-columns: auto;
  }
`;
