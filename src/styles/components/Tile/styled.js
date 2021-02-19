import styled from 'styled-components'

export const StyledTile = styled.div``

export const StyledImage = styled.div`
  width: 100%;
  height: 180px;
  background-image: url(${props => props.url});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;
  top: 0;

  &:hover {
    position: relative;
    top: -5px;
    box-shadow: 0 5px 10px var(--decorator-secondary);
    transition: all ease 0.5s;
  }
`
