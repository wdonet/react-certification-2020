import styled from 'styled-components';

const StyledLink = styled.a`
  padding: 0 20px 0 20px;
  cursor: pointer;
  color: ${({ theme, fillColor }) =>
    fillColor ? theme.font.highlight : theme.font.primary};
  line-height: initial;
  &:hover {
    color: ${({ theme }) => theme.font.highlight};
  }
`;

export { StyledLink };
