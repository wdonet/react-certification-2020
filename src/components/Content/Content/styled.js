import styled from 'styled-components';

const Content = styled.div`
  width: 100%;
  height: 100%;
`;

const SideBar = styled.div`
  float: left;
  width: 25%;
  height: 100%;
`;

const Main = styled.div`
  float: right;
  width: 75%;
  height: 100%;
  margin-top: 120px;
`;

const Styled = { Content, SideBar, Main };
export default Styled;
