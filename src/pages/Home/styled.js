import styled from 'styled-components';

export const Section = styled.section`
  padding: 20px 40px;
  background-color: ${({ theme }) => theme.secondary};
`;

export const Title = styled.h1`
  font-weight: 400;
  color: ${({ theme }) => theme.main};
  margin: 0 20px 20px 20px;
  text-align: center;
  font-size: 3rem;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`;
