import React from 'react';
import { useHistory } from 'react-router';
import { Menu, Layout, Row } from 'antd';
import styled from 'styled-components';

import { HomeOutlined, CloseOutlined } from '@ant-design/icons';

const { Sider: AntSider } = Layout;

const StyledSider = styled(AntSider)`
  position: absolute;
  overflow: auto;
  height: 100vh;
  z-index: 99;
`;

const StyledClose = styled(CloseOutlined)`
  color: white;
  margin: 8px 4px 8px 8px;
`;

const Sider = ({ isHidden, onToggle }) => {
  const history = useHistory();

  const handleMenuClick = ({ key }) => {
    switch (key) {
      case '0':
        history.push('/');
        break;
      default:
        history.push('/');
    }
  };

  return (
    <StyledSider aria-label="sider" collapsedWidth="0" collapsible collapsed={isHidden}>
      <Row align="end">
        <StyledClose role="button" onClick={onToggle} />
      </Row>
      <Menu theme="dark" mode="inline" selectable={false} onClick={handleMenuClick}>
        <Menu.Item key="0" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
      </Menu>
    </StyledSider>
  );
};

export default Sider;
