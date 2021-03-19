import React from 'react';
import { useYouTube } from '../../YouTube/YouTubeProvider';
import { Col, HeaderContainer, Search, Space, Switch, User } from './Header.styled';

const Header = () => {
  const { state, dispatch } = useYouTube();
  const { search = '' } = state;

  const setSearch = (event) => {
    dispatch({ type: 'search', payload: event.target.value });
  };

  return (
    <HeaderContainer>
      <Col>Header</Col>
      <Col>
        <Search placeholder="Search" value={search} onChange={setSearch} />
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
