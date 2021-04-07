import styled from 'styled-components';

const StyledSection = styled.section`
  text-align: center;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.font.primary};
`;

export { StyledSection, Title };
