import React from 'react';
import Styled from './styled';

const SideMenu = ({ open, setOpen }) => {
  return (
    <Styled.ContainerMenu open={open} data-testid="sideMenu">
      <Styled.SideMenu open={open}>
        <Styled.Close>
          <Styled.CloseIcon onClick={() => setOpen(!open)} />
        </Styled.Close>
        <Styled.Links>
          <Styled.LinkText href="/">
            <span role="img" aria-label="home">
              🏠
            </span>
            Home
          </Styled.LinkText>
          <Styled.LinkText href="/">
            <span role="img" aria-label="favorites">
              ⭐️
            </span>
            Favorites
          </Styled.LinkText>
        </Styled.Links>
      </Styled.SideMenu>
    </Styled.ContainerMenu>
  );
};

export default SideMenu;
