import { createGlobalStyle } from 'styled-components';
import device from './config/device';

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: inherit;
}

html {
  font-size: 10px;
  line-height: 1.1;
  font-weight: 400;
  font-family: sans-serif;
  box-sizing: border-box;
  scroll-behavior: smooth;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

body {
  margin: 0;
  padding: 0;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Roboto', sans-serif;
  color: ${(props) => props.theme.text};
}

p,
a,
span,
label,
input, button {
  font-size: 1.4rem;
  line-height: 1.2;
}

small {
  font-size: 1rem;
}

p {
  margin: 0 0 1rem 0;
}

a{
  color: ${(props) => props.theme.link};
  &:focus {
    outline: none;
    box-shadow: 0 0 0.1rem -0.05rem ${(props) => props.theme.link};
  }
}

input {
  padding: 1.5rem;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: ${(props) => props.theme.borderRadiusLg};
  color: ${(props) => props.theme.text};    
  &:focus {
    outline: none;
    box-shadow: 0 0 0.8rem 0.1rem ${(props) => props.theme.primary};
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  letter-spacing: 0.1rem;
  margin: 0.5rem 0;
}

h1 {
  font-size: 3.2rem;
  @media ${device.laptop} {
    font-size: 4.2rem;
  }
}
h2 {
  font-size: 2.4rem;
}
h3 {
  font-size: 2rem;
}
h4 {
  font-size: 1.6rem;
}
h5 {
  font-size: 1.4rem;
}
h6 {
  font-size: 1.2rem;
}

ul {
  list-style: none;
  margin: 0;
  padding-left: 0;
}

button{
  border-radius: ${(props) => props.theme.borderRadiusLg};
  background-color: transparent;
  color: ${(props) => props.theme.primary};
  cursor: pointer;
  border: none;
  display: inline-block;
  font-size: 1.4rem;
  font-weight: 700;
  padding: 2rem 3rem;
  text-decoration: none;
  &:focus {
    outline: none;
    box-shadow: none;
    // box-shadow: 0 0 0.8rem 0.1rem ${(props) => props.theme.primary};
  }
  &:active {
    animation-name: button-animation;
    animation-timing-function: ease-in;
    animation-duration: 300ms;
  }
}

hr {
  border: 0;
  height: 1px;
  background-color: ${(props) => props.theme.borderColor};
  margin: 1.5rem 0;
}

img{
  display: inline-block;
  vertical-align: top;
  max-width: 100%;
}

@keyframes button-animation {
    0% {
      transform: scale(0.95, 0.95);
    }
    60% {
      transform: scale(1.1, 1.1);
    }
    100% {
      transform: scale(1, 1);
    }
  }

  @keyframes menu-button-animation {
    0% {
      transform: scale(1, 0);
    }
    60% {
      transform: scale(1, 1.2);
    }
    100% {
      transform: scale(1, 1);
    }
  }

  @keyframes popup-animation-enter {
    0% {
      transform: scale(1, 0);
    }
    80% {
      transform: scale(1, 1.1);
    }
    100% {
      transform: scale(1, 1);
    }
  }

  @keyframes popup-animation-exit {
    0% {
      transform: scale(1, 1);
    }
    100% {
      transform: scale(1, 0);
    }
  }
`;

export default GlobalStyles;
