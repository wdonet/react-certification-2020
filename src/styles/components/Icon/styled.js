import styled, { keyframes, css } from 'styled-components'
import { hinge } from 'react-animations'

const hingeAnimation = keyframes`${hinge}`

export const StyledWrapper = styled.div`
  ${props =>
    props.animate
      ? css`
          animation: 1s ${hingeAnimation};
        `
      : ''}
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`
