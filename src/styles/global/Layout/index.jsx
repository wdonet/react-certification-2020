import { createGlobalStyle } from 'styled-components'

const LayoutStyle = createGlobalStyle`
  :root {
    --header-max-height: 4rem;
    --footer-min-height: 4rem;
  }

  @media (min-width: 768px) {
    :root {
      --footer-min-height: 4rem;
    }
  }

  header {
    max-height: var(--header-max-height);
  }

  footer {
    height: var(--footer-min-height);
  }

  main {
    padding-bottom: var(--footer-min-height);
  }
`

export default LayoutStyle
