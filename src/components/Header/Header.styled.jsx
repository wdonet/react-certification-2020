import styled from 'styled-components';

const NavigationBar = styled.nav`
  width: 100%;
  background-color: #26004d;
  color: #ffffff;
  position: sticky;
  top: 0;
  padding: 15px 0;
  display: flex;
  font-size: 1.5em;
  box-shadow: rgb(0 0 0 0.6) 2px 2px 4px;
`;

const RightContainer = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 30px;
`;

const LeftContainer = styled.div`
  display: flex;
  margin-left: 30px;
`;

const Styled = {
  NavigationBar,
  RightContainer,
  LeftContainer,
};

export default Styled;
