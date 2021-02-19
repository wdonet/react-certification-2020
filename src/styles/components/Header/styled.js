import styled from 'styled-components'

export const StyledHeader = styled.header`
  position: relative;
  z-index: 100;
  max-height: var(--header-max-height);
  border-bottom-width: 1px;
  background-color: var(--background-secondary);
  display: flex;
  justify-content: space-between;
`

export const StyledMain = styled.div`
  display: flex;
  flex-basis: 20%;
  justify-content: flex-start;
`

export const StyledSecondary = styled.div`
  flex-basis: 60%;
`

export const StyledCorner = styled.div`
  display: flex;
  flex-basis: 20%;
  justify-content: flex-end;
`
