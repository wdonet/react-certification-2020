import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';

import App from './components/App';
import './global.css';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto:wght@300&display=swap');

  body {
    font-family: 'Roboto', sans-serif;
  }

  h1 {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
  }

  h2 {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
  }

  h3 {
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
  }

  p {
    font-weight: 300;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
