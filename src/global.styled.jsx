import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
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
  *::after,
  *::before {
    box-sizing: inherit;
  }

  body {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    text-rendering: optimizeLegibility;
    background-color: ${(props) => props.theme.background};
    background-size: 400% 400%;
    background-position: var(--bg-position);
    transition: background-position 2s ease;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
