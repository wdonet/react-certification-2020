import styled from 'styled-components';

const SearchFieldStyled = styled.input`
  border: 0;
  outline: none;
  background-color: #4b2e69;
  border-radius: 5px;
  color: #ffffff;
  padding: 6px 15px;
  margin-left: 12px;
  font-size: 0.7em;

  ::placeholder {
    color: #ffffff;
    opacity: 1;
  }
`;

export default SearchFieldStyled;
