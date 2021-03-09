import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './global.styled';
import { defaultTheme } from './themes.styled';
import YouTubeProvider from './providers/YouTubeAPI';
import App from './components/App';

require('dotenv').config();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <YouTubeProvider isMock={process.env.REACT_APP_MOCK_API === 'true'}>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </YouTubeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
