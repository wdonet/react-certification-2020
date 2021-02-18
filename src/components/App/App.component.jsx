import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'styled-components';

import AppNavbar from '../Navbar/AppNavbar.component';
import Home from '../../pages/Home/Home.page';
import GlobalStyle from '../../Global.styles';

const theme = {
  primaryBackgroundColor: '#eee',
  fontFamily: "'Montserrat', sans-serif",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <AppNavbar brand="React Challenge" navLinkHref="/home" navLinkText="Home" />
        <Home />
      </>
    </ThemeProvider>
  );
}

export default App;
