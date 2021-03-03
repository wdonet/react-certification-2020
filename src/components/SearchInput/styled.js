import styled from 'styled-components';

const StyledInput = styled.input`
  border: solid 1px ${({ theme }) => theme.font.tertiary};
  border-radius: 3px;
  padding: 7px 33px;
  color: ${({ theme }) => theme.font.primary};
  cursor: text;
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  background: ${({ theme }) => theme.background.primary};

  &:active,
  &:focus {
    text-align: left;
    outline: ${({ theme }) => `${theme.font.highlight} auto 1px`};
  }
`;

export { StyledInput };
