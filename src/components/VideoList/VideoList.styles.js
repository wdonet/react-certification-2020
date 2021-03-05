import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 33% 33% 33%;
  }

  @media screen and (max-width: 750px) {
    grid-template-columns: 50% 50%;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 100%;
  }
`;
