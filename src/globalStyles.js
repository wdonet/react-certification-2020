import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: {
    color: 'rgba(0, 0, 0, 0.87)',
    backgroundColor: '#fff',
  },
  appBar: {
    backgroundColor: '#1c5476',
  },
  card: {
    backgroundColor: '#fff',
  },
  cardText: {
    color: 'rgba(0, 0, 0, 0.54)',
  },
};

export const darkTheme = {
  body: {
    color: '#fff',
    backgroundColor: '#303030',
  },
  appBar: {
    backgroundColor: '#556cd6',
  },
  card: {
    backgroundColor: '#424242',
  },
  cardText: {
    color: 'rgba(255, 255, 255, 0.7)',
  },
};

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 1.125rem;
    line-height: 1.6;
    font-weight: 400;
    font-family: sans-serif;
    box-sizing: border-box;
    scroll-behavior: smooth;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    text-rendering: optimizeLegibility;

    color: ${({ theme }) => theme.body.color};
    background-color: ${({ theme }) => theme.body.backgroundColor};
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  }

  .separator::before {
    content: '•';
    color: white;
    padding: 0.4rem;
  }

  a {
    text-decoration: none;
    font-weight: bold;
    color: white;
  }

  a:active {
    color: blueviolet;
  }
`;

export default GlobalStyles;
