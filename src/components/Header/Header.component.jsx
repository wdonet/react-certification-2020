import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { searchVideos } from 'utils/api';
import { Layout, Row, Col, Input } from 'antd';
import { MenuOutlined, LoginOutlined } from '@ant-design/icons';
import styled from 'styled-components';

import { Context } from '../../context/AppContext';

const { Header: AntHeader } = Layout;
const { Search: AntSearch } = Input;

const StyledHeader = styled(AntHeader)`
  padding: 0 2rem;
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

const Header = ({ onToggle }) => {
  const location = useLocation();
  const { dispatch } = useContext(Context);

  const searchVideosAction = async (searchTerm) => {
    const res = await searchVideos(searchTerm);
    dispatch({ type: 'SEARCH_VIDEOS', payload: res.result.items });
  };

  const handleSearch = (event) => {
    searchVideosAction(event.target.value);
  };

  return (
    <StyledHeader>
      <Row>
        <Col span={1}>
          <StyledMenuOutlined
            aria-label="sider-menu-icon"
            name="sider-menu"
            onClick={onToggle}
          />
        </Col>
        <Center span={22}>
          <StyledSearch
            aria-label="search-bar"
            size="large"
            placeholder="Search"
            onPressEnter={handleSearch}
          />
        </Center>
        <Col span={1} align="end">
          <Link to={{ pathname: '/login', state: { login: location } }}>
            <StyledMenuOutlined as={LoginOutlined} name="login" />
          </Link>
        </Col>
      </Row>
    </StyledHeader>
  );
};

export default Header;
