import React from 'react';
import { Col, HeaderContainer, Search, Space, Switch, User } from './Header.styled';

const Header = () => {
  return (
    <HeaderContainer>
      <Col>Header</Col>
      <Col>
        <Search placeholder="Search" />
      </Col>
      <Space />
      <Col>
        <Switch>theme switch placeholder</Switch>
      </Col>
      <Col>
        <User>user login placeholder</User>
      </Col>
    </HeaderContainer>
  );
};

export default Header;
