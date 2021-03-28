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

const SearchArea = styled.div`
  float: left;
  width: 1500px;
  padding-top: 20px;
  text-align: center;
`;

const Login = styled.div`
  position: absolute;
  right: 15px;
  height: 100px;
`;

const Styled = { Header, LogoImage, SearchArea, Login };
export default Styled;
