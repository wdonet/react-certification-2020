import { createGlobalStyle } from 'styled-components'

const ThemeStyle = createGlobalStyle`
  :root {
    --background-primary: ${props => props.theme.background.primary};
    --background-secondary: ${props => props.theme.background.secondary};
    --decorator-primary: ${props => props.theme.decorator.primary};
    --decorator-secondary: ${props => props.theme.decorator.secondary};
    --decorator-contrast: ${props => props.theme.decorator.contrast};
    --text-primary: ${props => props.theme.text.primary};
    --text-secondary: ${props => props.theme.text.secondary};
  }

  * {
    border-color: var(--background-secondary);
    border-bottom-color: var(--background-secondary);
    border-top-color: var(--background-secondary);
    border-left-color: var(--background-secondary);
    border-right-color: var(--background-secondary);
    color: var(--text-primary);
  }

  body, html {
    background-color: var(--background-primary);
  }
`

export default ThemeStyle
