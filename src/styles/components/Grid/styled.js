import styled from 'styled-components'

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1em;
  grid-column-gap: 30px;
  grid-row-gap: 50px;
  width: 100%;
`
