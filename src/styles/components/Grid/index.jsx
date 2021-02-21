import React from 'react'
import { StyledGrid } from './styled'

const Grid = props => <StyledGrid data-testid="Grid">{props.children}</StyledGrid>

Grid.propTypes = {}

export default Grid
