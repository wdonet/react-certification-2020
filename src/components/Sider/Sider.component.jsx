import React from 'react';
import { Menu, Layout } from 'antd';
import styled from 'styled-components';

import { HomeOutlined } from '@ant-design/icons';

const { Sider: AntSider } = Layout;

const StyledSider = styled(AntSider)``;

const LogoContainer = styled.div`
  height: 60px;
  width: 100%;
`;

const Sider = () => {
  return (
    <StyledSider trigger={null} collapsible collapsed="true">
      <LogoContainer />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
      </Menu>
    </StyledSider>
  );
};

export default Sider;
