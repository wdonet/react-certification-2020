import React from 'react'
import PropTypes from 'prop-types'
import { StyledHeader, StyledMain, StyledSecondary, StyledCorner } from './styled'

const Header = ({ main, secondary, corner }) => (
  <StyledHeader>
    <StyledMain>{main}</StyledMain>
    {secondary && <StyledSecondary>{secondary}</StyledSecondary>}
    {corner && <StyledCorner>{corner}</StyledCorner>}
  </StyledHeader>
)

Header.propTypes = {
  main: PropTypes.node.isRequired,
  secondary: PropTypes.node,
  corner: PropTypes.node,
}

Header.defaultProps = {
  secondary: undefined,
  corner: undefined,
}

export default Header
