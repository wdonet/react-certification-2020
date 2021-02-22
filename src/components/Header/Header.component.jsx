import React from 'react';
import Styled from './Header.styles';

const Header = () => (
  <Styled.Container>
    <Styled.BurgerButton
      type="image"
      src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png"
      alt=""
    />
    <Styled.Search placeholder="Type something cool" />
    <Styled.RightHolder>
      <Styled.ToggleButton id="darkMode" type="checkbox" />
      <label htmlFor="darkMode">Dark Mode</label>
      <Styled.ProfileButton
        type="image"
        src="https://img2.freepng.es/20180422/wee/kisspng-computer-icons-user-profile-login-clip-art-my-account-icon-5adc5dd8d9ca10.9425519815243913848921.jpg"
        alt=""
      />
    </Styled.RightHolder>
  </Styled.Container>
);

export default Header;
