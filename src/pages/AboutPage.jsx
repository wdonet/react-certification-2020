import React from 'react';
import styled from 'styled-components';
import { StoreContext } from '../contexts/Store'

const StyledAbout = styled.div`
  padding:50px;
`
const AboutPage = () => {
  const {
      "loggedIn": [loggedIn]
  } = React.useContext(StoreContext)
  
  return (
    <StyledAbout>
      React Challenge Wizeline Bootcamp v.1.0. loggedin: {loggedIn?"true":"false"}
    </StyledAbout>
  )
}

export default AboutPage;