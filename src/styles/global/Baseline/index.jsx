import { createGlobalStyle } from 'styled-components'

const BaselineStyle = createGlobalStyle`
  * {
    border-color: var(--background-secondary);
    border-bottom-color: var(--background-secondary);
    border-top-color: var(--background-secondary);
    border-left-color: var(--background-secondary);
    border-right-color: var(--background-secondary);
    background-color: var(--background-primary);
    color: var(--text-primary);
  }
`

export default BaselineStyle
