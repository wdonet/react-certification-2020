import React from 'react';
import { useYouTube } from '../../YouTube/YouTubeProvider';
import { Col, HeaderContainer, Search, Space, Switch } from './Header.styled';

const Header = () => {
  const { state, dispatch } = useYouTube();
  const { search = '', theme } = state;

  const setSearch = (event) => {
    dispatch({ type: 'search', payload: event.target.value });
  };

  return (
    <HeaderContainer>
      <Col>React Bootcamp</Col>
      <Col>
        <Search placeholder="Search" value={search} onChange={setSearch} />
      </Col>
      <Space />
      <Col>
        <Switch
          onClick={() => {
            dispatch({ type: 'switchTheme' });
          }}
        >
          {theme === 'dark' ? 'Default' : 'Dark'}
        </Switch>
      </Col>
    </HeaderContainer>
  );
};

export default Header;
