import React from 'react';
import SideMenu from '../SideMenu';
import SearchInput from '../SearchInput';
import Account from '../Account';
import {
  Nav,
  NavContent,
  MenuIcon,
  CheckBoxWrapper,
  CheckBoxLabel,
  CheckBox,
  NavElementsWrapper,
} from './styled';

const Navbar = ({ word, setWord }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Nav data-testid="navBar">
      <NavContent data-testid="navContent">
        <div>
          <MenuIcon open={open} onClick={() => setOpen(!open)} />
        </div>
        <SideMenu open={open} setOpen={setOpen} />
        <SearchInput initSearchWord={word} onChange={setWord} />
        <NavElementsWrapper className="nav-links">
          <CheckBoxWrapper>
            <CheckBox id="checkbox" type="checkbox" />
            <CheckBoxLabel htmlFor="checkbox" />
          </CheckBoxWrapper>
          <Account />
        </NavElementsWrapper>
      </NavContent>
    </Nav>
  );
};

export default Navbar;
