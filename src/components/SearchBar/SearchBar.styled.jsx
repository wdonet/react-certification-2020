import styled from 'styled-components';

const SearchBarWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.15);
  display: flex;
  min-height: 35px;
  align-items: center;
  :hover {
    background-color: rgba(255, 255, 255, 0.25);
  }
  border-radius: 4px;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const SearchBarIcon = styled.div`
  padding: 0px 16px;
`;

const SearchBarInput = styled.input`
  color: inherit;
  background-color: transparent;
  outline: none;
  border: none;
  ::placeholder {
    color: #8ba9b8;
  }
`;

export { SearchBarWrapper, SearchBarIcon, SearchBarInput };
