import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../../providers/Auth';
import { useYouTube } from '../../YouTube/YouTubeProvider';
import { Col, TitleLink, HeaderContainer, Search, Space, Switch } from './Header.styled';

const Header = () => {
  const { state, dispatch } = useYouTube();
  const { search = '', theme } = state;

  const { authenticated, logout } = useAuth();
  const history = useHistory();

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
      <TitleLink to="/">
        <Col>Videos</Col>
      </TitleLink>
      <TitleLink to="/favorites">
        <Col>Favorites</Col>
      </TitleLink>
      <Col>
        <Switch
          onClick={() => {
            dispatch({ type: 'switchTheme' });
          }}
        >
          {theme === 'dark' ? 'Default' : 'Dark'}
        </Switch>
      </Col>

      <Col>
        <button
          type="button"
          onClick={() => {
            if (authenticated) {
              logout();
            } else history.push('/login');
          }}
        >
          {authenticated ? 'Logout' : 'Login'}
        </button>
      </Col>
    </HeaderContainer>
  );
};

export default Header;
