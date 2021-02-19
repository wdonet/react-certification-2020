import styled from 'styled-components';

export const GridItem = styled.div`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.4s;
  height: 100%;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const Image = styled.img`
  border-radius: 4px;
  max-width: 100%;
  height: auto;
`;

export const Content = styled.div`
  padding: 2px 16px;
`;

export const Title = styled.h4`
  text-transform: capitalize;
  font-weight: normal;
  text-align: center;
`;

export const Description = styled.p`
  color: gray;
  font-size: 0.8em;
  text-align: justify;
`;
