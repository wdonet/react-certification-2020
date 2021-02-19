import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  background-color: white;
  color: black;
  border: 2px solid #848a91;
  border-radius: 40px;
  width: 4rem;
  padding: 10px 0px;

  &:hover {
    background-color: #848a91;
    color: white;
  }

  &:active:focus {
    outline: none;
    box-shadow: none;
    background-color: white;
  }
`;

export default StyledButton;
