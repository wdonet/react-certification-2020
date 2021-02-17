import { createGlobalStyle } from 'styled-components'

const ThemeStyle = createGlobalStyle`
  :root {
    --background-primary: ${props => props.theme.background.primary || '#FFF'};
    --background-secondary: ${props => props.theme.background.secondary || '#DDD'};
    --background-tertiary: ${props => props.theme.background.tertiary || '#999'};
    --text-primary: ${props => props.theme.text.primary || '#000'};
    --text-secondary: ${props => props.theme.text.secondary || '#222'};
    --text-tertiary: ${props => props.theme.text.tertiary || '#555'};
  }
`

export default ThemeStyle
