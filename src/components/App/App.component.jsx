import React from 'react';
import styled from 'styled-components';
import { LayoutWrapper } from '../Layout';
import HomeVideos from '../HomeVideos/HomeVideos'

const StyledWelcome = styled.div`
  text-align: center;
`;

function App() {
  return <LayoutWrapper >
    <StyledWelcome>
      <h1>Welcome to the challenge!</h1>
    </StyledWelcome>
    <HomeVideos/>
  </LayoutWrapper>;
}

export default App;
