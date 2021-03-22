import React, { useContext, useRef } from 'react';
import styled from 'styled-components';
import { TextField, IconWrapper, Avatar, Switch } from '../../ui';
import hamburger from '../../assets/icons/hamburguer.png';
import defaultUser from '../../assets/icons/default_user.jpg';
import AppContext from '../../providers/AppContext';

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({theme}) => theme.color.primary};
  justify-content: space-between;
  width: 100%;
  height: 64px;
  overflow: hidden;
  position: fixed;
  top: 0;
`;

const StyledSection = styled.div`
  display: flex;
  align-items: center;
`;

const Header = () => {
  const { search, setHomeVideosView, switchTheme, theme } = useContext(AppContext);
  const ref = useRef(null);

  const setHomeVideosViewAndSearch = (query) => {
    setHomeVideosView();
    search(query);
  };

  return (
    <StyledHeader role="toolbar" data-testid="header" theme={theme}>
      <StyledSection>
        <div>
          <IconWrapper role="button" src={hamburger} alt="hamburguer" />
        </div>
        <div data-testid="search-input">
          <TextField
            role="search"
            ref={ref}
            onKeyPress={({ charCode }) =>
              charCode === 13 && setHomeVideosViewAndSearch(ref.current.value)
            }
          />
        </div>
      </StyledSection>
      <StyledSection>
        <div data-testid="theme-mode-switch">
          <Switch onClick={switchTheme} />
        </div>
        <div data-testid="user-avatar">
          <Avatar role="button" alt="profile" src={defaultUser} />
        </div>
      </StyledSection>
    </StyledHeader>
  );
};

export default Header;
