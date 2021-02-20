import styled from 'styled-components';

const StyledInput = styled.input`
  font-size: 16px;
  border: solid 1px #bdbcbc;
  border-radius: 3px;
  color: #262626;
  padding: 7px 33px;
  border-radius: 3px;
  color: #999;
  cursor: text;
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  background: #fafafa;

  &:active,
  &:focus {
    text-align: left;
    outline: #e9a6a5 auto 1px;
  }
`;

export { StyledInput };
