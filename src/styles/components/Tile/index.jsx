import React from 'react'
import { StyledTile, StyledImage } from './styled'

const Tile = ({ src }) => (
  <StyledTile>
    <StyledImage url={src} />
  </StyledTile>
)

Tile.propTypes = {}

export default Tile
