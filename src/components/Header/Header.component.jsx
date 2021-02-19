import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Row, Col, Input } from 'antd';
import { MenuOutlined, LoginOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { Header: AntHeader } = Layout;
const { Search: AntSearch } = Input;

const StyledHeader = styled(AntHeader)`
  padding: 0 2rem 0 0;
`;

const StyledMenuOutlined = styled(MenuOutlined)`
  font-size: 1rem;
  color: white;
`;

const StyledSearch = styled(AntSearch)`
  max-width: 800px;
  margin: 0px 1rem;
`;

const Center = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Row>
        <Col span={1}>
          <StyledMenuOutlined name="sider-menu" />
        </Col>
        <Center span={22}>
          <StyledSearch size="large" placeholder="Search" />
        </Center>
        <Col span={1} align="end">
          <Link to="/login">
            <StyledMenuOutlined as={LoginOutlined} name="login" />
          </Link>
        </Col>
      </Row>
    </StyledHeader>
  );
};

export default Header;
