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

  header {
    height: var(--header-min-height);
  }

  footer {
    height: var(--footer-min-height);
  }

  main {
    padding-bottom: var(--footer-min-height);
  }
`

export default LayoutStyle
