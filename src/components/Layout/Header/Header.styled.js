import styled from 'styled-components';

const Col = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 70px;
  align-items: center;
  padding: 5px;
  border-bottom: 3px solid darkgray;
  background-color: lightgray;
`;

const Search = styled.input`
  background-color: lightyellow;
  border: 0;
  display: flex;
  height: 1.8rem;
  padding: 5px;
`;

const Space = styled.div`
  display: flex;
  flex: 1;
`;

const Switch = styled.span`
  height: 40px;
  background-color: springgreen;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const User = styled.span`
  height: 40px;
  background-color: springgreen;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Col, HeaderContainer, Search, Space, Switch, User };
