import styled from 'styled-components';

const Header = styled.div`
  top: 0;
  padding: 5px;
  border: 1px solid;
  height: 100px;
  background: #000000;
  width: 100%;
  position: fixed;
`;

const LogoImage = styled.div`
  float: left;
  height: 100px;
`;

const SearchBar = styled.div`
  float: left;
  width: 1000px;
  position: relative;
`;

const Login = styled.div`
  position: absolute;
  right: 15px;
  height: 100px;
`;

const Styled = { Header, LogoImage, SearchBar, Login };
export default Styled;
