import styled from 'styled-components';

const GridContainer = styled.div`
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto-fill, 250px);
  column-gap: 10px;
  row-gap: 15px;
  display: grid;
`;

export { GridContainer };
