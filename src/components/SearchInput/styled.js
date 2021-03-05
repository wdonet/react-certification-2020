import styled, { css } from 'styled-components';

const SearchInputContainer = styled.div`
  cursor: text;
  display: inline-flex;
  align-items: center;
  font-weight: 400;
  font-style: normal;
  color: ${({ theme }) => theme.font.primary};
  appearance: none;
  border: 1px solid ${({ theme }) => theme.background.tertiary};
  border-radius: 0;
  width: 100%;
  font-size: 14px;
  line-height: 27px;
  background-color: ${({ theme }) => theme.background.primary};
  box-sizing: border-box;

  ${({ theme, focused }) =>
    focused &&
    css`
      outline: none;
      background: ${theme.background.secondary};
      border: 1px solid ${theme.background.highlight};
    `}

  width: 100%;
  @media (max-width: 900px) {
    height: 40px;
  }
  @media (max-width: 700px) {
    height: 30px;
  }
  @media (max-width: 400px) {
    height: 20px;
  }
`;

const StyledInput = styled.input`
  letter-spacing: inherit;
  color: currentColor;
  padding: 0 10px;
  border: 0;
  box-sizing: content-box;
  background: none;
  height: 45px; 
  margin: 0;
  -webkit-tap-highlight-color: transparent;
  display: block;
  min-width: 0;
  width: 100%;
  &::-webkit-input-placeholder: ${({ theme }) => theme.font.primary};
  &::-moz-placeholder: ${({ theme }) => theme.font.primary};
  &:-ms-input-placeholder: ${({ theme }) => theme.font.primary};
  &::-ms-input-placeholder: ${({ theme }) => theme.font.primary};
  &:focus {
    outline: 0;
  }
`;

const InputAdornment = styled.div`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  > * {
    margin-right: 10px;
  }
`;

export { StyledInput, SearchInputContainer, InputAdornment };
