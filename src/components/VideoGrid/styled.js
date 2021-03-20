import styled from 'styled-components';

const Grid = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.content};
  display: inline-block;
  padding: 30px 60px;
`;

const Row = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Col = styled.div`
  border: 1px solid lightgray;
  color: white;
  flex-wrap: wrap;
`;

export { Grid, Col, Row };
