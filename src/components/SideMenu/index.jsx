import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AUTH_STORAGE_KEY } from '../../utils/constants';
import { storage } from '../../utils/storage';
import { LinkText, ContainerMenu, SideMen, CloseBtn, Links, CloseIcon } from './styled';
import ThemeContext from '../../state/ThemeContext';

const SideMenu = ({ open, setOpen }) => {
  const isLogged = storage.get(AUTH_STORAGE_KEY);
  const { stateTheme } = useContext(ThemeContext);
  const { theme } = stateTheme;

  const favorites = (
    <Link to={{ pathname: `/` }} onClick={() => setOpen(!open)}>
      <LinkText theme={theme}>
        <span role="img" aria-label="favorites">
          ⭐️
        </span>
        Favorites
      </LinkText>
    </Link>
  );

  return (
    <ContainerMenu open={open} data-testid="sideMenu">
      <SideMen open={open} theme={theme}>
        <CloseBtn>
          <CloseIcon onClick={() => setOpen(!open)} />
        </CloseBtn>
        <Links>
          <Link to={{ pathname: `/` }} onClick={() => setOpen(!open)}>
            <LinkText theme={theme}>
              <span role="img" aria-label="home">
                🏠
              </span>
              Home
            </LinkText>
          </Link>
          {isLogged ? favorites : ''}
        </Links>
      </SideMen>
    </ContainerMenu>
  );
};

export default SideMenu;
