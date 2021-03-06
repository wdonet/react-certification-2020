import styled from 'styled-components';
import ImageButton from '../ImageButton';

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.headerBackground};
  height: 52px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2.5%;
  margin: auto;
  font-size: 0.9rem;
`;

export const Menu = styled(ImageButton)`
  font-size: inherit;
  margin: 0 0.75em;
  width: 18px;
  flex-grow: 0;
  flex-shrink: 0;
`;

export const SearchInput = styled.input`
  font-size: inherit;
  font-weight: bold;
  outline: none;
  width: 75ch;
  background-color: transparent;
  border: none;
  border-right: 1px solid rgba(255, 255, 255, 0.4);
  color: ${({ theme }) => theme.headerTextColor};
  margin-right: 0.75em;
`;

export const Loggin = styled(ImageButton)`
  font-size: inherit;
  margin: 0 0.75em;
  width: 30px;
  flex-grow: 0;
  flex-shrink: 0;
`;
