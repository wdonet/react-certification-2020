import styled from 'styled-components';

const StyledSearchInput = styled.input`
  width: 100%;
  padding: 10px;
  outline: none;
  border-radius: 5px;
`;

export const InputContainer = styled.div`
  display: -ms-flexbox;
  display: flex;
  width: 45%;
  margin: 0 auto;
  line-height: 1.1876em;
`;

export const InputIcon = styled.i`
  padding: 10px;
  background: dodgerblue;
  color: white;
  min-width: 50px;
  text-align: center;
  background: inherit;
`;

export default StyledSearchInput;
