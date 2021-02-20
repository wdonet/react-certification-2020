import React from 'react';
import Styled from './styled';
import SideMenu from '../SideMenu';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Styled.Nav data-testid="navBar">
      <Styled.NavContent data-testid="navContent">
        <div>
          <Styled.MenuIcon open={open} onClick={() => setOpen(!open)} />
        </div>
        <SideMenu open={open} setOpen={setOpen} />
        <Styled.Input type="text" placeholder="Search ..." />
        <Styled.NavElementsWrapper className="nav-links">
          <Styled.CheckBoxWrapper>
            <Styled.CheckBox id="checkbox" type="checkbox" />
            <Styled.CheckBoxLabel htmlFor="checkbox" />
          </Styled.CheckBoxWrapper>
          <Styled.AccountIcon />
        </Styled.NavElementsWrapper>
      </Styled.NavContent>
    </Styled.Nav>
  );
};

export default Navbar;
