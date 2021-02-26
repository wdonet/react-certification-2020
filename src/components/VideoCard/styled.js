import styled from 'styled-components';

export const Card = styled.div`
  margin: 15px;
  border-radius: 5px;
  width: 340px;
  height: 340px;
  overflow: hidden;
  border-left: 1px solid #ededed;
  border-right: 1px solid #ededed;
  border-bottom: 2px solid #d3d3d3;
`;

export const Image = styled.img`
  height: 45%;
  width: 100%;
  object-fit: cover;
`;

export const Info = styled.div`
  padding: 5px 10px 20px 10px;
  text-align: left;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.main};
  font-weight: 300;
  font-size: 1.1rem;
  margin: 0;
`;

export const Description = styled.p`
  font-weight: 100;
  color: ${({ theme }) => theme.mainFade};
  font-size: 0.8rem;
  margin: 10px 0px;
`;
