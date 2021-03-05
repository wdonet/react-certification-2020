import styled from 'styled-components';

export const GridItem = styled.div`
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid black;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  @media screen and (max-width: 500px) {
    padding: 0;
  }
`;

export const Image = styled.img`
  width: auto;
  height: 100%;
  float: left;
`;

export const Title = styled.p`
  text-transform: capitalize;
  font-weight: normal;
  font-size: 15px;
`;
