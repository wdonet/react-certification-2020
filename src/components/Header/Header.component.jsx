import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Row, Col, Input } from 'antd';
import { MenuOutlined, LoginOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { Header: AntHeader } = Layout;
const { Search: AntSearch } = Input;

const StyledHeader = styled(AntHeader)`
  padding: 0px;
`;

const StyledMenuOutlined = styled(MenuOutlined)`
  font-size: 18px;
  color: white;
`;

const StyledSearch = styled(AntSearch)`
  max-width: 800px;
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
          <StyledSearch size="large" />
        </Center>
        <Col span={1}>
          <Link to="/login">
            <StyledMenuOutlined as={LoginOutlined} name="login" />
          </Link>
        </Col>
      </Row>
    </StyledHeader>
  );
};

export default Header;
