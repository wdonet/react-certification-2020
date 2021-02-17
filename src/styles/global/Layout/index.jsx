import { createGlobalStyle } from 'styled-components'

const LayoutStyle = createGlobalStyle`
  :root {
    --header-min-height: 2rem;
    --footer-min-height: 2rem;
  }

  @media (min-width: 768px) {
    :root {
      --header-min-height: 4rem;
      --footer-min-height: 4rem;
    }
  }
`

export default LayoutStyle
