import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.headerBackground};
  height: 52px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2.5%;
  margin: auto;
  font-size: 0.9rem;
`;

export const Menu = styled.button`
  font-size: inherit;
  margin-right: 0.75em;
`;

export const SearchInput = styled.input`
  font-size: inherit;
  font-weight: bold;
  outline: none;
  width: 55ch;
  background-color: transparent;
  border: none;
  border-right: 1px solid rgba(255, 255, 255, 0.4);
  color: ${(props) => props.theme.headerTextColor};
  margin-right: 0.75em;
`;

export const ThemeToggle = styled.button`
  font-size: inherit;
  white-space: nowrap;
  margin-right: 0.75em;
`;

export const Loggin = styled.a`
  font-size: inherit;
  font-weight: bold;
  color: ${(props) => props.theme.headerTextColor};

  &:active {
    color: #4f4255;
  }
`;
