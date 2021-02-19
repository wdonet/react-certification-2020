import styled from 'styled-components'

export const StyledMenu = styled.nav`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`

export const StyledMenuItem = styled.a`
  padding: 0 20px;

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-left: 0;
  }
`
