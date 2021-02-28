import React from 'react';
import {
  Container,
  BurgerButton,
  Search,
  RightHolder,
  ToggleButton,
  ProfileButton,
} from './Header.styles';

const Header = () => (
  <Container>
    <BurgerButton
      type="image"
      src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png"
      alt=""
    />
    <Search placeholder="Type something cool" />
    <RightHolder>
      <ToggleButton id="darkMode" type="checkbox" />
      <span>Dark Mode</span>
      <ProfileButton
        type="image"
        src="https://img2.freepng.es/20180422/wee/kisspng-computer-icons-user-profile-login-clip-art-my-account-icon-5adc5dd8d9ca10.9425519815243913848921.jpg"
        alt=""
      />
    </RightHolder>
  </Container>
);

export default Header;
