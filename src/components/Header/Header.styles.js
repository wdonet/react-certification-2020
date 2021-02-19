import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  vertical-align: top;
  background-color: rgba(230, 90, 232, 0.2);
  margin: 0px;
  overflow: hidden;
`;

const Menu = styled.a`
  display: inline-block;
  text-align: center;
  padding: 10px;
  float: left;
  background-color: rgba(62, 64, 163);

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const SearchContainer = styled.div`
  background-color: rgba(62, 64, 163);
  display: inline-block;
  padding: 5px;
  margin-left: 2px;
`;

const SearchBar = styled.input`
  padding: 5px;
  display: inline-block;
  background-color: rgba(42, 239, 245);
  border: none;
  margin-top: 8px;
  margin-right: 16px;
  font-size: 17px;
  color: white;
`;

const SearchButton = styled.a`
  display: inline-block;
  padding-top: 5px;
  padding-right: 5px;
  text-align: center;
  float: right;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const LoginButton = styled.a`
  display: inline-block;
  text-align: center;
  padding: 10px;
  float: right;
  background-color: #3e40a3;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const Styled = { Container, Menu, SearchBar, LoginButton, SearchContainer, SearchButton };
export default Styled;
