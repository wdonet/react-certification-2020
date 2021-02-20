import styled from 'styled-components';

export const Grid = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: inline-block;
  padding: 30px 60px;
`;

export const Row = styled.div`
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

export const Col = styled.div`
  border: 1px solid lightgray;
  color: white;
  flex-wrap: wrap;
`;

const Styled = {
  Grid,
  Col,
  Row,
};

export default Styled;
