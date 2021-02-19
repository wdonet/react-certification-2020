import styled from 'styled-components'
import { StyledHeader } from '../Header/styled'

export const StyledWrapper = styled.div`
  height: 100%;
`

export const StyledImage = styled.img`
  ${StyledHeader} & {
    padding: 10px;
    height: ${props => (props.size ? `calc(${props.size} - 20px)` : `calc(100% - 20px)`)};
  }
`
