import styled from 'styled-components';

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 1rem;
`;

const GridContainer = styled.div`
  padding: 2rem;
`;

export { GridContainer, List };
