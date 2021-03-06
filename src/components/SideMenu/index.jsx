import React from 'react';
import { AUTH_STORAGE_KEY } from '../../utils/constants';
import { storage } from '../../utils/storage';
import { LinkText, ContainerMenu, SideMen, CloseBtn, Links, CloseIcon } from './styled';

const SideMenu = ({ open, setOpen }) => {
  const isLogged = storage.get(AUTH_STORAGE_KEY);

  const favorites = (
    <LinkText href="/">
      <span role="img" aria-label="favorites">
        ⭐️
      </span>
      Favorites
    </LinkText>
  );

  return (
    <ContainerMenu open={open} data-testid="sideMenu">
      <SideMen open={open}>
        <CloseBtn>
          <CloseIcon onClick={() => setOpen(!open)} />
        </CloseBtn>
        <Links>
          <LinkText href="/">
            <span role="img" aria-label="home">
              🏠
            </span>
            Home
          </LinkText>
          {isLogged ? favorites : ''}
        </Links>
      </SideMen>
    </ContainerMenu>
  );
};

export default SideMenu;
