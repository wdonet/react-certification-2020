import React from 'react';
import styled from 'styled-components';
import { HashRouter as Router } from "react-router-dom";
import { StoreContext } from '../../contexts/Store';
import { useHistory } from "react-router-dom";

const StyledLink = styled.a`
  color: white;
`

const Ul = styled.ul`
  flex-flow: column nowrap;
  background-color: #0d2538;
  position: fixed;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  top: 0;
  left: 0;
  height: 100vh;
  width: 300px;
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;
  z-index: 1;
  li {
    color: #fff;
    padding: 18px 10px;
  }
`;

const LeftNav = ({ open }) => {
  let history = useHistory();
  const {
    "loggedIn": [loggedIn, setLoggedIn],
    "menuOpen": [menuOpen, setMenuOpen]
  } = React.useContext(StoreContext);
      
  const menuClick = (direction, command) => {
    setMenuOpen(false);
    if (command === "logout") {
      setLoggedIn(false);
    }
    history.push(direction);
    

  }
  return (
    <Router>
      <Ul open={menuOpen}>
        <ul>
          <li>
            <StyledLink onClick={()=> { menuClick("/")}}>Home</StyledLink>
          </li>
          <li>
            <StyledLink onClick={()=> { menuClick("/about")}}>About</StyledLink>
          </li>
          {loggedIn ?
            <>
              <li>
                <StyledLink onClick={()=> { menuClick("/favorites")}}>Favorites</StyledLink>
              </li> 
              <li >
                <StyledLink onClick={()=> { menuClick("/", "logout")}}>Logout</StyledLink>
              </li>
            </>
              : null
          }
          
        </ul>
      </Ul>
    </Router>
    
  );
};

export default LeftNav;
