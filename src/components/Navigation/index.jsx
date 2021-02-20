import React from "react";
import Styled from "./styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'

function Navigation() {
  return <Styled.Navigation>
            <Styled.NavigationContainer>
              <Styled.MainMenu><FontAwesomeIcon icon={faBars}/></Styled.MainMenu>
              <Styled.SearchBar>
                  <Styled.SearchInput defaultValue="Wizeline" type="text" />
              </Styled.SearchBar>
              <Styled.EmptyBar />
              <Styled.SetupBar>
                  <Styled.DarkMode>Dark Mode</Styled.DarkMode>
                  <Styled.SessionMenu><FontAwesomeIcon icon={faUser}/></Styled.SessionMenu>
              </Styled.SetupBar>
            </Styled.NavigationContainer>
          </Styled.Navigation>;
}
  

export default Navigation;