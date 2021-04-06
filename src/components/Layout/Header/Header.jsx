import React from 'react';
import { useYouTube } from '../../YouTube/YouTubeProvider';
import { Col, TitleLink, HeaderContainer, Search, Space, Switch } from './Header.styled';

const Header = () => {
  const { state, dispatch } = useYouTube();
  const { search = '', theme } = state;

  const setSearch = (event) => {
    dispatch({ type: 'search', payload: event.target.value });
  };

  return (
    <HeaderContainer>
      <TitleLink to="/">
        <Col>React Bootcamp</Col>
      </TitleLink>
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
