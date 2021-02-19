import styled from 'styled-components'

export const StyledInputSearch = styled.div`
  width: 50%;
`

export const StyledInputField = styled.input.attrs(() => ({
  type: 'text',
}))`
  width: 100%;
  height: 40px;
  font-size: 30px;
  padding: 5px 10px;
`
