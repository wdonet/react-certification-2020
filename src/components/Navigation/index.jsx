import React, { useState } from "react";
import Styled from "./styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'

const Navigation = ({ searchVideos }) => {
  const [search, setSearch] = useState('');

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    searchVideos(search);
    event.preventDefault();
  };

  return (
          <Styled.Navigation>
            <Styled.NavigationContainer>
              <Styled.MainMenu><FontAwesomeIcon icon={faBars}/></Styled.MainMenu>
              <Styled.SearchBar>
                <form style={{ display: 'inline' }} onSubmit={handleSubmit}>
                    <Styled.SearchInput 
                      placeholder="Search..." 
                      type="text" 
                      value={search}
                      onChange={handleChange}
                    />
                  </form>
              </Styled.SearchBar>
              <Styled.EmptyBar />
              <Styled.SetupBar>
                  <Styled.DarkMode>Dark Mode</Styled.DarkMode>
                  <Styled.SessionMenu><FontAwesomeIcon icon={faUser}/></Styled.SessionMenu>
              </Styled.SetupBar>
            </Styled.NavigationContainer>
          </Styled.Navigation>
        );
}
  

export default Navigation;