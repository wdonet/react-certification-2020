import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
                    * {
                        padding: 0;
                        margin: 0;
                        box-sizing: border-box;
                    }
html {
    font-family: "Ubuntu", sans-serif;
}
body { 
  background: #eee;
  margin: 0;
  padding: 0;
}
`;

export default GlobalStyle;
